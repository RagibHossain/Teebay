# Generated by Django 3.2.9 on 2021-11-28 12:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('teebayApi', '0006_auto_20211128_0234'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='address',
            field=models.CharField(max_length=100, null=True),
        ),
        migrations.AddField(
            model_name='user',
            name='phonenumber',
            field=models.CharField(max_length=15, null=True),
        ),
    ]
