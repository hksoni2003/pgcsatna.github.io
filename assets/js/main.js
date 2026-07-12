/*==============================================================
    PMCoE SATNA WEBSITE
    main.js
    Version 3.0
==============================================================*/

document.addEventListener("DOMContentLoaded", function () {

    /*==========================================================
        HERO SLIDER
    ==========================================================*/

    const slides = document.querySelectorAll(".hero-slide");
    const dots = document.querySelectorAll(".dot");
    const nextBtn = document.querySelector(".hero-next");
    const prevBtn = document.querySelector(".hero-prev");

    let currentSlide = 0;
    let sliderInterval;

    function showSlide(index){

        slides.forEach(slide => slide.classList.remove("active"));

        dots.forEach(dot => dot.classList.remove("active"));

        if(index >= slides.length){

            currentSlide = 0;

        }

        else if(index < 0){

            currentSlide = slides.length - 1;

        }

        else{

            currentSlide = index;

        }

        slides[currentSlide].classList.add("active");

        dots[currentSlide].classList.add("active");

    }

    function nextSlide(){

        showSlide(currentSlide + 1);

    }

    function previousSlide(){

        showSlide(currentSlide - 1);

    }

    function startSlider(){

        sliderInterval = setInterval(nextSlide,5000);

    }

    function stopSlider(){

        clearInterval(sliderInterval);

    }

    if(slides.length){

        startSlider();

    }

    if(nextBtn){

        nextBtn.addEventListener("click",function(){

            stopSlider();

            nextSlide();

            startSlider();

        });

    }

    if(prevBtn){

        prevBtn.addEventListener("click",function(){

            stopSlider();

            previousSlide();

            startSlider();

        });

    }

    dots.forEach((dot,index)=>{

        dot.addEventListener("click",function(){

            stopSlider();

            showSlide(index);

            startSlider();

        });

    });



    /*==========================================================
        STICKY NAVBAR
    ==========================================================*/

    const navbar = document.querySelector(".custom-navbar");

    window.addEventListener("scroll",function(){

        if(window.scrollY > 80){

            navbar.classList.add("sticky");

        }

        else{

            navbar.classList.remove("sticky");

        }

    });



    /*==========================================================
        BACK TO TOP BUTTON
    ==========================================================*/

    const backToTop = document.getElementById("backToTop");

    window.addEventListener("scroll",function(){

        if(window.scrollY > 500){

            backToTop.style.opacity="1";

            backToTop.style.visibility="visible";

        }

        else{

            backToTop.style.opacity="0";

            backToTop.style.visibility="hidden";

        }

    });

    if(backToTop){

        backToTop.addEventListener("click",function(){

            window.scrollTo({

                top:0,

                behavior:"smooth"

            });

        });

    }



    /*==========================================================
        SMOOTH SCROLL
    ==========================================================*/

    document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

        anchor.addEventListener("click",function(e){

            const target=document.querySelector(this.getAttribute("href"));

            if(target){

                e.preventDefault();

                target.scrollIntoView({

                    behavior:"smooth"

                });

            }

        });

    });



    /*==========================================================
        COUNTER ANIMATION
    ==========================================================*/

    const counters=document.querySelectorAll(".counter");

    let counterStarted=false;

    function runCounter(){

        counters.forEach(counter=>{

            const target=+counter.dataset.target;

            let count=0;

            const speed=Math.max(10,target/150);

            const update=()=>{

                count+=speed;

                if(count<target){

                    counter.innerText=Math.floor(count).toLocaleString();

                    requestAnimationFrame(update);

                }

                else{

                    counter.innerText=target.toLocaleString();

                }

            };

            update();

        });

    }

    window.addEventListener("scroll",function(){

        const stat=document.querySelector(".stats-section");

        if(!stat) return;

        const trigger=stat.offsetTop-400;

        if(window.scrollY>trigger && !counterStarted){

            counterStarted=true;

            runCounter();

        }

    });



    /*==========================================================
        ACTIVE MENU ON SCROLL
    ==========================================================*/

    const sections=document.querySelectorAll("section[id]");

    const navLinks=document.querySelectorAll(".navbar .nav-link");

    window.addEventListener("scroll",()=>{

        let current="";

        sections.forEach(section=>{

            const top=section.offsetTop-120;

            const height=section.clientHeight;

            if(pageYOffset>=top){

                current=section.getAttribute("id");

            }

        });

        navLinks.forEach(link=>{

            link.classList.remove("active");

            if(link.getAttribute("href")==="#"+current){

                link.classList.add("active");

            }

        });

    });



    /*==========================================================
        FADE-IN ON SCROLL
    ==========================================================*/

    const revealItems=document.querySelectorAll(

        ".quick-card,.info-card,.feature-card,.vision-card,.academic-card,.life-card,.stat-card"

    );

    const observer=new IntersectionObserver(entries=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.classList.add("fade-up");

            }

        });

    },{

        threshold:.15

    });

    revealItems.forEach(item=>{

        observer.observe(item);

    });



    /*==========================================================
        VISITOR COUNTER (DEMO)
    ==========================================================*/

    const visitor=document.getElementById("visitor-count");

    if(visitor){

        let count=localStorage.getItem("pmcoeCounter");

        if(!count){

            count=10001;

        }

        else{

            count=parseInt(count)+1;

        }

        localStorage.setItem("pmcoeCounter",count);

        visitor.innerHTML=count.toLocaleString();

    }



    /*==========================================================
        IMAGE HOVER EFFECT
    ==========================================================*/

    document.querySelectorAll(".gallery-grid img").forEach(image=>{

        image.addEventListener("mouseenter",function(){

            this.style.transform="scale(1.05)";

        });

        image.addEventListener("mouseleave",function(){

            this.style.transform="scale(1)";

        });

    });



    /*==========================================================
        PRELOADER (OPTIONAL)
    ==========================================================*/

    window.addEventListener("load",function(){

        document.body.classList.add("loaded");

    });

});

/*==============================================================
    END OF FILE
==============================================================*/
