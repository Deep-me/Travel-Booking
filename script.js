let currentUser = localStorage.getItem('username');

if (currentUser) {
    document.getElementById('user-greeting').innerText = `Hello, ${currentUser}!`;
    document.getElementById('user-greeting').classList.remove('hidden');
    document.getElementById('username-display').innerText = currentUser;
}

document.getElementById('signup-form')?.addEventListener('submit', handleSignup);
document.getElementById('signin-form')?.addEventListener('submit', handleSignin);
document.getElementById('travel-form')?.addEventListener('submit', handleTravel);
