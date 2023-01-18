

// var plusAnswer = plus(n);
// var plusAnswer2  = plus(3);
// console.log(n);
// console.log(plusAnswer);
// console.log(plusAnswer2);

/*
So basicall eikhane jeita hobe sheita holo
1st, jehetu "n" ekta variable so, eikhane n = undefined set hobe.
then, jehetu function plusAnswer er moddhe n er value dawa hoise jeita ekno amra painai. so oitar answer NaN ashbe
last, jehetu plusAnswer2 te amra value 3 niye korsi. oita oita properly execute hobe.
*/

var n = 2;

function plus(num) {
    function mult(number) {
        var answer = number * 3;
        return answer;
    }

    var multNumber = mult(3);
    var ans = multNumber * num;
    return ans;
}


var plusAnswer = plus(n);
var plusAnswer2  = plus(3);
console.log(n);
console.log(plusAnswer);
console.log(plusAnswer2);
