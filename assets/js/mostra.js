// var link = document.createElement("a");
// link.textContent = "mais produtos";
// link.className = "mostra-mais";
// link.href="#";

// var painelProdutos = document.querySelector(".mais-produtos");

// link.addEventListener("click", function(event){
//   painelProdutos.style.display = "block";
//   this.style.display = "none";
//   event.preventDefault();
// });

// var painel = document.querySelector(".painel.novidades");
// painel.insertBefore(link, painelProdutos);

function configuraMaisProdutos(painelClass, insertBefore) {
  var link = document.createElement("a");
  link.textContent = "mais produtos";
  link.className = "mostra-mais";
  link.href="#";

  var painelProdutos = document.querySelector(painelClass);

  link.addEventListener("click", function(event){
    painelProdutos.style.display = "block";
    this.style.display = "none";
    event.preventDefault();
  });

  var painel = document.querySelector(insertBefore);
  painel.insertBefore(link, painelProdutos);
}

configuraMaisProdutos(".mais-produtos", ".painel.novidades");
configuraMaisProdutos(".mais-produtos-vendidos", ".painel.mais-vendidos");

