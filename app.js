// ===============================
// LISTA DE CANAIS
// ===============================
const canais = [
    { nome: "Globo", imagem: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Globo_logo.png", url: "https://live-ber-sp-05-07.video.globo.com/j/eyJhbGciOiJSUzUxMiIsImtpZCI6IjEiLCJ0eXAiOiJKV1QifQ.eyJjb3VudHJ5X2NvZGUiOiJCUiIsImRvbWFpbiI6ImxpdmUtYmVyLXNwLTA1LTA3LnZpZGVvLmdsb2JvLmNvbSIsImV4cCI6MTc2NDE0MDI2NSwiaWF0IjoxNzY0MTE4NjY1LCJpc3MiOiJwbGF5YmFjay1hcGktcHJvZC1nY3AiLCJvd25lciI6ImQ4N2VjOGNkLWU2ZjQtNGFiMC1hY2ZiLTg2NzJhYzFlYzc2YSIsInBhdGgiOiIvbGl2ZS9mKGk9MikvZ2xvYm8tY3JyL3BsYXlsaXN0Lm0zdTgifQ.eaOTeNniFoFPY28dsTXOmLSDGn254BDYbwa47YmFhYoiJhpBbwPFwg-zLVQVQSYT7N-k4nnKxxpausl3dEtxvvvNy-kRBFj-DkoZXR49qOZ5GIyU1ZDuezGgD9_2sa2654F5jrryk9cq9EBu92wOZIxlTEpSL0cCyS6J0A20_2RgFCQyv2GU93Y8swPF5eLjTv6xLE-foZPgY0MPdD57wEAFmoZXkW5KMC3JpVXuhfADbkc5Ks3oF2SX6kdph8LgnPCxnL4JhsN0DzgcrsQH9w_iSLhMRyG6-yKEU32YFl0DYd3bcBMz3vPmcCi76Y_CcVnmnDypG5-A5rhvoN2c4w/live/f(i=2)/globo-crr/globo-crr-audio_1=96000-video=2262976.m3u8" },
    { nome: "SBT", imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt7GWLf3UTvL3scCXnIe4EemT4ny_qsmomcw&s", url: "https://cdn.live.br1.jmvstream.com/w/LVW-9359/LVW9359_XSyReL0QVf/chunklist.m3u8" },
    
    { nome: "Band", imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHXdT1tAeUWXYvybPIOtIN69KG4kg-YcLRtQ&s", url: "https://hqf6tcxuhk.singularcdn.net.br/live/019498af-1fdf-7df5-86bd-e4a6f588d6a7/s1/playlist-1080p.m3u8?sjwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmlfc3ViIjoiLzAxOTQ5OGFmLTFmZGYtN2RmNS04NmJkLWU0YTZmNTg4ZDZhNy8iLCJ1aWQiOiJhMjliYWJlOS00NjQzLTQ4NjUtYTQxMS04ZWUwODIzZWQwZDYiLCJyYXUiOm51bGwsImJleSI6ZmFsc2UsImlpcCI6ZmFsc2UsIm5iZiI6MTc2NDExNjAzNSwiaWF0IjoxNzY0MTE2MDM1LCJleHAiOjE3OTU2NTIwMzUsImp0aSI6ImEyOWJhYmU5LTQ2NDMtNDg2NS1hNDExLThlZTA4MjNlZDBkNiIsImlzcyI6IlNwYWxsYSJ9.B4lJ2PHWfDvtGEXKOvLLEj_bEyxBzU1wY5una2vfDJ4&uid=a29babe9-4643-4865-a411-8ee0823ed0d6" },
    { nome: "Record", imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgrqTv2fif4I4zzsIzbvyOpkbTq4nxHFEisA&s", url: "https://video08.logicahost.com.br/portaldatropical02/portaldatropical02/chunklist_w2097626994.m3u8" },
    { nome: "RedeTV", imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlF2skYmRpVKIGI0Iy6uucUOxo-leHLCnEzQ&s", url: "https://video08.logicahost.com.br/portaldatropical02/portaldatropical02/chunklist_w2097626994.m3u8" }
];

// SOM DE NAVEGAÇÃO
const beep = new Audio("https://actions.google.com/sounds/v1/cartoon/wood_plank_flicks.ogg");

// EXIBIR CANAIS
const lista = document.getElementById("lista-canais");

canais.forEach((c, index) => {
    let div = document.createElement("div");
    div.className = "canal-box";
    div.dataset.index = index;

    div.innerHTML = `
        <img src="${c.imagem}">
        <div class="canal-nome">${c.nome}</div>
    `;

    div.onclick = () => abrirPlayer(c.url);
    lista.appendChild(div);
});

// ========================
// PLAYER HLS
// ========================
const modal = document.getElementById("playerModal");
const video = document.getElementById("player");
const btnClose = document.getElementById("fecharPlayer");
let hls;

function abrirPlayer(url) {
    if (!url) {
        alert("Coloque a URL m3u8 no código!");
        return;
    }

    modal.style.display = "flex";

    if (Hls.isSupported()) {
        hls = new Hls();
        hls.loadSource(url);
        hls.attachMedia(video);
    } else {
        video.src = url;
    }

    video.play();
}

btnClose.onclick = () => {
    modal.style.display = "none";
    video.pause();
    video.src = "";
    if (hls) hls.destroy();
};

// ========================
// MODO TV — NAVEGAÇÃO
// ========================
let foco = 0;
const boxes = document.querySelectorAll(".canal-box");

destacar();

function destacar() {
    boxes.forEach(b => b.classList.remove("focused"));
    boxes[foco].classList.add("focused");
    boxes[foco].scrollIntoView({ block: "center", behavior: "smooth" });
}

document.addEventListener("keydown", (e) => {
    const colunas = Math.floor(window.innerWidth / 200);

    switch (e.key) {
        case "ArrowRight":
            if (foco < boxes.length - 1) foco++;
            beep.play();
            break;

        case "ArrowLeft":
            if (foco > 0) foco--;
            beep.play();
            break;

        case "ArrowDown":
            foco = Math.min(foco + colunas, boxes.length - 1);
            beep.play();
            break;

        case "ArrowUp":
            foco = Math.max(foco - colunas, 0);
            beep.play();
            break;

        case "Enter":
            boxes[foco].click();
            break;

        case "Backspace":
        case "Escape":
            if (modal.style.display === "flex") btnClose.click();
            break;
    }

    destacar();
});

// ========================
// SPLASH SCREEN
// ========================
setTimeout(() => {
    document.getElementById("splash").style.display = "none";
}, 2500);
