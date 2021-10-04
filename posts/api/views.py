from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated, AllowAny
from datetime import datetime
from django.contrib.auth.models import User
from django.http import HttpResponse, HttpResponseRedirect
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, IsAdminUser, IsAuthenticatedOrReadOnly
from rest_framework.authentication import SessionAuthentication

from ..models import Posts
# , Rating
from .serializers import PostsSerializer
# , RatingSerializer

class PostsViewSet(viewsets.ModelViewSet):

    permission_classes = [AllowAny]
    authentication_classes = [SessionAuthentication]
    # queryset = Posts.objects.all()
    serializer_class = PostsSerializer

    def get_queryset(self):
        posts = Posts.objects.all()
        # rating = Rating.objects.all()

        # for post in posts:
        #     post.by = User.objects.get(pk=post.by)

        return posts



    def create(self, request, *args, **kwargs):
        post_data = request.data

        new_post = Posts.objects.create(title=post_data['title'], body=post_data['body'], created_at=datetime.now(), by=User.objects.get(pk=post_data['by']))
        post_serializer = PostsSerializer(new_post)
        return Response(post_serializer.data)




    



# class RatingViewSet(viewsets.ModelViewSet):

#     queryset = Rating.objects.all()
#     serializer_class = RatingSerializer
