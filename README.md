# 📈 Viet Nam Bank Exchange Rate Parser

A simple Node.js utility to fetch and parse live exchange rates from several bank in Viet Nam official XML endpoint.

> "Thank you for using my project.  
> Credit: **Bui Quoc Huy (aka. Tino)**"

---

## 🚀 Features

- ✅ Fetches up-to-date exchange rates  
- ✅ Parses XML to clean JSON format  
- ✅ Lightweight and easy to integrate into other apps  
- ✅ No web scraping – uses official XML data source  

---

## 📦 Installation

```bash
npm install node-fetch xml2js
```

📁 File Structure

```md
├── utils/
│ ├── getVCBExchangeRates.js # Core logic to fetch + parse XML from Vietcombank
│ ├── getTCBExchangeRates.js # Core logic to fetch + format JSON from Techcombank
│
├── index.js # Entry point for testing
│
└── README.md
```

🧠 Usage
```bash
import { getVCBExchangeRates } from './utils/getVCBExchangeRates.js';

import { getTCBExchangeRates } from './utils/getTCBExchangeRates.js';

async function main() {
  const data = await getVCBExchangeRates();
  // const data = await getTCBExchangeRates();
  console.log(JSON.stringify(data, null, 2));
  console.log("Thank you for using my project. Credit: Bui Quoc Huy (aka. Tino)");
}

main();
```

📊 Sample Output
```bash
{
  "ExrateList": {
    "DateTime": "06/08/2025 11:00:00",
    "Exrate": [
      {
        "CurrencyCode": "USD",
        "CurrencyName": "US Dollar",
        "Buy": "25400.00",
        "Transfer": "25500.00",
        "Sell": "25820.00"
      },
      ...
    ]
  }
}
```

🧰 Tech Stack
- Node.js
- node-fetch
- xml2js
