// Major todo's: 
// 1. change url generation to randomly select 1 from 
  // a list of 1000 image urls



const fs = require('fs');
const path = require('path');
const os = require('os');
const faker = require('faker');

const filename = path.join(__dirname, 'output.csv');
const finalCSV = fs.createWriteStream(filename);

<<<<<<< HEAD

=======
const makeChunk = async function(outputFile) {
  //chunkOutput = [];
  for (let i = 0; i < 1e7; i++) {
     // const row = [];
     let nameStr = 'name:' +faker.commerce.productName();
     let imgStr = 'imageURL:' +faker.random.image();
     let priceStr = 'price:' +faker.finance.amount();
     let newLineStr = ';\n';
     let row = nameStr+imgStr+priceStr+newLineStr;
     //chunkOutput.push(row);
     outputFile.write(row);
>>>>>>> cd4715f... Script now generates 10m records in singular csv

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

<<<<<<< HEAD
// this function will be used to make the other 9M records
// const makeChunkOnAwait = function() {
//   chunkOutput = [];
//   for (let i = 0; i < 1e6; i++) {
//       const row = [];
     
=======

MAKE A SEPERATE DIRECTORY FOR THE CSV FOR EASY GIT-IGNORE


makeChunks = async function() {
  await makeChunk(finalCSV1);
  finalCSV1.end();
}

makeChunks()
// const fs = require('fs');
// const path = require('path');
// const os = require('os');
// const faker = require('faker');



// // async function asyncForEach(array, callback) {
// //   for (let index = 0; index < array.length; index++) {
// //     await callback(array[index], index, array);
// //   }
// // }

// // asyncForEach([1, 2, 3], async (num) => {
// //   await waitFor(50);
// //   console.log(num);
// // })

// const MakeCSV = async function() {
//   const filename = path.join(__dirname, 'output.csv');
  

//   let output = [];
//   let row = [];
//   const loadRows = function() {
//     while (row.length <4e6) {
>>>>>>> cd4715f... Script now generates 10m records in singular csv
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

