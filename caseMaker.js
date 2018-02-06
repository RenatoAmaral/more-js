var camelCase = function(input) {
var result
  if (input.match(/\s/g)) {

    var word = input.split(/\s/g);

    for (var i = 1; i < word.length; i++) {

      var upperCase = word[i][0].toUpperCase();
      var regex = new RegExp('\\s' + word[i][0])
      input = input.replace(regex, upperCase)
      noSpace = input.replace(/\s/g,"");
      result = noSpace;
    }
    return result;
  }

  if (input.match(/^\w+$/)) {
    result = input
  };
    return result;
  }

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));