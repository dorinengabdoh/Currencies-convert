const amountInput = document.getElementById("amount");
const fromCurrencySelect = document.getElementById("from");
const toCurrencySelect = document.getElementById("to");
const convertedAmount = document.getElementById("converted-amount");

amountInput.addEventListener("input", updateConversion);
fromCurrencySelect.addEventListener("change", updateConversion);
toCurrencySelect.addEventListener("change", updateConversion);
convertedAmount.addEventListener("input", (e) => {
 const int = e.target.value
 console.log(int);
 updateConversion()
});


function updateConversion() {
  const amount = parseFloat(amountInput.value) || 0;
  const fromCurrency = fromCurrencySelect.value;
  const toCurrency = toCurrencySelect.value;
  const amount2 = parseFloat(convertedAmount.value) ||0;
  console.log (amount2);

  // Replace with your own exchange rate logic here
  const exchangeRates = {
    usd: 1,
    eur: 0.85,
    gbp: 0.72,
    yen: 149.4,
  };

  const exchangeRate = exchangeRates[fromCurrency] / exchangeRates[toCurrency];
  const converted = (amount * exchangeRate).toFixed(2);
  convertedAmount.value = converted;
}
