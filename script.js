document.getElementById('check').addEventListener('click', function() {
    
    document.body.classList.toggle("dark-theme");
  
  
  
  
  });



  function sign_up(){
    document.getElementById("sign_up").style.display="block";
    document.getElementById("login_form_login").style.display="none";
}
function login_in(){
     document.getElementById("sign_up").style.display="none";
    document.getElementById("login_form_login").style.display="block";
}