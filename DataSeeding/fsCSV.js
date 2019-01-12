// Major todo's: 
// 1. change url generation to randomly select 1 from 
  // a list of 1000 image urls



const fs = require('fs');
const path = require('path');
const os = require('os');
const faker = require('faker');

const filename = path.join(__dirname, 'output.csv');
const finalCSV = fs.createWriteStream(filename);



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

