import { getAuth, signInWithEmailAndPassword } 
from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const auth = getAuth(app);

window.login = function(){

const email = document.getElementById("adminEmail").value;
const password = document.getElementById("adminPassword").value;

signInWithEmailAndPassword(auth,email,password)
.then(()=>{

document.getElementById("loginBox").style.display="none";
document.getElementById("adminPanel").style.display="block";

})
.catch(()=>{

alert("Wrong login");

});

}
