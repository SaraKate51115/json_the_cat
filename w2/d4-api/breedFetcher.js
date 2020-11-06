const request = require('request');
const input = process.argv.slice(2);
const inputBreed = input.toString();
const breedURL = 'https://api.thecatapi.com/v1/breeds/search?q=' + inputBreed;

request(breedURL, (error, response, body) => {
  
  if (error) throw error;

  const data = JSON.parse(body);
  console.log(data[0].name);
  console.log(data[0].description);
});


//TEST CASES:
//requested breed not found
// && request failed