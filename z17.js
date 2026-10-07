function cache(func) 
{
  let storage = new Map();
  let key = JSON.stringify(args);
  if (storage.has(key)) 
  {
    return storage.get(key);
  }
  let result = func.apply(this, args);
  storage.set(key, result);
  return result;
}