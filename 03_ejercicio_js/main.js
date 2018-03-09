$(this).hover(
  function() {
    $(this).addClass("destacar");
    $("img").attr("src", "img/arbol.jpg");
  },
  function() {
    $(this).removeClass("destacar");
    $("img").attr("src", "img/blanco.jpg");
  }
);
/*
$("li#elem2").hover(
  function() {
    $("li#elem2").addClass("destacar");
    $("img").attr("src", "img/lago.jpg");
  },
  function() {
    $("li#elem2").removeClass("destacar");
    $("img").attr("src", "img/blanco.jpg");
  }
);

$("li#elem3").hover(
  function() {
    $("li#elem3").addClass("destacar");
    $("img").attr("src", "img/rio.jpg");
  },
  function() {
    $("li#elem3").removeClass("destacar");
    $("img").attr("src", "img/blanco.jpg");
  }
);

$("li#elem4").hover(
  function() {
    $("li#elem4").addClass("destacar");
    $("img").attr("src", "img/sol.jpg");
  },
  function() {
    $("li#elem4").removeClass("destacar");
    $("img").attr("src", "img/blanco.jpg");
  }
);
