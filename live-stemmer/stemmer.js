const Max = require('max-api');

// Post data from Node to Max
Max.post('Hello from Node!');

// Get & handle data from Max
Max.addHandler('test', () => {
  Max.post('Got test!');
});

//
// Stemmer (MVP) Flow
//
// - Check if output folder exists 
//    - If not, mkdir at path "../[Project]/[Set name]-Stems"
// - Export/bounce each Track in the Set into Stems folder
//    - []
