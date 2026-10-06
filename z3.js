function whatCentury(year)
{
  vek = Math.ceil(year / 100);
  last = vek % 10;
  lastWord = 'th';
  if (vek != 11 && vek != 12 && vek != 13) 
  {
    if (last == 1) lastWord = 'st';
    if (last == 2) lastWord = 'nd';
    if (last == 3) lastWord = 'rd';
  }
  return vek + lastWord;
}