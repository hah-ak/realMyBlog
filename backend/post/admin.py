from django.contrib import admin
from .models import Post
# Register your models here.
@admin.register(Post)
class userAdmin(admin.ModelAdmin):
    readonly_fields = ('create', 'update')