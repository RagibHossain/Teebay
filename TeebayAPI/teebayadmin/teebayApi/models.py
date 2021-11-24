from django.db import models
from django.contrib.auth.models import User
# Create your models here.
 
 

class Category(models.Model):
    name = models.CharField(max_length=60) 
    
    def __str__(self) : 
        return self.name
 

class Product(models.Model):
    options = (
        ("unsold","Unsold"),
        ("sold","Sold"),
        ("rented","Rented")
    )
    title = models.CharField("title", max_length=240)
    description = models.CharField("description",max_length=1000)
    price = models.FloatField("price")
    rentPrice = models.FloatField("rent",null=True)
    uploadedby = models.ForeignKey(User,on_delete=models.CASCADE)
    status = models.CharField(max_length=20,choices=options,default="unsold")
    dateposted = models.DateField(auto_now_add=True)
    category = models.ManyToManyField(Category)