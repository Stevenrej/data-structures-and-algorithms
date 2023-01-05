'use strict';

// const { mainModule } = require('process');


function sortYear(arr) {
  arr.sort(compareByYear);
  return arr;
}




function compareByYear(a, b) {
  return b.year - a.year;
}


function sortTitle(arr){
  return arr.sort((a,b) => compareTitleIgn(a,b));
}

function compareTitleIgn(a,b){
  let titleA = a.title.toLowerCase();
  let titleB = b.title.toLowerCase();
  titleA = titleA.replace(/^(a |an |the )/i, '');
  titleB = titleB.replace(/^(a |an |the )/i, '');
  return titleA.localeCompare(titleB);
}


module.exports = {sortYear, compareByYear, sortTitle, compareTitleIgn};
