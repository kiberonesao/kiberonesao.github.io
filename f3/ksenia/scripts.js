function aboba(){
    let dest_box = document.getElementsByClassName("input_field")

    for( let i of dest_box){
        if( i.value ){
            i.style.boxShadow = "none"
        }
        else{
            i.style.boxShadow = "0px 0px 10px red"
        }
    }
}

var offset = 0
function scroll_right(){
    let image_carousel = document.getElementsByClassName("image_carousel")[0]
    let card_style = window.getComputedStyle( document.getElementsByClassName("image_card")[0] )
    let maxX =  -parseInt( window.getComputedStyle( image_carousel ).width ) 

    if( offset >= maxX){
        offset -= parseInt(card_style.width) + parseInt(card_style.marginRight)
        image_carousel.style.transform = 'translateX('+offset+'px)'
    }
} 

function scroll_left(){
    let image_carousel = document.getElementsByClassName("image_carousel")[0]
    let card_style = window.getComputedStyle( document.getElementsByClassName("image_card")[0] )
    

    if( offset < 0){
        offset += parseInt(card_style.width) + parseInt(card_style.marginRight)
        image_carousel.style.transform = 'translateX('+offset+'px)'
    }
} 






























function validate(){
    let item = document.getElementsByClassName("input_field")

    for (let znachenie of item ){
        if( !znachenie.value ){
            znachenie.style.boxShadow = "0px 0px 10px red"
        }
        else{
            znachenie.style.boxShadow = "none"
        }
    }
    return false;
}


