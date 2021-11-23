from django.urls import include,path
from .views import ProductCreate, ProductList,UserCreate,UserList
urlpatterns = [
    path('user/create',UserCreate.as_view(),name='create-user'),
     path('user/list',UserList.as_view(),name='user-list'),
    path('create/',ProductCreate.as_view(),name='upload-product'),
    path('',ProductList.as_view(),)
]
