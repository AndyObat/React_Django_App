from leads.models import Lead
from rest_framework import viewsets, permissions
from leads.serializer import LeadSerializer

#Lead Viewset
class LeadViewSet(viewsets.ModelViewSet):
    queryset = Lead.objects.all()
    serializer_class = LeadSerializer
    permission_classes = [
        permissions.AllowAny,
    ]