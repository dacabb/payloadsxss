const details = `
  🚨 XSS Detected 🚨
  ========================
  🏁 Origin: ${window.origin}
  🌐 Location: ${window.location}
  🔗 Href: ${window.location.href}
  🏢 Hostname: ${window.location.hostname}
  📂 Pathname: ${window.location.pathname}
  ❓ Search: ${window.location.search}
  👪 Parent Origin: ${window.parent?.origin || 'N/A'}
  🧑‍💻 Top Origin: ${window.top?.origin || 'N/A'}
  🖼️ Frames Length: ${window.frames.length}
  🪪 Window Name: ${window.name}
  ========================
  🍪 Cookies: ${document.cookie || 'No cookies available'}
  🕵️ User-Agent: ${navigator.userAgent}
  ⏳ Timestamp: ${new Date().toISOString()}
`;

alert(details);
console.log(details)
