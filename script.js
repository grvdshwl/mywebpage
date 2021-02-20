const submit = document.getElementById("submitbtn");
const text = document.getElementById("cardtext");
const deleteBlock = document.getElementById('deleteblock')

const email = document.getElementById('email');
const subject = document.getElementById('subject');
const message = document.getElementById('message')


function formSubmit(){
	var tempParams={
		from_email:email.value,
		from_subject:subject.value,
		from_message:message.value
	}

	emailjs.send("service_5yvdfpc","template_kq9wclb",tempParams).then((res)=>{console.log("succcess",res.status)}).catch((err)=>{console.log(err)})

	text.removeChild(deleteBlock);
	var h4 = document.createElement("h4");
	h4.appendChild(document.createTextNode("Thanks for submitting i will reach out to you shortly."));
	text.appendChild(h4);
	console.log(email.value,subject.value,message.value)
	
}




