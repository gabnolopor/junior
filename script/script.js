
window.onload = ()=>{

    //Menu Button
    let button = document.getElementById("button");
    let exitButton = document.getElementById("exitButton");
    let courtain = document.getElementById("courtain");
    let list = document.getElementById("list");
    let header = document.getElementById("header");
    let wordmark = document.getElementById("whiteWordmark");
    let courtainFooter = document.getElementById("footer__list");

    button.addEventListener("click", ()=>{
        
        courtain.style.color = "white"
        courtain.style.left = "0";
        exitButton.style.color = "white" 
        exitButton.style.transition = "5s"
        list.style.transition = "0.2s"
        header.style.color = "white"
        button.style.color = "white"
        button.style.transition = "0.5s"
        wordmark.style.transition = "1s"
        courtainFooter.style.opacity = "1"
  
    });

    exitButton.addEventListener("click", ()=>{

        exitButton.style.color = ""
        exitButton.style.transition = "1s"
        courtain.style.left = "100%";
        courtain.style.color = ""
        list.style.transition = ""
        header.style.color = ""
        button.style.color = ""
        button.style.transition = "5s"
        wordmark.style.transition = ""
        courtainFooter.style.opacity = ""
        courtainFooter.style.transition = "3s"


    });

    //List interaction
    let listDeploy = document.getElementById("listElement__deploy");
    let deployedList = document.getElementById("listDeploy");
    let sofa = document.getElementById("whiteSofa");
    let deploySofa = document.getElementById("listDeploy__element");

    listDeploy.addEventListener("click", ()=>{
        
        deployedList.style.height = "4rem"
        deployedList.style.color = "white"

    });
    deployedList.addEventListener("mouseleave", ()=>{

        
        deployedList.style.color = "black"
        setTimeout(() => {
            deployedList.style.height = "0"
        }, 1500);
        
    });
    deploySofa.addEventListener("mouseenter", ()=>{
        
            sofa.style.opacity = "1"

    });
    deploySofa.addEventListener("mouseleave", ()=>{

        setTimeout(() => {
            sofa.style.opacity = "0"
        }, 800);

    });
    /*MAIN*/
    let prod1 = document.getElementById("prod1");
    let prod2 = document.getElementById("prod2");

    prod1.addEventListener("click", ()=>{
    
        prod1.style.top = "100%"



        prod2.style.bottom = "-16%"

        prod1.style.animation = "disappear 1s forwards"


        prod2.style.animation = "appear 5s forwards"

        button1.style.borderTopColor = "white"

        button2.style.borderTopColor = "black"

        
    });
    prod2.addEventListener("click", ()=>{
    
        prod1.style.top = ""

        prod2.style.bottom = "100%"
    
        prod1.style.animation = "appear 3s forwards"

        prod2.style.animation = ""

        button1.style.borderTopColor = ""

        button2.style.borderTopColor = ""


        
    });
    
    /*FOOTER*/

    let button1 = document.getElementById("buttonFooter1");
    let button2 = document.getElementById("buttonFooter2");

    button1.addEventListener("click", ()=>{
        prod1.style.top = ""

        prod2.style.bottom = "100%"
    
        prod1.style.animation = "appear 3s forwards"

        prod2.style.animation = ""

        button1.style.borderTopColor = ""

        button2.style.borderTopColor = ""



    });
    button2.addEventListener("click", ()=>{
    
    
        prod1.style.top = "100%"

        prod2.style.bottom = "-16%"

        prod1.style.animation = "disappear 1s forwards"

        prod2.style.animation = "appear 5s forwards"

        button1.style.borderTopColor = "white"

        button2.style.borderTopColor = "black"




        
        
    });

};
