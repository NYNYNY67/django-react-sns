from rest_framework import generics, viewsets, permissions
from .serializers import UserSerializer
from django.contrib.auth.models import User


# ユーザー登録用
class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = (permissions.AllowAny,)


# ユーザー情報取得用
class RequestUserRetrieveAPIView(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def get_queryset(self):
        return self.queryset.filter(id=self.request.user.id)
