
function includPop(data) {
    const item = 

popupCatsImg.innerHTML=`
<div class="card-img" style="background-image: url(${data.img_link})"></div>;`
popupCatsText.innerHTML=`<h3>${data.name}</h3>
 <p>${data.age}</p>
 <p>${data.description}</p>;`
    }


const popupCats = document.querySelector('.popup_type_cats-info')
const catImages = document.querySelectorAll('.card')
const closePopupCats = document.querySelector('.popup_close')
const popupCatsImg = document.querySelector('.popup_container_img')
const popupCatsText = document.querySelector('.popup_container_text')

function openPopup(popup) {
    popup.classList.add('popup_opened')
}

function closePopup(popup){
const popActive = document.querySelector('.popup_opened')
if (popActive) {popActive.classList.remove('popup_opened')}
}

function handleClickCatImage(){openPopup(popupCats)}

function handleClosePopup(){closePopup(popupCats)}

closePopupCats.addEventListener('click', handleClosePopup);

for (let i = 0; i < catImages.length; i++) {
    catImages[i].addEventListener("click", function(e) {
    openPopup(popupCats);
    includPop(cats[i])
    })
}