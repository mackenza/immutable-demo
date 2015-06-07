var SImmutable = require("seamless-immutable");

var a1 = SImmutable(["AA", "BB", "CC"]);
// this will throw an exception. Seamless-immutable does not allow any mutative methods
// var a2 = a1.push("DD");

// concat is not mutative and so we are creating a new immutable array from a1 concat'ing "DD"
a2 = SImmutable(a1.concat("DD"));
console.log(a1, a2, a1 === a2);
