
from rest_framework import generics

from teebayApi.serializers import ProductSerializer
from teebayApi.models import Product

# Create your views here.


class ProductCreate(generics.CreateAPIView):
    # API endpoint that allows creation of a new customer
    queryset = Product.objects.all(),
    serializer_class = ProductSerializer
 
 
class ProductList(generics.ListAPIView):
    # API endpoint that allows customer to be viewed.
    queryset = Product.objects.select_related()
    serializer_class = ProductSerializer

class DeleteProduct(generics.RetrieveDestroyAPIView):
    # API endpoint that allows customer to be viewed.
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

class UpdateProduct(generics.RetrieveUpdateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer