


from rest_framework.generics import GenericAPIView

from teebayApi.models import Product,User
from rest_framework.response import Response
from rest_framework import status

class CustomBuyView(GenericAPIView):
    mymodel = None
    def post(self,request,**kwargs):
    
        product = Product.objects.get(id=request.data["product"])
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
            raise Exception("Could not complete purchase")  
           
        return Response("Succesfully Bought",status=status.HTTP_200_OK)


            

# {
#     "buyer":2,
#     "product": {

#     },
#     "date":12
# }

  

