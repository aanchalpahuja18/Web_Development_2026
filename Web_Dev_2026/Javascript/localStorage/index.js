//Because when browser refreshes: JavaScript runs again from the beginning
//Local Storage: A small notebook inside the browser, since browser gives us the permanent memory so we can store it in the LocalStorage and it will be available even after the page is refreshed


localStorage.setItem("name", "Aanchal");

let item = localStorage.getItem("name");
console.log(item);

localStorage.setItem("city", "Nagpur");


//removeItem() => Used to remove a specific item from the localStorage
localStorage.removeItem("city");

//localStorage.clear() => Used to remove all items from the localStorage

//Arrays and Objects cannot be stored directly. Because localStorage only stores: strings, not arrays, not objects, only strings.

//So to store array or objects we need to convert the array or objects to strings first and then store into the local storage of the browser, for this purpose we have JSON.stringify()

let numbers = [1, 2, 3, 4];
let converted = JSON.stringify(numbers);
console.log(converted);
console.log(typeof(converted));


localStorage.setItem("numbers", converted);

//getting the array back from the localStorage will still give it as a string, so we have to parse it in order to get the data in the original format.

let data = localStorage.getItem("numbers");
console.log(typeof(data));

let originalArray = JSON.parse(data);
console.log(originalArray);
console.log(typeof(originalArray));

