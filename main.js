function clickbtn()
{
  
  window.location = "Register.html";
}
function login()
{
  const user_name_login = document.getElementById("user_name_second").value;
  localStorage.setItem = ('user_name_second', user_name_login );
  window.location = "onlinenow.html";
}