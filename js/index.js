window.onload = () => {
    const signup_btn = document.getElementById('signup');
    const login_btn = document.getElementById('login');

    signup_btn.addEventListener('click', () => {
        console.log('signup');
        window.location.href='file:///Users/tomitayouko/Documents/backdoar/message-rock/src/signup.html'
    });
    login_btn.addEventListener('click', () => {
        console.log('login');
        window.location.href='file:///Users/tomitayouko/Documents/backdoar/message-rock/src/signin.html'
    });
}