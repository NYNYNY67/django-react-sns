from django.urls import path, include
from rest_framework import routers
from .views import UserViewSet, RequestUserRetrieveAPIView

router = routers.DefaultRouter()
router.register('users', UserViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('request-user/', RequestUserRetrieveAPIView.as_view(), name='request_user_api')
]
