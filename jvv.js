const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});
let user = {};
document.getElementById('signUpForm').addEventListener('submit', (e => SignUp(e)))

document.getElementById('signInForm').addEventListener('submit', (e => SignIn(e)));

function SignUp (event) {
  event.preventDefault();
    const username = document.getElementById('signUpUsername').value;
    const email = document.getElementById('signUpEmail').value;
    const password = document.getElementById('signUpPassword').value;
    user = { username, email, password };
    alert('Sign up successful!');
}

function SignIn (event) { 
	event.preventDefault();
	const email = document.getElementById('signInEmail').value;
	const password = document.getElementById('signInPassword').value;
	if (user.email === email && user.password === password) {
		window.location.href = './landing/index.html';
	} else {
		alert('Incorrect email or password!');
	}
}
