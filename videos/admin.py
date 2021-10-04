from django.contrib import admin

# Register your models here.

from .models import Video

class VideoAdmin(admin.ModelAdmin):
    list_display = ['name', 'by']
    search_fields = ('name__startswith',)
    list_filter = ('added_at',)

admin.site.register(Video, VideoAdmin)