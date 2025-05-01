let counter =1;
let sliderInterval = null;
function nextImage(){
    counter++;
    if(counter > 3){
        counter=1;}
    Slider.src=`imgs/${counter}.jpg`;
}

function previousImage(){
    counter--;
    if(counter < 1){
        counter=3;}
    Slider.src=`imgs/${counter}.jpg`;
}

function Start(){
    if(!sliderInterval)
        sliderInterval = setInterval(nextImage,1500);
}

function Stop(){
    clearInterval(sliderInterval);
    sliderInterval=null;
}