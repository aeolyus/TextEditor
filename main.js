document.getElementById('title').innerHTML=localStorage['title']||"Just Write Whatever";
document.getElementById('content').innerHTML=localStorage['content']||"Autosaves no worries c:";
document.onkeydown=function(e){
	setInterval(function(){
		localStorage['title']=document.getElementById('title').innerHTML;
		localStorage['content']=document.getElementById('content').innerHTML;
		if(localStorage['title']=="")
			document.getElementById('tab').innerHTML='Text Editor';
		else
			document.getElementById('tab').innerHTML=localStorage['title'];
	},100);
}