from django.contrib import admin
from datetime import datetime

from .models import Posts
# , Rating

from import_export.admin import ImportExportModelAdmin


admin.site.site_header = "Social Network Admin Panel"
admin.site.site_title = "Social Network Area"
admin.site.index_title = "Welcome to my Social Network"


@admin.action(description='Change date of creation on now')
def change_name(PostsAdmin, request, queryset):
    queryset.update(created_at = datetime.now())


# class RatingInLine(admin.TabularInline):
#     model = Rating
#     extra = 1


@admin.register(Posts)
class PostsAdmin(ImportExportModelAdmin):
    list_display = ('by', 'title', 'created_at')
    fieldsets = [
        ('Post info', {'fields': ['by','title','body', 'likes', 'dislikes']}),
        ('Date Info', {'fields': ['created_at'], 'classes': ['collapse']}),
    ]
    # inlines = [RatingInLine]
    actions = [change_name,]
    list_filter = ('created_at',)
    search_fields = ('title__startswith',)