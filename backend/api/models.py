from django.contrib.auth.models import AbstractUser
from django.db import models

class User(AbstractUser):
    ROLE_CHOICES = [
        ('ADMIN', 'Administrador'),
        ('LIBRARIAN', 'Bibliotecário'),
        ('MEMBER', 'Membro')
    ]
    role = models.CharField(max_length=10, choices=ROLE_CHOICES, default='MEMBER')
    phone = models.CharField(max_length=20, blank=True)

class Book(models.Model):
    title = models.CharField(max_length=200)
    author = models.CharField(max_length=100)
    isbn = models.CharField(max_length=13, unique=True)
    publication_date = models.DateField()
    quantity = models.PositiveIntegerField(default=1)
    available = models.BooleanField(default=True)

class Loan(models.Model): 
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    book = models.ForeignKey(Book, on_delete=models.CASCADE)
    loan_date = models.DateTimeField(auto_now_add=True)
    return_date = models.DateTimeField()
    returned = models.BooleanField(default=False)