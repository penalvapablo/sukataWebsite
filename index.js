const nav2 = document.querySelector('.nav2')
const navLinks = nav2.querySelectorAll('.nav__link')
console.log(navLinks)

window.addEventListener('scroll', () => {
  nav2.classList.toggle('show', window.scrollY > 1035)

  // if (window.scrollY > 1920) {
  //   navLinks[1].classList.remove('active')
  //   navLinks[2].classList.add('active')

  // }
})

window.addEventListener("scroll", () => {
  if (window.scrollY > 1035) {
    navLinks[1].classList.add('active')
    navLinks[2].classList.remove('active')
    navLinks[3].classList.remove('active')
  }
})

window.addEventListener("scroll", () => {
  if (window.scrollY > 1850) {
    navLinks[1].classList.remove('active')
    navLinks[2].classList.add('active')
    navLinks[3].classList.remove('active')
  }
})

window.addEventListener("scroll", () => {
  if (window.scrollY > 2219) {
    navLinks[2].classList.toggle('active')
    navLinks[3].classList.toggle('active')

  }
})

window.addEventListener("scroll", (event) => {
  let scroll = this.scrollY;
  console.log(scroll)
});

