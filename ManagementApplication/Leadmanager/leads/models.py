from django.utils import timezone

from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Item(models.Model):
    item_id = models.AutoField(primary_key=True)
    item_name = models.CharField(max_length=100)
    writer_id = models.ForeignKey('Useraccount', on_delete=models.CASCADE)
    item_description = models.TextField(max_length=500, blank=True)

    def __str__(self):
        return self.item_name

# UserAccount model (extends default Django User)
class Useraccount(models.Model):
    account_id = models.AutoField(primary_key=True)
    account_type = models.CharField(max_length=100)
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True, default=1)  # default points to an existing user ID
    created_at = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return f"{self.user.username} ({self.account_type})"