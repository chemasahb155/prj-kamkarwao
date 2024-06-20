// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";
import { getDatabase, ref, update } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-database.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAaRL2S8YceKVTYi1qwziIPIO_hZc1W5ag",
  authDomain: "kaam-karwao.firebaseapp.com",
  projectId: "kaam-karwao",
  storageBucket: "kaam-karwao.appspot.com",
  messagingSenderId: "614721455455",
  appId: "1:614721455455:web:3c331af94f58d5dc23e2ea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

function login(event) {
  event.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  if (!validate_email(email) || !validate_password(password)) {
    alert('Email or Password is invalid!');
    return;
  }

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      const database_ref = ref(database, 'users/' + user.uid);

      const user_data = {
        last_login: Date.now()
      };

      update(database_ref, user_data)
        .then(() => {
          alert('User Logged In!!');
        })
        .catch((error) => {
          alert('Error updating database: ' + error.message);
        });
    })
    .catch((error) => {
      alert('Login failed: ' + error.message);
    });
}

function validate_email(email) {
  const expression = /^[^@]+@\w+(\.\w+)+\w$/;
  return expression.test(email);
}

function validate_password(password) {
  return password.length >= 6;
}

document.getElementById('loginForm').addEventListener('submit', login);
