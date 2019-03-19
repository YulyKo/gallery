// document.body.style.backgroundColor = '#021';
let gallery = document.getElementById('gallery-demonstration');
let img0 = document.getElementById('image0-d');
let img1 = document.getElementById('image1-d');
let img2 = document.getElementById('image2-d');
function magnificationImg0() {
    img0.style.display = 'block';
    img0.style.height = '500px';
    img0.style.width = 'auto';
}

function magnificationImg1() {
    img1.style.display = 'block';
    img1.style.height = '500px';
    img1.style.width = 'auto';
}

function revers() {
    gallery.style.display = 'none';
}