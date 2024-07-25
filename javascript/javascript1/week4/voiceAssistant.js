// Global Variables
let userName = "";
let todos = [];
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function getReply(commandInput) {
  // to avoid case sensitivity changing all input to lowercase
  const command = commandInput.toLowerCase();
  if (command.startsWith("hello my name is ")) {
    // console.log(command.length);
    let name = command.slice(17);

    if (userName === name) {
      // What if someone writes this twice?
      return `Hello again, ${userName}! `;
    } else {
      // if the name was told first time
      userName = name;
      return `Nice to meet you, ${userName}!`;
    }
  } else if (command === "what is my name?") {
    if (userName) {
      return `your name is  ${userName}!`;
    } else {
      // What if the name has not yet been mentioned?
      return "You have not told me your name yet.";
    }
    // using .startsWith and .endsWith method to estract the exact todo with .slic method
    // Adding todo
  } else if (command.startsWith("add ") && command.endsWith(" to my todo")) {
    const todo = command.slice(4, -11);
    // console.log(todo);
    todos.push(todo);
    return `${todo} added to your todo.`;
    // removing todo
  } else if (
    command.startsWith("remove ") &&
    command.endsWith(" from my todo")
  ) {
    const removeTodo = command.slice(7, -13);
    // console.log(removeTodo);
    const todoIndex = todos.indexOf(removeTodo);
    if (todoIndex !== -1) {
      // Remove the todo from the list
      todos.splice(todoIndex, 1);
      // Respond with a confirmation message
      return `Removed ${removeTodo} from your todo.`;
    } else {
      return `${removeTodo} is not in your todo list.`;
    }
    // extracting all todos list
  } else if (command === "what is on my todo?") {
    if (todos.length > 0) {
      const todoList = todos.join(" and ");
      return `you have ${todos.length} todos - ${todoList}`;
    } else {
      return `you do not have any todo`;
    }
    //What day is it today?
  } else if (command === "what day is it today?") {
    const todaysDate = new Date();
    const thisMonth = todaysDate.getMonth();
    const currentMonth = months[thisMonth];
    const year = todaysDate.getFullYear();
    // formattedDate = todaysDate.toLocaleDateString("en-gb", {
    //   day: "numeric",
    //   month: "long",
    //   // weekday: "long",
    //   year: "numeric",
    // });
    return `${todaysDate}. of ${currentMonth} ${year}`;
    // mathemetical simle expression
  } else if (command.startsWith("what is ")) {
    const expression = command.slice(8);
    // evaluating simple function with eval() method, using try-catch
    try {
      const result = eval(expression);
      return result;
    } catch {
      return `ERROR !!!`;
    }
    // setting timer
  } else if (command.startsWith("set a timer for")) {
    //using .match method with \d+ to find the interger in the string
    const timeinMinutes = command.match(/\d+/);
    const timeInMilliseconds = parseInt(timeinMinutes) * 60 * 1000;
    setTimeout(function () {
      console.log(`Timer Done`);
    }, timeInMilliseconds);
    return `you have set timer for ${timeinMinutes} minutes.`;
  }
  return "Sorry, I didn't understand that command.";
}
console.log(getReply("Hello my name is ankita "));
console.log(getReply("Hello my name is ankita "));
console.log(getReply("ankita here "));
console.log(getReply("What is my name?"));
console.log(getReply("What ildlskdæl"));
console.log(getReply("add fishing to my todo"));
console.log(getReply("add singing in the shower to my todo"));
console.log(getReply("add swimming to my todo"));
console.log(getReply("What is on my todo?"));
console.log(getReply("Remove fishing from my todo"));
console.log(getReply("what day is it today?"));
console.log(getReply("what is 3 + 3"));
console.log(getReply("what is 4 * 12"));
console.log(getReply("Set a timer for 1 minutes"));
