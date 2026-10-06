function domainName(url)
{
  let cleanedUrl = url.replace("http://", "").replace("https://", "").replace("www.", "");
  let urlParts = cleanedUrl.split('.');
  return urlParts[0];
}