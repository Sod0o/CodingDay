document.addEventListener('DOMContentLoaded', (event) => {
    var btn = document.getElementById('btn');

    btn.addEventListener('click', function(event) {
        const auth = [{email: 'sodaba.bashiri@powercoders.org', password: '123456'}];
        let email = document.getElementById('email');
        let password = document.getElementById('psw');

        for (let i = 0; i < auth.length; i++ ) {
            if (email.value.trim() == auth[i].email && password.value.trim() == auth[i].password) {
                window.location.replace("loginsuccessful.html");
            } else {
                alert('Email and Password incorrect! Please try again.');
            }
        }

    });

});