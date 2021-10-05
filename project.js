const p1Display = document.querySelector('#p1Display');
const p2Dispaly = document.querySelector('#p2Display');
const resetButton = document.querySelector('#Reset')
const p1button = document.querySelector('#button1');
const p2button= document.querySelector('#button2');
const winningscoreSelect = document.querySelector('#playTo')

let p1Score = 0;
let p2Score = 0;
let isGameOver = false;
let winningScore = 3;

alert("Thanks for the Information.....");
setTimeout(()=>{alert("Now keep your score here....")},300);

winningscoreSelect.addEventListener('change',function(){
    winningScore = parseInt(this.value);
    reset();
    
})

p1button.addEventListener('click',function(){
      if(!isGameOver){
          p1Score+=1
          if(p1Score === winningScore){
              isGameOver = true;
              p1Display.classList.add('winner');
              p2Display.classList.add('loser');
              setTimeout(()=>{alert("Congrats Team A wins!!")},500);
             setTimeout(()=>{ alert("Hey Press the Reset key to start recording again or click to submit.")},1000);
          }
          p1Display.textContent = p1Score;
      }
})
p2button.addEventListener('click',function(){
    if(!isGameOver){
        p2Score+=1
        if(p2Score === winningScore){
            isGameOver = true;
            p2Display.classList.add('winner');
            p1Display.classList.add('loser');
            setTimeout(()=>{alert("Congrats Team B wins!!")},500);
            setTimeout(()=>{ alert("Hey Press the Reset key to start recording again or click to submit.")},1000);
          }
            
        p2Display.textContent = p2Score;
    }
})




resetButton.addEventListener('click',reset)

function reset(){
    isGameOver = false;
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    p1Display.classList.remove('winner','loser');
    p2Display.classList.remove('winner','loser');
}


