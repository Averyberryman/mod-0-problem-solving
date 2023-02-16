//1. Given an array of strings, return only the strings that have exactly 4 characters.

// For this challenge, the aim is to isolate the return value to only include strings that have exactly four characters.
// I think the best approach is to write a for statement to iterate all the elements in the array and use the length method strictly equaling 4.
// this looks like"

var words = ["shin", "stay", "whether", "terabyte", "snow", "circle"]

for (var i = 0; i < words.length; i++) {
  if (words[i].length === 4)
  console.log(words[i])
}
