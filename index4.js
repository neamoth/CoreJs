{
    // we can consider this as a block
}

// Like example

if(true) console.log("This is a single statement");

/*
 In that case we don't need to use the block scope because there are 
 single statement but if we have more statementment we have to use 
 BLock.
 */

 if(true){
    var a = 200;
    console.log(a);
 }

 /*
Now let's discover why we say let and const are in block scope
 */
console.log("Block scope in javascript");
{
    var a = 100;
    let b = 20;
    const c = 30;
    console.log(a);
    console.log(b);
    console.log(c);
}

console.log(a);
// console.log(b); This will through a  Reference Error: NOt defined

 /*
So, what is the reason, we have declear let in the block right?
why is this error then,
here is the differernce between the block scope and globle scope.

as we see, we can access var a from the global scope but we can't access
let or const, because it on the block scope
the value is assign on the block.
when the line 31 means the } is crossed the block scope memory will be
close from the Execution context.
So there is no such variable with let b avaible. This is the  reason
we get this error:
 */


// There are something called shadowing: (legal shadowing)
console.log("Shadowing in Javascipt");
var x = 100;
var g = 500;
let y = 200;
{
    var x = 10;
    let y = 20;
    let g = 60;
    const z = 30;
    console.log(x);
    console.log(y);
    console.log(z);
    console.log(g); // it possible because it never goes out of the block
}
console.log(x);
 /*
Here the value of x being shadowed in global scope and also in the
block scope with 10. Because they are representing the same
memory allocation in global scope.
 */
console.log(y);
/*
We can see that the x value being replace in the block scope,
but being restored in the global scope because, the value of 
y in the block scope is reserved on something called "Script"
But even though, they are sharing same memory space. 
*/

// illegle shadowing:
/*
let aa = 10;
{
    var aa = 100;
}

This is not possible because var aa can goes out of the block Scope
and then we can see the error of aa is already defined.
*/
