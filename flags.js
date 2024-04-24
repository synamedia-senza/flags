window.addEventListener("load", async () => {
  await hs.init();
  let ipAddress = hs.deviceManager.deviceInfo.clientIp;
  let ipdata = await (await fetch(`https://api.ipdata.co/${ipAddress}?api-key=${API_KEY}`)).json();
  let countryCode = ipdata.country_code.toLowerCase();
  image.src = `https://flagpedia.net/data/flags/w1160/${countryCode}.webp`;
  console.log(ipAddress);
  console.log(countryCode);
});
