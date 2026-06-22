//Local Storage: A small notebook inside the browser, since browser gives us the permanent memory so we can store it in the LocalStorage and it will be available even after the page is refreshed


localStorage.setItem("name", "Aanchal");

let item = localStorage.getItem("name");
console.log(item);

//Arrays and Objects cannot be stored directly. Because localStorage only stores: strings, not arrays, not objects, only strings.

//So to store array or objects we need to convert the array or objects to strings first and then store into the local storage of the browser, for this purpose we have JSON.stringify()

let numbers = [1, 2, 3, 4];
let converted = JSON.stringify(numbers);

localStorage.setItem("numbers", converted)
