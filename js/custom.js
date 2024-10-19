     // slider 
     $('.card__slider').owlCarousel({
        loop:true,
        margin:20,
        nav:true,
        dots:false,
        animateOut: 'slideOutDown',
        animateIn: 'flipInX',
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            },
            1200:{
                items:4
            }
        }
    })

// open and close modal
function showDiv() {
    const elements = document.getElementsByClassName('detail__box');
    elements[0].style.display = "block";
}

function hideDiv() {
    const elements = document.getElementsByClassName('detail__box');
    for(let element of elements) {
        element.style.display = "none";
    }
}
