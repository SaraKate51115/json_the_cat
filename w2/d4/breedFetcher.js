const request = require('request');

const fetchBreedDescription = function(inputBreed, callback) {
  const breedURL = 'https://api.thecatapi.com/v1/breeds/search?q=' + inputBreed;

  request(breedURL, (error, response, body) => {
  
    if (error) throw error;
  
    const data = JSON.parse(body);
    //console.log(data)

    let breedInfo = data[0];

    if (breedInfo) {
      callback(null, breedInfo.description);
    } else {
      callback('no breed');
    }
    
  });
};

module.exports = { fetchBreedDescription };