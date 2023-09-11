from django.urls import path

from . import views



urlpatterns = [
    path('', views.getPosts, name='get_posts'),
   
]

