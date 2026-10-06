function expandedForm(num) 
{
  let numStr = num.toString();
  let result = []; 
  for (let i = 0; i < numStr.length; i++) 
  {
    if (numStr[i] == '0') 
    {
      continue;
    }
    let zeroCount = numStr.length - i - 1;
    let part = numStr[i] + '0'.repeat(zeroCount);
    result.push(part);
  }
  return result.join(' + ')
}