from django.shortcuts import render
from django.http import HttpResponse, JsonResponse

from app.ahm_lib import resp


def sayHello(request):
    r = resp(1, "Hello from django with best wishes")
    return r


def addNumbers(request):
    x = int(request.GET['x'])
    y = int(request.GET['y'])
    return resp(1, x + y)
