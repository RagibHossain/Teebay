
from rest_framework.generics import *
from rest_framework import permissions
from teebayApi.customview import CustomBuyView
from teebayApi.serializers import ProductSerializer,UserSerializer,BuySerializer,ProductFetchSerializer,BuyHistorySerializer
from teebayApi.models import Product,BuyHistory,User
from rest_framework.permissions import SAFE_METHODS,BasePermission, DjangoModelPermissionsOrAnonReadOnly,IsAdminUser,DjangoModelPermissions
# Create your views here.

# class ProductUserWritePermission(BasePermission):
#     message = "Only Uploaded Can Edit the the product"
#     def has_object_permission(self, request, view, obj):
#         if request.method in SAFE_METHODS:
#             return True
#         return obj.uploadedby == request.user

class CreateUser(CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class GetUser(RetrieveAPIView):
     queryset = User.objects.all()
     serializer_class = UserSerializer

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
