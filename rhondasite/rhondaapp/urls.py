from django.urls import path

from . import views

urlpatterns = [
    path("", views.Vehicles_JSON, name="index"),
]