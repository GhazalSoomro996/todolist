var item=[];
var loaddata=[];
var arraydata=[];
function addTodo(){
	var inputText = document.getElementById('input');
	item.push(inputText.value);
	var container = document.getElementById('container');
	  container.innerHTML = '';
	for(var i in item){
		container.innerHTML +="<input type='checkbox'/>"+item[i]+"<br>";

	}
	var inputText = document.getElementById('input');
		inputText.value='';
		save();
}
function save(){

	
for(var i in item){
 arraydata=item[i];
 localStorage.setItem("listkey", arraydata);
 console.log(arraydata);

	}
   load();
}
function load(){
	for(var i in arraydata){
    loaddata=arraydata[i];
	localStorage.getItem(localStorage.key(i));
    container1.innerHTML +="<b>"+loaddata+"</b>";
	}
container1.innerHTML +="<br>"

}