$(".cores a").click(function(event){
  $(".foto").attr("src", this.href);
  event.preventDefault();
});