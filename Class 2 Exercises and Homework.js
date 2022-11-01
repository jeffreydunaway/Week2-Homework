// 1. Create an object representation of yourself
// Should include: 
// - firstName
// - lastName
// - 'favorite food'
// - bestFriend (object with the same 3 properties as above)

const name = {
  firstName: 'Jeffrey', 
  'lastName': 'Dunaway',  
  'favoriteFood': 'Pizza', 
  'bestFriend': 'Farhang' 
}
const bestFriend = {
  firstName: 'Farhang', 
  'lastName': 'Hesami', 
  'favoriteFood': 'Koobideh',
  'bestFriend': 'Jeffrey'
} ;
// 2. console.log best friend's firstName and your favorite food
console.log(name.favoriteFood)
console.log(bestFriend.firstName)

// 3. Create an array to represent this tic-tac-toe board
// -O-
// -XO
// X-X

const TicTacTo = [['-','O','-'],['-','X','O'],['X','-','X']]

// 4. After the array is created, 'O' claims the top right square.
// Update that value. How do I correspond to an index within the array? 

ticTacToe.splice(0,0,['-','-','O']);

 //need two indexes. one for the row and one for the column. 

 // 5. Log the grid to the console.

console.log(TicTacTo[0]);
console.log(TicTacTo[1]);
console.log(TickTacToe[2]);



// 6. You are given an email as string myEmail, make sure it is in correct email format.
// Should be 1 or more characters, then @ sign, then 1 or more characters, then dot, then one or more characters - no whitespace
// i.e. foo@bar.baz
// Hints:
// - Use rubular to check a few emails: https://rubular.com/
// - Use regexp test method https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test


const myEmail = "abc@gmule.com"
const myEmailRegex = new RegEx({^abc\A$});
const validmyEmail = myEmail.Regex.test(myEmail);

console.log(Regex.test(myEmail));
console.log(Regex.test(myEmailRegex); 


// 7. You are given an assignmentDate as a string in the format "month/day/year"
// i.e. '1/21/2019' - but this could be any date.
// Convert this string to a Date
const assignmentDate = '1/21/2019';

const assignmentDate = new Date (Date.parse(assignmentDate));

console.log(assignmentDate);
// 8. Create a new Date instance to represent the dueDate.  
// This will be exactly 7 days after the assignment date.

const dueDate = new Date (NewDate.setDate(NewDate.getDate() + 7));

console.log(dueDate);

// 9. Use dueDate values to create an HTML time tag in format
// <time datetime="YYYY-MM-DD">Month day, year</time>
// I have provided a months array to help

const dueDate = new Date(DueDate);
const date = DueDate.getDate();
const month = DueDate.getMonth()
const year = DueDate.getYear();
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

const WholeCalendar = Date + "-" + months(month) + "-" + year;

// honestly, I wasn't sure how to do this. I'm still trying to conceptualize and do this. If possible, please allow me to redo #8 - 10. I'm aiming for 80% and I need to do well on this. Thank you for your compassion!  
<html>
  <time dateTime = "2019-01-01"> 
  </time>
</html>

// 10. log this value using console.log
console.log(WholeCalendar);