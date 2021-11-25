"""
WSGI config for teebayadmin project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/3.2/howto/deployment/wsgi/
"""

import os

from django.core.wsgi import get_wsgi_application

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'teebayadmin.settings')

application = get_wsgi_application()


# class ProductSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Product
#         fields = ['pk','title','description','price','rent','sold','rent','dateposted','uploadedby']



# from django.db import models
# from django.contrib.auth.models import User
# # Create your models here.
 
 

# class Category(models.Model):
#     name = models.CharField(max_length=60) 
    
#     def __str__(self) : 
#         return self.name
 

# class Product(models.Model):
#     options = (
#         ("unsold","Unsold"),
#         ("sold","Sold"),
#         ("rented","Rented")
#     )
#     title = models.CharField("title", max_length=240)
#     description = models.CharField("description",max_length=1000)
#     price = models.FloatField("price")
#     uploadedby = models.ForeignKey(User,on_delete=models.CASCADE)
#     status = models.CharField(max_length=20,choices=options,default="unsold")
#     dateposted = models.DateField(auto_now_add=True)
#     category = models.ManyToManyField(Category)



# from django.urls import include,path
# from .views import ProductCreate, ProductList
# urlpatterns = [

#     path('create/',ProductCreate.as_view(),name='upload-product'),
#     path('',ProductList.as_view(),)
# ]


# from django.shortcuts import render
# from rest_framework import generics

# from teebayproj.serializers import ProductSerializer
# from teebayproj.models import Product,User

# # Create your views here.


# class ProductCreate(generics.CreateAPIView):
#     # API endpoint that allows creation of a new customer
#     queryset = Product.objects.all(),
#     serializer_class = ProductSerializer
 
 
# class ProductList(generics.ListAPIView):
#     # API endpoint that allows customer to be viewed.
#     queryset = Product.objects.all()
#     serializer_class = ProductSerializer