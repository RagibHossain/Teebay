from django.db.models import fields
from rest_framework import serializers


from teebayApi.models import Product,Category,RentHistory,BuyHistory,User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields=["pk","firstname","lastname","email","password","phonenumber","address"]

class LoginSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields=["email","password"]
class UserNameSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields=["firstname","lastname"]
        
class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['name']
class MyProductFetchSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ['uploadedby']
class ProductFetchSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Product
        fields = ['pk','title','category','description','rentPrice','price','status','dateposted','uploadedby']
class ProductSerializer(serializers.ModelSerializer):

    class Meta:
        model = Product
        fields = ['pk','title','category','description','rentPrice','price','status','dateposted','uploadedby']


class BuyHistorySerializer(serializers.ModelSerializer):
    product = ProductSerializer(read_only=True)
    class Meta:
        model=BuyHistory
        fields=["pk","product","purchasedate"]

class BuySerializer(serializers.ModelSerializer):
   
    class Meta:
        model = BuyHistory
        fields="__all__"

class FetchBuyHistorySerializer(serializers.ModelSerializer):
    class Meta:
        model = BuyHistory
        fields =["buyer"]

class RentHistorySerializer(serializers.ModelSerializer):
    product = ProductSerializer(read_only=True)
    class Meta:
        model=RentHistory
        fields=["pk","product","rentstart","rentend"]

class RentSerializer(serializers.ModelSerializer):
   
    class Meta:
        model = RentHistory
        fields="__all__"
class FetchRentSerializer(serializers.ModelSerializer):
    class Meta:
        model = RentHistory
        fields =["renter"]
