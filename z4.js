function findMissing(list) 
{
  let total = list[list.length - 1] - list[0];
  let step = total / list.length;
  for (let i = 0; i < list.length - 1; i++) 
  {
    if (list[i + 1] - list[i] != step) 
    {
      return list[i] + step;
    }
  }
  return list[0];
}