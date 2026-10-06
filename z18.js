function createPhoneNumber(numbers)
{
  let str = numbers.join('');
  let firstPart = str.substring(0, 3); 
  let secondPart = str.substring(3, 6); 
  let thirdPart = str.substring(6, 10); 
  return "(" + firstPart + ") " + secondPart + "-" + thirdPart;
}