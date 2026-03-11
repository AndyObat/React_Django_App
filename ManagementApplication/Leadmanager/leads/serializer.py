from django.contrib.auth.models import Group, User
from rest_framework import serializers
from .models import Item, Useraccount


class ItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Item
        fields = '__all__'

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["url",'account_id', 'username',  "email", "groups", "password"]


class GroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Group
        fields = ["url", "name"]

class UseraccountSerializer(serializers.ModelSerializer):
    class Meta:
        model = Useraccount
        fields = ['account_id', 'account_type']