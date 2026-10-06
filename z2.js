function ipv4Parser(ip, mask)
{
  const ipParts = ip.split('.');
  const maskParts = mask.split('.');
  const network = [];
  const host = [];
  for (let i = 0; i < 4; i++) 
  {
    const ipNum = Number(ipParts[i]);
    const maskNum = Number(maskParts[i]);
    const netNum = ipNum & maskNum;
    network.push(netNum);
    const hostNum = ipNum - netNum;
    host.push(hostNum);
  }
  return [network.join('.'), host.join('.')];
}