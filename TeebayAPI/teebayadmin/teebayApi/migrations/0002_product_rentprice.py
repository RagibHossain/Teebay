# Generated by Django 3.2.9 on 2021-11-24 20:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('teebayApi', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='rentPrice',
            field=models.FloatField(null=True, verbose_name='rent'),
        ),
    ]