function findLongestWord(string = '') {
  //const findLongestWord = 'The quick brown fox jumped over the lazy dog';
  const words = string.split(' ');
  //console.log(words);
  let longestWord = words[0];
  for (let i = 1; i < words.length; i += 1) {
    console.log('words [' + i + ']: ', words[i]);
    console.log('longestWord: ', longestWord);

    if (words[i].length > longestWord.length) {
      longestWord = words[i];
    }
  }
  return longestWord;
}

console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
// 'jumped'

//console.log(findLongestWord('Google do a roll'));
// 'Google'

//console.log(findLongestWord('May the force be with you'));
// 'force'
