from django.http import JsonResponse
from django.forms.models import model_to_dict
from rest_framework.generics import GenericAPIView
from teebayApi.serializers import UserSerializer,LoginSerializer

from teebayApi.models import User
from rest_framework.response import Response
from rest_framework import serializers, status


class LoginView(GenericAPIView):
    mymodel = None
    def post(self,request,**kwargs):

        try:
            user = User.objects.get(email= request.data["email"])
        except:
            return Response("No user exists with this username",status=status.HTTP_404_NOT_FOUND) 
        
        if user is not None:
            if(user.password == request.data["password"]):
               return JsonResponse(  model_to_dict(user))
            return Response("Wrong Credentials",status=status.HTTP_401_UNAUTHORIZED)

        


class RegisterView(GenericAPIView):
    mymodel = None
    def post(self,request,**kwargs):
        user = User.objects.filter(email= request.data["email"]).count()
       
        
        if user == 0:
            
            newuser = {
            "firstname": request.data["firstname"],
            "lastname": request.data["lastname"],
            "email": request.data["email"],
            "password":request.data["password"]
            }
            obj = self.mymodel(**newuser)
            try:
               obj.save()
            except:
                 raise("Couldn't Register Check server side for details")
            return Response("User Registered Successfully",status=status.HTTP_201_CREATED)

        return Response("User already exists with this email",status=status.HTTP_400_BAD_REQUEST)