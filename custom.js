//welcome alert
function welcome_time(){
    gg=setTimeout(welcome_alert,5000);
}
//welcome_time();
function welcome_alert(){
    alert("welcome to our website");
}
//welcome_time();

//right click disabel
  document.addEventListener("contextmenu", (event) => {
     event.preventDefault();
  });

// var b="welcome to our website";
// alert(b);

//website linking through javascript
function linking(){
    window.open('file:///C:/Users/hp/Desktop/tour-website/services.html');
}

//---------------form validation--------------

function ab(){
    user=document.getElementById("name").value;
    email=document.getElementById("email").value;
    address=document.getElementById("address").value;
    mobile=document.getElementById("mobile number").value;
    gender=document.cc.gen;
    country=document.cc.pp;

//regular expression
            usercheck=/^[A-Za-z]+$/;
		    emailcheck=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
		    addresscheck=/^[0-9a-zA-Z]+$/;
            mobilecheck=/^\+?[1-9][0-9]{7,14}$/;

// user validation
if(usercheck.test(user))
{
    document.getElementById("usererror").innerHTML="";
}
else if(user=="")
{
    document.getElementById("usererror").innerHTML="enter username";
    document.getElementById("usererror").style.color="red";
    return false;
}
else{
    document.getElementById("usererror").innerHTML="invalid username";
    document.getElementById("usererror").style.color="red";
    return false;
}
//email validation
if(emailcheck.test(email))
{
    document.getElementById("emailerror").innerHTML="";
}
else if(email=="")
{
    document.getElementById("emailerror").innerHTML="enter email";
    document.getElementById("emailerror").style.color="red";
    return false;
}
else{
    document.getElementById("emailerror").innerHTML="invalid email";
    document.getElementById("emailerror").style.color="red";
    return false;
}
//addrress validation
if(addresscheck.test(address))
{
    document.getElementById("addresserror").innerHTML="";
}
else if(address=="")
{
    document.getElementById("addresserror").innerHTML="enter address";
    document.getElementById("addresserror").style.color="red";
    return false;
}
else{
    document.getElementById("addresserror").innerHTML="invalid address";
    document.getElementById("addresserror").style.color="red";
    return false;
}

// gender validation
if ((gender[0].checked==false)&&(gender[1].checked==false))
{
    document.getElementById("generror").innerHTML="select male or female";
    document.getElementById("generror").style.color="red";
    return false;
}
else{
    document.getElementById("generror").innerHTML="";
}
//country validation
if(country.value=="default")
{
    document.getElementById("countryerror").innerHTML="select your country";
    document.getElementById("countryerror").style.color="red";
    return false;
}
else{
    document.getElementById("countryerror").innerHTML="";
}
}
