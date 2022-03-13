let count = 0; 
let btns = document.querySelectorAll('button');
//var text = document.querySelector(".text");
btns.forEach(
    (btn) => btn.addEventListener("click",(e) => {
        let userChoice = e.currentTarget.id;
        if(userChoice == "decrease"){
            count --;
            document.querySelector(".text").textContent = count;
            document.querySelector(".text").style.color = "red";
        }
        else if(userChoice == "increase"){
            count ++;
            document.querySelector(".text").textContent = count;
            document.querySelector(".text").style.color = "green";
        }
        else{
            count = 0;
            document.querySelector(".text").textContent = count;
            document.querySelector(".text").style.color = "gray";
        }
        
    })
)


