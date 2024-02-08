from django.db import models

# Create your models here.
class Registration(models.Model):
    name = models.CharField(max_length=100)
    age = models.CharField(max_length=3)
    phoneNumber = models.CharField(max_length=100)
    email = models.CharField(max_length=100)
    destination = models.CharField(max_length=100)
    license = models.ImageField(upload_to = "Images/", null=True)
    vehicleModel = models.CharField(max_length=200)
    days = models.CharField(max_length=50)
    date = models.CharField(max_length=100)

    def __str__(self):
        return self.name

