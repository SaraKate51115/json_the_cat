// This file will be the one that users can run and provide the breed name to. It will then require the breedFetcher file and call its exported function.
const { fetchBreedDescription } = require('./breedFetcher');

const input = process.argv.slice(2);
const inputBreed = input.toString();

fetchBreedDescription(inputBreed, (error, desc) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(desc);
  }
});