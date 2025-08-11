
const axios = require('axios');

const TCB_ENDPOINT =
  "https://techcombank.com/content/techcombank/web/vn/vi/cong-cu-tien-ich/ty-gia/_jcr_content.exchange-rates.integration.json";

// Map tên viết tắt sang tên đầy đủ
const currencyNames = {
  AUD: "AUSTRALIAN DOLLAR     ",
  CAD: "CANADIAN DOLLAR       ",
  CHF: "SWISS FRANC           ",
  CNY: "YUAN RENMINBI         ",
  EUR: "EURO                  ",
  GBP: "POUND STERLING        ",
  HKD: "HONGKONG DOLLAR       ",
  JPY: "YEN                   ",
  KRW: "KOREAN WON            ",
  NZD: "NEW ZEALAND DOLLAR    ",
  SGD: "SINGAPORE DOLLAR      ",
  THB: "THAILAND BAHT         ",
  USD: 'US DOLLAR             ',
  'USD (1,2)': 'US DOLLAR (1,2)    ',
  'USD (5,10,20)': 'US DOLLAR (5,10,20)',
  'USD (50,100)': 'US DOLLAR (50,100)',
};

function formatNumber(value) {
  if (!value || isNaN(value)) return "-";
  return parseFloat(value).toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

export async function getTCBExchangeRates() {
  try {
    const response = await axios.get(url, {
      headers: { "User-Agent": "Mozilla/5.0" },
    });

    const data = response.data;

    const exrates = data.exchangeRate.data.map((item) => {
      // Lấy mã tiền tệ (label)
      let code = item.sourceCurrency;
      let codeLabel = item.label;
      

      return {
        CurrencyCode: code,
        CurrencyName: currencyNames[codeLabel] || codeLabel,
        Buy: formatNumber(item.bidRateTM || ''),
        Transfer: formatNumber(item.bidRateCK || ''),
        Sell: formatNumber(item.askRateTM || ''),
      };
    });

    const result = {
      ExrateList: {
        DateTime: new Date().toLocaleString("en-US"),
        Exrate: exrates,
        Source:
          "Vietnam Technological and Commercial Joint Stock Bank - Techcombank",
      },
    };

    return result;
    
  } catch (error) {
    console.error("Lỗi khi lấy dữ liệu:", error.message);
  }
}


