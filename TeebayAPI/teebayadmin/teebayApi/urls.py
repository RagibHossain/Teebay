
from django.urls import include,path
from .views import DeleteProduct, ProductCreate, ProductList, UpdateProduct,ProductDetails
urlpatterns = [

    path('create/',ProductCreate.as_view(),name='upload-product'),
    path('',ProductList.as_view(),),
    path('<int:pk>/',ProductDetails.as_view(),),
    path('delete/<int:pk>/',DeleteProduct.as_view(),),
    path('update/<int:pk>/',UpdateProduct.as_view(),),
    path('api-auth/',include('rest_framework.urls'))
]