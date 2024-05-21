window.addEventListener("load", async () => {
  await hs.init();

  // let ipAddress = hs.deviceManager.deviceInfo.clientIp;
  // let ipdata = await (await fetch(`https://api.ipdata.co/${ipAddress}?api-key=${API_KEY}`)).json();
  // let countryCode = ipdata.country_code;
  // console.log(ipAddress);

  let countryCode = hs.deviceManager.deviceInfo.countryCode;
  image.src = `https://flagpedia.net/data/flags/w1160/${countryCode.toLowerCase()}.webp`;
  console.log(countryCode);
});
