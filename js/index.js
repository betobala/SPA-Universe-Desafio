import { Router } from './router.js'

const home = document.querySelector('.homePage')
const universo = document.querySelector('.universoPage')
const exploracao = document.querySelector('.exploracaoPage')

const router = new Router()

router.add('/', "/pages/home.html")
router.add('/exploracao', "/pages/exploracao.html")
router.add('/o-universo', "/pages/o-universo.html")
router.add('404', "/pages/404.html")

router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route()

home.classList.add('active')

home.addEventListener('click', () => {
  home.classList.add('active')
  universo.classList.remove('active')
  exploracao.classList.remove('active')
})
universo.addEventListener('click', () => {
  universo.classList.add('active')
  home.classList.remove('active')
  exploracao.classList.remove('active')
})
exploracao.addEventListener('click', () => {
  exploracao.classList.add('active')
  universo.classList.remove('active')
  home.classList.remove('active')
})