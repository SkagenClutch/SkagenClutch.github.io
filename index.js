
function vista1(){
    if ( document.getElementById("uno")){
        document.getElementById("uno").setAttribute("id", "active")
    } else if (document.getElementById("active")){
        document.getElementById("active").setAttribute("id", "uno")
    }else (document.getElementById("uno").setAttribute("id", "active"))
} 
function vista2(){
    if ( document.getElementById("dos")){
        document.getElementById("dos").setAttribute("id", "active")
    } else if (document.getElementById("active")){
        document.getElementById("active").setAttribute("id", "dos")
    }else (document.getElementById("dos").setAttribute("id", "active"))
} 
function vista3(){
    if ( document.getElementById("tres")){
        document.getElementById("tres").setAttribute("id", "active")
    } else if (document.getElementById("active")){
        document.getElementById("active").setAttribute("id", "tres")
    }else (document.getElementById("tres").setAttribute("id", "active"))
}
function vista4(){
    if ( document.getElementById("cuatro")){
        document.getElementById("cuatro").setAttribute("id", "active")
    } else if (document.getElementById("active")){
        document.getElementById("active").setAttribute("id", "cuatro")
    }else (document.getElementById("cuatro").setAttribute("id", "active"))
}
function vista5(){
    if ( document.getElementById("cinco")){
        document.getElementById("cinco").setAttribute("id", "active")
    } else if (document.getElementById("active")){
        document.getElementById("active").setAttribute("id", "cinco")
    }else (document.getElementById("cinco").setAttribute("id", "active"))
}
function vista6(){
    if ( document.getElementById("seis")){
        document.getElementById("seis").setAttribute("id", "active")
    } else if (document.getElementById("active")){
        document.getElementById("active").setAttribute("id", "seis")
    }else (document.getElementById("seis").setAttribute("id", "active"))
}

const scrollOffset = 100;
 
const scrollElement = document.querySelector(".js-scroll, scroll");
 
const elementInView = (el, offset = 0) => {
  const elementTop = el.getBoundingClientRect().top;
 
  return (
    elementTop <=
    ((window.innerHeight || document.documentElement.clientHeight) - offset)
  );
};
 
const displayScrollElement = () => {
  scrollElement.classList.add('scrolled');
}
 
const hideScrollElement = () => {
  scrollElement.classList.remove('scrolled');
}
 
const handleScrollAnimation = () => {
  if (elementInView(scrollElement, scrollOffset)) {
      displayScrollElement();
  } else {
    hideScrollElement();
  }
}
 
window.addEventListener('scroll', () => {
  handleScrollAnimation();
})
