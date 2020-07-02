
let advisorTop = $("#Home").offset().top;

$(window).scroll(function(){
        
let scrollTopValue = $(window).scrollTop();
if(scrollTopValue>advisorTop)
{
 $("#nav_bar").removeClass("bg-transparent")
 $("#nav_bar").addClass("bg-dark")
}
else
{
    $("#nav_bar").addClass("bg-transparent")
    $("#nav_bar").removeClass("bg-dark")
}    

})

let secondSectionTop = ($("#About").offset().top)-30;
let teamSectionTop = ($("#Team").offset().top)-30;
let servicesSectionTop = ($("#Services").offset().top)-30;
let contectSectionTop = ($("#contect").offset().top)-30;

$(".gonextsec").click(function(){
        
    $("html,body").animate({scrollTop : secondSectionTop}, 1500)
   
   })

$(".goteamsec").click(function(){
        
    $("html,body").animate({scrollTop : teamSectionTop}, 1500)
   
   })

$(".goservsec").click(function(){
        
    $("html,body").animate({scrollTop :servicesSectionTop}, 1500)
   
   })   

$(".gocontsec").click(function(){
        
    $("html,body").animate({scrollTop : contectSectionTop}, 1500)
   
   })   
   
   

$("#go_up").click(function(){
        
     $("html,body").animate({scrollTop : 0}, 1500)
    
    })
$(".go_home").click(function(){
        
        $("html,body").animate({scrollTop : 0}, 1500)
       
       })


    
let lis = $(".color-options ul li");

lis.eq(0).css("background-color","teal") ;

lis.eq(1).css("background-color","yellow");

lis.eq(2).css("background-color","green");

lis.eq(3).css("background-color","tomato");

lis.eq(4).css("background-color","hotpink");

lis.eq(5).css("background-color","black");


lis.click(function() {

    let selectedcolor = $(this).css("background-color");
    $(".colorChange").css({color : selectedcolor});
})


$(".doss").click(function(){

$(".color-options").toggle(1500)

})