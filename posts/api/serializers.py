from django.db.models import fields
from rest_framework import serializers

from ..models import Posts
# , Rating

class PostsSerializer(serializers.ModelSerializer):

    class Meta:
        model = Posts
        fields = '__all__'


# class PostsListRetrieveSerializer(serializers.ModelSerializer):

#     by = PostsSerializer()

#     class Meta:
#         model = Posts
#         fields = '__all__'


# class RatingSerializer(serializers.ModelSerializer):

#     class Meta:
#         model = Rating
#         fields = '__all__'


# class PostDetailSerializer(serializers.ModelSerializer):
#     rating = RatingSerializer()

#     class Meta:
#         model=Posts
#         fields='__all__'