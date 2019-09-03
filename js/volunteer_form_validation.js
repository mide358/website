function formValidation()
{

var fname = document.registration.fname;
var uadd = document.registration.address;
var ucountry = document.registration.country;
var uemail = document.registration.email;
var umsex = document.registration.msex;
var ufsex = document.registration.fsex; 
var uzip = document.registration.zip;

	if(allLetter(fname))
	{	
		if(alphanumeric(uadd))
		{ 
			if(countryselect(ucountry))
			{
				if(ValidateEmail(uemail))
				{
					if(validsex(umsex,ufsex))
					{
						if(allnumeric(uzip))
						{
						}
					} 
				}
			}
		}
	}
	return false;
} 

function allLetter(fname)
{ 
	var letters = /^[A-Za-z\s]+$/;
	if(fname.value.match(letters))
	{
		return true;
	}
	else
	{
		alert('Fullname must have alphabet characters only');
		fname.focus();
		return false;
	}
}

function alphanumeric(uadd)
{ 
	var letters = /^[0-9a-zA-Z\s]+$/;
	if(uadd.value.match(letters))
	{
		return true;
	}
	else
	{
		alert('Volunteer address must have alphanumeric characters only');
		uadd.focus();
		return false;
	}
}

function countryselect(ucountry)
{
	if(ucountry.value == "Default")
	{
		alert('Select your country from the list');
		ucountry.focus();
		return false;
	}
	else
	{
		return true;
	}
}

function ValidateEmail(uemail)
{
	var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	if(uemail.value.match(mailformat))
	{
		return true;
	}
	else
	{
		alert("You have entered an invalid email address!");
		uemail.focus();
		return false;
	}
}

function validsex(umsex,ufsex)
{
	x=0;

	if(umsex.checked) 
	{
		x++;
	}
	if(ufsex.checked)
	{
		x++; 
	}
	
	if (x==2)
	{
		alert('Both Male/Female are checked');
		ufsex.checked=false
		umsex.checked=false
		umsex.focus();
		return false;
	}
	
	if(x==0)
	{
		alert('Select Male/Female');
		umsex.focus();
		return false;
	}
	else
	{
		return true;
	}
}

function allnumeric(uzip)
{ 
	var numbers = /^[0-9]+$/;
	if(uzip.value.match(numbers))
	{
		alert('Form Succesfully Submitted');
		window.location.reload();
		return true;
	}
	else
	{
		alert('ZIP code must have numeric characters only');
		uzip.focus();
		return false;
	}
}