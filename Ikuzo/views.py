from django.shortcuts import render
from django.http import HttpResponse
from .models import Registration

def signIn(request):
    return render(request, 'signIn.html')

def logIn(request):
    return render(request, 'logIn.html')

def home(request):
    return render(request, 'home.html')

def vehicles(request):
    return render(request, 'vehicles.html')

def aboutUs(request):
    return render(request, 'aboutUs.html')

def bookNow(request):
    if request.method == "POST":
        name = request.POST['username']
        age = request.POST['age']
        phoneNumber = request.POST['phoneNumber']
        email = request.POST['email']
        destination = request.POST['destination']
        license = request.FILES.get('license')
        vehicleModel = request.POST['vehicleModel']
        days = request.POST['days']
        date = request.POST['date']

        k = Registration(name=name, age=age, phoneNumber=phoneNumber, email=email, destination=destination, license=license, vehicleModel=vehicleModel, days=days, date=date)

        k.save()

    return render(request, "bookNow.html")

def payment(request):
    registeredDetails = Registration.objects.all()
    return render(request, 'payment.html', {'post':registeredDetails})
    