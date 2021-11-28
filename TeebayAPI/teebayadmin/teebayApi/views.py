
from django.db.models import query
from rest_framework.generics import *
from rest_framework import permissions
from teebayApi.authenticationview import LoginView,RegisterView
from teebayApi.customview import CustomBuyView,CustomRentView,MyRentHistoryView,MyBuyHistoryView,MyProductView
from teebayApi.serializers import ProductSerializer,UserSerializer,BuySerializer,ProductFetchSerializer,MyProductFetchSerializer,RentSerializer,FetchRentSerializer,LoginSerializer,FetchBuyHistorySerializer
from teebayApi.models import Product,BuyHistory,User,RentHistory
from django.db.models import Q



class CreateUser(RegisterView):
    
    mymodel = User
    serializer_class = UserSerializer
class UpdateUser(RetrieveUpdateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
class LoginUser(LoginView):

     mymodel = User
     serializer_class = LoginSerializer

class GetAllUsers(ListAPIView):
     queryset = User.objects.all()
     serializer_class = UserSerializer

class ProductCreate(ListCreateAPIView):
    # API endpoint that allows creation of a new customer
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
 
class ProductDetails(RetrieveUpdateDestroyAPIView):

    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    
class ProductList(ListAPIView):
    
    queryset = Product.objects.all()
    serializer_class = ProductFetchSerializer
class MyProducts(MyProductView):
    queryset = Product
    serializer_class = MyProductFetchSerializer

class DeleteProduct(RetrieveDestroyAPIView):
   
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

class UpdateProduct(RetrieveUpdateAPIView):

    queryset = Product.objects.all()
    serializer_class = ProductSerializer



class BuyHistory(CustomBuyView):
      serializer_class = BuySerializer
      mymodel = BuyHistory

class GetBuyHistory(MyBuyHistoryView):
      queryset = BuyHistory
      serializer_class = FetchBuyHistorySerializer

class GetRentHistory(MyRentHistoryView):
      queryset = RentHistory
      serializer_class = FetchRentSerializer
      

class RentHistory(CustomRentView):   
      serializer_class = RentSerializer
      mymodel = RentHistory




      