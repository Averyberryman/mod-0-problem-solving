1. //Start with an array of strings with a mix of uppercase and lowercase letters.
// Print every word in all lowercase letters.

// This challenge seems rather simple. All I need to do is create an array and assign it to a variable, at which point I can create a for statement with a conditional that prints every iteration in uppercase.
// I will use the .toUpperCase method in my code below.

var burn = ["Your", "Mom", "Goes", "To", "College"]

for (var i = 0; i < burn.length; i++) {
  console.log(burn[i].toUpperCase());
}

// Here we have used the array to replicate Napoleon's infamous burn, but in all caps. 

