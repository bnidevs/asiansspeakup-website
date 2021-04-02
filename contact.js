var name, email, story, quote, newslemail2;

var namefield = document.getElementsByName("name")[0];
var emailfield = document.getElementsByName("email")[0];
var storyfield = document.getElementsByName("story")[0];

var storysubmitbutton = document.getElementById("storySubmit");
var storysubmitconfirm = document.getElementById("storySubmitConfirm");

var validateEmail = (email) => {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

var validateStory = (form) => {
	name = namefield.value.trim();
	email = emailfield.value.trim();
	story = storyfield.value.trim();

	var b = true;

	if(name.length <= 0){
		fieldFlash(namefield);
		b = false;
	}

	if(!validateEmail(email)){
		fieldFlash(emailfield);
		b = false;
	}

	if(story.length <= 0){
		fieldFlash(storyfield);
		b = false;
	}

	return b;
}

var fieldFlash = (field) => {
	field.classList.add("invalid_input");
	field.addEventListener("focus", function(){field.classList.remove("invalid_input")});
}

var submitStory = () => {
	var inputs = {
		'entry.622950063': name,
		'entry.1035558789': story,
		'emailAddress': email
	}

	fetch("https://docs.google.com/forms/u/1/d/e/1FAIpQLSfdd3FwKe8MrpagekctC-1zOITff_HWWBHZLGLniwFXRc82aw/formResponse", {
		method: 'POST',
		mode: 'no-cors',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
		},
		body: new URLSearchParams(inputs)
	});

	submitStoryFlash();
	clearFieldsStory();
}

var submitStoryFlash = () => {
	storysubmitbutton.classList.add("invis");
	storysubmitconfirm.classList.remove("invis");

	setTimeout(function(){
		storysubmitbutton.classList.remove("invis");
		storysubmitconfirm.classList.add("invis");
	}, 2000);
}

var clearFieldsStory = () => {
	namefield.value = "";
	storyfield.value = "";
	emailfield.value = "";
}

var quotefield = document.getElementsByName("quote")[0];
var quotesubmitbutton = document.getElementById("quoteSubmit");
var quotesubmitconfirm = document.getElementById("quoteSubmitConfirm");

var validateQuote = (form) => {
	quote = quotefield.value.trim();

	var b = true;

	if(quote.length <= 0){
		fieldFlash(quotefield);
		b = false;
	}

	return b;
}

var submitQuote = () => {
	var inputs = {
		'entry.1165143740': quote
	}

	fetch("https://docs.google.com/forms/u/1/d/e/1FAIpQLSdNQ-c7J5W7Vrszkv-hX-3iwVu3pIjpqUZAms2CFjplNeVJVQ/formResponse", {
		method: 'POST',
		mode: 'no-cors',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
		},
		body: new URLSearchParams(inputs)
	});

	submitQuoteFlash();
	clearFieldsQuote();
}

var submitQuoteFlash = () => {
	quotesubmitbutton.classList.add("invis");
	quotesubmitconfirm.classList.remove("invis");

	setTimeout(function(){
		quotesubmitbutton.classList.remove("invis");
		quotesubmitconfirm.classList.add("invis");
	}, 2000);
}

var clearFieldsQuote = () => {
	quotefield.value = "";
}

var newslfield2 = document.getElementsByName("newslemail2")[0];
var newslsubmitbutton2 = document.getElementById("newslSubmit2");
var newslsubmitconfirm2 = document.getElementById("newslSubmitConfirm2");

var validateNewsl2 = (form) => {
	newslemail2 = newslfield2.value.trim();

	var b = true;

	if(!validateEmail(newslemail2)){
		fieldFlash(newslfield2);
		b = false;
	}

	return b;
}

var submitNewsl2 = () => {
	var inputs = {
		'entry.203061781': newslemail2
	}

	fetch("https://docs.google.com/forms/u/1/d/e/1FAIpQLSeCSmujd3rFInILj_SUpBwjgZcV-8VwpydHotgCTPha7nkRbA/formResponse", {
		method: 'POST',
		mode: 'no-cors',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
		},
		body: new URLSearchParams(inputs)
	});

	submitNewslFlash2();
	clearFieldsNewsl2();
}

var submitNewslFlash2 = () => {
	newslsubmitbutton2.classList.add("invis");
	newslsubmitconfirm2.classList.remove("invis");

	setTimeout(function(){
		newslsubmitbutton2.classList.remove("invis");
		newslsubmitconfirm2.classList.add("invis");
	}, 2000);
}

var clearFieldsNewsl2 = () => {
	newslfield2.value = "";
}
