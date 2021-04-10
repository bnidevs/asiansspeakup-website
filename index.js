window.onload = () => {
	setTimeout(displayNewslSignup, 1000);
}

var open_categ = "main";

$(document).ready(function(){

	$("#stories_link").click(function(){
		if(open_categ !== "stories"){
			$(".content_section:visible").fadeOut().promise().done(function(){
				$("#stories_content").fadeIn();
			});
			open_categ = "stories";
		}
	});

	$("#quotes_link").click(function(){
		if(open_categ !== "quotes"){
			$(".content_section:visible").fadeOut().promise().done(function(){
				$("#quotes_content").fadeIn();
			});
			open_categ = "quotes";
		}
	});

	$("#team_link").click(function(){
		if(open_categ !== "team"){
			$(".content_section:visible").fadeOut().promise().done(function(){
				$("#team_content").fadeIn();
			});
			open_categ = "team";
		}
	});

	$("#events_link").click(function(){
		if(open_categ !== "events"){
			$(".content_section:visible").fadeOut().promise().done(function(){
				$("#events_content").fadeIn();
			});
			open_categ = "events";
		}
	});

	$("#contact_link").click(function(){
		if(open_categ !== "contact"){
			$(".content_section:visible").fadeOut().promise().done(function(){
				$("#contact_content").fadeIn();
			});
			open_categ = "contact";
		}
	});

	$("#sharestorybutton").click(function(){
		if(open_categ !== "contact"){
			$(".content_section:visible").fadeOut().promise().done(function(){
				$("#contact_content").fadeIn();
			});
			open_categ = "contact";
		}
	});

	$("#main_link").click(function(){
		if(open_categ !== "main"){
			$(".content_section:visible").fadeOut().promise().done(function(){
				$("#index_content").fadeIn();
			});
			open_categ = "main";
		}
	});
});



var displayNewslSignup = () => {
	var cookie = document.cookie.split("; ").find(row => row.startsWith("nomodal="));

	if(cookie != null){
		return;
	}
	document.getElementById("newslmodal").classList.remove("invis");
	document.getElementById("main_content").addEventListener("click", function(){
		document.getElementById("newslmodal").classList.add("invis");
		document.cookie = "nomodal=true";
	});
}

var newslemail1;

var newslfield1 = document.getElementsByName("newslemail1")[0];
var newslsubmitbutton1 = document.getElementById("newslSubmit1");
var newslsubmitconfirm1 = document.getElementById("newslSubmitConfirm1");

var validateNewsl1 = (form) => {
	newslemail1 = newslfield1.value.trim();

	var b = true;

	if(!validateEmail(newslemail1)){
		fieldFlash(newslfield1);
		b = false;
	}

	return b;
}

var submitNewsl1 = () => {
	var inputs = {
		'entry.203061781': newslemail1
	}

	fetch("https://docs.google.com/forms/u/1/d/e/1FAIpQLSeCSmujd3rFInILj_SUpBwjgZcV-8VwpydHotgCTPha7nkRbA/formResponse", {
		method: 'POST',
		mode: 'no-cors',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
		},
		body: new URLSearchParams(inputs)
	});

	submitNewslFlash1();
	clearFieldsNewsl1();
}

var submitNewslFlash1 = () => {
	newslsubmitbutton1.classList.add("invis");
	newslsubmitconfirm1.classList.remove("invis");

	setTimeout(function(){
		newslsubmitbutton1.classList.remove("invis");
		newslsubmitconfirm1.classList.add("invis");
		document.getElementById("newslmodal").classList.add("invis");
		document.cookie = "nomodal=true";
	}, 2000);
}

var clearFieldsNewsl1 = () => {
	newslfield1.value = "";
}
