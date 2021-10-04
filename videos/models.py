from django.db import models
from datetime import datetime
from django.contrib.auth.models import User

# Create your models here.

class Video(models.Model): 
    name = models.CharField(max_length=70, blank=False)
    added_at = models.DateTimeField(default=datetime.now, blank=True)
    by = models.ForeignKey(User, on_delete=models.CASCADE, blank=True, null=True)

    def __int__(self):
        return self.name

    class Meta:
        verbose_name_plural = "Videos"