# Generated by Django 3.2.9 on 2021-11-23 13:31

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('firstname', models.CharField(max_length=240, verbose_name='firstname')),
                ('lastname', models.CharField(max_length=240, verbose_name='lastname')),
                ('address', models.CharField(max_length=240, verbose_name='address')),
                ('email', models.EmailField(max_length=240, verbose_name='email')),
                ('password', models.CharField(max_length=240, verbose_name='password')),
            ],
        ),
        migrations.CreateModel(
            name='Product',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=240, verbose_name='title')),
                ('description', models.CharField(max_length=1000, verbose_name='description')),
                ('price', models.FloatField(verbose_name='price')),
                ('sold', models.BooleanField(verbose_name='sold')),
                ('rent', models.BooleanField(verbose_name='rent')),
                ('dateposted', models.DateField(auto_now_add=True)),
                ('uploadedby', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='teebayproj.user')),
            ],
        ),
    ]