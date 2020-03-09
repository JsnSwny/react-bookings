from .models import Booking
from rest_framework import viewsets, permissions
from .serializers import BookingSerializer
from datetime import date
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.filters import OrderingFilter, SearchFilter

# Booking Viewset
class BookingViewSet(viewsets.ModelViewSet):
    
    permission_classes = [
        permissions.AllowAny
    ]

    serializer_class = BookingSerializer
    queryset = Booking.objects.all()
    filter_backends = (DjangoFilterBackend, OrderingFilter)
    filter_fields = ('date',)
    ordering_fields = ('time',)