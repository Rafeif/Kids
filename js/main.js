


const scrollHeader=()=>{
    const header=document.getElementById('main-nav')
    this.scrollY>=50?header.classList.add('bg-header')
    :header.classList.remove('bg-header')
}
window.addEventListener('scroll',scrollHeader)

const scrollUp=()=>{
const scrollUp =document.getElementById('scroll-up')
this.scrollY>=350?scrollUp.classList.add('show-scroll')
:scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll',scrollUp);



gsap.from(".moon",2.2,{opacity:1 ,y:100,delay:.1})
gsap.from(".two-girls",2.2,{opacity:0 ,y:150,delay:.1})
gsap.from(".kids",2.2,{opacity:0 ,y:150,delay:.1})
gsap.from(".santa",2.2,{opacity:0 ,x:-200,delay:.8})
gsap.from(".phone",3.2,{opacity:0 ,x:-100,delay:.9})
gsap.from(".allContact",3.2,{opacity:0 ,x:100,delay:.9})


const sr=ScrollReveal({
    origin:'top',
    distance:'60px',
    duration:2500,
    delay:400
})
sr.reveal(`.kids-pic`,{origin:'right'})
sr.reveal(`.kids-pra`,{origin:'left'})
sr.reveal(`.hero-sectionn`,{origin:'bottom'})

const tabs = document.querySelector(".wrapper");
const tabButton = document.querySelectorAll(".tab-button");
const contents = document.querySelectorAll(".content");

tabs.onclick = e => {
  const id = e.target.dataset.id;
  if (id) {
    tabButton.forEach(btn => {
      btn.classList.remove("active");
    });
    e.target.classList.add("active");

    contents.forEach(content => {
      content.classList.remove("active");
    });
    const element = document.getElementById(id);
    element.classList.add("active");
  }
}
document.onreadystatechange = function() {
  if (document.readyState !== "complete") {
      document.querySelector(
        "body").style.visibility = "hidden";
      document.querySelector(
        "#spinner").style.visibility = "visible";
  } else {
      document.querySelector(
        "#spinner").style.display = "none";
      document.querySelector(
        "body").style.visibility = "visible";
  }
};