from django.contrib import admin

# Register your models here.
from . import models

@admin.register(models.Product)
class AuthorAdmin(admin.ModelAdmin):
    list_display=('title','description','status','uploadedby','dateposted')

    admin.site.register(models.Category)
    admin.site.register(models.BuyHistory)
    admin.site.register(models.RentHistory)
    admin.site.register(models.User)