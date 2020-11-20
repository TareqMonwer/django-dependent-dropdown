from django.db import models


class Division(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return f'{self.name} division'


class District(models.Model):
    name = models.CharField(max_length=100)
    division = models.ForeignKey(Division, on_delete=models.CASCADE,
                                 related_name='districts')

    def __str__(self):
        return f'{self.name} district under {self.division}'


class Thana(models.Model):
    name = models.CharField(max_length=100)
    district = models.ForeignKey(District, on_delete=models.CASCADE,
                                 related_name='thanas')
    division = models.ForeignKey(Division, on_delete=models.CASCADE)

    def __str__(self):
        return f'{self.name} thana under {self.district}'
