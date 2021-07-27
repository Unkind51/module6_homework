function getNum(a, b) {
    const intervalId = setInterval(function (){
        console.log(a);
        if (a == b){
            clearInterval(intervalId);
        }
        a++;
    }, 1000);
}
getNum(1, 10)
