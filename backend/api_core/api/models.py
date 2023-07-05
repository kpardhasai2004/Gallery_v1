from django.db import models

class Gallery(models.Model):
    slug = models.CharField(max_length=100, unique=True)
    title = models.CharField(max_length=100)
    image = models.ImageField(upload_to='gallery/')

    def __str__(self):
        return self.title
