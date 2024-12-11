// Toggle Nav
$('#open-nav').click(function(){
    $('#sidenav').toggleClass("sideshow");
    $('#logo').toggle();
    $('#open-nav').toggle();
    $('.mainx').toggle();
});
//Change Icon
$('#close-nav').click(function(){
    $('#sidenav').toggleClass("sideshow");
    $('#logo').toggle();
    $('#open-nav').toggle();
    $('.mainx').toggle();
});

let openImage =document.querySelector('.open-img'); 
let GetImage =document.querySelector('.Image'); 
function openimg(ImageSrc){
    openImage.classList.toggle("active");
    GetImage.src=ImageSrc;
}
function closeimg(){
    openImage.classList.remove("active");
}
