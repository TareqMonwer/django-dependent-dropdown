from django.shortcuts import render
from django.http import JsonResponse
from .models import Division, District, Thana


def index_view(request):
    divisions = Division.objects.all()
    ctx = {
        'divisions': divisions,
    }
    return render(request, 'bengal_cities/index.html', ctx)


def get_json_division_data(request):
    divisions = list(Division.objects.values())
    return JsonResponse({'data': divisions})


def get_json_district_data(request, *args, **kwargs):
    selected_division = kwargs.get('division')
    division_districts = list(
        District.objects.filter(division__name=selected_division).values()
    )
    return JsonResponse({'data': division_districts})


def get_json_thana_data(request, *args, **kwargs):
    selected_district = kwargs.get('district')
    district_thanas = list(
        Thana.objects.filter(district__name=selected_district).values()
    )
    print(district_thanas)
    return JsonResponse({'data': district_thanas})
