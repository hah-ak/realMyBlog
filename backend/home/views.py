from django.shortcuts import render
from post.models import Post
from django.http.request import HttpRequest
from django.http.response import JsonResponse
from django.forms import model_to_dict
from .serializer import HomeSerializers
# Create your views here.
def home(request):
    model = Post.objects.all().order_by('-create')
    if len(model) > 5:
        model = model[:5]

    senddata = HomeSerializers(model, many=True)

    return JsonResponse({'post':senddata.data})