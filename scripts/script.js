// Hamburger menu
const hamburger = document.querySelector(".hamburger")
const navMenu = document.querySelector(".navbar-menu")
const navItems = document.querySelectorAll(".navbar-menu > a")

function toggleMenu() {
    navMenu.classList.toggle("show")
}

hamburger.addEventListener("click", toggleMenu)
navItems.forEach(navItem => {
    navItem.addEventListener("click", toggleMenu)
})

// Projects carousel
const nextBtn = document.querySelector(".next")
const prevBtn = document.querySelector(".prev")
const slides = document.querySelectorAll(".slide")
const slideNums = document.querySelectorAll(".slide-num")

let slideIndex = 1

function changeSlide(num) {
    if (slideIndex === 4 && num === 1) {
        slideIndex = 1
    } else if (slideIndex === 1 && num === -1) {
        slideIndex = 4
    } else {
       slideIndex += num 
    }

    slides.forEach(slide => {
        slide.classList.add("hide")
    })

    slideNums.forEach(dot => {
        dot.classList.remove("active")
    })

    slides[slideIndex-1].classList.remove("hide")
    slideNums[slideIndex-1].classList.add("active")
}

nextBtn.addEventListener("click", () => changeSlide(1))
prevBtn.addEventListener("click", () => changeSlide(-1))