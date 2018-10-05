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
    let firstLetter = string[0];
    return string.slice(1) + firstLetter + 'ay';
  } else if (isConsonant(string[0,1]) == true && isVowel(string[2]) === true) {
    let firstTwoLetters = string[0] + string[1];
    return string.slice(2) + firstTwoLetters + 'ay';
  } else if (isConsonant(string[0,1,2]) === true && isVowel(string[3]) === true) {
    let firstThreeLetters = string[0] + string[1] + string [2];
    return string.slice(3) + firstThreeLetters + 'ay';
  }
}

$(document).ready(function() {
  $('#user_input').submit(function(event) {
    event.preventDefault();
    let userString = $('#user_string').val();
    let translated = pigLatinize(userString);
    $('.results').text(translated);
  });
});
