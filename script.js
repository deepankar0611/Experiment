const firebaseConfig = {
    apiKey: "AIzaSyCYAVkifnpz4IqPJLxXCZpP4Luq95t-GsU",
    authDomain: "expeiment-6ac9b.firebaseapp.com",
    projectId: "expeiment-6ac9b",
    storageBucket: "expeiment-6ac9b.firebasestorage.app",
    messagingSenderId: "873530094448",
    appId: "1:873530094448:web:13aaf671812945e65e95b5",
    measurementId: "G-5TD03T89ZD"
  };


// Wait for Firebase to load
window.addEventListener('load', () => {
    // Verify Firebase is available
    if (typeof firebase === 'undefined') {
        console.error('Firebase failed to load');
        return;
    }

    // Initialize Firebase
    const app = firebase.initializeApp(firebaseConfig);
    const auth = firebase.auth();

    // DOM Elements
    const loginForm = document.getElementById('login');
    const signupForm = document.getElementById('signup');
    const loginEmail = document.getElementById('login-email');
    const loginPassword = document.getElementById('login-password');
    const signupEmail = document.getElementById('signup-email');
    const signupPassword = document.getElementById('signup-password');
    const loginError = document.getElementById('login-error');
    const signupError = document.getElementById('signup-error');
    const loginContainer = document.getElementById('login-form');
    const signupContainer = document.getElementById('signup-form');
    const showSignup = document.getElementById('show-signup');
    const showLogin = document.getElementById('show-login');

    // Toggle Signup
    showSignup.addEventListener('click', (e) => {
        e.preventDefault();
        loginContainer.style.display = 'none';
        signupContainer.style.display = 'block';
    });

    // Toggle Login
    showLogin.addEventListener('click', (e) => {
        e.preventDefault();
        signupContainer.style.display = 'none';
        loginContainer.style.display = 'block';
    });

    // Login Submission
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = loginEmail.value;
        const password = loginPassword.value;
        auth.signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                alert('Login successful! Welcome ' + userCredential.user.email);
                loginError.textContent = '';
                loginForm.reset();
            })
            .catch((error) => {
                loginError.textContent = error.message;
            });
    });

    // Signup Submission
    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = signupEmail.value;
        const password = signupPassword.value;
        auth.createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                alert('Signup successful! Welcome ' + userCredential.user.email);
                signupError.textContent = '';
                signupForm.reset();
                signupContainer.style.display = 'none';
                loginContainer.style.display = 'block';
            })
            .catch((error) => {
                signupError.textContent = error.message;
            });
    });
});