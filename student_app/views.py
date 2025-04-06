from django.shortcuts import render

def homepage(request):
    return render(request, 'student_app/homepage.html')

def secpage(request):
    return render(request, 'student_app/secpage.html')

def wellness(request):
    return render(request, 'student_app/wellness.html')

def calender(request):
    return render(request, 'student_app/calender.html')

