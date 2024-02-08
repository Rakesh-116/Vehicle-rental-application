from django.urls import path, include

from . import views

urlpatterns = [
    path('', views.signIn),
    path('logIn.html', views.logIn),
    path('signIn.html', views.signIn),
    path('home.html', views.home),
    path('vehicles.html', views.vehicles),
    path('aboutUs.html', views.aboutUs),
    path('payment.html', views.payment),
    path('bookNow.html', views.bookNow),
]
