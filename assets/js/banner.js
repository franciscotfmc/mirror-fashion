var banners = ["assets/img/destaque-home.png", "assets/img/destaque-home-2.png"];
var bannerAtual = 0;

function trocaBanner() {
  bannerAtual = (bannerAtual + 1) % 2;
  document.querySelector('.destaque img').src = banners[bannerAtual];
}

id = setInterval(trocaBanner, 2000);

document.querySelector(".destaque img").addEventListener("mouseover", function(){
  clearInterval(id);
});

document.querySelector(".destaque img").addEventListener("mouseout", function(){
  id = setInterval(trocaBanner, 2000);
});