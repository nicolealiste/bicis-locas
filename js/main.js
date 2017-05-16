function validateForm(){
	var name = document.getElementById("name").value;
	var lastname = document.getElementById("lastname").value;
	var email = document.getElementById("input-email").value;
	var password = document.getElementById("input-password").value;
	var selector = document.getElementsByClassName("form-control")[4].value;
	var twitter = document.getElementById("input-social").value;


////para resetaer los campos y dejarlos nuevamente en blanco
	document.getElementById("name").value = "";
	document.getElementById("lastname").value = "";
	document.getElementById("input-email").value = "";
	document.getElementById("input-password").value = "";
	document.getElementById("select").value = "0";
	document.getElementById("input-social").value = "";
	document.getElementById("el-checkbox").checked = "";	
}

	
