async function listaVideos() {
    const conexao = await fetch('http://localhost:3000/videos');
    const conexaoResolvida = await conexao.json(); 

    return conexaoResolvida;
} 

async function criaVideo(titulo, descricao, url, imagem) {
    const conexao = await fetch("http://localhost:3000/videos", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            titulo: titulo,
            descricao: `${descricao} mil visualzações`,
            url: url,
            imagem: imagem
        })
    });

    const conexaoConvertida = await conexao.json();
    return conexaoConvertida;
}

export const conectaApi = {
    listaVideos,
    criaVideo
}