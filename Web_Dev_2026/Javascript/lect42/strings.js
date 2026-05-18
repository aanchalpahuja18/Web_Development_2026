//Strings in JS:

//1. Creation of Strings:

let firstName = "Aanchal";
let lastName = 'Pahuja'

// console.log(typeof(firstName));

// console.log(firstName);
// console.log(lastName);


let fullName = `My 
Name 
is
Aanchal Pahuja`;
// console.log(fullName);

let newName = new String("Aanchal is here");
// console.log(newName);

//2. Concatenation of Strings:

//Normal way:

let op1 = "English ";
let op2 = "Hindi ";
// console.log(op1 + op2);

//Using Template Literals (backticks):

// console.log(`op1 + op2`);
// console.log(`${op1} and ${op2}`);


//3. Length property of Strings:

let name1 = "Aanchal";
// console.log(name1.length);

//4. Uppercase method in string:

// console.log(name1.toUpperCase());

//5. Lowercase method in string:

let name2 = "PAHUJA";

// console.log(name2.toLowerCase());

//6. substring method in strings:

let fruit = "Mango";
// console.log(fruit.substring(1));

// console.log(fruit.substring(2,4));
//ending index here is exclusive meaning we do not have to consider the last index specified while taking the substring out of the main string.


//7. split method in strings:

let sentence = "Hello Jii Kese Ho"
let words = sentence.split(" ");

// console.log(words);

//8. join method in strings:

let main = words.join(' , ');
// console.log(main);

//example practice:

let sentence2 = "\\Hello \\Jii \\Kese \\Ho"

// console.log(sentence2.split('\\'));

//9. charAt method in Strings:

let newWord = "Banana";

console.log(newWord.charAt(1)); //returns the character present on the particular index mentioned inside the method.

//10. indexOf method in Strings:

let word2 = "Papaya";

console.log(word2.indexOf('P')); // Returns the position of the first occurrence of the character present in the string.


//11. Replace method in Strings:

let str = "Aanchal";

console.log(str.replace('A', 'P')); // Replaces the character mentioned at first position with the character mentioned at second position.














