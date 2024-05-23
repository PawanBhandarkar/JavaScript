// let modebtn= document.querySelector("#mode");
// let curmode=  "Light";

// b1.onclick = () => {
//     console.log("btn1 was clicked");
//     let a=1;
//     for(a=1;a<5;a++)
//     {
//         console.log(a);
//     } 
// }

// modebtn.addEventListener("click", () => {
//     if(curmode === "Light")
//     {
//         curmode = "Dark"
//         document.querySelector("body").style.backgroundColor = "black";
//     }
//     else
//     {
//         curmode = "Light";
//         document.querySelector("body").style.backgroundColor = "white";
//     }
//     console.log(curmode);
// })

let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msgwin = document.querySelector("#msg");

const user = document.querySelector("#user");
const com = document.querySelector("#computer");

const showWinner = (userwin, userchoice, cmpchoice) => {
    if(userwin)
    {
        userscore++;
        user.innerText = userscore;
        console.log("You Win ");
        msgwin.innerText = `You Win, Your choice ${userchoice} beats ${cmpchoice} `;
        msgwin.style.backgroundColor = "green";
    }
    else
    {
        compscore++;
        console.log("Computer Win ");
        com.innerText = compscore;
        msgwin.innerText = `Computer Win, Computer choice ${cmpchoice} beats ${userchoice}`;
        msgwin.style.backgroundColor = "red";
    }  
}

const draw = (userchoice,cmpchoice) => {
    msgwin.innerText = `Game Draw ! Play Again, ${userchoice} Equals ${cmpchoice}`;
    msgwin.style.backgroundColor = "yellow";
    msgwin.style.color = "black";
    console.log("Draw ");
}

const compChoice = () => {
    const opt = ["rock","paper","scissors"]
    const no =  Math.floor(Math.random() * 3);
    return opt[no];
}

const playGame = (userchoice) => {
    console.log("user",userchoice);
    const cmpchoice = compChoice();
    console.log("comp",cmpchoice);

    if( userchoice === cmpchoice)
    {
        draw(userchoice,cmpchoice);
    }
    else
    {
        let userwin = true;
        if(userchoice === "rock")
        {
            userwin = cmpchoice === "paper" ? false : true;
        }
        else if( userchoice === "paper")
        {
            userwin = cmpchoice === "scissors" ? false : true;
        }
        else
        {
            userwin = cmpchoice === "rock" ? false : true;
        }
        showWinner(userwin, userchoice, cmpchoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        playGame(userchoice);
    })
});
 