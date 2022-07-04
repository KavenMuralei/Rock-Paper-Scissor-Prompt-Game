  /*
  Kaven Muraleitharan & Sansar Sharma
  2/8/2022
  Mr. Krnic
  Unit 2 Assignment
  This is the code to our rock paper scissors game!
  */
//This is the setup
let allyScore=0;
let enemyScore=0;
let rockPaperScissors=0;
let rounds=0;
let gameMode="";
let picture = [
  ["🗿📄✂"]
  ]
let questionGen=0;
let guestName="";
let answer="";
let q1=0;
let q2=0;
let q3=0;
let q4=0;
let q5=0;
let q6=0;
let playAgain=0;
alert(picture+"\nWelcome to our rock paper scissors game!");
guestName=prompt(picture+"\nWhat is your name?")
for (let z=2;z<=2;z++) //THIS REPLAYS THE "SELECT GAMEMODE MESSAGE"
{
  gameMode=prompt(picture+"\nPlease input a gamemode.\nType 'classic' for classical rock paper scissors\nType 'insane' to play rock paper scissors with our own twist!");
  if(gameMode!="classic" && gameMode!="insane" && gameMode!="Insane" && gameMode!="INSANE" && gameMode!="Classic" && gameMode!="CLASSIC" && gameMode!="I" && gameMode!="i" && gameMode!="C" && gameMode!="c")
  {
    alert("🚫🚫🚫"+"\nUh oh! It looks like your entry was invalid! Looks like you have inputed a invalid character! Please try again!");
  z--
  }
}
//Insane mode
if(gameMode=="insane" || gameMode=="Insane" || gameMode=="INSANE" ||gameMode=="I" || gameMode=="i")
{
 alert(picture+"\nWelcome to insane mode "+name+"!"+"\nIn this mode if you tie with your opponent, you lose. Furthermore, in insane mode every time you win you must answer a simple word problem. If you fail to answer the question right, you lose the round.");
alert(picture+"\nAre you ready?");
do
  {
    rounds=+prompt(picture+"\nHi "+guestName+". "+"How many rounds do you want the game to be? \n(Please pick an odd number!)");
    if (rounds%2==0)
    {
      rounds=0
      alert(picture+"\nPlease enter a odd number");
    }
  }while (rounds==0);
if(rounds==1)
  {
    alert(picture+"\nThis rock paper scissor game will go on for "+ rounds + " round!");
  }
  else
  {
    alert(picture+"\nThis rock paper scissor game will go on for "+ rounds + " rounds!");
  }
    for (let x=1;x<=rounds;x++)
  {
	  alert(picture+"\nRound "+x);
	  answer=prompt(picture+"\nPlease type either rock, paper, or scissors! \nPlease be weary of your spelling")
    rockPaperScissor=~~(Math.random() * 3) + 1;
    alert("🗿"+"\nRock!");
    alert("📄"+"\nPaper!");
    alert("✂"+"\nScissors!");
    alert("🔫"+"\nShoot!");
    //Rock possibility INSANE
    if(answer!="rock" && answer!="Rock" && answer!="ROCK" && answer!="paper" && answer!="Paper" && answer!="PAPER" && answer!="scissors" && answer!="Scissor" && answer!="SCISSORS" && answer!="scissor" && answer!="r" && answer!="R" && answer!="s" && answer!="S" && answer!="P" && answer!="p")
    {
      alert("🚫🚫🚫"+"\nUh oh! It looks like your entry was invalid! Looks like you have inputed a invalid character! Please try again");
      x--
    }
     else if(answer=="rock" || answer=="Rock" || answer=="ROCK" || answer=="R" || answer=="r")
     {
       //Rock+Rock INSANE
      if(rockPaperScissor==1)
        { 
          enemyScore++
          alert("❌"+"\nYou chose rock and your opponent chose rock!\nYou lost!\n"+guestName+" - "+allyScore+"\nOpponent - "+enemyScore);
          rockPaperScissor==0;
        }
      //Rock+Paper INSANE
      else if(rockPaperScissor==2)
      {
        enemyScore++
        alert("❌"+"You chose rock and your opponent chose paper!\nYou lost!\n"+guestName+" - "+allyScore+"\nOpponent - "+enemyScore);
        rockPaperScissor==0;
      }
      //Rock+Scissors INSANE
      else if(rockPaperScissor==3)
      {
        questionGen=~~(Math.random() * 5) + 1
        alert("🚨\nWARNING! ANSWER THE QUESTION RIGHT TO CLAIM YOUR POINT");
        for (let j=1;j<2;j++)
          {
            //WinningQuestions
            if (questionGen==1)
            {
              q1=+prompt("How many provinces are there in Canada?")
              if(q1==10)
                {
                  j++
                  allyScore++
                  alert("✅"+"You chose rock and your opponent chose scissors!\nFurthermore, you answered the question right!\nYou won!\n"+guestName+" - "+allyScore+"\nOpponent - "+enemyScore);
                  rockPaperScissor==0;
            }
              else
              {
                j++
                enemyScore++
                alert("❌"+"You chose rock and your opponent chose scissors!\nHowever, you answered the question wrong.\nYou lost.\n"+guestName+" - "+allyScore+"\nOpponent - "+enemyScore);
                rockPaperScissor==0;
              }
            }
            else if (questionGen==2)
            {
              q2=+prompt("Bob spent $184.59 to buy 3 hockey sticks. If each hockey stick was the same price, how much did 1 cost?\n(DONT INCLUDE $)")
              if(q2==61.53)
                {
                  j++
                  allyScore++
                  alert("✅"+"You chose rock and your opponent chose scissors!\nFurthermore, you answered the question right!\nYou won!\n"+guestName+" - "+allyScore+"\nOpponent - "+enemyScore);
                  rockPaperScissor==0;
                }
              else
              {
                j++
                enemyScore++
                alert("❌"+"You chose rock and your opponent chose scissors!\nHowever, you answered the question wrong.\nYou lost.\n"+guestName+" - "+allyScore+"\nOpponent - "+enemyScore);
                rockPaperScissor==0;
              } 
            }
             else if (questionGen==3)
            {
              q3=+prompt("A single trading card is 9 centimetres long by 6 centimetres wide. What is its area?")
              if(q3==54)
                {
                  j++
                  allyScore++
                  alert("✅"+"You chose rock and your opponent chose scissors!\nFurthermore, you answered the question right!\nYou won!\n"+guestName+" - "+allyScore+"\nOpponent - "+enemyScore);
                  rockPaperScissor==0;
            }
              else
              {
                j++
                enemyScore++
                alert("❌"+"You chose rock and your opponent chose scissors!\nHowever, you answered the question wrong.\nYou lost.\n"+guestName+" - "+allyScore+"\nOpponent - "+enemyScore);
                rockPaperScissor==0;
          }
      }
            else if (questionGen==4)
            {
              q4=+prompt("This equation shows how the amount Lucas earns from his after-school job depends on how many hours he works:e = 12h. The variable h represents how many hours he works. The variable e represents how much money he earns. How much money will Lucas earn after working for 6 hours?")
              if(q4==72)
                {
                  j++
                  allyScore++
                  alert("✅"+"You chose rock and your opponent chose scissors!\nFurthermore, you answered the question right!\nYou won!\n"+guestName+" - "+allyScore+"\nOpponent - "+enemyScore);
                  rockPaperScissor==0;
            }
              else
              {
                j++
                enemyScore++
                alert("❌"+"You chose rock and your opponent chose scissors!\nHowever, you answered the question wrong.\nYou lost.\n"+guestName+" - "+allyScore+"\nOpponent - "+enemyScore);
                rockPaperScissor==0;
          }
      }
          else if (questionGen==5)
            {
              q5=+prompt("What is the square root of 225?")
              if(q5==15)
                {
                  j++
                  allyScore++
                  alert("✅"+"You chose rock and your opponent chose scissors!\nFurthermore, you answered the question right!\nYou won!\n"+guestName+" - "+allyScore+"\nOpponent - "+enemyScore);
                  rockPaperScissor==0;
            }
              else
              {
                j++
                enemyScore++
                alert("❌"+"You chose rock and your opponent chose scissors!\nHowever, you answered the question wrong.\nYou lost.\n"+guestName+" - "+allyScore+"\nOpponent - "+enemyScore);
                rockPaperScissor==0;  
           }
      }
             else if (questionGen==6)
            {
              q6=+prompt("How many states are there in the United States of America")
              if(q6==50)
                {
                  j++
                  allyScore++
                  alert("✅"+"You chose rock and your opponent chose scissors!\nFurthermore, you answered the question right!\nYou won!\n"+guestName+" - "+allyScore+"\nOpponent - "+enemyScore);
                  rockPaperScissor==0;
                }
              else
                {
                  j ++
                  enemyScore++
                alert("❌"+"You chose rock and your opponent chose scissors!\nHowever, you answered the question wrong.\nYou lost.\n"+guestName+" - "+allyScore+"\nOpponent - "+enemyScore);
                rockPaperScissor==0;  
                }
            } 
          }    
      }
     }
//Paper possibility INSANE
	  else if(answer=="paper" || answer=="Paper" || answer=="PAPER" || answer=="P" || answer=="p")
    {
      //Paper+Rock INSANE
      if(rockPaperScissor==1)
      {
        questionGen=~~(Math.random() * 5) + 1
        alert("🚨\nWARNING! ANSWER THE QUESTION RIGHT TO CLAIM YOUR POINT");
        for (let j=1;j<2;j++)
          {
            //WinningQuestions
            if (questionGen==1)
            {
              q1=+prompt("How many provinces are there in Canada?")
              if(q1==10)
                {
                  j++
                  allyScore++
                  alert("✅"+"You chose paper and your opponent chose rock!\nFurthermore, you answered the question right!\nYou won!\n"+guestName+" - "+allyScore+"\nOpponent - "+enemyScore);
                  rockPaperScissor==0;
            }
              else
              {
                j++
                enemyScore++
                alert("❌"+"You chose paper and your opponent chose rock!\nHowever, you answered the question wrong.\nYou lost.\n"+guestName+" - "+allyScore+"\nOpponent - "+enemyScore);
                rockPaperScissor==0;
              }
            }
            else if (questionGen==2)
            {
              q2=+prompt("Bob spent $184.59 to buy 3 hockey sticks. If each hockey stick was the same price, how much did 1 cost?\n(DONT INCLUDE $)")
              if(q2==61.53)
                {
                  j++
                  allyScore++
                  alert("✅"+"You chose paper and your opponent chose rock!\nFurthermore, you answered the question right!\nYou won!\n"+guestName+" - "+allyScore+"\nOpponent - "+enemyScore);
                  rockPaperScissor==0;
            }
              else
              {
                j++
                enemyScore++
                alert("❌"+"You chose paper and your opponent chose rock!\nHowever, you answered the question wrong.\nYou lost.\n"+guestName+" - "+allyScore+"\nOpponent - "+enemyScore);
                rockPaperScissor==0;
          }
      }
             else if (questionGen==3)
            {
              q3=+prompt("A single trading card is 9 centimetres long by 6 centimetres wide. What is its area?")
              if(q3==54)
                {
                  j++
                  allyScore++
                  alert("✅"+"You chose paper and your opponent chose rock!\nFurthermore, you answered the question right!\nYou won!\n"+guestName+" - "+allyScore+"\nOpponent - "+enemyScore);
                  rockPaperScissor==0;
            }
              else
              {
                j++
                enemyScore++
                alert("❌"+"You chose paper and your opponent chose rock!\nHowever, you answered the question wrong.\nYou lost.\n"+guestName+" - "+allyScore+"\nOpponent - "+enemyScore);
                rockPaperScissor==0;
          }
      }
            else if (questionGen==4)
            {
              q4=+prompt("This equation shows how the amount Lucas earns from his after-school job depends on how many hours he works:e = 12h. The variable h represents how many hours he works. The variable e represents how much money he earns. How much money will Lucas earn after working for 6 hours?")
              if(q4==72)
                {
                  j++
                  allyScore++
                  alert("✅"+"You chose paper and your opponent chose rock!\nFurthermore, you answered the question right!\nYou won!\n"+guestName+" - "+allyScore+"\nOpponent - "+enemyScore);
                  rockPaperScissor==0;
            }
              else
              {
                j++
                enemyScore++
                alert("❌"+"You chose paper and your opponent chose rock!\nHowever, you answered the question wrong.\nYou lost.\n"+guestName+" - "+allyScore+"\nOpponent - "+enemyScore);
                rockPaperScissor==0;
          }
      }
          else if (questionGen==5)
            {
              q5=+prompt("What is the square root of 225?")
              if(q5==15)
                {
                  j++
                  allyScore++
                  alert("✅"+"You chose paper and your opponent chose rock!\nFurthermore, you answered the question right!\nYou won!\n"+guestName+" - "+allyScore+"\nOpponent - "+enemyScore);
                  rockPaperScissor==0;
            }
              else
              {
                j++
                enemyScore++
                alert("❌"+"You chose paper and your opponent chose rock!\nHowever, you answered the question wrong.\nYou lost.\n"+guestName+" - "+allyScore+"\nOpponent - "+enemyScore);
                rockPaperScissor==0;  
           }
      }
             else if (questionGen==6)
            {
              q6=+prompt("How many states are there in the United States of America")
              if(q6==50)
                {
                  j++
                  allyScore++
                  alert("✅"+"You chose paper and your opponent chose rock!\nFurthermore, you answered the question right!\nYou won!\n"+guestName+" - "+allyScore+"\nOpponent - "+enemyScore);
                  rockPaperScissor==0;
                }
              else
                {
                  j ++
                  enemyScore++
                alert("❌"+"You chose paper and your opponent chose rock!\nHowever, you answered the question wrong.\nYou lost.\n"+guestName+" - "+allyScore+"\nOpponent - "+enemyScore);
                rockPaperScissor==0;  
                }
            } 
          }
      }
      //Paper+Paper INSANE
      else if(rockPaperScissor==2)
      {
        enemyScore++
        alert("❌"+"\nYou chose paper and your opponent chose paper!\nYou lost!\n"+guestName+" - "+allyScore+"\nOpponent - "+enemyScore);
          rockPaperScissor==0;
      }
      //Paper+Scissors INSANE
      else if(rockPaperScissor==3)
      {
        enemyScore++
        alert("❌"+"You chose paper and your opponent chose scissors!\nYou lost!\n"+guestName+" - "+allyScore+"\nOpponent - "+enemyScore);
        rockPaperScissor==0;
      }
      }
    //Scissor possibility INSANE
      else if(answer=="scissors" || answer=="SCISSORS" || answer=="Scissors" || answer=="scissor" || answer=="S" || answer=="s")
        {
      //Scissor+Rock
      if(rockPaperScissor==1)
        {  
          enemyScore++
        alert("❌"+"You chose scissors and your opponent chose rock!\nYou lost!\n"+guestName+" - "+allyScore+"\nOpponent - "+enemyScore);
        rockPaperScissor==0;
        }
      //Scissor+Paper INSANE
      else if(rockPaperScissor==2)
      {
        questionGen=~~(Math.random() * 5) + 1
        alert("🚨\nWARNING! ANSWER THE QUESTION RIGHT TO CLAIM YOUR POINT");
        for (let j=1;j<2;j++)
          {
            //WinningQuestions
            if (questionGen==1)
            {
              q1=+prompt("How many provinces are there in Canada?")
              if(q1==10)
                {
                  j++
                  allyScore++
                  alert("✅"+"You chose scissors and your opponent chose paper!\nFurthermore, you answered the question right!\nYou won!\n"+guestName+" - "+allyScore+"\nOpponent - "+enemyScore);
                  rockPaperScissor==0;
            }
              else
              {
                j++
                enemyScore++
                alert("❌"+"You chose scissors and your opponent chose papaer!\nHowever, you answered the question wrong.\nYou lost.\n"+guestName+" - "+allyScore+"\nOpponent - "+enemyScore);
                rockPaperScissor==0;
              }
            }
            else if (questionGen==2)
            {
              q2=+prompt("Bob spent $184.59 to buy 3 hockey sticks. If each hockey stick was the same price, how much did 1 cost?\n(DONT INCLUDE $)")
              if(q2==61.53)
                {
                  j++
                  allyScore++
                  alert("✅"+"You chose scissors and your opponent chose paper!\nFurthermore, you answered the question right!\nYou won!\n"+guestName+" - "+allyScore+"\nOpponent - "+enemyScore);
                  rockPaperScissor==0;
            }
              else
              {
                j++
                enemyScore++
                alert("❌"+"You chose scissors and your opponent chose paper!\nHowever, you answered the question wrong.\nYou lost.\n"+guestName+" - "+allyScore+"\nOpponent - "+enemyScore);
                rockPaperScissor==0;
          }
      }
             else if (questionGen==3)
            {
              q3=+prompt("A single trading card is 9 centimetres long by 6 centimetres wide. What is its area?")
              if(q3==54)
                {
                  j++
                  allyScore++
                  alert("✅"+"You chose scissors and your opponent chose paper!\nFurthermore, you answered the question right!\nYou won!\n"+guestName+" - "+allyScore+"\nOpponent - "+enemyScore);
                  rockPaperScissor==0;
            }
              else
              {
                j++
                enemyScore++
                alert("❌"+"You chose scissors and your opponent chose paper!\nHowever, you answered the question wrong.\nYou lost.\n"+guestName+" - "+allyScore+"\nOpponent - "+enemyScore);
                rockPaperScissor==0;
          }
      }
            else if (questionGen==4)
            {
              q4=+prompt("This equation shows how the amount Lucas earns from his after-school job depends on how many hours he works:e = 12h. The variable h represents how many hours he works. The variable e represents how much money he earns. How much money will Lucas earn after working for 6 hours?")
              if(q4==72)
                {
                  j++
                  allyScore++
                  alert("✅"+"You chose scissors and your opponent chose paper!\nFurthermore, you answered the question right!\nYou won!\n"+guestName+" - "+allyScore+"\nOpponent - "+enemyScore);
                  rockPaperScissor==0;
            }
              else
              {
                j++
                enemyScore++
                alert("❌"+"You chose scissors and your opponent chose paper!\nHowever, you answered the question wrong.\nYou lost.\n"+guestName+" - "+allyScore+"\nOpponent - "+enemyScore);
                rockPaperScissor==0;
          }
      }
          else if (questionGen==5)
            {
              q5=+prompt("What is the square root of 225?")
              if(q5==15)
                {
                  j++
                  allyScore++
                  alert("✅"+"You chose scissors and your opponent chose paper!\nFurthermore, you answered the question right!\nYou won!\n"+guestName+" - "+allyScore+"\nOpponent - "+enemyScore);
                  rockPaperScissor==0;
            }
              else
              {
                j++
                enemyScore++
                alert("❌"+"You chose scissors and your opponent chose paper!\nHowever, you answered the question wrong.\nYou lost.\n"+guestName+" - "+allyScore+"\nOpponent - "+enemyScore);
                rockPaperScissor==0;  
           }
      }
             else if (questionGen==6)
            {
              q6=+prompt("How many states are there in the United States of America")
              if(q6==50)
                {
                  j++
                  allyScore++
                  alert("✅"+"You chose scissors and your opponent chose paper!\nFurthermore, you answered the question right!\nYou won!\n"+guestName+" - "+allyScore+"\nOpponent - "+enemyScore);
                  rockPaperScissor==0;
                }
              else
                {
                  j ++
                  enemyScore++
                alert("❌"+"You chose scissors and your opponent chose paper!\nHowever, you answered the question wrong.\nYou lost.\n"+guestName+" - "+allyScore+"\nOpponent - "+enemyScore);
                rockPaperScissor==0;  
                }
            } 
          }    
      }
      //Scissor+Scissors INSANE
      else if(rockPaperScissor==3)
      {
        enemyScore++
        alert("❌"+"\nYou chose scissors and your opponent chose scissors!\nYou lost!\n"+guestName+" - "+allyScore+"\nOpponent - "+enemyScore);
          rockPaperScissor==0;
      }
    }
   }
}


  //Classic Mode code
