"""main URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from posts.views import index

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', index),
    path('posts-api/', include('posts.api.urls')),
    path('music-api/', include('music.api.urls')),
    path('videos-api/', include('videos.api.urls')),
    path('api-auth/', include('rest_framework.urls')),
    path('rest-auth/', include('rest_auth.urls')),
    path('rest-auth/registration/', include('rest_auth.registration.urls')),
    path('posts/', index),
    path('music/', index),
    path('videos/', index),
    path('lk/', index),
    path('auth/login/', index),
    path('auth/registration/', index),
    # path('accounts/', include('django.contrib.auth.urls'))

]
