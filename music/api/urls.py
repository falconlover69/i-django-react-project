from django.urls import path
from rest_framework import routers

from .views import TrackViewSet

router = routers.SimpleRouter()
router.register('tracks', TrackViewSet, basename='tracks')

urlpatterns = [
    
]
urlpatterns += router.urls