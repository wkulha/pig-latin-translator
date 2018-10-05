function isVowel(string) {
  return (/^[aeiou]$/i).test(string);
}

function pigLatinize(string) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  if (string.length === 1 && isVowel(string) === true) {
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
