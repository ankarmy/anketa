var anketaQuestionsJSON = '[{"question": "What is you name?", "type": "input"},	{"question": "Are you working?", "type": "select", "answers": ["yes", "no"]},	{"question": "Will you be on occupation on Saturday?", "type": "select", "answers": ["yes", "no", "may be"]}]';

var anketaQuestions = JSON.parse(anketaQuestionsJSON);

//console.log(anketaQuestions);

var mainForm = document.getElementById('mainForm');
var sendButton = document.getElementById('sendButton');

function createForm(arr){
	for (var j = 0; j < arr.length; j++){
		var questionRow = document.createElement('div');
		questionRow.className = "questionRow";
		mainForm.appendChild(questionRow);

		//console.log(arr.length);
		//	if(arr[j][0]){
			//console.log([key]);
			var questionItem = document.createElement('label');
			questionItem.className = "questionItem";
			questionItem.innerHTML = arr[j].question;
			questionRow.appendChild(questionItem);

		if(arr[j].type == "input") {
			var questionItem = document.createElement('input');
			questionItem.className = "questionItem";
			questionItem.name = "answer";
			//questionItem.innerHTML = arr[j];
			questionRow.appendChild(questionItem);
		}
			if(arr[j].type == "select"){
				var questionItem = document.createElement('select');
				//selectItem.value = arr[j][key];
				questionItem.className = "questionItem";
				questionItem.name = "answer";
				questionRow.appendChild(questionItem);
				//console.log(arr[j].answers);
				for (var key in arr[j].answers){
					var selectItem = document.createElement('option');
					//selectItem.className = "selectItem";
					selectItem.innerHTML = arr[j].answers[key];
					questionItem.appendChild(selectItem);
				}
			}


	}
}




createForm(anketaQuestions);
var answersFromForm = [];
var rightAnswers = ["aaa", "no", "may be"];
function showAnswers(){
	for(var i = 1; i < document.forms.mainForm.length; i++){
		answersFromForm.push(document.forms.mainForm.elements[i].value);
	}
	checkAnswers(answersFromForm, rightAnswers);
}

function getClick(buttonSend){
	buttonSend.addEventListener('click', showAnswers, false);
}

var rightAnswer = 0;
var wrongAnswer = 0;

function checkAnswers(inputInfo, rightInfo){
	for(var i=0; i<inputInfo.length; i++){
		if(inputInfo[i] == rightInfo[i]){
			rightAnswer++;
		}else{
			wrongAnswer++;
		}
	}
	alert("правильных ответов "+rightAnswer);
	alert("неправильных ответов "+wrongAnswer);
}


getClick(sendButton);
/*var xhr = new XMLHttpRequest();
xhr.open("GET", 'HTTP://188.226.135.96:9876/json', true);

xhr.onreadystatechange = function(){
	if ((xhr.readyState == 4) && (xhr.status == 200)) {
		console.log(xhr.responseText);
	}
}
xhr.send();
*/



/*var myButton = document.getElementById('newpage');
myButton.onclick = function(){
	var newWindow = window.open("http:\\javascript.ru", "_blank");
	setTimeout(function() {
		newWindow.scrollTo(10,200);
	}, 3000);

	setTimeout(function(){
    newWindow.close();
	}, 5000);
};
	*/
/*var p = location.search;
p = p.substring(1);

console.log(p);
*/

/*var myBackButton = document.getElementById('backButton');
myBackButton.onclick = function(){
	history.back();
}
var myForwButton = document.getElementById('forwButton');
myForwButton.onclick = function(){
	history.forward();
}	*/

/*for (i = 0; i < document.links.length; i++){   //изменение цвета ссылок на странице
	document.links[i].style.color = 'red';
}
*/

/*var but1 = document.getElementsByName('btnI');

//but1[0].attributes;
for (var i = 0; i < but1[0].attributes.length; i++) {
	console.log(but1[0].attributes[i]);
}

but1[0].setAttribute('value','Мені не пощастить');
*/

/*function reverseArray(arr){

var arr1 = [];
for (i = arr.length-1; i > -1; i--){
	arr1.push(arr[i]);
}
for (i = 0; i < arr1.length; i++){
	arr[i] = arr1[i];
}
return arr;
}

reverseArray([1,2,3,4,5,6,7,8,9,10]);*/

//var ulElement = document.querySelectorAll(".cars-list")[0].cloneNode(true);
//console.log(ulElement);




//var newLi2 = newLi.cloneNode(true);
//var carsList = document.getElementsByTagName('li');
//ulList.insertBefore(newLi, carsList[1]);



/*while (ulList.children.length) {
	ulList.removeChild(ulList.children[0]);
}
*/


//document.getElementsByTagName('ul')[0].appendChild(newLi);

/*var clearButton = document.getElementById('clearButton');

function newItem(){																			//функция добавления элемента в список
	var newCar = document.getElementById('myInput');
	var newLi = document.createElement('li');
	newLi.innerText = newCar.value;
	var ulList = document.getElementsByClassName("cars-list")[0];
	ulList.appendChild(newLi);
	newCar.value = "";
}

function newItem2(e){																		//функция добавления по нажатию Enter
	if (e.keyCode == "13"){
		newItem();
	}
}

function clearItem(){																	//функция отчистки списка
	var carsList = document.getElementsByTagName('ul')[0];
	for (var i = carsList.children.length-1; i > -1 ; i--) {
		carsList.removeChild(carsList.children[i]);
	}
}


myButton.addEventListener("click", newItem, false);
window.addEventListener('keypress', newItem2, false);
clearButton.addEventListener("click", clearItem, false);
*/
/*
var loginText = document.registration.login;
var passwordText = document.registration.password;
var inputMessageStyle = document.getElementById('inputMessage').style.display;
var passwordMessageStyle = document.getElementById('passwordMessage').style.display;
var regButton = document.registration.regButton;
loginText.addEventListener('change', checkText, false);
passwordText.addEventListener('change', checkText, false);
regButton.addEventListener('focus', checkForm, false);


function checkForm(){
	if ((inputMessageStyle == "none") && (passwordMessageStyle == "none")){
		regButton.style.display = "block";
	}
}

function checkText(elem){
	console.log(elem.target);
	if (this.value == "") {
		showMessage(this);
		//elem.nextElementSibling.style.display = "block";
	}else
		hideMessage(this);
	//elem.nextElementSibling.style.display = "none";
}

function showMessage(e){
	//if (e.nextElementSibling.style.display != "block") {
		e.nextElementSibling.style.display = "inline";
	//}
}

function hideMessage(e){
	//if (e.nextElementSibling.style.display != "none") {
		e.nextElementSibling.style.display = "none";
	//}
}
*/
