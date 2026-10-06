function toWeirdCase(string)
{
  let words = string.split(' ');
  let result = []; 
  for (let j = 0; j < words.length; j++) 
  {
    let word = words[j];
    let newWord = ""; 
    for (let i = 0; i < word.length; i++) 
    {
      if (i % 2 == 0) 
      {
        newWord += word[i].toUpperCase();
      }  
      if (i % 2 != 0)
      {
        newWord += word[i].toLowerCase();
      }
    }
    result.push(newWord);
  }
  return result.join(' ');
}