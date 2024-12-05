
 
 const urlParams = new URLSearchParams(window.location.search);
 const musicFile = urlParams.get('music');
 const title = urlParams.get('title');
 const imageFile = urlParams.get('imag');
 

 
 if (musicFile && title && imageFile) {
   document.getElementById('music-title').textContent = `${title}`;
   document.getElementById('audio-player').src = musicFile;
   document.getElementById('music-image').src = imageFile;
 } else {
   alert('Erro: Informações da música não encontradas.');
 }