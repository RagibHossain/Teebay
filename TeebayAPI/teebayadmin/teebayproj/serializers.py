from django.db.models import fields
from rest_framework import  serializers
from .models import User,Product
 
 
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['pk','firstname','lastname','address','email','password']
 
 
 
 
class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ['pk','title','description','price','rent','sold','rent','dateposted','uploadedby']
