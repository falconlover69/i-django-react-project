from django.db import models
from datetime import datetime
from django.contrib.auth.models import AbstractUser, User

# Create your models here.



# class Rating(models.Model): 
#     # post = models.ForeignKey(Posts, on_delete=models.CASCADE)
#     likes = models.IntegerField(default=0)
#     dislikes = models.IntegerField(default=0)

#     def __int__(self):
#         return self.likes

#     class Meta:
#         verbose_name_plural = "Rating"




class Posts(models.Model):
    title = models.CharField(max_length=150, blank=False)
    body = models.TextField(max_length=300 , blank=False)
    created_at = models.DateTimeField(default=datetime.now, blank=True)
    # by = models.CharField(max_length=30)
    by = models.ForeignKey(User, on_delete=models.CASCADE)
    # rating = models.ForeignKey(Rating, on_delete=models.CASCADE)
    likes = models.IntegerField(default=0, null=False, blank=True)
    dislikes = models.IntegerField(default=0, null=False, blank=True)


    def __str__(self):
        return self.title

    class Meta:
        verbose_name_plural = "Posts"


