function playlist_tz() {
  window.location.href = `playlist_tz.html?`;
}

function playlist_orochi() {
  window.location.href = `playlist_orochi.html?`;
}

function playlist_funk() {
  window.location.href = `playlist_funk.html?`;
}


function irmusica (musica,titulo, img){
  const parametro = new URLSearchParams({
      music: musica,
      title: titulo,
      imag: img,
  }).toString();
  window.location.href = `player.html?${parametro}`
}

function irartista_anita (){
  window.location.href = `artista_anita.html?`
}

function irartista_hungria (){
  window.location.href = `artista_hungria.html?`
}

function irartista_manobrow (){
  window.location.href = `artista_manobrow.html?`
}

function irartista_tody (){
  window.location.href = `artista_menotody.html?`
}

function irartista_ryan (){
  window.location.href = `artista_ryansp.html?`
}