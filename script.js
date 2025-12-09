AOS.init({
    duration: 800,
    once: true
});

function attemptEntry() {
    const audio = document.getElementById('bg-music');
    const gate = document.getElementById('gate-overlay');
    const preloader = document.getElementById('preloader');
    const loaderBar = document.getElementById('loader-bar');

    audio.volume = 0.5;

    audio.play().then(() => {
        gate.style.opacity = '0';
        gate.style.pointerEvents = 'none';

        preloader.classList.add('active');

        setTimeout(() => {
            loaderBar.style.width = '100%';
        }, 100);

        setTimeout(() => {
            preloader.style.opacity = '0';
            preloader.style.pointerEvents = 'none';
            document.body.classList.add('access-granted');

            window.scrollTo(0, 0);

        }, 2500);

    }).catch(error => {
        console.error("Audio playback failed:", error);
        const btn = document.querySelector('.enter-btn');
        btn.innerHTML = "[ ERROR: CLICK AGAIN ]";
        btn.style.background = "#fff";
        alert(
            "SYSTEM ERROR: Audio initialization failed. Interaction required by browser policy. Please click again.");
    });
}

const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const katakana =
    'FAIQ RAIHAN ORANGNYA SANGAR ABIS MANTAP JIWA BACKEND DEVELOPER LINUX ENTHUSIAST KODE KEREN BOSQUE CINTA KODE CLEAN CODE CAFEIN THREAD SAFE EFFICIENT SECURE NETWORKING SURYA 16 MENCINTAI AISSYA SAFRILIANA ISNAENI MUHAMMAD FAIQ RAIHAN D.,S.KOM. MAS AMBA LARAVEL I LOVE U';
const alphabet = katakana.split('');

const fontSize = 16;
const columns = canvas.width / fontSize;
const drops = [];

for (let x = 0; x < columns; x++) {
    drops[x] = 1;
}

function drawMatrix() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#0F0'; // Green text
    ctx.font = fontSize + 'px monospace';

    for (let i = 0; i < drops.length; i++) {
        const text = alphabet[Math.floor(Math.random() * alphabet.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975)
            drops[i] = 0;

        drops[i]++;
    }
}
setInterval(drawMatrix, 30);

// --- GITHUB GRID GENERATOR ---
const contribGrid = document.getElementById('contrib-grid');
for (let i = 0; i < 105; i++) {
    const div = document.createElement('div');
    div.className = 'contrib-box';
    const rnd = Math.random();
    if (rnd > 0.8) div.classList.add('lvl-4');
    else if (rnd > 0.6) div.classList.add('lvl-3');
    else if (rnd > 0.4) div.classList.add('lvl-2');
    else div.classList.add('lvl-1');
    contribGrid.appendChild(div);
}

// --- TERMINAL LOGIC ---
const cmdInput = document.getElementById('cmd-input');
const termOutput = document.getElementById('terminal-output');

cmdInput.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        const cmd = this.value.trim().toLowerCase();
        const newLine = document.createElement('div');
        newLine.innerHTML = `<span style="color: var(--terminal-green)">➜ ~</span> ${this.value}`;
        termOutput.appendChild(newLine);

        processCommand(cmd);

        this.value = '';
        termOutput.scrollTop = termOutput.scrollHeight;
    }
});

