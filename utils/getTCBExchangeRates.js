
// Cài đặt thư viện trước: npm install axios
import axios from "axios";

const url =
  "https://techcombank.com/content/techcombank/web/vn/vi/cong-cu-tien-ich/ty-gia/_jcr_content.exchange-rates.integration.json";

// Map tên viết tắt sang tên đầy đủ
const currencyNames = {
  AUD: "AUSTRALIAN DOLLAR   ",
  CAD: "CANADIAN DOLLAR     ",
  CHF: "SWISS FRANC         ",
  CNY: "YUAN RENMINBI       ",
  EUR: "EURO                ",
  GBP: "POUND STERLING      ",
  HKD: "HONGKONG DOLLAR     ",
  JPY: "YEN                 ",
  KRW: "KOREAN WON          ",
  NZD: "NEW ZEALAND DOLLAR  ",
  SGD: "SINGAPORE DOLLAR    ",
  THB: "THAILAND BAHT       ",
  USD: "US DOLLAR           ",
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
      // Lấy mã tiền tệ (label) và bỏ phần USD (1,2) thành USD
      let code = item.sourceCurrency;
      if (code === "USD") code = "USD";

      return {
        CurrencyCode: code,
        CurrencyName: currencyNames[code] || code,
        Buy: formatNumber(item.bidRateTM || item.bidRateCK),
        Transfer: formatNumber(item.bidRateCK || item.bidRateTM),
        Sell: formatNumber(item.askRate || item.askRateTM),
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

    console.log(JSON.stringify(result, null, 2));
  } catch (error) {
    console.error("Lỗi khi lấy dữ liệu:", error.message);
  }
}
