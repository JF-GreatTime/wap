function selectTag(showContent,selfObj,jNum){
	// 操作标签
	var tag = document.getElementById("tags").getElementsByTagName("li");
	var taglength = tag.length;
	for(i=0; i<taglength; i++){
		tag[i].className = "";
	}
	selfObj.parentNode.className = "selectTag";
	// 操作内容
	for(i=0; j=document.getElementById("tagContent"+i); i++){
		j.style.display = "none";
	}
	document.getElementById(showContent).style.display = "block";
	console.log()
	if(jNum==0){
        document.getElementById("tags_label").getElementsByTagName("a")[0].setAttribute("href","/xinwenzixun.html");
	}else if(jNum==1){
        document.getElementById("tags_label").getElementsByTagName("a")[0].setAttribute("href","/guanggaozhishi.html");
	}else if(jNum==2){
        document.getElementById("tags_label").getElementsByTagName("a")[0].setAttribute("href","/yejieshuju.html");
    }
};

function selectTaga(showContent,selfObj){
	// 操作标签
	var tag = document.getElementById("tagsa").getElementsByTagName("li");
	var taglength = tag.length;
	for(i=0; i<taglength; i++){
		tag[i].className = "";
	}
	selfObj.parentNode.className = "selectTaga";
	// 操作内容
	for(i=0; j=document.getElementById("tagContenta"+i); i++){
		j.style.display = "none";
	}
	document.getElementById(showContent).style.display = "block";
}