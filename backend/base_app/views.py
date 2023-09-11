from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response

from django.contrib.auth.models import User
from .models import Post
from .serializers import PostSerializer

@api_view(['GET'])
def getPosts(request):
    queryset = Post.objects.all()
    serializer = PostSerializer(queryset,many=True, context={'request': request})

    return Response(serializer.data)

