from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated, IsAdminUser, IsAuthenticatedOrReadOnly, AllowAny
from rest_framework.authentication import SessionAuthentication
from datetime import datetime
from django.contrib.auth.models import User
from rest_framework.response import Response

from ..models import Video
from .serializers import VideoSerializer

class VideoViewSet(viewsets.ModelViewSet):
    permission_classes = [AllowAny]
    authentication_classes = [SessionAuthentication]
    queryset = Video.objects.all()
    serializer_class = VideoSerializer

    def create(self, request, *args, **kwargs):
        video_data = request.data

        new_video = Video.objects.create(name=video_data['name'], added_at=datetime.now(), by=User.objects.get(pk=video_data['by']))
        videos_serializer = VideoSerializer(new_video)
        return Response(videos_serializer.data)