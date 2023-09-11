from rest_framework import routers, serializers, viewsets
from django.contrib.auth.models import User
from .models import *

class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['id','username', 'email']


class PostSerializer(serializers.ModelSerializer):

    formatted_created_at = serializers.SerializerMethodField()

    def get_formatted_created_at(self, obj):
        # Your formatting code here
        return obj.formatted_created_at()



    postImage_url = serializers.SerializerMethodField()  # New field for the full image URL

    def get_postImage_url(self, obj):
        request = self.context.get('request')
        if obj.postImage:
            return request.build_absolute_uri(obj.postImage.url)
        return None

    user = UserSerializer()

    class Meta:
        model = Post
        fields = ['id','user','postImage','postImage_url','content','numLikes','numComments','createdAt','formatted_created_at']

