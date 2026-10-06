function hexStringToRGB(hexString) 
{
  let rHex = hexString.slice(1, 3); 
  let gHex = hexString.slice(3, 5); 
  let bHex = hexString.slice(5, 7); 
  let rNum = parseInt(rHex, 16);
  let gNum = parseInt(gHex, 16);
  let bNum = parseInt(bHex, 16);
  return {r: rNum,g: gNum,b: bNum}; 
}