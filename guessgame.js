let guesses = 0;
const ans = Math.floor( Math.random()* 10 + 1 )

console.log(ans);

document.getElementById("btn").onclick = function(){

    let guess = document.getElementById("guess").value;
    guesses+=1;

    if(ans==guess){
        if(guesses<=2) {
            alert(`Wow!! You answered it correctly in ${guesses} try`)
        }else{
            alert(`Damn!! You try ${guesses} guesses before you answered it correctly`)
        }
    }else if(guess>ans && ans+2 == guess){
        alert("Little Lower");
    }else if(guess < ans && guess==ans-2){
        alert("Little Higher")
    }
    else{
        alert("Go and try it again. Weakling!");
    }
}