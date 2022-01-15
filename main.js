const toggle =  document.querySelector('.nav-toggle')
const containerLinks  =  document.querySelector('.links-container')
const links =  document.querySelector('.links')





toggle.addEventListener('click', () => {
    // links.classList.toggle('show-links')
    const linksHeight = links.getBoundingClientRect().height;
    const containerHeight = containerLinks.getBoundingClientRect().height;
    if(containerHeight === 0){
        containerLinks.style.height = `${linksHeight}px`
    } else {
        containerLinks.style.height = 0 ;
    }
})

const navLink  =  document.getElementById('nav')


window.addEventListener('scroll',() => {
  let windowHeight =  window.pageYOffset;
  let navHeight =  containerLinks.getBoundingClientRect().height;
  console.log(navHeight)
  console.log(windowHeight)
  if(windowHeight > navHeight){
    navLink.classList.add("fixed-nav");
  } else {
    navLink.classList.remove("fixed-nav");
  }
  
})