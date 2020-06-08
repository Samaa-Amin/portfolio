// skills 
var inners= document.getElementsByClassName("inner");
var innersarray=[...inners]
// innersarray.forEach(element => {
//     element.style.width= element.nextElementSibling.innerHTML
// });
const progressOptions ={
    threshold:1,
    rootMargin:"0px 0px 0px 0px",
};
const progressBar = new IntersectionObserver(function(enteries,progressBar){
    enteries.forEach(entery=>{
        if(!entery.isIntersecting){
            return;
        }else{
            entery.target.style.width= entery.target.nextElementSibling.innerHTML;
            progressBar.unobserve(entery.target); //to stop opserving when it's done
        }
    })
},progressOptions)

innersarray.forEach(inner=>{
    progressBar.observe(inner);
})


// project filter
var filter = document.getElementsByClassName("filter");
var filterarray=[...filter]

var projects=document.getElementsByClassName("project-content_img")
var projectarray=[...projects]

filterarray.forEach(li => {
    li.addEventListener("click",showProjects)
    function showProjects(li){
        id=this.id;
        projectarray.forEach(ele => {
            this.classList.add("current")
            $(this).siblings().removeClass("current")
            var value=ele.getAttribute("value")
            if(value==id && id!=="all"){
                ele.style.display="block"
                ele.classList.add("appear")
            }else{
                ele.style.display="none"
            }
            if(id=="all"){
                ele.style.display="block"
                ele.classList.add("appear")

            }
        })
    }
});

// apper on scroll
const faders=document.querySelectorAll(".fade-in");
const sliders=document.querySelectorAll(".slide-in");
const flipers=document.querySelectorAll(".flip");
const navbar =document.querySelector("nav");
const homeSection=document.querySelector(".home");
const active=document.querySelectorAll(".nav-link");
const appearOptions ={
    threshold:0.7,
    rootMargin:"-200px 0px 0px 0px",
};
const appearOnScroll = new IntersectionObserver(function(enteries,appearOnScroll){
    enteries.forEach(entery=>{
        if(!entery.isIntersecting){
            return;
        }else{
            entery.target.classList.add("appear");
            appearOnScroll.unobserve(entery.target); //to stop opserving when it's done
        }
    })
},appearOptions)

faders.forEach(fader=>{
    appearOnScroll.observe(fader);
})
sliders.forEach(slider=>{
    appearOnScroll.observe(slider);
})
flipers.forEach(flip=>{
    appearOnScroll.observe(flip);
})
// navbar
const navOptions = {
    rootMargin: "-50px 0px 0px 0px"
};
const homeSectionObserver = new IntersectionObserver(function(enteries , homeSectionObserver){
    enteries.forEach(entery=>{
        if(!entery.isIntersecting){
            navbar.classList.add("nav-scroll")
        }else{
            navbar.classList.remove("nav-scroll")
        }
    })
},navOptions)

homeSectionObserver.observe(homeSection)

// smooth scrolling
$(document).ready(function(){
    var scrolllink = $(".scroll");
    scrolllink.click(function(e){
        e.preventDefault();
        $("body,html").animate({
            scrollTop:$(this.hash).offset().top
        },1000)
    });
    // active link switching
    $(window).scroll(function(){
        var scrollLocation = $(this).scrollTop();
        scrolllink.each(function(){
            var sectionPosition = $(this.hash).offset().top-200;
            if(sectionPosition <= scrollLocation){
                $(this).parent().addClass("active")
                $(this).parent().siblings().removeClass("active")
            }
        })
    })
})
