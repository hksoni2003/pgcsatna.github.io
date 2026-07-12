/*=========================================================
    PMCoE SATNA WEBSITE
    HERO SLIDER
=========================================================*/

document.addEventListener("DOMContentLoaded", () => {

    const slides = document.querySelectorAll(".hero-slide");
    const dots = document.querySelectorAll(".dot");

    let current = 0;

    function showSlide(index){

        slides.forEach(slide => slide.classList.remove("active"));
        dots.forEach(dot => dot.classList.remove("active"));

        slides[index].classList.add("active");
        dots[index].classList.add("active");

        current = index;

    }

    document.querySelector(".hero-next").onclick = () =>{

        let next = (current + 1) % slides.length;

        showSlide(next);

    };

    document.querySelector(".hero-prev").onclick = () =>{

        let prev = (current - 1 + slides.length) % slides.length;

        showSlide(prev);

    };

    setInterval(()=>{

        let next = (current + 1) % slides.length;

        showSlide(next);

    },5000);

});
