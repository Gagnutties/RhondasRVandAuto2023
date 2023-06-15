from django.db import models


class Vehicle(models.Model):
    year = models.CharField(max_length=4)
    make = models.CharField(max_length=30)
    model = models.CharField(max_length=30)
    miles = models.CharField(max_length=7)
    extcolor = models.CharField(max_length=10)
    VIN = models.CharField(max_length=4)
    def __str__(self):
        return f"{self.year} {self.make} {self.model}"
    