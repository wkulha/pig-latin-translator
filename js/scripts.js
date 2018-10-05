//Checks for vowels
function isVowel(string) {
  return (/^[aeiou]$/i).test(string);
}

function pigLatinize(string) {
  if (isVowel(string[0]) === true) {
    return string + 'way';
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
