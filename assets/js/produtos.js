$(".cores a").click(function(event){
  $(".foto").attr("src", this.href);
  event.preventDefault();
});

$(".detalhes").tabs().find("ui-tabs-nav").sortable({ axis: "x" });