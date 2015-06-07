var a1 = ["AA", "BB", "CC"];
// trying to copy a1 into a2 to hopefully preserve a1's current value
var a2 = a1;
console.log(a1, a2, a1 === a2);
console.log("as expected, a1 and a2 are equual");

// going to change a2 by adding a value to the array
a2.push("DD");
console.log(a1, a2, a1 === a2);
console.log("oops, they are still equal. a1 is a mutable array and a2 is simply a reference to a1");
