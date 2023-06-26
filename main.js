var nav1=document.getElementById('nav1');

function a23(spp){
    if (nav1.style.display=='block') {
        nav1.style.display='none';
    } else {
        nav1.style.display='block';
    }
}
var slider1=document.getElementById('image');

function a25(){
    console.log(slider1.style.marginLeft)
    if (!slider1.style.marginLeft){
        slider1.style.marginLeft= '-100%';
    }
    else if(slider1.style.marginLeft=='-100%'){
        slider1.style.marginLeft= '-200%';
        
    }
    else if(slider1.style.marginLeft=='-200%'){
        slider1.style.marginLeft= '-300%';
    }
    else if(slider1.style.marginLeft=='-300%'){
        slider1.style.marginLeft= '-400%';
    }
    else if(slider1.style.marginLeft=='-300%'){
        slider1.style.marginLeft= '-400%';
    }
}
function a25(sgg){
    slider1.style.marginLeft= '-'+sgg+'%';

}
function a26(){
    if (!slider1.style.marginLeft)  {
        slider1.style.marginLeft= '-100%';
    }
    else if(slider1.style.marginLeft=='-100%'){
        slider1.style.marginLeft= '-200%';
        
    }
    else if(slider1.style.marginLeft=='-200%'){
        slider1.style.marginLeft= '-300%';
    }
    else if(slider1.style.marginLeft=='-300%'){
        slider1.style.marginLeft= '-400%';
    }
    else if(slider1.style.marginLeft=='-300%'){
        slider1.style.marginLeft= '-400%';
    }
}
function a27() {
    if (!slider1.style.marginLeft)  {
        slider1.style.marginLeft= '0%';
    }
    else if(slider1.style.marginLeft=='-100%'){
        slider1.style.marginLeft= '0%';
        
    }
    else if(slider1.style.marginLeft=='-200%'){
        slider1.style.marginLeft= '-100%';
    }
    else if(slider1.style.marginLeft=='-300%'){
        slider1.style.marginLeft= '-200%';
    }
    else if(slider1.style.marginLeft=='-400%'){
        slider1.style.marginLeft= '-300%';
    }
}
  

g