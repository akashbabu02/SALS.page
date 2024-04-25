document.getElementById("loginLink").addEventListener("mouseenter" ,function(){
    document.querySelector(".videocontent h2").classList.toggle("large");
})
var myCarousel = document.getElementById('carouselExampleCaptions');

// Add event listener for the slide event
myCarousel.addEventListener('slid.bs.carousel', function () {
    // Check if it's the last slide
    if ($('.carousel-inner .carousel-item:last').hasClass('active')) {
        // Move to the first slide
        $('.carousel-inner .carousel-item:first').addClass('active');
    }
});