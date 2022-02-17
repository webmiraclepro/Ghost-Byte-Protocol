import emailjs from '@emailjs/browser';
console.log('emailjs', emailjs)

export function ContactUs() {

	emailjs.init("user_XXXXXXXXXXX");

	let userSubject = document.getElementById("subject").value;
	let userEmail = document.getElementById("sender").value;
	let userMessage = document.getElementById("content").value;

	var contactParams = {
		subject: userSubject,
		from_email: userEmail,
		message: userMessage
	};

	emailjs.send('service_XXXX', 'template_XXXXX', contactParams)
		.then((response) => {
			console.log('SUCCESS!', response.status, response.text);
			window.location.reload()  //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
		}, (error) => {
			console.log('error')
			console.log('FAILED', error.text);
		});
}

