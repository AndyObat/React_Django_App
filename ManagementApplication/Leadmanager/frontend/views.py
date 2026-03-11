from django.shortcuts import render
from rest_framework.permissions import AllowAny
from django.contrib.auth import authenticate
from rest_framework.views import APIView
from rest_framework.authtoken.models import Token
from rest_framework.response import Response

# Create your views here.

def index(request):
    return render(request, 'frontend/index.html')


class CustomAuthToken(APIView):
    permission_classes = [AllowAny]  # Must allow unauthenticated access

    def post(self, request, *args, **kwargs):
        try:
            username = request.data.get("username")
            password = request.data.get("password")

            print("LOGIN ATTEMPT:", username, password)

            if not username or not password:
                return Response({"error": "Username and password required"}, status=400)

            user = authenticate(request, username=username, password=password)

            if user is None:
                return Response({"error": "Invalid credentials"}, status=401)

            token, created = Token.objects.get_or_create(user=user)

            return Response({
                "token": token.key,
                "username": user.username,
            })

        except Exception as e:
            print("ERROR IN LOGIN:", str(e))
            return Response({"error": "Server error"}, status=500)