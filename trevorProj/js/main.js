function checkLogin()
{
	return 	document.getElementById("username").value == "admin" && 
			document.getElementById("password").value == "password123";
}

function loginRedirect()
{
	if(checkLogin())window.location.href = "hidden.html";
	else alert("INVALID LOGIN");
}