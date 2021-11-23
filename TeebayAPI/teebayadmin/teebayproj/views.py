from django.shortcuts import render
from rest_framework import generics

from teebayproj.serializers import ProductSerializer,UserSerializer
from teebayproj.models import Product,User

# Create your views here.
class UserCreate(generics.CreateAPIView):
    # API endpoint that allows creation of a new customer
    queryset = User.objects.all(),
    serializer_class = UserSerializer
class UserList(generics.ListAPIView):
        # API endpoint that allows creation of a new customer
    queryset = User.objects.all(),
    serializer_class = UserSerializer

class ProductCreate(generics.CreateAPIView):
    # API endpoint that allows creation of a new customer
    queryset = Product.objects.all(),
    serializer_class = ProductSerializer
 
 
class ProductList(generics.ListAPIView):
    # API endpoint that allows customer to be viewed.
    queryset = Product.objects.all()
    serializer_class = ProductSerializer