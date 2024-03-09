function convert() {
    const conversionRates = {
        USD: { EUR: 0.86, GBP: 0.73, CAD: 1.24, AUD: 1.29, NZD: 1.36, SEK: 8.56, NOK: 8.47, DKK: 6.30, TRY: 14.40, RUB: 71.62, CNY: 6.38, KRW: 1154.76, XOF: 0.0017 },
        EUR: { USD: 1.16, GBP: 0.86, CAD: 1.59, AUD: 1.65, NZD: 1.74, SEK: 10.95, NOK: 10.83, DKK: 8.06, TRY: 18.42, RUB: 91.84, CNY: 8.18, KRW: 1488.61, XOF: 0.0014 },
        GBP: { USD: 1.37, EUR: 1.16, CAD: 1.77, AUD: 1.84, NZD: 1.94, SEK: 12.21, NOK: 12.09, DKK: 9.00, TRY: 20.56, RUB: 102.42, CNY: 9.12, KRW: 1656.84, XOF: 0.0017 },
        CAD: { USD: 0.80, EUR: 0.63, GBP: 0.56, AUD: 1.04, NZD: 1.10, SEK: 6.92, NOK: 6.85, DKK: 5.09, TRY: 11.64, RUB: 58.00, CNY: 5.18, KRW: 941.49, XOF: 0.0017 },
        AUD: { USD: 0.77, EUR: 0.61, GBP: 0.54, CAD: 0.96, NZD: 1.05, SEK: 6.64, NOK: 6.57, DKK: 4.88, TRY: 11.15, RUB: 55.50, CNY: 4.95, KRW: 900.38, XOF: 0.0017 },
        NZD: { USD: 0.73, EUR: 0.57, GBP: 0.52, CAD: 0.91, AUD: 0.95, SEK: 5.98, NOK: 5.92, DKK: 4.40, TRY: 10.07, RUB: 50.09, CNY: 4.46, KRW: 810.32, XOF: 0.0017 },
        SEK: { USD: 0.12, EUR: 0.091, GBP: 0.082, CAD: 0.14, AUD: 0.15, NZD: 0.17, NOK: 0.99, DKK: 0.74, TRY: 1.70, RUB: 8.47, CNY: 0.75, KRW: 136.54, XOF: 0.0017 },
        NOK: { USD: 0.12, EUR: 0.092, GBP: 0.083, CAD: 0.15, AUD: 0.16, NZD: 0.17, SEK: 1.01, DKK: 0.75, TRY: 1.72, RUB: 8.57, CNY: 0.76, KRW: 138.82, XOF: 0.0017 },
        DKK: { USD: 0.16, EUR: 0.12, GBP: 0.11, CAD: 0.20, AUD: 0.21, NZD: 0.22, SEK: 1.32, NOK: 1.30, TRY: 2.22, RUB: 11.23, CNY: 0.96, KRW: 181.81, XOF: 0.0017 },
        TRY: { USD: 0.069, EUR: 0.054, GBP: 0.048, CAD: 0.086, AUD: 0.09, NZD: 0.095, SEK: 0.59, NOK: 0.58, DKK: 0.45, RUB: 5.00, CNY: 0.45, KRW: 81.47, XOF: 0.0017 },
        RUB: { USD: 0.014, EUR: 0.011, GBP: 0.010, CAD: 0.017, AUD: 0.018, NZD: 0.019, SEK: 0.12, NOK: 0.12, DKK: 0.083, TRY: 0.20, CNY: 0.089, KRW: 16.23, XOF: 0.0017 },
        CNY: { USD: 0.16, EUR: 0.12, GBP: 0.11, CAD: 0.20, AUD: 0.21, NZD: 0.22, SEK: 1.32, NOK: 1.30, DKK: 0.96, TRY: 2.22, RUB: 11.23, KRW: 181.81, XOF: 0.0017 },
        KRW: { USD: 0.00086, EUR: 0.00067, GBP: 0.00062, CAD: 0.0011, AUD: 0.0011, NZD: 0.0012, SEK: 0.0073, NOK: 0.0072, DKK: 0.0051, TRY: 0.012, RUB: 0.062, CNY: 0.0055, XOF: 0.0017 },
        XOF: { USD: 0.0017, EUR: 0.0014, GBP: 0.0017, CAD: 0.0017, AUD: 0.0017, NZD: 0.0017, SEK: 0.0017, NOK: 0.0017, DKK: 0.0017, TRY: 0.0017, RUB: 0.0017, CNY: 0.0017, KRW: 0.0017 },
    };

    const fromCurrency = document.getElementById("from").value;
    const toCurrency = document.getElementById("to").value;
    const amount = parseFloat(document.getElementById("amount").value);

    const convertedAmount = amount * conversionRates[fromCurrency][toCurrency];
    document.getElementById("result").innerText = `${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`;
}
