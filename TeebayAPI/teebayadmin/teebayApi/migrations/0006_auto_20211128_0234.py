# Generated by Django 3.2.9 on 2021-11-27 20:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('teebayApi', '0005_auto_20211126_1856'),
    ]

    operations = [
        migrations.AlterField(
            model_name='renthistory',
            name='rentend',
            field=models.DateField(),
        ),
        migrations.AlterField(
            model_name='renthistory',
            name='rentstart',
            field=models.DateField(),
        ),
        migrations.AlterField(
            model_name='user',
            name='firstname',
            field=models.CharField(max_length=100),
        ),
        migrations.AlterField(
            model_name='user',
            name='lastname',
            field=models.CharField(max_length=100),
        ),
    ]
