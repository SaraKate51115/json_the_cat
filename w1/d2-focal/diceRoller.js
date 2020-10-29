const args = process.argv.slice(2)
let results = ''
const getRandomRoll = function() {
  const numOfSides = 6;
  return Math.floor(Math.random() * Math.floor(numOfSides)) + 1
}

for (let i = 0; i < args; i++) {
  console.log(`Rolled ${args} dice: ` + getRandomRoll())
}

//Change code to have result showing in one sentence.
 
