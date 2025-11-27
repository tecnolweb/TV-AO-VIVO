// ===============================
// LISTA DE CANAIS
// ===============================
const canais = [
   
    { nome: "SBT", imagem: "https://upload.wikimedia.org/wikipedia/pt/4/41/Logotipo_do_SBT.svg", url: "https://cdn.live.br1.jmvstream.com/w/LVW-9359/LVW9359_XSyReL0QVf/chunklist.m3u8" },
    { nome: "Band", imagem: "https://upload.wikimedia.org/wikipedia/commons/2/21/Rede_Bandeirantes_logo_2011.svg", url: "https://hqf6tcxuhk.singularcdn.net.br/live/019498af-1fdf-7df5-86bd-e4a6f588d6a7/s1/playlist-1080p.m3u8?sjwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmlfc3ViIjoiLzAxOTQ5OGFmLTFmZGYtN2RmNS04NmJkLWU0YTZmNTg4ZDZhNy8iLCJ1aWQiOiJhMjliYWJlOS00NjQzLTQ4NjUtYTQxMS04ZWUwODIzZWQwZDYiLCJyYXUiOm51bGwsImJleSI6ZmFsc2UsImlpcCI6ZmFsc2UsIm5iZiI6MTc2NDExNjAzNSwiaWF0IjoxNzY0MTE2MDM1LCJleHAiOjE3OTU2NTIwMzUsImp0aSI6ImEyOWJhYmU5LTQ2NDMtNDg2NS1hNDExLThlZTA4MjNlZDBkNiIsImlzcyI6IlNwYWxsYSJ9.B4lJ2PHWfDvtGEXKOvLLEj_bEyxBzU1wY5una2vfDJ4&uid=a29babe9-4643-4865-a411-8ee0823ed0d6" },
    { nome: "Record", imagem: "https://m.media-amazon.com/images/I/71ux5q--K6L.png", url: "https://video08.logicahost.com.br/portaldatropical02/portaldatropical02/chunklist_w2097626994.m3u8" },
    { nome: "RedeTV", imagem: "https://auvaromaia.com/wp-content/uploads/2019/02/Rede-TV-2-.png", url: "https://video08.logicahost.com.br/portaldatropical02/portaldatropical02/chunklist_w2097626994.m3u8" },
    { nome: "TV Maná Brasil", imagem: "https://tvmanabrasil.com/wp-content/uploads/2023/05/LOGO_TV_MANA_BRASIL_V4-396x108-1.png", url: "https://w1.manasat.com/tvmana-brasil/smil:tvmana-brasil.smil/playlist.m3u8"},
    { nome: "TviFicção", imagem: "https://upload.wikimedia.org/wikipedia/commons/0/0d/TVI_Fic%C3%A7%C3%A3o_%282017%29.png", url: "https://stream3.camara.gov.br/tv1/manifest.m3u8"},
    { nome: "TV Câmera", imagem: "https://www.araguari.mg.leg.br/imagens/FotoTVcamaraNilton.png/@@images/50cb464a-82c5-4092-be15-2072e8dd267f.png", url: "https://w1.manasat.com/tvmana-brasil/smil:tvmana-brasil.smil/playlist.m3u8"},
    { nome: "Unisc TV", imagem: "https://yt3.googleusercontent.com/ytc/AIdro_mnH21xpafrAcc6w9uZtfMxW5kFuOq9KH6nZ89gAUtgHw=s900-c-k-c0x00ffffff-no-rj", url: "https://tv.unisc.br/hls/test.m3u8"},
    { nome: "Tv Novo Tempo", imagem: "https://upload.wikimedia.org/wikipedia/pt/0/07/Logo_2015_-_TV_Novo_Tempo.png", url: "https://stream.live.novotempo.com/tv/smil:tvnovotempo.smil/playlist.m3u8"},
    { nome: "Rede Super", imagem: "https://upload.wikimedia.org/wikipedia/pt/e/e1/Logotipo_da_Rede_Super_%282021%29.png", url: "https://tv02.zas.media:1936/redesuper/redesuper/playlist.m3u8"},
    { nome: "Rede Gospel", imagem: "https://upload.wikimedia.org/wikipedia/pt/b/ba/LGT_Rede_Gospel.png", url: "https://cdn.jmvstream.com/w/LVW-8719/LVW8719_AcLVAxWy5J/playlist.m3u8"},
    { nome: "TV Aparecida", imagem: "https://upload.wikimedia.org/wikipedia/pt/1/1e/Logotipo_da_TV_Aparecida.png", url: "https://cdn.jmvstream.com/w/LVW-9716/LVW9716_HbtQtezcaw/master.m3u8"},
    { nome: "D+ TV", imagem: "https://pbr-str.srvsite.com/arquivos/9046/cabecalho-9046-20230725105112.png", url: "https://stmv1.samcast.com.br/demaistv6503/demaistv6503/playlist.m3u8"},
    { nome: "Rede SPTV", imagem: "https://str.paineladm.com/arquivos/6806/cabecalho-6806-20210603100909.png", url: "https://video01.logicahost.com.br/websptv/websptv/chunklist.m3u8"},
    { nome: "TV a Folha", imagem: "https://www.cxtv.com.br/img/Tvs/Logo/webp-m/b3ab9881916a5409bbb42b796c5666d4.webp", url: "https://video01.logicahost.com.br/tvafolha/tvafolha/master.m3u8"},
    { nome: "TV Nova Nordeste", imagem: "https://upload.wikimedia.org/wikipedia/commons/e/ed/LOGO_NOVA_PNG.png", url: "https://acesso.ecast.site:3675/live/novatvlive.m3u8"},
    { nome: "TV Surubim", imagem: "https://i.ytimg.com/vi/L55ATyFYPwc/hqdefault.jpg?v=68f225ca", url: "https://video01.kshost.com.br/antonio9510/antonio9510/playlist.m3u8"},
    { nome: "Tenda TV", imagem: "https://static.wixstatic.com/media/07bfc8_12eef287e42e4f7abefb52f139b9bff7~mv2.png/v1/fill/w_190,h_175,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/LOGO%20TENDA%20TV_PNG.png", url: "https://tv02.zas.media:1936/tendatv/tendatv/playlist.m3u8"},
    { nome: "Rede Vida", imagem: "https://upload.wikimedia.org/wikipedia/commons/0/0c/Rede_Vida_logo.png", url: "https://d12e4o88jd8gex.cloudfront.net/out/v1/cea3de0b76ac4e82ab8ee0fd3f17ce12/index.m3u8"},
    { nome: "TV Cultura", imagem: "https://upload.wikimedia.org/wikipedia/commons/8/82/Cultura_logo_2013.svg", url: "https://player-tvcultura.stream.uol.com.br/live/tvcultura_lsd.m3u8"},





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
