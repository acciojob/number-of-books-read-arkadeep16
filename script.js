// const human = {
//   name: 'Arka',
//   age: 24,
//   height: 5.8,
//   weight: 55,
//   skills: {
//     primary_skills: 'html' + ' css' + ' bootstrap' + ' js',
//     secondary_skills: 'java' + ' wordpress',
//   },
//   des() {
//     console.log("I'll succeed");
//   },
// };

// ===========================================================================

const library = [
  {
    author: 'Bill Gates',
    title: 'The Road Ahead',
    readingStatus: true,
  },
  {
    author: 'Steve Jobs',
    title: 'Walter Isaacson',
    readingStatus: true,
  },
  {
    author: 'Suzanne Collins',
    title: 'Mockingjay: The Final Book of The Hunger Games',
    readingStatus: false,
  },
];

function numberOfBooksRead() {
  let count = 0;
  for (let i = 0; i < library.length; i++) {
    if (library[i].readingStatus == true) {
      count++;
    }
  }
  return count;
}
console.log(numberOfBooksRead());
// Do not change the code below

alert(numberOfBooksRead());
