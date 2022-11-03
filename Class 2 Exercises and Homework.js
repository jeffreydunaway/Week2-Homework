// 1. Create an object representation of yourself
// Should include: 
// - firstName
// - lastName
// - 'favorite food'
// - bestFriend (object with the same 3 properties as above)

const jeffrey = {
  firstName: "jeffrey", 
  lastName: "dunaway",  
  'favoriteFood': 'Pizza', 
  bestFriend: {
    firstName: "farhang", 
    lastName: "hesami",  
    'favoriteFood': 'Koobideh',
  } 

// 2. console.log best friend's firstName and your favorite food
console.log(jeffrey.bestFriend.firstName)
console.log(jeffrey.favoriteFood)

// 3. Create an array to represent this tic-tac-toe board
// -O-
// -XO
// X-X

let ticTacTo = [['-','O','-'],['-','X','O'],['X','-','X']]

// 4. After the array is created, 'O' claims the top right square.
// Update that value. How do I correspond to an index within the array? 

ticTacTo[0][2] = 'O'

 //need two indexes. one for the row and one for the column. 

 // 5. Log the grid to the console.

console.log(ticTacTo[0]);
console.log(ticTacTo[1]);
console.log(ticTacToe[2]);





// 6. You are given an email as string myEmail, make sure it is in correct email format.
// Should be 1 or more characters, then @ sign, then 1 or more characters, then dot, then one or more characters - no whitespace
// i.e. foo@bar.baz
// Hints:
// - Use rubular to check a few emails: https://rubular.com/
// - Use regexp test method https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test


const myEmail = "abc@gmule.com";
const myEmailRegex = new RegExp ('([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}');
const validmyEmail = myEmailRegex.test(myEmail);

console.log(regex.test('abc@gmule.com'));
console.log(regex.test(myEmailRegex);


// 7. You are given an assignmentDate as a string in the format "month/day/year"
// i.e. '1/21/2019' - but this could be any date.
// Convert this string to a Date
var assignmentDate = '1/21/2019';
const splitDate = assignmentDate.split("/");
const [month, date, year] = splitDate;
assignmentDate = new Date(year, month - 1, date);

// 8. Create a new Date instance to represent the dueDate.  
// This will be exactly 7 days after the assignment date.

var dueDate = new Date(assignmentDate);
dueDate.setDate(dueDate.getDate() + 7

//not sure why line 74 brings up random generated number. 3


// 9. Use dueDate values to create an HTML time tag in format
// <time datetime="YYYY-MM-DD">Month day, year</time>
// I have provided a months array to help

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

var dueDay = dueDate.getDate();
var dueMonth = dueDate.getMonth();
var dueMonthStr = months[dueMonth];
dueMonth++;
var dueYear = dueDate.getFullYear();
let HTMLdateTag = `<time dateTime=${dueYear}-0${dueMonth}-${dueDay}>${dueMonthStr} ${dueDay}, ${dueYear}</time>`;
<html>
  <time dateTime = "2019-01-01"> 
  </time>
</html>

// 10. log this value using console.log
console.log(HTMLdateTag);
