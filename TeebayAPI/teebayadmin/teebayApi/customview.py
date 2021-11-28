




from rest_framework.generics import GenericAPIView
from django.utils.dateparse import parse_date
from teebayApi.serializers import RentHistorySerializer,BuyHistorySerializer,ProductFetchSerializer
from teebayApi.models import BuyHistory,RentHistory

from teebayApi.models import Product,User
from rest_framework.response import Response
from rest_framework import serializers, status

class CustomBuyView(GenericAPIView):
    mymodel = None
    def post(self,request,**kwargs):
    
        product = Product.objects.get(id=request.data["product"])
        if product.status == "sold":
            return Response("Somebody already Bought this product sorry",status=status.HTTP_417_EXPECTATION_FAILED)
        elif product.status == "rented":
            return Response("Somebody has rented this product you can't buy this right now",status=status.HTTP_417_EXPECTATION_FAILED)
        product.status = "sold"

        newbuyhistory = {
            "buyer": User.objects.get(id=request.data["buyer"]),
            "product": product
        }
        obj = self.mymodel(**newbuyhistory)
  
         
        try:
            product.save()
            obj.save()
        except:
            return Response("Could not complete purchase",status=status.HTTP_417_EXPECTATION_FAILED) 
        
        return Response("Buy successful",status=status.HTTP_200_OK)

    


class CustomRentView(GenericAPIView):
    mymodel = None
    def post(self,request,**kwargs):
        product = Product.objects.get(id=request.data["product"])
        newrenthistory = {
            "renter": User.objects.get(id=request.data["renter"]),
            "product": product,
            "rentstart":request.data["rentstart"],
            "rentend":request.data["rentend"]
        }
        rentstart = parse_date( request.data["rentstart"])
        rentend = parse_date( request.data["rentend"])
        if(product.status == "rented"):
            renthistory = RentHistory.objects.filter(product=request.data["product"])
            for renthist in renthistory:
                if rentstart <= renthist.rentend  :
                   return Response("Product is rented in this time or you have entered inappropriate timing",status=status.HTTP_400_BAD_REQUEST)
    
            
        product.status = "rented"
       
        obj = self.mymodel(**newrenthistory)
  
         
        try:
            product.save()
            obj.save()
        except:
            raise Exception("Could not complete purchase")  
           
        return Response("Succesfully Rented",status=status.HTTP_200_OK)

class MyRentHistoryView(GenericAPIView):
    mymodel = None
    def post(self,request,**kwargs):
        renthistory = RentHistory.objects.filter(renter = request.data["renter"])
        rents = RentHistorySerializer(renthistory,many=True)
        return Response(data=rents.data)

class MyBuyHistoryView(GenericAPIView):
    def post(self,request,**kwargs):
        buyhistory = BuyHistory.objects.filter(buyer = request.data["buyer"])
        buys = BuyHistorySerializer(buyhistory,many=True)

        return Response(data=buys.data)


class MyProductView(GenericAPIView):
      def post(self,request,**kwargs):
        products = Product.objects.filter(uploadedby = request.data["uploadedby"])
        myproducts = ProductFetchSerializer(products,many=True)

        return Response(data=myproducts.data)

# class AvailableProductsView(GenericAPIView):
#     def get(self,request,**kwargs):
#         products = Product.objects.all();


# {        
#     "buyer":2,
#     "product": {

#     },
#     "date":12
# }

  

