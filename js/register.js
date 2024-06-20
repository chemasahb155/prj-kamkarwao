// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-auth.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-database.js";

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

// Register function
export function register(event) {
  event.preventDefault();

  const uname = document.getElementById('name').value;
  const contact = document.getElementById('contactNumber').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const confpassword = document.getElementById('confirmPassword').value;

  if (!validate(email, password, confpassword)) {
    return;
  }

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      const user_data = {
        email: email,
        name: uname,
        contact: contact,
        last_login: Date.now()
      };
      set(ref(database, 'users/' + user.uid), user_data)
        .then(() => {
          alert('User Created!!');
        })
        .catch((error) => {
          console.error("Error saving user data: ", error);
        });
    })
    .catch((error) => {
      alert(error.message);
      console.error("Error creating user: ", error);
    });
}

function validate(email, password, confpassword) {
  const expression = /^[^@]+@\w+(\.\w+)+\w+$/;
  if (!expression.test(email)) {
    document.getElementById('error').innerHTML = "Invalid email format";
    return false;
  }

  if (password.length < 6) {
    document.getElementById('error').innerHTML = "Password must be greater than 6 characters";
    return false;
  }

  if (password !== confpassword) {
    document.getElementById('error').innerHTML = "Password and Confirm Password do not match";
    return false;
  }

  return true;
}
