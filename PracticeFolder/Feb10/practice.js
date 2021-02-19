const library = [
  "The Way of Kings",
  "Words of Radiance",
  "Oathbringer",
  "Rhythm of War",
];

function printLoop(item, index) {
  console.log(index + " : " + item);
}

console.log("------For Each-------");
library.forEach(printLoop);

const books = [
    { title: "The Way of Kings", year: 2010 },
    { title: "Words of Radiance", year: 2014 },
    { title: "Oathbringer", year: 2017 },
    { title: "Rhythm of War", year: 2020 },
    { title: "(not yet announced)"}
  ];
  