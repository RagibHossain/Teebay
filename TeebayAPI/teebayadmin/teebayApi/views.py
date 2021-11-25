
from rest_framework import generics
from rest_framework import permissions


from teebayApi.serializers import ProductSerializer,ProductFetchSerializer
from teebayApi.models import Product
from rest_framework.permissions import SAFE_METHODS,BasePermission, DjangoModelPermissionsOrAnonReadOnly,IsAdminUser,DjangoModelPermissions
# Create your views here.

class ProductUserWritePermission(BasePermission):
    message = "Only Uploaded Can Edit the the product"
    def has_object_permission(self, request, view, obj):
        if request.method in SAFE_METHODS:
            return True
        return obj.uploadedby == request.user

class ProductCreate(generics.ListCreateAPIView):
    # API endpoint that allows creation of a new customer
    permission_classes = [DjangoModelPermissions]
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
 
class ProductDetails(generics.RetrieveUpdateDestroyAPIView,ProductUserWritePermission):
    permission_classes = [ProductUserWritePermission]
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    
class ProductList(generics.ListAPIView):
    # API endpoint that allows customer to be viewed.
    queryset = Product.objects.select_related()
    serializer_class = ProductFetchSerializer

class DeleteProduct(generics.RetrieveDestroyAPIView,ProductUserWritePermission):
    # API endpoint that allows customer to be viewed.
    permission_classes = [ProductUserWritePermission]
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

class UpdateProduct(generics.RetrieveUpdateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer