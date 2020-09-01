let hamburger = document.querySelector('.hamburger')
var navBar = document.querySelector('.topNav')
let open = false
hamburger.addEventListener('click', (e) => toggleHamburger(e))

function toggleHamburger(e) {
  let hamburgerImg = document.querySelector('.hamburger_img')
  let closeImg = document.querySelector('.close_img')

  open == false ? hamburgerImage(hamburgerImg, closeImg) : closeImage(hamburgerImg, closeImg)
}

function hamburgerImage(hamburgerImg, closeImg) {
  open = true
  hamburgerImg.style.visibility = 'hidden'
  closeImg.style.visibility = 'visible'
  navBar.style.transform = 'translateY(0)'
}

function closeImage(hamburgerImg, closeImg) {
  open = false
  hamburgerImg.style.visibility = 'visible'
  closeImg.style.visibility = 'hidden'
  navBar.style.transform = 'translateY(-200%)'
}
