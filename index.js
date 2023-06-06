
let text=  document.querySelector('#text_change');
function byclick(){
  text.innerHTML='Hello World'

}

let text2= document.querySelector('#word_change');
function change(){
    text2.innerHTML="Welcome to Elevation academy !!!"

}

//Q6.

let change_style=document.querySelector('#by_change_event')
change_style.addEventListener("click",()=>{
    change_style.style.color="red"
})

//Q7.

let change_direction=document.querySelector('.parent_box');
let A=0;
function click_to_change(){
  if(A){
    change_direction.style.display="block"
    A++

}
else{
  change_direction.style.display='flex'
  A--
}
}


//Q8.


//Q9. Write code to implement timer clock using JS --display HH:MM:SS --the time should keep updating every second.
let show_time=document.querySelector('.timer')
function setalarm(){
let date=new Date();
let hrs=date.getHours();
let min=date.getMinutes();
let sec=date.getSeconds();
if(hrs>24){
  hrs-12;
}
show_time.innerHTML=` ${hrs}:${min}:${sec}`

}
setInterval(() => {
  setalarm();
}, 1000);

// setInterval(()=>{
//   console.log(ans)
// },1000)

// console.log(ans);