if(document.addEventListener){
	document.addEventListener("DOMContentLoaded", function(){
		loaded();
	});
} else if(document.attachEvent){
	document.attachEvent("onreadystatechange", function(){
		loaded();
	});
}

function loaded(){
	
	setInterval(loop, 350);

}

var x = 0;

var titleText = [ "/ ", "| ", "&#92; ", "K", "K/ ", "K| ", "K&#92; ", "KI/ ", "KI| ", "KI&#92; ", "KIL", "KIL/ ", "KIL| ", "KIL&#92; ", "KILL", "KILL/", "KILL| ", "KILL&#92; ", "KILLA", "KILLA/ ", "KILLA| ", "KILLA&#92; ", "KILLAS", "KILLAS/ ", "KILLAS| ", "KILLAS&#92; ", "KILLASH", "KILLASH/ ", "KILLASH| ", "KILLASH&#92; ", "KILLASHA", "KILLASHA/ ", "KILLASHA| ", "KILLASHA&#92; ", "KILLASHAN", "KILLASHAN/ ", "KILLASHAN| ", "KILLASHAN&#92; ", "KILLASHANK"];

function loop(){

	document.getElementsByTagName("title")[0].innerHTML = titleText[x++%titleText.length];

}