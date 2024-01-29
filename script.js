//your JS code here. If required.
function getFormvalue() {
    //Write your code here
	let first = document.getElementById("fname").value;
	let last = document.getElementById("lname").value;
    let ph=document.getElementById("phno").value;
    let email=document.getElementById("email").value;
	alert('First Name:'+first+'\nLast Name:'+last+'\nPhone Number:'+ph+'\nEmail ID:'+email);
}