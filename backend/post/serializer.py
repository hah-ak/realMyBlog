from .models import Post
from rest_framework import serializers

# class CommentSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Comment #Comment 모델을 기반으로 serialize
#         fields = '__all__'
#     # def create(self, validated_data):
#     #     comment = Comment.objects.create(
#     #         **validated_data
#     #     )
#     #     return comment

class PostSerializer(serializers.ModelSerializer):
    class meta:
        model = Post
        fields = '__all__'