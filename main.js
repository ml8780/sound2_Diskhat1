import './style.css'
import * as THREE from 'three'
import { chain } from './addMeshes'
import { ball } from './addMeshes'

import { drum1 } from './addMeshes'
import { drum2 } from './addMeshes'
import { drum3 } from './addMeshes'

// import { addBoilerPlateMeshes, addStandardMesh } from './addMeshes'
import { addLight } from './addLights'

const renderer = new THREE.WebGLRenderer()
const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    100
)
const scene = new THREE.Scene()

const meshes = {}
const lights = {}
const clock = new THREE.Clock()


init()
function init() {
    //set up our renderer default settings, add scene/canvas to webpage
    renderer.setSize(window.innerWidth, window.innerHeight)
    document.body.appendChild(renderer.domElement)
    meshes.chain = chain()
    meshes.ball = ball()

    meshes.drum1 = drum1()
    meshes.drum2 = drum2()
    meshes.drum3 = drum3()

    lights.default = addLight()

    scene.add(lights.default)
    scene.add(meshes.chain)
    scene.add(meshes.ball)

    // scene.add(meshes.drum1)
    scene.add(meshes.drum2)
    scene.add(meshes.drum3)

    camera.position.set(0, 0, 5)
    resize()
    animate()
}

function resize() {
    window.addEventListener('resize', () => {
        renderer.setSize(window.innerWidth, window.innerHeight)
        camera.aspect = window.innerWidth / window.innerHeight
        camera.updateProjectionMatrix()
    })
}

function animate() {
    requestAnimationFrame(animate)
    const tick = clock.getElapsedTime()
    meshes.chain.rotation.x += 0.005
    meshes.chain.rotation.y += 0.005
    meshes.chain.position.z = Math.sin(tick * 0.5)

    meshes.ball.position.z = Math.sin(tick * 0.8) * 4
    meshes.ball.position.x = Math.cos(tick * 0.8) * 4

    meshes.drum2.rotation.z = Math.sin(tick * 0.3) * 2

    meshes.drum3.rotation.y = Math.sin(tick * -0.3) * 2
    meshes.drum3.scale.y = Math.cos(tick * 0.8) * 25


    renderer.render(scene, camera)
}