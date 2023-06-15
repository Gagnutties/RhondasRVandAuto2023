from .models import Vehicle
from django.shortcuts import render
from django.http import JsonResponse
from rest_framework import serializers


def index(request):
    vehicles = Vehicle.objects.all()
    return render(request, 'index.html', {'vehicles': vehicles})

def Vehicles_JSON(request):
    data = list(Vehicle.objects.values())
    return JsonResponse({'vehicles': data})