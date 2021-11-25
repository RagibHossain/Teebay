from django.db.models import fields
from rest_framework import serializers


from teebayApi.models import Product,Category


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['name']
class ProductFetchSerializer(serializers.ModelSerializer):
    # category = serializers.StringRelatedField(many=True)
    class Meta:
        model = Product
        fields = ['pk','title','category','description','rentPrice','price','status','dateposted','uploadedby']
class ProductSerializer(serializers.ModelSerializer):
    # category = serializers.StringRelatedField(many=True)
    class Meta:
        model = Product
        fields = ['pk','title','category','description','rentPrice','price','status','dateposted','uploadedby']




# Create your models here.