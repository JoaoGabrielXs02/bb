function irpramusica (musica,titulo, img){
    const parametro = new URLSearchParams({
        music: musica,
        title: titulo,
        imag: img,
    }).toString();
    window.location.href = `player.html?${parametro}`
}