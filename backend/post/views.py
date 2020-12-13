from django.shortcuts import render
from .models import Post
from django.forms import model_to_dict
from django.http.request import HttpRequest
from django.http.response import JsonResponse
from django.contrib import auth
from .serializer import PostSerializer

#window function을 위한 모듈들 F는 현재 모델의 어떠한 칼럼을 불러올때 사용된다.
from django.db.models import Count, Subquery, Window, F, RowRange
from django.db.models.functions import RowNumber, Rank, Ntile
# Create your views here.

#window function을 통해 partition을 하고 Ntile을 이용해 row_number<? limit=?의 역할을 해준다.
def post(reqeust):
    # model = Post.objects.annotate(creates = Window(
    #     expression=RowNumber(),
    #     partition_by=[F('postIndex')],
    #     order_by=F('create').desc(),
    #     # frame=RowRange(start=0, end=5) lt , gt, lte, gte (미만, 초과,이하,이상)
    # )).values('creates','id','title','postIndex','content','create','update').order_by('postIndex')

    postindex = Post.objects.distinct().values('postIndex')
    index_list = []
    for index in postindex:
        index_list.append(index['postIndex'])
    senddata=[]
    for i in index_list:
        model = Post.objects.filter(postIndex = i).order_by('-create')
        if len(model) < 5:
            model = PostSerializer(model, many=True) #여러 쿼리셋을 serialize 하려면 many=true로 해줘야함
        else:
            model = PostSerializer(model[:5], many=True) 
        senddata.append({i:model.data}) # postindex를 키로 나머지를 value로 만들어줘서 프론트단으로 response해줌
    return JsonResponse({'posts':senddata})

def choicepost(request, postIndex):
    model = Post.objects.filter(postIndex = postIndex).order_by('-create')
    senddata = PostSerializer(model, many=True)
    return JsonResponse({'posts':senddata.data})

def detailpost(request, postIndex, postid):
    model = Post.objects.get(postIndex = postIndex, id = postid)
    senddata = PostSerializer(model)
    print(senddata.data)
    return JsonResponse({'detailpost':senddata.data})

# def fn_pagination(request, model, paginate_by = 10):
#     paginator = Paginator(model, paginate_by)
#     page_number = request.GET.get('page', 1)
#     page_obj = paginator.get_page(page_number)
#     page_numbers_range = 5
#     max_index = len(paginator.page_range)
#     current_page = int(page_number) if page_number else 1
#     start_index = int((current_page - 1)/page_numbers_range) * page_numbers_range
#     end_index = start_index + page_numbers_range

#     if end_index >= max_index:
#         end_index = max_index
#     page_list = paginator.page_range[start_index:end_index]
#     return (page_obj, page_list)

# def get_author_congperson(model):
#     result = []
#     for m in model:
#         user = User.objects.get(username = m.author)
#         c = Congressperson.objects.get(district = user.city + user.district)
#         result.append([m,c.name])
#     return result

# def postlist(request):
#     if 'search_text' in request.GET:
#         search = request.GET['search_text']
#         orders = request.GET['search_order']
#         if orders == 'text':
#             model = Post.objects.filter(text__contains=search)
#         elif orders == 'title':
#             model = Post.objects.filter(title__contains=search)
#         else:
#             model = Post.objects.filter(text__contains=search, title__contains=search)
#         result = get_author_congperson(model)
#         page_obj, page_list = fn_pagination(request, result)
#     elif 'party' in request.GET:
#         search = request.GET['party']
#         # models = Post.objects.all()
#         partys_of_congressperson = Congressperson.objects.filter(party = search)
#         user_model = User.objects.all()
#         final_user = []
#         for cong_person in partys_of_congressperson:
#             for user in user_model:
#                 if user.city+user.district in cong_person.district:
#                     final_user.append(user)
#         model = Post.objects.none()
#         for user in final_user:
#             model |= Post.objects.filter(author = user)
#         result = get_author_congperson(model)
#         page_obj, page_list = fn_pagination(request, result)
#     else:
#         model = Post.objects.all()
#         result = get_author_congperson(model)
#         page_obj, page_list = fn_pagination(request, result)
#     return render(request, 'post/postList.html', {'page_obj':page_obj,'page_list':page_list})


# def detailpost(request, post_id):
#     # if request.method == 'POST':
#     #     comment_form = CommentForm(request.POST, request.FILES)
#     #     if comment_form.is_valid():
#     #         comment_form.instance.post= Post.objects.get(id = post_id)
#     #         comment_form.instance.author = auth.get_user(request)
#     #         comment_form.save()
#     #         return redirect(detailpost, post_id)
    
#     detail_post = Post.objects.get(id = post_id)
#     # comments = Comment.objects.select_related('post').filter(id = post_id).order_by('created')
#     comments = detail_post.comments.all()
#     context = {'detail_post':detail_post, 'comments':comments}
#     return render(request, 'post/detailPost.html', context)

# def ajaxcreatecomment(request, post_id):
#     if request.method == "POST":
#         post_data = json.loads(request.body.decode("utf-8"))
#         # serializer = CommentSerializer(data=post_data)
#         # if serializer.is_valid():
#         #     post = Post.objects.get(id = post_id)
#         #     user = auth.get_user(request)
#         #     serializer.save(post=post, author=user)
#         #     return JsonResponse(serializer.data)
#         #     받아오는 데이터가 text이다 보니 serializer함수 만들어줘야함 그래서 그냥 form과 합쳐서 씀.
#         comment_form = CommentForm(post_data, request.FILES)
#         if comment_form.is_valid():
#             comment_form.instance.post = Post.objects.get(id = post_id)
#             comment_form.instance.author = auth.get_user(request)
#             comment_form.save()
#             serializer = CommentSerializer(comment_form.instance)
#             return JsonResponse(serializer.data)


# def updatepost(request, post_id):
#     model = Post.objects.get(id=post_id)
#     if request.method == 'POST':
#         writeform = writeForm(request.POST, request.FILES, instance = model) #수정시에는 instance와 files를 불러와야함
#         if writeform.is_valid():
#             model.title = writeform.cleaned_data['title']
#             model.text = writeform.cleaned_data['text']
#             model.updated = timezone.now()
#             model.save()
#             return redirect(postlist)
#     else:
#         context = {'model':model}
#         return render(request, 'post/updatepost.html', context)

# def writepost(request):
#     if request.method == 'POST':
#         writeform = writeForm(request.POST, request.FILES)
#         if writeform.is_valid():
#             writeform.instance.author = auth.get_user(request) #생성시에는 instance, files를 안불러와도됨
#             writeform.save()
#             return redirect(postlist)
#     else:
#         return render(request, 'post/updatepost.html', {})