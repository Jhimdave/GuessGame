
let arr = ["A", "J", "K", "Q", "JOKER", "2", "3", "4", "5","6","7","8","9","10"];

document.getElementById("btn").onclick = function(){

    let i = arr.length;

    while(i !=0){

        let random = Math.floor(Math.random()*arr.length);
        i--;

        let temp = arr[i];
        arr[i] = arr[random];
        arr[random] = temp;
    }
    
    return document.getElementById("myLabel").innerHTML = arr[1] + ", " + arr[5] + ", " + arr[2] + ", " + arr[4];

}