$(document).ready(function(){

$(".image h3").hover(function(){
  $(this).css("background-color","black");
},function(){
  $(this).css("background-color","darkgray");
}
);

$("img").click(function(){
$(".About").slideDown("slow");
});

$(".About").click(function(){
  $(".About").slideUp("slow");
  });
  $("a").on("click",function(e){
    if(this.hash !== "")
    {
      e.preventDefault();
      var hash =this.hash;
      $("html,body").animate({
        scrollTop: $(hash).offset().top
      },400
        );

    }

  });


});