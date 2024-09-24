document.getElementById("convert").addEventListener("click", function() {
    const amount = parseFloat(document.getElementById("amount").value);
    const fromCurrency = document.getElementById("fromCurrency").value;
    const toCurrency = document.getElementById("toCurrency").value;

    const exchangeRates = {
        USD: { USD: 1, EUR: 0.90, RUB: 93 },
        EUR: { USD: 1.11, EUR: 1, RUB: 103.56 },
        RUB: { USD: 0.011, EUR: 0.0097, RUB: 1 }
    };

    const convertedAmount = amount * exchangeRates[fromCurrency][toCurrency];
    document.getElementById("convertedAmount").textContent = convertedAmount.toFixed(2);
});
