
from django.urls import include,path
from .views import DeleteProduct, ProductCreate, ProductList, UpdateProduct
urlpatterns = [

    path('create/',ProductCreate.as_view(),name='upload-product'),
    path('',ProductList.as_view(),),
    path('<int:pk>/',DeleteProduct.as_view(),),
    path('update/<int:pk>/',UpdateProduct.as_view(),)
]