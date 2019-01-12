const fs = require('fs');
const path = require('path');
const os = require('os');
const faker = require('faker');
    // output file in the same folder

const filename = path.join(__dirname, 'output.csv');
const finalCSV = fs.createWriteStream(filename);

// const appendToFile = function() { 
//   fs.writeFileSync(filename, output2.join(os.EOL), {'flag':'a'},  function(err) {
//     if (err) {
//         return console.error(err);
//     }
//   });
// }


const makeChunk = async function() {
  chunkOutput = [];
  for (let i = 0; i < 1e6; i++) {
      const row = [];
     
      row.push('name:' +faker.commerce.productName());
      row.push('imageURL:' +faker.random.image());
      row.push('price:' +faker.finance.amount());
     chunkOutput.push(row);
     finalCSV.write(row.join()+';\n');

     if ( i % 50000===0) {
      console.log ('multiple of 50k');
     }
  }
}

// this function will be used to make the other 9M records
// const makeChunkOnAwait = function() {
//   chunkOutput = [];
//   for (let i = 0; i < 1e6; i++) {
//       const row = [];
     
//       row.push('name:' +faker.commerce.productName());
//       row.push('imageURL:' +faker.random.image());
//       row.push('price:' +faker.finance.amount());
//      chunkOutput.push(row);
//      finalCSV.write(row.join()+';\n');

//      if ( i % 50000===0) {
//       console.log ('multiple of 50k');
//      }
//   }
// }

makeChunk();
finalCSV.end();

