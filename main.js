document.getElementById('title').innerHTML=localStorage['title']||"Just Write Whatever";
document.getElementById('content').innerHTML=localStorage['content']||"Autosaves no worries c:";
setInterval(function(){
	localStorage['title']=document.getElementById('title').innerHTML;
	localStorage['content']=document.getElementById('content').innerHTML;
},100);