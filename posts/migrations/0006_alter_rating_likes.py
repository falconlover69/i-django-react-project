# Generated by Django 3.2 on 2021-07-07 07:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('posts', '0005_alter_posts_by'),
    ]

    operations = [
        migrations.AlterField(
            model_name='rating',
            name='likes',
            field=models.IntegerField(default=0),
        ),
    ]
