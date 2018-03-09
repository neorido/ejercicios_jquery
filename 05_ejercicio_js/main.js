$(document).ready(function(){
$("#carrete").hide()
});

$(document).on("click", function() {
 $("#carrete").show();   
 $("h1").hide();
});

$("img").on("mouseover", function(){
$(this).css("width", "300")

});
$("img").on("mouseout", function(){
    $(this).css("width", "250")
    
    });