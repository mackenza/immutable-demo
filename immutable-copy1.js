Immutable = require("immutable");

var a1 = Immutable.List.of(["AA", "BB", "CC"]);
// trying to copy a1 into a2 to hopefully preserve a1's current value
var a2 = a1;
console.log(a1, a2, a1 === a2);
console.log("as expected, a1 and a2 are equual. Note the arrays are of type List now though");

