let count =1;
let slideInterval = null;
function nextImage(){
    count++;
    if (count > 3) count = 1;
    slider.src = `imgs/${count}.jpg`;
}
function previousImage(){
    count--;
    if (count < 1) count = 3;
    slider.src = `imgs/${count}.jpg`;
}
function start(){
    if(!slideInterval){
        slideInterval = setInterval(nextImage, 1500);
}}

function stop() {
    clearInterval(slideInterval);
    slideInterval = null;
}