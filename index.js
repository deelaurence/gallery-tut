// console.log("javascript is here")



// //select all p elements
// const pElements = document.querySelectorAll('p')

// //select all img elements
// const imgElements = document.querySelectorAll('img')

// //confirm if all p elements are actually selected
// console.log(pElements);


// //for each method on arrays
// //for each p element...
// imgElements.forEach((element) => {
//     //perform the following action

//     element.addEventListener('mouseover', () => {
//         //perform the magic only when i hover
//         //i wll use use event listeners
//         pElements.forEach((pElement) => {
//             pElement.style.bottom = "0px"
//         })
//     })
// })


let img1 = document.querySelector("#img1")
let para1 = document.querySelector("#p1")

console.log(img1, para1);


img1.addEventListener('mouseover', () => {
    para1.style.bottom = "0px"
})
img1.addEventListener('mouseleave', () => {
    para1.style.bottom = "-20px"
})



