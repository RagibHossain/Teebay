



from datetime import date, datetime
from rest_framework.generics import GenericAPIView
from django.utils.dateparse import parse_date, parse_datetime
from teebayApi.models import BuyHistory,RentHistory

from teebayApi.models import Product,User
from rest_framework.response import Response
from rest_framework import status

class CustomBuyView(GenericAPIView):
    mymodel = None
    def post(self,request,**kwargs):
    
        product = Product.objects.get(id=request.data["product"])
        if product.status == "sold":
            return Response("Somebody already Bought this product sorry",status=status.HTTP_417_EXPECTATION_FAILED)
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
                if parse_date( request.data["rentstart"]) <= renthist.rentend  :
                   return Response("Product is rented in this time or you have entered inappropriate timing",status=status.HTTP_400_BAD_REQUEST)
    
            
        product.status = "rented"
       
        obj = self.mymodel(**newrenthistory)
  
         
        try:
            product.save()
            obj.save()
        except:
            raise Exception("Could not complete purchase")  
           
        return Response("Succesfully Rented",status=status.HTTP_200_OK)

# {
#     "buyer":2,
#     "product": {

#     },
#     "date":12
# }

  

