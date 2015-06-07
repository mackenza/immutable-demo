Immutable = require("immutable");

var a1 = Immutable.List.of(["AA", "BB", "CC"]);
// trying to copy a1 into a2 to hopefully preserve a1's current value
var a2 = a1;
console.log(a1, a2, a1 === a2);
console.log("as expected, a1 and a2 are equual. Note the arrays are of type List now though");

// going to change a2 by adding a value to the array
a2.push("DD");
console.log(a1, a2, a1 === a2);
console.log("hmmm... no value was pushed to a2. This is because a2 (and a1) are immutable");
