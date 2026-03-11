from rest_framework import routers
from django.urls import path, include

from frontend.views import CustomAuthToken
from .api import ItemViewSet, UseraccountViewSet

router = routers.DefaultRouter()
router.register('api/items', ItemViewSet, 'items')
router.register('api/useraccounts', UseraccountViewSet, 'useraccounts')

urlpatterns = [

    path('', include(router.urls)),
    # ✅ login must be path, not router
    path('api/auth/', CustomAuthToken.as_view(), name='auth'),

]