from django.contrib import admin
from django.urls import path, include
from . import views
urlpatterns = [
    path('',views.post,name='post'),
    path('<slug:postIndex>/', views.choicepost, name='choicepost'),
    path('<slug:postIndex>/<slug:postid>/', views.detailpost, name='detailpost'),
]