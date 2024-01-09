function isPalindrome(x: number): boolean {
  let value = x.toString();
  let invertedString: string = value.split("").reverse().join("");
  let invertedNumber: number = parseInt(invertedString);
  if (x === invertedNumber) return true;
  return false;
}
