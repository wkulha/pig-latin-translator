//Checks for vowels
function isVowel(string) {
  return (/^[aeiou]$/i).test(string);
}

function pigLatinize(string) {
  if (isVowel(string[0]) === true) {
    return string + 'way';
  } else if (string[0] === 'y' || string[0] === 'Y') {
    return string.slice(1) + 'yay';
  } else {
    return string;
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
