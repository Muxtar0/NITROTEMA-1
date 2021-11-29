const MainImage = document.querySelector('.TopContainer .left img');
const BottomImages = document.querySelector('.BottomContainer');

BottomImages.addEventListener('click' , (e) => {
        if(e.target.classList.contains("BottomImage")){
           
            MainImage.src=e.target.src;
        }
})