window.onload = () => {
	setTimeout(displayNewslSignup, 1000);
}

var displayNewslSignup = () => {
	document.getElementById("newslmodal").classList.remove("invis");
	document.body.addEventListener("click", function(){
		document.getElementById("newslmodal").classList.add("invis");
	});
}

var newslemail;

var newslfield = document.getElementsByName("newslemail")[0];
var newslsubmitbutton = document.getElementById("newslSubmit");
var newslsubmitconfirm = document.getElementById("newslSubmitConfirm");

var validateNewsl = (form) => {
	newslemail = newslfield.value.trim();

	var b = true;

	if(!validateEmail(newslemail)){
		fieldFlash(quotefield);
		b = false;
	}

	return b;
}

var submitNewsl = () => {
	var inputs = {
		'entry.203061781': newslemail
	}

	fetch("https://docs.google.com/forms/u/1/d/e/1FAIpQLSeCSmujd3rFInILj_SUpBwjgZcV-8VwpydHotgCTPha7nkRbA/formResponse", {
		method: 'POST',
		mode: 'no-cors',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
		},
		body: new URLSearchParams(inputs)
	});

	submitNewslFlash();
	clearFieldsNewsl();
}

var submitNewslFlash = () => {
	newslsubmitbutton.classList.add("invis");
	newslsubmitconfirm.classList.remove("invis");

	setTimeout(function(){
		newslsubmitbutton.classList.remove("invis");
		newslsubmitconfirm.classList.add("invis");
	}, 2000);
}

var clearFieldsNewsl = () => {
	newslfield.value = "";
}