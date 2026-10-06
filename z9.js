function solution(str)
{
  let result = [];
  for (let i = 0; i < str.length; i += 2) 
  {
    let firstChar = str[i];
    let secondChar = str[i + 1];
    if (secondChar === undefined) 
    {
      secondChar = '_';
    }
    result.push(firstChar + secondChar);
  }
  return result; 
}