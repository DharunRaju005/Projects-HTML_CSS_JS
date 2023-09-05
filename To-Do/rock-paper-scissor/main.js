let score=(JSON.parse(localStorage.getItem('score'))) || {
        Wins:0,
        lose:0,
        Tie:0,
    };
    updateScore();
//   if (score===null){
//     score={
//         Wins:0,
//         lose:0,
//         Tie:0,
//     };
//   }

let isAutoPlaying=false;
let intervalId;
function autoplay(){
    if(!isAutoPlaying){
            intervalId=setInterval(function(){
                const move=pickComputerMove();
                playGame(move);
            },
        1000);
        isAutoPlaying=true;
    }
    else{
        clearInterval(intervalId);
        isAutoPlaying=false;
    }
}
  function playGame(move){
  const computerMove=pickComputerMove();
  let result='';
  if(move==='rock'){       
        if(computerMove==='rock'){
            result='tie';
        }
        else if(computerMove==='paper'){
            result='lose';
        }
        else{
            result='won';
        }
    }
    else if(move==='paper'){       
        if(computerMove==='paper'){
            result='tie';
        }
        else if(computerMove==='scissors'){
            result='lose';
        }
        else{
            result='won';
        }
    }
    else if(move==='scissors'){       
        if(computerMove==='paper'){
            result='won';
        }
        else if(computerMove==='scissors'){
            result='tie';
        }
        else{
            result='lose';
        }
  }
  if(result==='won'){
    score.Wins++;
  }
  else if(result==='tie'){
    score.Tie++;
  }
  else{
    score.lose++;
  }

  localStorage.setItem('score',JSON.stringify(score));
  updateScore();
  document.querySelector('.js-result')
  .innerHTML=result;
  document.querySelector('.js-move')
  .innerHTML=`You <img src="${move}-emoji.png"
  class="move-icon">
  <img src="${computerMove}-emoji.png" class="move-icon">
  Computer`;
  }

  function updateScore(){
    document.querySelector('.js-score')
        .innerHTML= `Win :${score.Wins} Lose: ${score.lose} Tie :${score.Tie}`;
  }

  function pickComputerMove(){
    let computerMove='';
    const randomNumber=Math.random();
    if(randomNumber>=0 && randomNumber<1/3){
        computerMove='rock';
        }
        else if(randomNumber>=1/3 && randomNumber<2/3){
            computerMove='paper';
        }
        else{
            computerMove='scissors';
        }
        return computerMove;
}