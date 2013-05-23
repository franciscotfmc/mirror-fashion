var seconds = 2000;
id = setInterval(trocaBanner, seconds);

var banners = ["assets/img/destaque-home.png", "assets/img/destaque-home-2.png"];
var bannerAtual = 0;

var controle = document.querySelector('.pause');

function trocaBanner() {
  bannerAtual = (bannerAtual + 1) % 2;
  document.querySelector('.destaque img').src = banners[bannerAtual];
}

controle.onclick = function() {
  if(this.className == 'pause') {
    clearInterval(id);
    controle.className = 'play';
  } else {
    timer = setInterval(trocaBanner(), seconds);
    controle.className = 'pause';
  }

  return  false;
}