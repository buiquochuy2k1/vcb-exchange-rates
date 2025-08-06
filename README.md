# 📈 Vietcombank Exchange Rate Parser

A simple Node.js utility to fetch and parse live exchange rates from Vietcombank's official XML endpoint.

> "Thank you for using my project.  
> Credit: **Bui Quoc Huy (aka. Tino)**"

---

## 🚀 Features

- ✅ Fetches up-to-date exchange rates from Vietcombank  
- ✅ Parses XML to clean JSON format  
- ✅ Lightweight and easy to integrate into other apps  
- ✅ No web scraping – uses official XML data source  

---

## 📦 Installation

```bash
npm install node-fetch xml2js
```

📁 File Structure

.
├── utils/
│   └── getVCBExchangeRates.js   # Core logic to fetch + parse XML
├── index.js                     # Entry point for testing
└── README.md

🧠 Usage
```bash
import { getVCBExchangeRates } from './utils/getVCBExchangeRates.js';

async function main() {
  const data = await getVCBExchangeRates();
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
