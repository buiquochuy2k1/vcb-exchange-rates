import { getVCBExchangeRates } from './utils/getVCBExchangeRates.js';

async function main() {
  const data = await getVCBExchangeRates();
  console.log(JSON.stringify(data, null, 2));
  console.log("Thank you for using my project. Credit: Bui Quoc Huy (aka. Tino)");
}

main();
