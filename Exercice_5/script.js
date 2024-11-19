// const monElements = document.getElementsByClassName("container");
const Elements = document.querySelectorAll("img");
// var i = 1;



// PREMIER FAÇON DE FAIRE
// for (let i = 1; i <= monElements[0].children.length; i++) {

//   monElements[0].children[i-1].addEventListener("mouseenter", function() {
//     monElements[0].children[i-1].src=`./images/image${i}_2.jpg`;
//   });

//   monElements[0].children[i-1].addEventListener("mouseleave", function() {
//     monElements[0].children[i-1].src=`./images/image${i}.jpg`;
//   });

// }




// LE FAIRE EN UNE FUNCTION

Elements.forEach((element) => {
    element.addEventListener("mouseenter", handleChangeImg);
    element.addEventListener("mouseleave", handleChangeImg);
});


function handleChangeImg(event) {
    const imgTag = event.target;
    
    if(event.type == "mouseenter"){
        imgTag.src = imgTag.src.replace('.jpg', '_2.jpg');    
    };

    if(event.type == "mouseleave"){
        imgTag.src = imgTag.src.replace('_2.jpg', '.jpg');
    };
    console.log(event.target);

};

