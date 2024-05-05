const containerE = document.querySelector(".container");
const btnE = document.querySelector(".btn");
let imageNum = 10;

btnE.addEventListener("click", () => {
    addNewImages();
});

function addNewImages() {
    for (let index = 0; index < imageNum; index++) {
        const newImage = document.createElement("img");
        newImage.src = `https://picsum.photos/200/300?random=${Math.floor(Math.random()* 2000)}`
        containerE.appendChild(newImage);
    }
}
