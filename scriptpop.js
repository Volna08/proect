// // пробую нарисовать карточку для попапа
function includPop(data) {
        const item = `
    <div class="card-img" style="background-image: url(${data.img_link})"></div>;
    <h3>${data.name}</h3>;
    <p>${data.age}</p>;
    <p>${data.description}</p>;`
    cardPop.firstElementChild.innerHTML= item;
        }


const popupCats = document.querySelector('.popup_type_cats-info')
const catImages = document.querySelectorAll('.card')
const closePopupCats = document.querySelector('.popup_close')

function openPopup(popup) {
 const cardPopup = document.querySelector('.card')
    alert(cardPopup.textContent)  
        popup.classList.add('popup_opened')
    popup.firstElementChild.innerHTML = `
             <div class="information">
           <h2>${data.name}</h2>
           <h3>Возраст: ${data.age}}</h3>
           <p>${data.description}</p>
       </div>
    `
}

function closePopup(popup){
    const popActive = document.querySelector('.popup_opened')
    if (popActive) {popActive.classList.remove('popup_opened')}
}
// function closePopup(popup){
//       popup.classList.remove('popup_opened')
// }
//попап не универсальный


function handleClickCatImage(){openPopup(popupCats)}

function handleClosePopup(){closePopup(popupCats)}

closePopupCats.addEventListener('click', handleClosePopup);

catImages.forEach(image => {
    image.addEventListener("click", () => {
        openPopup(popupCats)})
})
// catImages.addEventListener("click", () => {
//         openPopup(popupCats)}) - открытие только 1 окна