function processCommand(cmd) {
    const res = document.createElement('div');
    res.style.marginBottom = '10px';
    res.style.color = '#ccc';

    switch (cmd) {
        case 'help':
            res.innerHTML = `Available commands:<br>
                    - <b style="color:#fff">whoami</b> : Identity<br>
                    - <b style="color:#fff">skills</b> : Tech stack<br>
                    - <b style="color:#fff">contact</b> : Email me<br>
                    - <b style="color:#fff">clear</b> : Clean buffer<br>
                    - <b style="color:#fff">sudo</b> : Root access?`;
            break;
        case 'whoami':
            res.innerHTML = "Muhammad Faiq Raihan D.,S.Kom. Backend Engineer. Linux Enthusiast. I love u Liana ku sayangs";
            break;
        case 'dir':
            res.innerHTML = `<b style="color:#fff">Directory of /home/faiq</b><br>
                    - projects<br>
                    - skills.txt<br>
                    - contact.me`;
            break;
        case 'skills':
            res.innerHTML = `Tech Stack:<br>
                    - Languages: Python, PHP, JavaScript (Node.js)<br>
                    - Frameworks: Laravel, Express.js<br>
                    - Databases: MySQL, PostgreSQL, MongoDB<br>
                    - Tools: Docker, Git, Linux<br>
                    - Others: RESTful APIs, Microservices Architecture`;
            break;

        case 'contact':
            res.innerHTML = "Opening mail client...";
            setTimeout(() => window.location.href = "mailto:faiq.fhr03@gmail.com", 1000);
            break;
        case 'sudo':
            res.innerHTML =
                "<span style='color:red; font-weight:bold;'>PERMISSION DENIED:</span> Hi Bitch,You are not in the sudoers file. This incident will be reported.";
            break;
        case 'sudo rm -rf /':
                    const audio = document.getElementById('bg-music');
                    if(audio) audio.pause();

                    let logs = '';
                    const services = ['NetworkManager', 'Bluetooth', 'PulseAudio', 'Cronie', 'Docker', 'Kubelet', 'Nginx', 'PostgreSQL', 'Sshd', 'Systemd-journald'];
                    const paths = ['/bin', '/usr/lib', '/var/log', '/home/faiq', '/etc/shadow', '/boot/vmlinuz-linux'];
                    
                    for(let i=0; i<100; i++) {
                        const svc = services[Math.floor(Math.random() * services.length)];
                        logs += `<div class="log-line"><span class="green">[  OK  ]</span> Started ${svc} Service.</div>`;
                    }
                    for(let i=0; i<300; i++) {
                        const pth = paths[Math.floor(Math.random() * paths.length)];
                        logs += `<div class="log-line"><span class="red">[DELETE]</span> Removing ${pth}... PERMISSION GRANTED.</div>`;
                    }

                    document.body.innerHTML = `
                        <style>
                            body { background: #000; overflow: hidden; margin: 0; font-family: 'Courier New', Courier, monospace; }
                            
                            /* Container Log Berjalan */
                            .boot-screen {
                                position: fixed; top: 0; left: 0; width: 100%; height: 100%;
                                overflow: hidden; z-index: 1;
                                opacity: 0.5; /* Agak redup biar pesan utama kebaca */
                            }
                            
                            .log-scroll {
                                position: absolute; bottom: 0; left: 0; width: 100%;
                                display: flex; flex-direction: column; justify-content: flex-end;
                                animation: scrollUp 2s linear infinite; /* Scroll cepat */
                            }

                            .log-line {
                                color: #aaa; font-size: 14px; line-height: 1.2; padding-left: 10px;
                                white-space: nowrap;
                            }
                            
                            .green { color: #00ff00; font-weight: bold; }
                            .red { color: #ff0000; font-weight: bold; }

                            /* Pesan Utama (STATIS/DIAM) */
                            .panic-overlay {
                                position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%);
                                z-index: 9999;
                                background: #000;
                                border: 2px solid #ff0000;
                                padding: 40px;
                                text-align: center;
                                box-shadow: 0 0 50px rgba(255, 0, 0, 0.5);
                                min-width: 600px;
                            }

                            .panic-title {
                                color: #ff0000; font-size: 5rem; margin: 0; font-weight: 900;
                                text-shadow: 4px 4px 0px #330000;
                                letter-spacing: 5px;
                            }

                            .panic-ascii {
                                color: #ff0000; font-size: 16px; margin: 20px 0;
                                white-space: pre; font-weight: bold;
                            }

                            .panic-msg {
                                color: #fff; font-size: 1.2rem; margin-top: 10px;
                                font-family: 'JetBrains Mono', monospace;
                            }

                            @keyframes scrollUp {
                                0% { transform: translateY(0); }
                                100% { transform: translateY(-50%); }
                            }
                        </style>

                        <div class="boot-screen">
                            <div class="log-scroll">
                                ${logs}
                                ${logs} </div>
                        </div>

                        <div class="panic-overlay">
                            <h1 class="panic-title">ASU YA WE!</h1>
                            
                            <div class="panic-ascii">
      ┌─┐
      ┴─┴
      ಠ_ಠ
╭∩╮( Ο )╭∩╮
                            </div>

                            <div class="panic-msg">
                                > SYSTEM FILES DELETED.<br>
                                > ROOT ACCESS REVOKED.<br>
                                > IP ADDRESSMU 100.101.245.233 !.
                            </div>
                        </div>
                    `;

                    setTimeout(() => location.reload(), 7000);
                    break;
        case 'clear':
            termOutput.innerHTML = '';
            return;
        default:
            res.innerHTML = `zsh: command not found: ${cmd}`;
    }
    termOutput.appendChild(res);
}

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});