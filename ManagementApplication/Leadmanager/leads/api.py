from leads.models import Item, Useraccount
from rest_framework import viewsets, permissions
from leads.serializer import ItemSerializer, UseraccountSerializer

#Item Viewset
class ItemViewSet(viewsets.ModelViewSet):
    queryset = Item.objects.all()
    serializer_class = ItemSerializer
    permission_classes = [
        permissions.AllowAny,
    ]



class UseraccountViewSet(viewsets.ModelViewSet):
    queryset = Useraccount.objects.all()
    serializer_class = UseraccountSerializer
    permission_classes = [
        permissions.AllowAny,
    ]

    ### superuser => username: admin, password: Jesca@5224