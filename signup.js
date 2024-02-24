import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getDatabase, set, ref } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCb27tIcOQupC3qdb_QEgtxZJNXAIbB-hg",
  authDomain: "legalsphere-ecd72.firebaseapp.com",
  projectId: "legalsphere-ecd72",
  storageBucket: "legalsphere-ecd72.appspot.com",
  messagingSenderId: "1001212649515",
  appId: "1:1001212649515:web:af711469c1eaffab084a6e"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase();
const auth = getAuth(app);

let fname = document.getElementById('firstname');
let lname = document.getElementById('lastname');
let mail = document.getElementById('email');
let pass = document.getElementById('password');
let mainform = document.getElementById('mainform');

let registerUser = evt => {
  createUserWithEmailAndPassword(auth ,mail.value ,pass.value)
  .then((credentials)=>{
    set(ref(db ,'UsersAuthList/' + credentials.user.uid),{
      firstname : fname.value,
      lastname : lname.value
    })
    alert("User Created");
    evt.preventDefault();
    window.location.href = 'login.html';
  })
  .catch((error)=>{
    alert(error.message);
    console.log(error.code);
    console.log(error.message);
  })
}
mainform.addEventListener('submit',registerUser);