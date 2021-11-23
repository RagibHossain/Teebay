from django.db import models
 
# Create your models here.
 
 
 
class User(models.Model):
    firstname = models.CharField("firstname", max_length=240)
    lastname = models.CharField("lastname", max_length=240)
    address = models.CharField("address", max_length=240)
    email = models.EmailField("email", max_length=240)
    password = models.CharField("password", max_length=240)
   
    def __str__(self):
        return self.firstname;
 
class Product(models.Model):
    Category = (
        ('Electronics','Electronics'),
         ('Sports','Sports'),
          ('Others','Others')
    )
    title = models.CharField("title", max_length=240)
    description = models.CharField("description",max_length=1000)
    price = models.FloatField("price")
    rent = models.FloatField("rent")
    uploadedby = models.ForeignKey(User,on_delete=models.CASCADE)
    sold = models.BooleanField("sold")
    rent = models.BooleanField("rent")
    dateposted = models.DateField(auto_now_add=True)
   
