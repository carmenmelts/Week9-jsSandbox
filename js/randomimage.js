const myButton = document.querySelector('button');
const image = document.querySelector('img');
const img = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg"];

myButton.addEventListener('click', changeImage);

function changeImage() {
    let randomIndex = Math.floor(Math.random()* img.length);
    console.log(randomIndex);
    image.src = "img/" + img[randomIndex];    
}