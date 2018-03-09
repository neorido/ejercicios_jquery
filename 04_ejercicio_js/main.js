

$("document").ready(function () {
  $("#anuncio")
    .text("¡Click para cabiar de color!")
    .width(500)
    .height(500)
    .hide()
    .fadeIn(3000);
});

let colores = ["blue", "yellow", "red", "grey", "green", "organge", "purple"];

$("#anuncio").on("click", function () {
  let color = colores[Math.floor(Math.random() * colores.length)];
  $(this).css("background-color", color);

});


