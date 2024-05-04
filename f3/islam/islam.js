function validate(){
    let button = document.getElementById(" destination")
    let buton = document.getElementById("origin")
    button.style.background = "blue"
    alert("куда: "+button.value+"  откуда: "+buton.value )
}

function validate(){
    let item = document.getElementsByClassName(" input_field")
   for(let znach of item){
        if( !znach.value ){
           znach.style.boxShadow = "0px 0px 10px red";
        }
        else{   
            znach.style.boxShadow = "none";
       }
    }
    return false;  
}

var offset = 0
function scroll_right(){
   let image_carousel = document.getElementsByClassName("carousel")[0]
   let card_style = window.getComputedStyle( document.getElementsByClassName("popular_card")[0] )

   let maxX = -parseInt( window.getComputedStyle(image_carousel).width )
   if( offset >= maxX){
        offset -= parseInt(card_style.width) + parseInt(card_style.marginRight)
        image_carousel.style.transform = "translateX("+offset+"px)"
   }
}

function scroll_left(){
    let image_carousel = document.getElementsByClassName("carousel")[0]
    let card_style = window.getComputedStyle( document.getElementsByClassName("popular_card")[0] )
 
    if( offset < 0){
         offset += parseInt(card_style.width) + parseInt(card_style.marginRight)
         image_carousel.style.transform = "translateX("+offset+"px)"
    }
 }


























//var offset = 0
//function scroll_right(){
//   let image_carousel = document.getElementsByClassName("carousel")[0]
//   let card_style = window.getComputedStyle( document.getElementsByClassName("popular_card")[0] )
//
//  let maxX = -parseInt( window.getComputedStyle(image_carousel).width )
//   if( offset >= maxX){
//        offset -= parseInt(card_style.width) + parseInt(card_style.marginRight)
//       image_carousel.style.transform = "translateX("+offset+"px)"
//  }
//}









//function validate(){
//    let item = document.getElementsByClassName(" input_field")
//    for(let znach of item){
//        if( !znach.value ){
//           znach.style.boxShadow = "0px 0px 10px red";
//        }
//        else{
//            znach.style.boxShadow = "none";
//       }
//    }
//    return false;  
//}






//function validate(){
//    let button = document.getElementById(" destination")
//    let buton = document.getElementById("origin")
//    button.style.background = "blue"
//    alert("куда: "+button.value+"  откуда: "+buton.value )
//}



//f_3 = ["Ислам", "Вика", "Илья", "Кирилл", "Андрей", "Артём", "Полина", "Ксюша", "Леон", "Саня", "Николаааааа", "Федя"]
//
//for( let element of f_3){
//    alert(element+"-маладэс")
//}





//for(let g=1; g<11;g++){
//    for(let h=1; h<11; h++){
//      alert(h*g)
//    }
//    }




//let p=Number(0)
//while (p<11){
//    alert(p*2);
//    p++;
//}


//let p=Number((-1))
//let a=[];
//while (p<10){
//    p++;
//    a.push(p)
//}
//alert(a)


//push- добавить в конце, pop- удалить в конце, shift- удалить в начале, unshift- добавить в начало