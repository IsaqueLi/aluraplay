async function listaVideos() {
    const conexao = await fetch('http://localhost:3000/videos');
    const conexaoResolvida = await conexao.json(); 

    return conexaoResolvida;
} 

export const conectaApi = {
    listaVideos
}