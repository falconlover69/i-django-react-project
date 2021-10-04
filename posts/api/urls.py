from django.urls import path
from rest_framework import routers

from .views import PostsViewSet
# , RatingViewSet

router = routers.SimpleRouter()
router.register('posts', PostsViewSet, basename='posts')
# router.register('rating', RatingViewSet, basename='rating')

urlpatterns = [
    
]
urlpatterns += router.urls