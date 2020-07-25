/*
const h1  = document.querySelector(".container > h1");
h1.style.backgroundColor = "red";
*/

const main = ()=>{

    const closeBtn = document.querySelector("#close-btn");
    const aboutUsLink = document.querySelector("#about-link");
    const messageModel = document.querySelector(".message-modal");


    aboutUsLink.addEventListener("click",(e)=>{
    
        e.preventDefault();
        messageModel.classList.remove("hide");

    });

    
    closeBtn.addEventListener("click",()=>{
    
    
         messageModel.classList.add("hide");
    })

}


main();