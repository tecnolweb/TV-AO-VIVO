// ===============================
// LISTA DE CANAIS
// ===============================
const canais = [
   
    { nome: "SBT", imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt7GWLf3UTvL3scCXnIe4EemT4ny_qsmomcw&s", url: "https://cdn.live.br1.jmvstream.com/w/LVW-9359/LVW9359_XSyReL0QVf/chunklist.m3u8" },
    { nome: "Band", imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHXdT1tAeUWXYvybPIOtIN69KG4kg-YcLRtQ&s", url: "https://hqf6tcxuhk.singularcdn.net.br/live/019498af-1fdf-7df5-86bd-e4a6f588d6a7/s1/playlist-1080p.m3u8?sjwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmlfc3ViIjoiLzAxOTQ5OGFmLTFmZGYtN2RmNS04NmJkLWU0YTZmNTg4ZDZhNy8iLCJ1aWQiOiJhMjliYWJlOS00NjQzLTQ4NjUtYTQxMS04ZWUwODIzZWQwZDYiLCJyYXUiOm51bGwsImJleSI6ZmFsc2UsImlpcCI6ZmFsc2UsIm5iZiI6MTc2NDExNjAzNSwiaWF0IjoxNzY0MTE2MDM1LCJleHAiOjE3OTU2NTIwMzUsImp0aSI6ImEyOWJhYmU5LTQ2NDMtNDg2NS1hNDExLThlZTA4MjNlZDBkNiIsImlzcyI6IlNwYWxsYSJ9.B4lJ2PHWfDvtGEXKOvLLEj_bEyxBzU1wY5una2vfDJ4&uid=a29babe9-4643-4865-a411-8ee0823ed0d6" },
    { nome: "Record", imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgrqTv2fif4I4zzsIzbvyOpkbTq4nxHFEisA&s", url: "https://video08.logicahost.com.br/portaldatropical02/portaldatropical02/chunklist_w2097626994.m3u8" },
    { nome: "RedeTV", imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlF2skYmRpVKIGI0Iy6uucUOxo-leHLCnEzQ&s", url: "https://video08.logicahost.com.br/portaldatropical02/portaldatropical02/chunklist_w2097626994.m3u8" },
    { nome: "TV Maná Brasil", imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMdWTezfdetPCYlmnrEGutx6VD4v9rrq362A&s", url: "https://w1.manasat.com/tvmana-brasil/smil:tvmana-brasil.smil/playlist.m3u8"},

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
