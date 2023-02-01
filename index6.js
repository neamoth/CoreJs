console.log("setTimeout with Clouser");
// function x() {
//     for (var i = 1; i <= 5; i++) {
//         setTimeout(function () {
//             console.log(i);
//         }, i * 1000);
//     }
//     console.log("Timeout started")
// }
// x();

// This will print 5 times
/*
The reason is javascript never wait for the timeout
this will immediately run the loop then print the
console results and then it will wait 1s each and
we know that the value of i will be contained and 
remember for use. But it will set and the end 1 to 6
and thats why everytime 6 will be printed.
*/

// function y() {
//     for (let i = 1; i <= 5; i++) {
//         setTimeout(function () {
//             console.log(i);
//         }, i * 6000);
//     }
//     console.log("Timeout started 2")
// }
// y();

/* 
But this problem can be solved with using let. 
because we know that let has its on block scope.
so every time the loop run, it store the value into different memory reference.
but we can solve this problem just store it into a function using closure. like this
*/



function z() {
    for (var i = 1; i <= 5; i++) {
        function close(x){
            //because its create a new scope every time. and keep the value on it
            setTimeout(function () {
                console.log(x);
            }, x * 1000);
        }
        close(i)
    }
    console.log("Timeout started")
}
z();