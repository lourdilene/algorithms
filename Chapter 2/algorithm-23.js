/* Algorithm 23.
Enter an integer with 3 places and print the digit in the tens place.*/
numer_3_digits = prompt("Enter a number of 3 digits and print tens place.");
decimal_place_number = (numer_3_digits % 100) / 10;
alert("Digit in the decimal place is: " + parseInt(decimal_place_number));
