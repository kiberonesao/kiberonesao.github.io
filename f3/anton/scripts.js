var offset=0

function scroll_r(){
    let car = document.getElementsByClassName("image_carousel")[0]
    let card_s = window.getComputedStyle( document.getElementsByClassName("image_card")[1] )

    let maxX = - parseInt(window.getComputedStyle(car).width)
   
    if (offset >= maxX){
        
        offset -= parseInt(card_s.width) + parseInt(card_s.marginLeft) + parseInt(card_s.marginRight)
        car.style.transform = "translate("+offset+"px)"
}
}
var offset=0

function scroll_l(){
    let car = document.getElementsByClassName("image_carousel")[0]
    let card_s = window.getComputedStyle( document.getElementsByClassName("image_card")[1] )
   
    if (offset < 0){
        
        offset += parseInt(card_s.width) + parseInt(card_s.marginLeft) + parseInt(card_s.marginRight)
        car.style.transform = "translate("+offset+"px)"
}
}










function sikma(){
    let destination = document.getElementsByClassName('input_field')
    for(let item of destination){
    if (!item.value){
        item.style.boxShadow = "0px 0px 10px red";
    }
    else{
        item.style.boxShadow - "none"
    }
    }
    alert('ВЫ летите '+ destination[0].value +'из' + destination[1].value)
    return false;
   

}


        
   

