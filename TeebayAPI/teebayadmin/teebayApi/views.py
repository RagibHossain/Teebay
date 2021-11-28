
from rest_framework.generics import *
from rest_framework import permissions
from teebayApi.authenticationview import LoginView,RegisterView
from teebayApi.customview import CustomBuyView,CustomRentView
from teebayApi.serializers import ProductSerializer,UserSerializer,BuySerializer,ProductFetchSerializer,BuyHistorySerializer,RentSerializer,RentHistorySerializer,LoginSerializer
from teebayApi.models import Product,BuyHistory,User,RentHistory
# Create your views here.

# class ProductUserWritePermission(BasePermission):
#     message = "Only Uploaded Can Edit the the product"
#     def has_object_permission(self, request, view, obj):
#         if request.method in SAFE_METHODS:
#             return True
#         return obj.uploadedby == request.user

class CreateUser(RegisterView):

    mymodel = User
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
    # API endpoint that allows customer to be viewed.
    queryset = Product.objects.select_related()
    serializer_class = ProductFetchSerializer

class DeleteProduct(RetrieveDestroyAPIView):
    # API endpoint that allows customer to be viewed.
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

class UpdateProduct(RetrieveUpdateAPIView):

    queryset = Product.objects.all()
    serializer_class = ProductSerializer

class GetBuyHistory(ListAPIView):

      serializer_class = BuyHistorySerializer
      queryset = BuyHistory.objects.all()

class BuyHistory(CustomBuyView):
      serializer_class = BuySerializer
      mymodel = BuyHistory

class GetRentHistory(ListAPIView):
      queryset = RentHistory.objects.all()
      serializer_class = RentHistorySerializer

class RentHistory(CustomRentView):   
      serializer_class = RentSerializer
      mymodel = RentHistory




      