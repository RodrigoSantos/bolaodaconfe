/*
Copyright (c) 2003-2011, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/
CKEDITOR.editorConfig=function(e){e.filebrowserBrowseUrl="/ckeditor/attachment_files",e.filebrowserFlashBrowseUrl="/ckeditor/attachment_files",e.filebrowserFlashUploadUrl="/ckeditor/attachment_files",e.filebrowserImageBrowseLinkUrl="/ckeditor/pictures",e.filebrowserImageBrowseUrl="/ckeditor/pictures",e.filebrowserImageUploadUrl="/ckeditor/pictures",e.filebrowserUploadUrl="/ckeditor/attachment_files",e.filebrowserParams=function(){for(var e,t,i,n=document.getElementsByTagName("meta"),o=new Object,s=0;s<n.length;s++)switch(i=n[s],i.name){case"csrf-token":e=i.content;break;case"csrf-param":t=i.content;break;default:continue}return void 0!==t&&void 0!==e&&(o[t]=e),o},e.addQueryString=function(e,t){var i=[];if(!t)return e;for(var n in t)i.push(n+"="+encodeURIComponent(t[n]));return e+(-1!=e.indexOf("?")?"&":"?")+i.join("&")},CKEDITOR.on("dialogDefinition",function(t){var i,n,o=t.data.name,s=t.data.definition;CKEDITOR.tools.indexOf(["link","image","attachment","flash"],o)>-1&&(i=s.getContents("Upload")||s.getContents("upload"),n=null==i?null:i.get("upload"),n&&n.filebrowser&&void 0===n.filebrowser.params&&(n.filebrowser.params=e.filebrowserParams(),n.action=e.addQueryString(n.action,n.filebrowser.params)))})};