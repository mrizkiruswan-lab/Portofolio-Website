// ======================
// Smooth Fade Animation
// ======================

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
},{
    threshold:0.2
});

sections.forEach(section=>{
    observer.observe(section);
});

// ======================
// Active Navbar
// ======================

const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", ()=>{

    let current = "";

    sections.forEach(section=>{

        const sectionTop = section.offsetTop - 120;

        if(pageYOffset >= sectionTop){
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){
            link.classList.add("active");
        }

    });

});

// ======================
// Typing Effect
// ======================

const text = "Informatics Student | Web Developer | Networking Enthusiast";

const target = document.querySelector(".hero h3");

let index = 0;

target.innerHTML = "";

function typing(){

    if(index < text.length){

        target.innerHTML += text.charAt(index);

        index++;

        setTimeout(typing,60);

    }

}

typing();

const topBtn=document.getElementById("topBtn");

window.onscroll=function(){

if(document.documentElement.scrollTop>300){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

}

topBtn.onclick=function(){

window.scrollTo({

top:0,

behavior:"smooth"

});

}