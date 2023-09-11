from django.db import models
from django.contrib.auth.models import User
from datetime import datetime, timedelta
from django.utils import timezone



class Post(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    postImage = models.ImageField(null=True, blank=True)
    content = models.TextField(null=True, blank=True)
    createdAt = models.DateTimeField(auto_now_add=True)
    numLikes= models.IntegerField(default=0,null=True, blank=True)
    numComments = models.IntegerField(default=0,null=True,blank=True)


    def formatted_created_at(self):
        current_time = timezone.now()
        # custom_time = datetime(2023, 12, 12, 16, 4, 9, 887763, tzinfo=timezone.utc)
        time_difference = current_time - self.createdAt

        one_minute = timedelta(minutes=1)
        one_hour = timedelta(hours=1)
        one_day = timedelta(days=1)
        one_month = timedelta(days=30)  # Approximate, you may need a more accurate calculation
        one_year = timedelta(days=365)  # Approximate, you may need a more accurate calculation

        if time_difference < one_minute:
            return "now"
        elif time_difference < 2 * one_minute:
            return "1 minute ago"
        elif time_difference < one_hour:
            return f"{int(time_difference.seconds / 60)} minutes ago"
        elif time_difference < 2 * one_hour:
            return "1 hour ago"
        elif time_difference < one_day:
            return f"{int(time_difference.seconds / 3600)} hours ago"
        elif time_difference < 2 * one_day:
            return "1 day ago"
        elif time_difference < 30 * one_day:
            return f"{time_difference.days} days ago"
        elif time_difference < 2 * one_month:
            return "1 month ago"
        elif time_difference < 12 * one_month:
            months_ago = int(time_difference.days / 30)
            return f"{months_ago} months ago"
        elif time_difference < 2 * one_year:
            return "1 year ago"
        else:
            years_ago = int(time_difference.days / 365)
            return f"{years_ago} years ago"

    def __str__(self):
        return self.formatted_created_at()