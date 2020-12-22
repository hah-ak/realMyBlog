from django.db import models
from django.utils import timezone
# Create your models here.
class Post(models.Model):
    index_choice = (
        ('javascript','javascript'),
        ('python','python'),
        ('django','django'),
        ('git','git'),
        ('react','react'),
        ('algorithm','algorithm'),
        ('teamproject','teamproject')
    )
    title = models.CharField(max_length=100,null=False,blank=False)
    postIndex = models.CharField(choices = index_choice, null=False, blank=False, max_length=50,default='javascript')
    content = models.TextField(null=False,blank=False)
    create = models.DateTimeField(auto_now_add=True)
    update = models.DateTimeField(auto_now=True)