from django.db import models

# Create your models here.
class Booking(models.Model):
    name = models.CharField(max_length=100)
    time = models.TimeField(auto_now=False, auto_now_add=False)
    people = models.IntegerField()
    info = models.TextField()
    tel = models.CharField(max_length=100)
    date = models.DateField()
    created_date = models.DateTimeField(auto_now_add=True)