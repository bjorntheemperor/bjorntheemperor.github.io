const sides =  parent.document.querySelectorAll('.side')
const workExamples = parent.document.querySelectorAll('.work-example')
const menuItems = document.querySelectorAll('.menu__item')
const examples = document.querySelector('#examples')
const about = document.querySelector('#about')
const aboutItems = parent.document.querySelectorAll('.about')
const skills = document.querySelector('#skills')
const skillsItems = parent.document.querySelectorAll('.skills')

let showAboutMe = () => {
    for (let key of aboutItems){
        key.classList.remove('hidden')
    }
}
let showWorkExamples = () => {
    for (let key of workExamples){
        key.classList.remove('hidden')
    }
}
let showSkills = () => {
    for (let key of skillsItems){
        key.classList.remove('hidden')
    }
}
let hideAboutMe = () => {
    for (let key of aboutItems){
        key.classList.add('hidden')
    }
}
let hideWorkExamples = () => {
    for (let key of workExamples){
        key.classList.add('hidden')
    }
}
let hideSkills = () => {
    for (let key of skillsItems){
        key.classList.add('hidden')
    }
}


about.addEventListener('click', ()=>{
    hideWorkExamples()
    hideSkills()
    showAboutMe()
})
examples.addEventListener('click', ()=>{
    hideAboutMe()
    hideSkills()
    showWorkExamples()
})
skills.addEventListener('click', ()=>{
    hideWorkExamples()
    hideAboutMe()
    showSkills()
})

for (let item of menuItems){
    item.addEventListener('click', ()=>{
        for (let item of menuItems){
            item.classList.remove('active')
        }
        item.classList.add('active')
    })
}

