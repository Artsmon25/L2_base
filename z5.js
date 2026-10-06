function primeFactors(n)
{
  let result = ""; 
  let a = 2;       
  while (n > 1) 
  {
    let count = 0; 
    while (n % a == 0) 
    {
      count++;     
      n = n / a;   
    }
    if (count > 0) 
    {
      if (count == 1) 
      {
        result += "(" + a + ")";          
      } 
      else 
      {
        result += "(" + a + "**" + count + ")"; 
      }
    }
    a++; 
  }
  return result;
}