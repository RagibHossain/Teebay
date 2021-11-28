
from django.urls import include,path
from .views import CreateUser, DeleteProduct, GetUser,GetAllUsers,BuyHistory, ProductCreate, ProductList, UpdateProduct,ProductDetails,GetBuyHistory
urlpatterns = [

    path('create/',ProductCreate.as_view(),name='upload-product'),
    path('',ProductList.as_view(),),
    path('<int:pk>/',ProductDetails.as_view(),),
    path('delete/<int:pk>/',DeleteProduct.as_view(),),
    path('update/<int:pk>/',UpdateProduct.as_view(),),
    path('api-auth/',include('rest_framework.urls')),
    path('buy/',BuyHistory.as_view()),
    path('buyhistory/',GetBuyHistory.as_view()),
    path('login/<int:pk>',GetUser.as_view()),
    path('users/',GetAllUsers.as_view()),
    path('register/',CreateUser.as_view()),
]