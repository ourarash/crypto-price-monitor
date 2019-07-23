var crypto_price_checker = require("../index.js")({
  cryptosOfInteres: "BTC,ETH,LTC",
  updateIntervalInSeconds: 10,
  updateValuesCallback:updateValuesCallback
});
crypto_price_checker.start();
