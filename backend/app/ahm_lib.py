from django.http import HttpResponse, JsonResponse


def resp(ok, result):
    r = {'ok': ok, 'result': result}
    return JsonResponse(r)
