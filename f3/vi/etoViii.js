// alert("привет! Я Вика! Ты хочешь зайти на мою страницу? круто! надеюсь тебе понравится! Я старалась над ней, чтобы тебе было удобно пользоваться!)/hello! i'm Vika! Do you want to visit my website? Cool!I hope you enjoy it! I tried to make convenient for you to use it");
// let p=0
// while (p<10){
//    alert (p)
//    p++
// }
// let s=0
// while (s<10){
//    alert (s*2)
//    s++
// }  
// let x = parseInt (prompt ("сколько тебе лет?(введи число без букв)"))
// let y= parseInt (prompt ("Понятно, а какое у тебя счастливое число?(введи число без букв)"));
// alert (x+y);
// let w = parseFloat (prompt("сколько весит твой кролик?"));
// alert (parseFloat(w))
//  if (w<1){
//     alert ("200грамм")
//  }
//  else if (w<3){
//     alert(100*(w/1), "гр нужно кролику")
//  }
//  else if (w<5){
//     alert(200*(w/2), "гр нужно кролику")
//  }
// else if (w<7){
//    alert(300*(w/3), "гр нужно кролику")
// }
// else if (w<5){
//    alert(400*(w/4), "гр нужно кролику")
// }
// else if (w<5){
//    alert(500*(w/5), "гр нужно кролику")
// }
// else if (w<5){
//    alert(2500*(w/25), "гр нужно кролику")
// }
// else if (w<5){
//     alert(600*(w/6), "гр нужно кролику")
// }
// else if (w<5){
// alert(700*(w/7), "гр нужно кролику")
// }
// function r(a,b,e){
//    return a+b+e;
// }
// let h= parseFloat(prompt())
// let d= parseFloat(prompt())
// let g= parseFloat(prompt())
// alert(r(h,d,g))
// function k(odin){
//    return odin +"=тян";
// }
// function kelvin(Tc){
//    return Tc+273;
// }

// let temp = parseFloat(prompt());
// alert(kelvin(temp));
// [1,2,3,5,8,13,21,34,55]
// function fib(a,b,q){
//    if (a+b<q){
//       console.log(a+b)
//       fib(b,a+b,q)
// }   
// else{
//    alert(a+b);
//    return 0;
//   }
// }
//    let q = parseFloat(prompt())
//    fib (1,2,i);
// k = 1
// let z = 1
// while(k<11){
// while(k<11) {
//    alert(k*z)
//    k++
// }
// k=0
// z++
// }
// arr = ["123","123","123","123","123"]
// for(let name of arr){
//       alert(name+name)

// }
// name+"lol"

var offset = 0
function scroll_right(){
   let image_carousel = document.getElementsByClassName("image_carousel")[0]
   let card_style = window.getComputedStyle(document.getElementsByClassName("image_card")[0] )
   let maxX = -parseInt(window.getComputedStyle(image_carousel ).width)
   if (offset >= maxX){
   offset -= parseInt (card_style.width) + parseInt (card_style.marginRight)
   image_carousel.style.transform = 'translateX('+offset+'px)'

}}

function scroll_left(){
   let image_carousel = document.getElementsByClassName("image_carousel")[0]
   let card_style = window.getComputedStyle(document.getElementsByClassName("image_card")[0] )
 
   if (offset < 0){
   offset += parseInt (card_style.width) + parseInt (card_style.marginRight)
   image_carousel.style.transform = 'translateX('+offset+'px)'

}}