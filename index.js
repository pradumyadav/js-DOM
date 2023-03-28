let first = document.getElementById('text')
console.log(first.innerText);

let second = document.getElementsByTagName('h1')
console.log(second[0].innerText);

let third= document.getElementsByClassName('box')
console.log(third[0].innerText)

let fourth = document.getElementsByTagName('h1')
// console.log(fourth[1].innerText)

console.log(fourth[1].innerText='HELLO WORLD')
let fifth= document.getElementById('change')

function fast(){
   console.log(fifth.innerText) 
   fifth.innerText='Welcome to Elevation academy'
}
let head= document.getElementById('A3')

 function callhear(){
    let time=new Date();
    let hours=time.getHours();
    let mins=time.getMinutes();
    let sec=time.getSeconds();
    let timezone=`hours${hours} : mins${mins}  :sec${sec}`
    console.log(timezone);
    // if(hours>12){
    //     hours=hours-12;
    // }
 
    console.log(hours, mins, sec);
  (head.innerText=timezone)
}

setInterval(()=>{
    callhear()
 },1000);

