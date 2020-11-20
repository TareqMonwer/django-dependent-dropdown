from django.shortcuts import render


def index_view(request):
    ctx = {
        'hi': 'Hellloooo',
    }
    return render(request, 'bengal_cities/index.html', ctx)
