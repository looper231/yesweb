
var x = setInterval(timer, 1000)
x = timer();
function timer() {
    let deadline = new Date("oct 1, 2024 00:00:00").getTime();
    let now = new Date().getTime();
    let t = deadline - now;
    let days = Math.floor(t/(1000*60*60*24));
    let hours = Math.floor(t%(1000*60*60*24)/(1000*60*60));
    let minutes = Math.floor(t%(1000*60*60)/(1000*60));
    let seconds = Math.floor(t%(1000*60)/1000);
    document.getElementById('timer').innerHTML = "Осталось " + days + "Д " + hours + "Ч " + minutes + "М " + seconds + "С";
    if(t<0){
        clearInterval(x);
        document.getElementById("timer").innerHTML = "Waiting for updates...";
    }
}