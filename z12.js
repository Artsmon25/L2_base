function longest(arr, n) 
{
  let sortedArr = [...arr].sort((a, b) => b.length - a.length);
  return sortedArr[n - 1];
}