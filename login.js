import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getDatabase, get, ref, child } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

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
const dbref = ref(db);

let mail = document.getElementById('email');
let pass = document.getElementById('password');
let mainform = document.getElementById('mainform');

let signInUser = evt => {
    evt.preventDefault();
    signInWithEmailAndPassword(auth, mail.value, pass.value)
        .then((credentials) => {
            get(child(dbref, 'UsersAuthList/' + credentials.user.uid)).then((snapshot) => {
                if (snapshot.exists) {
                    // sessionStorage.setItem("user-info",JSON.stringify({
                    //     firstname : snapshot.val().firstname,
                    //     lastname : snapshot.val().lastname
                    // }))
                    sessionStorage.setItem("user-creds", JSON.stringify(credentials.user));
                    window.location.href = 'index.html';
                }
            })
        })
        .catch((error) => {
            alert(error.message);
            console.log(error.code);
            console.log(error.message);
        })
}
mainform.addEventListener('submit', signInUser);