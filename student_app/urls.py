from django.urls import path
from . import views


urlpatterns = [
    path('', views.homepage, name='homepage'), 
    path('secpage/', views.secpage, name='secpage'),
    path('wellness/', views.wellness, name='wellness'),
    path('calender/', views.calender, name ='calender')

]