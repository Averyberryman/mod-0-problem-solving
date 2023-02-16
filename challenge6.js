// 1. Given a sentence with only lowercase letters, print the same sentence with the first letter of every word capitalized. 
// For example, if you were given "Turing is the best", return "Turing Is The Best" instead!

// I did a fair amount of research to get this. I knew I would need to run a for statement, but I couldn't separate the elemnents in an array
// Because of that, I used the split function to split my sentence into an array.
// Then I wrote my for statement, and created a variable out of words[i] so it would print the first letter [0] to uppercase and then add the rest of the string in lowercase.
// 


var sentence = "This was a really tough challenge";
var words = sentence.split(" ");

for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substring(1);
}
console.log(words.join(" "))



