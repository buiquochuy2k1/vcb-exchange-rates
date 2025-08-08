import { getVCBExchangeRates } from './utils/getVCBExchangeRates.js';
import { getTCBExchangeRates } from './utils/getTCBExchangeRates.js';

// Available bank: "VCB" or "TCB"
const bank = "TCB"; 

async function main() {
  let data;

  switch (bank) {
    case "VCB":
      data = await getVCBExchangeRates();
      break;

    case "TCB":
      data = await getTCBExchangeRates();
      break;

    default:
      console.error("Ngân hàng không được hỗ trợ:", bank);
      return;
  }

  console.log(JSON.stringify(data, null, 2));

  console.log("Thank you for using my project. Credit: Bui Quoc Huy (aka. Tino)");
}

main();
