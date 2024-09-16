let icon = document.querySelector("#bar_icon");
let xIcon = document.querySelector("#xIcon");
let input = document.querySelectorAll(".contact input");
let textarea = document.querySelector(".contact textarea")
let animation = document.querySelector("header .navAnimation")
icon.addEventListener("click", ()=>{
animation.classList.add("active")
document.body.classList.add("mystyle")
})
xIcon.addEventListener("click", ()=>{
animation.classList.remove("active")
document.body.classList.remove("mystyle")
})

input.forEach(item=>{
    if(item.placeholder){
        item.addEventListener("focus", (e)=>{
            item.dataset.placeholder = item.placeholder
            item.placeholder = '' 
           })
    } 
    item.addEventListener("blur", (e)=>{
        item.placeholder =  item.dataset.placeholder
    })

})

if(textarea.placeholder){
    textarea.addEventListener("focus",(e)=>{
        textarea.dataset.placeholder = textarea.placeholder
        textarea.placeholder = '' 
       })
} 
textarea.addEventListener("blur", (e)=>{
    textarea.placeholder =  textarea.dataset.placeholder
})



