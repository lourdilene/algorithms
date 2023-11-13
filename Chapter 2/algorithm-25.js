/* Algorithm 25.
Enter a date in ddmmyy format and print: separate day, month and year..*/
date = prompt("Enter a date in format ddmmaa");
day = date / 10000;
month = (date % 10000) / 100;
year = (date % 1000) % 100;
console.log("day is: " + parseInt(day));
console.log("month is: " + parseInt(month));
console.log("year is: " + parseInt(year));
