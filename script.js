function darkmode() {
  var element = document.body
  element.classList.toggle("darkmode");

  if (document.body.classList.contains("darkmode")) {
      localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
};

function dyslexiaFont() {
  var element = document.body
  element.classList.toggle("dyslexiaFont");

  if (document.body.classList.contains("dyslexiaFont")) {
      localStorage.setItem("font", "dyslexia");
  } else {
    localStorage.setItem("font", "regular")
  }
};

const today = new date();
const month = today.getMonth()
const day = today.getDay()

const ocoDoodles = {
  "12-25": "assets/special/OCO_Christmas.png",
  "4-23": "assets/special/OCO_Birthday.png",
  "10-31": "assets/special/OCO_Halloween.png",
  "7-21": "assets/special/OCO_Belgium.png",
  "11-11": "assets/special/OCO_Peace.png"
};

const logo = document.querySelector(".logo")
const specialLogo = specialLogo[`$(month)-$(day)`];

if (specialLogo) {
  logo.src = specialLogo;
}

window.onload = function () {
  const savedTheme = localStorage.getItem("theme")
  const currentFont = localStorage.getItem("font")

  if (savedTheme === "dark") {
    document.body.classList.add("darkmode");
  }

  if (currentFont === "dyslexia") {
    document.body.classList.add("dyslexiaFont")
  }
};

// OCO logo lmao
console.log(`                                                                   .:^!7?JY55PPPPP55YJ?7!~:.                                                          
                                                             .^7YPB#&&&&&##BBBBBBBBB##&&&&&&BPY7~:                                                    
                                .^!?Y5PGBBBBBGGPYJ7~:    :7YB&@&#BGP55YYYYYYYYYYYYYYYYYYY55PGB#&@&B5JYPGGBBBBGGP5J?!^.                                
                           .^?5B&@@&&&#########&&&@@&#PYB@@#BP5YYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY5G@@@&##########&&&@@&B57^                            
                        .!5#@@&#BGGGGGGGGGGGGGGGGGGB&@@&BP5YYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY5B@@#GGGGGGGGGGGGGGGGBB#&@@BY!.                        
                      ~5&@&#BGGGGGGGGGGGGGGGGGGGG#&@&G5YYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYG&@&BGGGGGGGGGGGGGGGGGGGGGGB#@@#Y^                      
                    !G@@#BGGGGGGGGGGGGGGGGGGGGG#@@#PYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYP#@&BGGGGGGGGGGGGGGGGGGGGGGGGGGGB#@@P~                    
                  ^G@@#GGGGGGGGGGGGGGGGGGGGGG#@@#PYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY5B@@#GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG#@@P:                  
                 J@@#GGGGGGGGGGGGGGGGGGGGGGB&@&PYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYG&@&BGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG#@&?                 
               .G@&BGGGGGGGGGGGGGGGGGGGGGGB@@B5YYYYYYYYYYYYYYYYYYYYYYYYYYY5PPGGGPPPP5YY5#@&BGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGB@@5                
              .B@&GGGGGGGGGGGGGGGGGGGGGGGB@@GYYYYYYYYYYYYYYYYYYYYYYYY5PB&&&&#BG&@@&@@&#@@#GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGB&@P               
              G@&GGGGGGGGGGGGGGGGGGGGGGGB@@GYYYYYYYYYYYYYYYYYYYYYYYP#&@BJ!^:. !@@BGGBB#&BGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG&@5              
             J@@BGGGGGGGGGGGGGGGGGGGGGGG&@BYYYYYYYYYYYYYYYYYYYYYYP#@&&@G     .#@#GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGB@@!             
            :&@#GGGGGGGGGGGGGGGGGGGGGGG#@&5YYYYYYYYYYYYYYYYYYYYYG@@#GB@@7    J@&GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG#@B             
            7@@GGGGGGGGGGGGGGGGGGGGGGGG&@BYYYYYYYYYYYYYYYYYYYYYG@@BGGG&@G    #@#GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGB@@~            
            5@&GGGGGGGGGGGGGGGGGGGGGGGB@@GYYYYYYYYYYYYYYYYYYYY5&@#GGGG#@#.  ^@@BGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG&@J            
            P@&GGGGGGGGGGGGGGGGGGGGGGGB@@PYYYYYYYYYYYYYYYYYYYYP@@BGGGGB@&:  ^@@BGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG&@Y            
            5@&GGGGGGGGGGGGGGGGGGGGGGGB@@GYYYYYYYYYYYYYYYYYYYY5&@#GGGG#@&.  ^@@BGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG&@J            
            ?@@GGGGGGGGGGGGGGGGGGGGGGGG&@BYYYYYYYYYYYYYYYYYYYYYG@@BGGG&@G   .#@#GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGB@@~            
            :&@#GGGGGGGGGGGGGGGGGGGGGGG#@&5YYYYYYYYYYYYYYYYYYYYYG@@#GB@@7    Y@&GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG#@#.            
             J@@GGGGGGGGGGGGGGGGGGGGGGGG&@BYYYYYYYYYYYYYYYYYYYYYYP#@&&@B     :&@#GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGB@@7             
              G@&GGGGGGGGGGGGGGGGGGGGGGGB@@GYYYYYYYYYYYYYYYYYYYYYYYP#&@#J!^:. 7@@BGGBB#&&BGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG&@P              
              :B@&GGGGGGGGGGGGGGGGGGGGGGGB@@GYYYYYYYYYYYYYYYYYYYYYYYY5PB&&&&#BG&@@&@@&##@@#GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG&@G.              
               :G@&BGGGGGGGGGGGGGGGGGGGGGGB@@B5YYYYYYYYYYYYYYYYYYYYYYYYYYY5PPGGGPPPP5YYY5#@@#GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGB@@P.               
                 Y@@#GGGGGGGGGGGGGGGGGGGGGGB&@&PYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYP#@@BGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG#@@J                 
                  ~B@@BGGGGGGGGGGGGGGGGGGGGGG#@@#PYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYP&@&BGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG#@@G^                  
                    7B@@#GGGGGGGGGGGGGGGGGGGGGG#@@#PYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYG&@&BGGGGGGGGGGGGGGGGGGGGGGGGGB#@@G!                    
                      !P&@&#BGGGGGGGGGGGGGGGGGGGG#&@&G5YYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY5G@@&BGGGGGGGGGGGGGGGGGGGGB#&@&5~                      
                        :7P&@@&#BGGGGGGGGGGGGGGGGGGB&@@&BP5YYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY5B@@#GGGGGGGGGGGGGGGB#&@@#P7.                        
                           .~JP#&@@&&###BBBBB###&&&@&#G5B@@#BP5YYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY5PG&@@@##BBBB####&&@@&BP?~.                           
                               .:~7J5PGBB###BBGG5Y?!^.   :7YB&@&#BGP55YYYYYYYYYYYYYYYYYYY55PGB#&@&B5YPGBB####BBGP5J7~:                                
                                          .                  .^7YPB#&&&&&##BBBBBBBBB##&&&&&&BPY7~:        ..                                          
                                                                   .:^!7?JY55PPPPP55YJ?7!~:.`)