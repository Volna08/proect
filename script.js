//пробую нарисовать рейтинг из котов
function raiting (rait) {
    let blcat="<img src='img/cat-fill.svg' width=20px height=20px>"
    let wcat="<img src='img/cat-stroke.svg' width=20px height=20px>"
let catcat=""
for (let i=1; i<=10; i++){
    if (i<=rait) {catcat += blcat} else {catcat += wcat}
}
return(catcat)
    }
