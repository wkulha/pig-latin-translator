function pigLatinize(string) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  return string
}

$(document).ready(function() {
  $('#user_input').submit(function(event) {
    event.preventDefault();
    let userString = $('#user_string').val();
    let translated = pigLatinize(userString);
    $('.results').text(translated);
  });
});
