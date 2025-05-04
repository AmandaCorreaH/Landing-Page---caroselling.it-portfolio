const accordions = document.querySelectorAll('.accordion')
const moreServices = document.getElementById('more-services')

const extend = document.getElementById('extend')

accordions.forEach(accordion => {
    accordion.addEventListener('click', () =>{
        const body = accordion.querySelector('.body-accordion')
        body.classList.toggle('active')
    })
})


moreServices.addEventListener("click", () =>{
    const container = document.getElementById("clients")
    container.classList.toggle("show")
})

extend.addEventListener("click", () =>{
    const container = document.getElementById("post")
    container.classList.toggle("show")
})