else if (gameMode=="classic" || gameMode=="Classic" || gameMode=="CLASSIC" || gameMode=="C" || gameMode=="c")
  {
    while (rounds==0)
    {
      rounds=+prompt(picture+"\nHi "+guestName+". "+"How many rounds do you want the game to be? \n(Please pick an odd number!)");
      if (rounds%2==0)
      {  
        rounds=0
        alert(picture+"\nPlease enter a odd number");
      }
    }
  if(rounds==1)
  {
    alert(picture+"\nThis rock paper scissor game will go on for "+ rounds + " round!");
  }
  else
  {
    alert(picture+"\nThis rock paper scissor game will go on for "+ rounds + " rounds!");
  }
  //This is the code to the game
  for (let x=1;x<=rounds;x++)
  {
	  alert(picture+"\nRound "+x);
	  answer=prompt(picture+"\nPlease type either rock, paper, or scissors! \nPlease be weary of your spelling")
    rockPaperScissor=~~(Math.random() * 3) + 1;
    alert("🗿"+"\nRock!");
    alert("📄"+"\nPaper!");
    alert("✂"+"\nScissors!");
    alert("🔫"+"\nShoot!");
    if(answer!="rock" && answer!="Rock" && answer!="ROCK" && answer!="paper" && answer!="Paper" && answer!="PAPER" && answer!="scissors" && answer!="Scissor" && answer!="SCISSORS" && answer!="scissor" && answer!="r" && answer!="R" && answer!="s" && answer!="S" && answer!="P" && answer!="p")
    {
      alert("🚫🚫🚫"+"\nUh oh! It looks like your entry was invalid! Looks like you have inputed a invalid character! Please try again");
      x--
    }
    //Rock possibility
    else if(answer=="rock" || answer=="Rock" || answer=="ROCK" || answer=="r" || answer=="R")

    {
      //Rock+Rock
      if(rockPaperScissor==1)
        {  
          alert("⚠️"+"\nYou chose rock and your opponent chose rock!\nIt's a tie! This round will not count.\n"+guestName+" - "+allyScore+"\nOpponent - "+enemyScore);
          x--
          rockPaperScissor==0;
        }
      //Rock+Paper
      else if(rockPaperScissor==2)
      {
        enemyScore++
        alert("❌"+"You chose rock and your opponent chose paper!\nYou lost!\n"+guestName+" - "+allyScore+"\nOpponent - "+enemyScore);
        rockPaperScissor==0;
      }
      //Rock+Scissors
      else if(rockPaperScissor==3)
      {
        allyScore++
        alert("✅"+"You chose rock and your opponent chose scissors!\nYou won!\n"+guestName+" - "+allyScore+"\nOpponent - "+enemyScore);
        rockPaperScissor==0;
      }
    }
      //Paper possibility
	  else if(answer=="paper" || answer=="Paper" || answer=="PAPER" || answer=="P" || answer=="p")
    {
      //Paper+Rock
      if(rockPaperScissor==1)
        {  
          allyScore++
        alert("✅"+"You chose paper and your opponent chose rock!\nYou won!\n"+guestName+" - "+allyScore+"\nOpponent - "+enemyScore);
        rockPaperScissor==0;
        }
      //Paper+Paper
      else if(rockPaperScissor==2)
      {
        alert("⚠️"+"\nYou chose paper and your opponent chose paper!\nIt's a tie! This round will not count.\n"+guestName+" - "+allyScore+"\nOpponent - "+enemyScore);
          x--
          rockPaperScissor==0;
      }
      //Paper+Scissors
      else if(rockPaperScissor==3)
      {
        enemyScore++
        alert("❌"+"You chose paper and your opponent chose scissors!\nYou lost!\n"+guestName+" - "+allyScore+"\nOpponent - "+enemyScore);
        rockPaperScissor==0;
      }
    }
      //Scissor possibility
      else if(answer=="scissors" || answer=="SCISSORS" || answer=="Scissors" || answer=="scissor" || answer=="S" || answer=="s")
        {
      //Scissor+Rock
      if(rockPaperScissor==1)
        {  
          enemyScore++
        alert("❌"+"You chose scissors and your opponent chose rock!\nYou lost!\n"+guestName+" - "+allyScore+"\nOpponent - "+enemyScore);
        rockPaperScissor==0;
        }
      //Scissor+Paper
      else if(rockPaperScissor==2)
      {
        allyScore++
        alert("✅"+"You chose scissors and your opponent chose paper!\nYou won!\n"+guestName+" - "+allyScore+"\nOpponent - "+enemyScore);
        rockPaperScissor==0;
      }
      //Scissor+Scissors
      else if(rockPaperScissor==3)
      {
        alert("⚠️"+"\nYou chose scissors and your opponent chose scissors!\nIt's a tie! This round will not count.\n"+guestName+" - "+allyScore+"\nOpponent - "+enemyScore);
          x--
          rockPaperScissor==0;
      }
    }
  }
}

//Victory/Defeat menu
if(allyScore<enemyScore)
  {
    alert("❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌"+"\n"+guestName+" you have been defeated!");
  }
else
  {
     alert("✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅"+"\n"+guestName+", you are victorius!");
  }


function myFunction() {
 document.getElementById("StatsboxText1").innerHTML = allyScore;
 document.getElementById("StatsboxText2").innerHTML = enemyScore;
 document.getElementById("StatsboxText3").innerHTML = rounds;
 document.getElementById("NameLine").innerHTML = guestName;
}