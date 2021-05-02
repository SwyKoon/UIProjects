// Movement Animation to Happen, we need :-
const card = document.querySelector('.card');
const container = document.querySelector('.container');

// Items we want to animate individually
const title = document.querySelector('.title');
const sneaker = document.querySelector('.sneaker img');
const purchase = document.querySelector('.purchase button');
const desc = document.querySelector('.info h3');
const sizes = document.querySelector('.sizes');

// Moving Animation Event
container.addEventListener('mousemove', (e)=>{
    let xAxis = (window.innerWidth/2 - e.pageX)/7;
    let yAxis = (window.innerHeight/2 - e.pageY)/7;
    // console.log(xAxis,yAxis)
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

// To add animation when we are inside the container - Animation In  
container.addEventListener('mouseenter', (e)=>{
    card.style.transition = "none";
    // PopOut
    title.style.transform = "translateZ(150px)";
    sneaker.style.transform = "translateZ(200px) rotateY(-180deg) rotateZ(-360deg)";
    desc.style.transform = "translateZ(125px)";
    sizes.style.transform = "translateZ(100px)";
    purchase.style.transform = "translateZ(75px)";  
});

// To remove the animation when we exit the conatiner - Animation Out
container.addEventListener('mouseleave', (e) =>{
    card.style.transition = "all 0.5s ease";
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    // PopBack
    title.style.transform = "translateZ(0px)";
    sneaker.style.transform = "translateZ(0px) rotateY(0deg) rotateZ(0deg)";
    desc.style.transform = "translateZ(0px)";
    sizes.style.transform = "translateZ(0px)";
    purchase.style.transform = "translateZ(0px)"; 
});
