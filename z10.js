function bingo(ticket, win)
{
  let win2 = 0; 
  for (let i = 0; i < ticket.length; i++) 
  {
    const tick = ticket[i];
    const str = tick[0];      
    const num = tick[1];      
    for (let j = 0; j < str.length; j++) 
    {
      const charCode = str.charCodeAt(j);
      if (charCode == num) 
      {
        win2++; 
        break;    
      }
    }
  }
return (win2 >= win ? 'Winner!': 'Loser!');
}