from django.contrib import admin

# Register your models here.

from .models import Track


class TrackAdmin(admin.ModelAdmin):
    list_display = ['name', 'artist']
    search_fields = ('name__startswith',)
    list_filter = ('added_at',)

admin.site.register(Track, TrackAdmin)