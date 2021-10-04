from django.urls import path
from rest_framework import routers

from .views import VideoViewSet

router = routers.SimpleRouter()
router.register('videos', VideoViewSet, basename='videos')

urlpatterns = [
    
]
urlpatterns += router.urls