var anketaQuestionsJSON = '[{"question": "What is you name?", "type": "input"},	{"question": "Are you working?", "type": "select", "answers": ["yes", "no"]},	{"question": "Will you be on occupation on Saturday?", "type": "select", "answers": ["yes", "no", "may be"]}]';

var anketaQuestions = JSON.parse(anketaQuestionsJSON);//parse JSON data

var mainForm = document.getElementById('mainForm');
var sendButton = document.getElementById('sendButton');
var answersFromForm = [];//array for inputed answers
var rightAnswers = ["aaa", "no", "may be"];//array of right answers
var rightAnswer = 0;//count of right answers
var wrongAnswer = 0;//count of wrong answers

function createForm(arr){//function for create forms elements on the JSON data
	for (var j = 0; j < arr.length; j++){
		var questionRow = document.createElement('div');//create block for one question
		questionRow.className = "questionRow";
		mainForm.appendChild(questionRow);

		var questionItem = document.createElement('label');//create label element with answer text
		questionItem.className = "questionItem";
		questionItem.innerHTML = arr[j].question;
		questionRow.appendChild(questionItem);

		if(arr[j].type == "input") {// create input element for type input from JSON data
			var questionItem = document.createElement('input');
			questionItem.className = "questionItem";
			questionItem.name = "answer";
			questionRow.appendChild(questionItem);
		}
			if(arr[j].type == "select"){// create select element for type select fron JSON data
				var questionItem = document.createElement('select');
				questionItem.className = "questionItem";
				questionItem.name = "answer";
				questionRow.appendChild(questionItem);
				for (var key in arr[j].answers){//create optin elements for select? get data from JSON answer
					var selectItem = document.createElement('option');
					selectItem.innerHTML = arr[j].answers[key];
					questionItem.appendChild(selectItem);
				}
			}
	}
}


createForm(anketaQuestions);//create form from JSON data

function showAnswers(){//create input data array
	for(var i = 1; i < document.forms.mainForm.length; i++){
		answersFromForm.push(document.forms.mainForm.elements[i].value);
	}
	checkAnswers(answersFromForm, rightAnswers);//call function for comparison input data with right data array
}

function getClick(buttonSend){//function for click on the sendButton
	buttonSend.addEventListener('click', showAnswers, false);
}

function checkAnswers(inputInfo, rightInfo){//function for check count of right or wrong answers
	for(var i=0; i<inputInfo.length; i++){
		if(inputInfo[i] == rightInfo[i]){
			rightAnswer++;
		}else{
			wrongAnswer++;
		}
	}
	alert("правильных ответов: "+rightAnswer+" неправильных ответов: "+wrongAnswer);
}


getClick(sendButton);//click button event
