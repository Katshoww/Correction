document.addEventListener("DOMContentLoaded", () => {

  let el = document.getElementsByName("mdp")[0];
  let email = document.getElementsByName("email")[0];
 
  const User = {
    mail: "vbgkassim@gmail.com",
    mdp: `1234`,

  }

  localStorage.setItem('mail', User.mail);
  localStorage.setItem('mdp', User.mdp);
  const emails = localStorage.getItem('mail', User.mail);
  const mdp = localStorage.getItem('mdp', User.mdp);

  let btn = document.querySelector(".btn_submit");
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    el.value == mdp && email.value == emails ? window.alert("Connexion en cours...") : window.alert("Connexion echoué")
  })
});