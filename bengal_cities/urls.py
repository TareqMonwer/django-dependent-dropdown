from django.urls import path
from .views import (index_view, get_json_division_data,
                    get_json_district_data, get_json_thana_data)


urlpatterns = [
    path('', index_view, name='home'),
    path('divisions/', get_json_division_data, name='divisions'),
    path('districts/<str:division>/', get_json_district_data, name='districts'),
    path('thana/<str:district>/', get_json_thana_data, name='thana'),
]
