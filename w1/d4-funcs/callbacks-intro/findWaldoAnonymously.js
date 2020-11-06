// The second argument/parameter is expected to be a (callback) function
const findWaldo = function(names, found) {
  //for (let i = 0; i < names.length; i++) {
  names.forEach(function(names) {
    //let name = names[i];
    if (names === "Waldo") {
      found(names);   // execute callback
    }
  })
}

//const actionWhenFound = function(findWaldo) {
//  console.log("Found him!");
//}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], function(names) {
  console.log("Found him!");
});

