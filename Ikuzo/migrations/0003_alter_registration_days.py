# Generated by Django 4.2.7 on 2023-11-24 18:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Ikuzo', '0002_registration_days'),
    ]

    operations = [
        migrations.AlterField(
            model_name='registration',
            name='days',
            field=models.CharField(max_length=50),
        ),
    ]
