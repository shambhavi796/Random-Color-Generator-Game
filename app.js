function getRandomColor(){
    let red= Math.floor(Math.random() *255);
    let blue=Math.floor(Math.random() *255);
    let green=Math.floor(Math.random()*255);
    let color=`rgb(${red},${blue},${green})`;
    return color;
}
let btn=document.querySelector('button')
btn.addEventListener('click',function(){
    let hdng= document.querySelector('h1');
    let randomColor= getRandomColor()
    hdng.innerText=randomColor;
    let div=document.querySelector('div')
    div.style.backgroundColor= randomColor;
    // heading.innerText=`${red},${green},${blue}`
})