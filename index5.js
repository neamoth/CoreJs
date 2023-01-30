console.log("Closures in JS");
document.write("Closures in JS");


/*
So, What is closure?
we can define a closure like this, A function along with laxical scope of bundle together is closuser
Or,
Functions along with it scope.
*/
function theClosure() {
    var y = 100; // Here in this, there will be create a closure named "theClosure"
    function a() {
        var x = 5; // Here in this, there will be create a closure named "a"
        function b() {
            console.log(x, " and ", y); // x value will be come from the reference from the global scope of a and y will be come from the reference of theClosure global scope.
        }
        b();
    }
    a()
}
theClosure()

function c() {
    var z = 6;
    function d() {
        console.log(z);
    }
    var z = 500; // It will returned 500 because the global scope will assign z as 500. it doesn't matter function write before z reassigning. it will show where the function being execute.
    return d;
}
var f = c();
f();

