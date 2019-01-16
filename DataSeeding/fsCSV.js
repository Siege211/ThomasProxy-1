// Major todo's: 
// 1. change url generation to randomly select 1 from 
  // a list of 1000



const fs = require('fs');
const path = require('path');
const os = require('os');
const faker = require('faker');

const filename1 = path.join(__dirname, 'output1.csv');
const finalCSV1 = fs.createWriteStream(filename1);

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

    if (i%1e5 === 0) {
      console.log(`${i}`)
    }
  }
}




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
//       row.push('name:' +faker.commerce.productName());
//       row.push('imageURL:' +faker.random.image());
//       row.push('price:' +faker.finance.amount());
//       row.push(';\n')
//     }
//   }

// //for (i=0;i<5;i++) {
   
    
//     await loadRows();
//     output.push(row.join()+';\n'); 
//      fs.writeFileSync(filename, output.join(os.eol),'utf8',0o666,'a');
    
//   }
// //}



// const makeCSVs = async function() {
//   await MakeCSV();
//   await MakeCSV();
//   await MakeCSV();
// }

// makeCSVs();


// // const makeChunk = async function(outputFile) {
// //   chunkOutput = [];
// //   for (let i = 0; i < 1.25e5; i++) {
// //       const row = [];
     
// //       row.push('name:' +faker.commerce.productName());
// //       row.push('imageURL:' +faker.random.image());
// //       row.push('price:' +faker.finance.amount());
// //      chunkOutput.push(row);
// //      outputFile.write(row.join()+';\n');

// //      if ( i % 250000===0) {
// //       console.log ('multiple of 250k');
// //      }
// //   }
//}
