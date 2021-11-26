from django.db.models import fields
from rest_framework import serializers


from teebayApi.models import Product,Category,RentHistory,BuyHistory,User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields=["pk","firstname","lastname","email","password"]
class UserNameSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields=["firstname","lastname"]
        
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


class BuyHistorySerializer(serializers.ModelSerializer):
    buyer = UserNameSerializer(read_only=True)
    product = ProductSerializer(read_only=True)
    class Meta:
        model=BuyHistory
        fields=["pk","buyer","product","purchasedate"]

class BuySerializer(serializers.ModelSerializer):
   
    class Meta:
        model = BuyHistory
        fields="__all__"


# class RentHistorySerializer(serializers.ModelSerializer):
#     renter = serializers.PrimaryKeyRelatedField(many=True,read_only=True)
#     product = serializers.PrimaryKeyRelatedField(many=True,read_only=True)
#     class Meta:
#         model=RentHistory
        


# Create your models here.