//Checks for vowels
function isVowel(string) {
  return (/^[aeiouy]$/i).test(string);
}
function isConsonant(string) {
  return (/^[qwrtpsdfghjklzxcvbnm]$/i).test(string);
}
function pigLatinize(string) {
  if (isVowel(string[0]) === true) {
    return string + 'way';
  } else if (string[0] === 'y' || string[0] === 'Y') {
    return string.slice(1) + 'yay';
  } else if (isConsonant(string[0]) === true && isVowel(string[1]) === true) {
    if (string[0] === 'q' && string[1] === 'u') {
      return string.slice(2) + 'quay';
    } else {
      let firstLetter = string[0];
      return string.slice(1) + firstLetter + 'ay';
    }
  } else if (isConsonant(string[0,1]) === true && isVowel(string[2]) === true) {
    if (isConsonant(string[0]) === true && string[1] === 'q' && string[2] === 'u') {
      let firstLetter = string[0];
      return string.slice(3) + firstLetter + 'quay';
    } else {
    let firstTwoLetters = string[0] + string[1];
    return string.slice(2) + firstTwoLetters + 'ay';
    }
  } else if (isConsonant(string[0,1,2]) === true && isVowel(string[3]) === true) {
    let firstThreeLetters = string[0] + string[1] + string [2];
    return string.slice(3) + firstThreeLetters + 'ay';
  } else {
    return string;
  }
}

$(document).ready(function() {
  $('#user_input').submit(function(event) {
    event.preventDefault();
    let translatedArray = []
    let userString = $('#user_string').val();
    let stringSeparated = userString.split(" ")
    let translating = stringSeparated.forEach(function(string) {
      let currentWord = pigLatinize(string);
      translatedArray.push(currentWord);
    });
    $('.results').text(translatedArray.join(" ") + ".");
  });
});
