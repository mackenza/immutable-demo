var SImmutable = require("seamless-immutable");

var a1 = SImmutable(["AA", "BB", "CC"]);
// this will throw an exception. Seamless-immutable does not allow any mutative methods
var a2 = a1.push("DD");
