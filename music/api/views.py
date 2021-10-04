from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from rest_framework.permissions import IsAuthenticated, IsAdminUser, IsAuthenticatedOrReadOnly, AllowAny
from rest_framework.authentication import SessionAuthentication
from django.contrib.auth.models import User
from datetime import datetime
from rest_framework.response import Response

from ..models import Track
from .serializers import TrackSerializer

class TrackViewSet(viewsets.ModelViewSet):

    permission_classes = [AllowAny]
    authentication_classes = [SessionAuthentication]

    queryset = Track.objects.all()
    serializer_class = TrackSerializer

    def create(self, request, *args, **kwargs):
        music_data = request.data

        new_music = Track.objects.create(name=music_data['name'], artist=music_data['artist'], added_at=datetime.now(), by=User.objects.get(pk=music_data['by']))
        music_serializer = TrackSerializer(new_music)
        return Response(music_serializer.data)