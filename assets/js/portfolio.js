import * as THREE from './three.module.js';
import {OrbitControls} from './OrbitControls.js'
import { CSS2DRenderer, CSS2DObject } from './CSS2DRenderer.js'
import { CSS3DRenderer, CSS3DObject} from './CSS3DRenderer.js'
import {Scene} from "./three.module.js";

document.addEventListener("DOMContentLoaded", ()=>{

//INTRO TEXT

    const intro_spans = document.querySelectorAll('.intro__text')

    let appearingOne = () => {
        intro_spans[0].classList.remove("hidden")
        intro_spans[0].classList.add('appearing')
    }
    let appearingTwo = () => {
        intro_spans[1].classList.remove("hidden")
        intro_spans[1].classList.add('appearing')
    }
    let appearingThree = () => {
        intro_spans[2].classList.remove("hidden")
        intro_spans[2].classList.add('appearing')
    }

    const intro_btn = document.querySelector('.intro__start')

    let appearingFour = () => {
        intro_btn.classList.add('appearing')
        setTimeout(()=>{
            intro_btn.classList.remove('round')
        },1000)
        setTimeout(()=>{
            document.querySelector('.intro__start-text').classList.remove('hidden')
            intro_btn.style.transition = '.3s'
        },2000)

    }

    let introAnimation = () => {
        appearingOne()
        setTimeout(appearingTwo,2000)
        setTimeout(appearingThree,4000)
        setTimeout(appearingFour,6000)
    }

    let disappear = () => {
        intro_btn.style.backgroundColor = 'white'
        document.querySelector('.intro__layer').classList.add('fill')
        setTimeout(()=>{
            document.querySelector('.intro').style.opacity = '0'
        }, 2000)
        setTimeout(()=>{
            document.querySelector('.intro').style.display = 'none'
        }, 4000)
        setTimeout(fallingCube,2000)


    }

    introAnimation()
    intro_btn.addEventListener('click', disappear)


    // MAIN 3D CUBE

    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth/window.innerHeight,
        0.1,
        10000
    )

    camera.position.z = 1100
    camera.position.x = -900
    camera.position.y = 800

    let cssRenderer = new CSS3DRenderer();
    cssRenderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( cssRenderer.domElement );


    let renderer = new THREE.WebGLRenderer({antialias: true});
    renderer.setClearColor("black")
    renderer.setSize(window.innerWidth, window.innerHeight)
    document.body.appendChild(renderer.domElement)


    const cssDiv = cssRenderer.domElement.childNodes[0]
    cssDiv.classList.add('scene')
    cssRenderer.domElement.classList.add('renderer')


    window.addEventListener('resize', () => {
        renderer.setSize(window.innerWidth, window.innerHeight)
        cssRenderer.setSize( window.innerWidth, window.innerHeight );
        camera.aspect = window.innerWidth/window.innerHeight
        camera.updateProjectionMatrix();
    })

    let raycaster = new THREE.Raycaster();
    let mouse = new THREE.Vector2();


    var light = new THREE.PointLight(0xFFFFFF, 1, 5000)
    light.position.set(-1000, 1000, 1000)
    scene.add(light)

    var light2 = new THREE.PointLight(0xFFFFFF, 0.8, 5000)
    light2.position.set(1000, -1000, 1000)
    scene.add(light2)

    var light3 = new THREE.PointLight(0xFFFFFF, 0.6, 5000)
    light3.position.set(1000, 1000, -1000)
    scene.add(light3)

// const axesHelper = new THREE.AxesHelper( 1000 );
// scene.add( axesHelper );


// WHITE SIDE
    const whiteDiv = document.createElement('div')
    whiteDiv.classList.add('side')
    whiteDiv.classList.add('white')
    whiteDiv.insertAdjacentHTML('afterbegin',`
           <div class="container">
                <iframe class="iframe" width="1000" height="1000" src="front.html"></iframe>
           </div>
        `)

    let whiteBlock = new CSS3DObject(whiteDiv)
    whiteBlock.position.set(0,0,500)
    scene.add(whiteBlock)


// BLUE SIDE
    const blueDiv = document.createElement('div')
    blueDiv.classList.add('side')
    blueDiv.classList.add('blue')
    blueDiv.insertAdjacentHTML('afterbegin',`
           <div class="container">
                <iframe class="iframe montichello work-example hidden" width="1000" height="1000" src="https://bjorntheemperor.github.io/montichello/"></iframe>
                <div class="about hidden">
                    <div class="about-inner">
                        <div class="about-name">Daniil Kononenko</div>                   
                        <img class="about-img" src="assets/images/me.jpg" alt="ayy that's me">
                    </div>
                </div>
                <div class="skills hidden">
                    <div class="skills-inner">
                        <div class="skills-name">
                            Javascript
                        </div>
                        <ul class="skills-table">
                            <li>ES5, ES6</li>
                            <li>jQuery</li>
                            <li>Three.js</li>
                        </ul>
                    </div>                
                </div>
           </div>
        `)

    let blueBlock = new CSS3DObject(blueDiv)
    blueBlock.position.set(-500,0,0)
    blueBlock.rotation.y = -Math.PI/2
    scene.add(blueBlock)

// RED SIDE
    const redDiv = document.createElement('div')
    redDiv.classList.add('side')
    redDiv.classList.add('red')
    redDiv.insertAdjacentHTML('afterbegin',`
           <div class="container">
                <div class="about hidden">
                    <div class="about-inner">
                        <div class="about-title">Work History</div>
                        <div class="about-info">
                            <b>from 08/2021 to current time as</b>
                            Junior Frontend Developer and Page Layout Specialist
                        </div>
                    </div>                    
                </div>
                <div class="skills hidden">
                    <div class="skills-inner">
                        <div class="skills-name">
                            Personal qualities
                        </div>
                        <ul class="skills-table">
                            <li>Friendly</li>
                            <li>Responsible</li>
                            <li>Hard-working</li>
                        </ul>
                    </div>                
                </div>
                <iframe class="iframe tetris work-example hidden" width="1000" height="1000" src="https://bjorntheemperor.github.io/tetris/"></iframe>
           </div>
        `)

    let redBlock = new CSS3DObject(redDiv)

    redBlock.position.set(0,500,0)
    redBlock.rotation.x = -Math.PI/2
    scene.add(redBlock)



// GREEN SIDE
    const greenDiv = document.createElement('div')
    greenDiv.classList.add('side')
    greenDiv.classList.add('green')
    greenDiv.insertAdjacentHTML('afterbegin',`
           <div class="container">
                <div class="about hidden">
                    <div class="about-inner">
                        <div class="about-title">Education</div>
                        <div class="about-info">
                            <b>Bachelor’s degree:</b> Computer Engineering, 06/2021
                            <br>
                            <br>
                            Chernihiv State Technological University – Chernihiv/UKRAINE
                        </div>
                    </div>                    
                </div>
                <div class="skills hidden">
                    <div class="skills-inner">
                        <div class="skills-name">
                            CSS
                        </div>
                        <ul class="skills-table">
                            <li>Flexbox</li>
                            <li>Grid</li>
                            <li>SASS/SCSS</li>
                        </ul>
                    </div>                
                </div>
                <iframe class="iframe boostfolia work-example hidden" width="1000" height="1000" src="https://bjorntheemperor.github.io/boostfolia/"></iframe>
           </div>
        `)

    let greenBlock = new CSS3DObject(greenDiv)
    greenBlock.position.set(500,0,0)
    greenBlock.rotation.y = Math.PI/2
    scene.add(greenBlock)

// YELLOW SIDE
    const yellowDiv = document.createElement('div')
    yellowDiv.classList.add('side')
    yellowDiv.classList.add('yellow')
    yellowDiv.insertAdjacentHTML('afterbegin',`
           <div class="container">
                <div class="about hidden">
                    <div class="about-inner">
                        <div class="about-title">Contact</div>
                        <div class="about-info">
                            <div class="about-info-item">
                                <b>Name:</b> Daniil Kononenko
                            </div>
                            <div class="about-info-item">
                                <b>Address:</b> Chernihiv, Ukraine
                            </div>
                            <div class="about-info-item">
                                <b>Phone:</b> +380976061912
                            </div>
                            <div class="about-info-item">
                                <b>Email:</b> erasusdk@gmail.com
                            </div>
                        </div>
                    </div>                    
                </div>
                <div class="skills hidden">
                    <div class="skills-inner">
                        <div class="skills-name">
                            HTML
                        </div>
                        <ul class="skills-table">
                            <li>DOM</li>
                            <li>Canvas</li>
                        </ul>
                        <div class="skills-name">
                            Page Layout
                        </div>
                        <ul class="skills-table">
                            <li>Cross-browser</li>
                            <li>Adaptive</li>
                            <li>Responsive</li>
                        </ul>
                    </div>                
                </div>
                <iframe class="iframe pex work-example hidden" width="1000" height="1000" src="https://bjorntheemperor.github.io/pex/"></iframe>
           </div>
        `)

    let yellowBlock = new CSS3DObject(yellowDiv)
    yellowBlock.position.set(0,0,-500)
    yellowBlock.rotation.y = Math.PI
    scene.add(yellowBlock)

// ORANGE SIDE
    const orangeDiv = document.createElement('div')
    orangeDiv.classList.add('side')
    orangeDiv.classList.add('orange')
    orangeDiv.insertAdjacentHTML('afterbegin',`
           <div class="container">
                <div class="about hidden">
                
                </div>
                <div class="skills hidden">
                    <div class="skills-inner">
                        <div class="skills-name">
                            Miscellaneous
                        </div>
                        <ul class="skills-table">
                            <li>Photoshop</li>
                            <li>Git</li>
                        </ul>
                    </div>
                </div>
                
           </div>
        `)

    let orangeBlock = new CSS3DObject(orangeDiv)
    orangeBlock.position.set(0,-500,0)
    orangeBlock.rotation.x = Math.PI/2
    scene.add(orangeBlock)


    let controls = new OrbitControls(camera, cssRenderer.domElement)
    controls.update()

    function addStar() {
        const geometryS = new THREE.SphereGeometry(3, 24,24)
        const materialS = new THREE.MeshStandardMaterial({color: 0xffffff})
        const star = new THREE.Mesh(geometryS, materialS)

        const [x,y,z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(10000))
        star.position.set(x,y,z)
        star.name = 'Star'
        scene.add(star)
    }

    Array(2000).fill().forEach(addStar)

    let starSpeedRange = document.querySelector('.star-speed')
    let starSpeedValue = document.querySelector('.star-speed-value')

    starSpeedRange.value = 1
    starSpeedValue.innerHTML = starSpeedRange.value
    starSpeedRange.oninput = function () {
        starSpeedValue.innerHTML = starSpeedRange.value
    }
    let movingStars = (starSpeed) => {

        let parsedStarSpeed = parseFloat(starSpeed)
        for (let i = 0; i < scene.children.length; i++){
            if (scene.children[i].name === 'Star'){
                scene.children[i].position.z += parsedStarSpeed
                scene.children[i].position.x += 0
                scene.children[i].position.y += 0
                //console.log(scene.children[777].position.z)
                if (scene.children[i].position.x > 5000) scene.children[i].position.x = -5000
                if (scene.children[i].position.x < -5000) scene.children[i].position.x = 5000
                if (scene.children[i].position.y > 5000) scene.children[i].position.y = -5000
                if (scene.children[i].position.y < -5000) scene.children[i].position.y = 5000
                if (scene.children[i].position.z > 5000) scene.children[i].position.z = -5000
                if (scene.children[i].position.z < -5000) scene.children[i].position.z = 5000
            }

        }
    }

    let ambientLight = new THREE.AmbientLight({color:0xffffff}, 10)
    scene.add(ambientLight)

    let render = function () {
        requestAnimationFrame(render)
        cssRenderer.render( scene, camera );
        renderer.render(scene, camera)
        controls.update()

        movingStars(starSpeedRange.value)

        // distance = Math.abs( Math.sqrt((camera.position.x*camera.position.x)+(camera.position.y*camera.position.y)+(camera.position.z*camera.position.z)))
        // document.querySelector('h1').innerText = 'x: '+Math.ceil(camera.position.x)+
        //     ' y: '+Math.ceil(camera.position.y)+
        //     ' z: '+Math.ceil(camera.position.z)+
        //     ' distance: '+Math.ceil(distance)
    }

    function onMouseMove(event) {
        event.preventDefault();
        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;

        raycaster.setFromCamera(mouse, camera)

        let intersects = raycaster.intersectObjects(scene.children, true)
        // for(let i = 0; i < intersects.length; i++){
        //     intersects[i].object.material.color.set(0xff0000)
        //     console.log(intersects[i])
        // }
        // console.log(event.target)
        console.log(event.target)
    }

    render();

// const sides = document.querySelectorAll('.side')
// for (let key of sides){
//     key.classList.add('falling')
// }

    let fallingCube = () => {
        for (let key of sides){
            key.classList.remove('falling')
        }
    }

//
// for (let key of iframez){
//     key.addEventListener('mouseenter', () => {
//         document.querySelector('.distance-ratio').style.display = 'none'
//     })
//     key.addEventListener('mouseleave', () => {
//         document.querySelector('.distance-ratio').style.display = 'block'
//     })
// }



    document.querySelector('.iframe.montichello').addEventListener('mouseenter', () => {
        document.querySelector('.hint-item.montichello').classList.remove('hidden')
        document.querySelector('.hints').classList.remove('hidden')
    })
    document.querySelector('.iframe.montichello').addEventListener('mouseleave', () => {
        document.querySelector('.hint-item.montichello').classList.add('hidden')
        document.querySelector('.hints').classList.add('hidden')
    })
    document.querySelector('.iframe.pex').addEventListener('mouseenter', () => {
        document.querySelector('.hint-item.pex').classList.remove('hidden')
        document.querySelector('.hints').classList.remove('hidden')
    })
    document.querySelector('.iframe.pex').addEventListener('mouseleave', () => {
        document.querySelector('.hint-item.pex').classList.add('hidden')
        document.querySelector('.hints').classList.add('hidden')
    })
    document.querySelector('.iframe.tetris').addEventListener('mouseenter', () => {
        document.querySelector('.hint-item.tetris').classList.remove('hidden')
        document.querySelector('.hints').classList.remove('hidden')
    })
    document.querySelector('.iframe.tetris').addEventListener('mouseleave', () => {
        document.querySelector('.hint-item.tetris').classList.add('hidden')
        document.querySelector('.hints').classList.add('hidden')
    })
    document.querySelector('.iframe.boostfolia').addEventListener('mouseenter', () => {
        document.querySelector('.hint-item.boostfolia').classList.remove('hidden')
        document.querySelector('.hints').classList.remove('hidden')
    })
    document.querySelector('.iframe.boostfolia').addEventListener('mouseleave', () => {
        document.querySelector('.hint-item.boostfolia').classList.add('hidden')
        document.querySelector('.hints').classList.add('hidden')
    })

    // let circleName = document.querySelector('.about-text')
    //
    //
    // const what = new CircleType(circleName)
    // what.radius()

    window.addEventListener('click', onMouseMove)



})





