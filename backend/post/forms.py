from django.forms import forms
from .models import Post


# class CommentForm(forms.ModelForm):
#     class Meta:
#         model = Comment
#         fields = ['text']
#     def __init__(self, *args, **kwargs):
#         super().__init__(*args, **kwargs)
#         self.fields['text'].label = '댓글'