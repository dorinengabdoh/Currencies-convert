const amountInput = document.getElementById('amount')
const fromCurrencySelect = document.getElementById('from')
const toCurrencySelect = document.getElementById('to')
const convertedAmount = document.getElementById('converted-amount')

amountInput.addEventListener('input', updateConversion)
convertedAmount.addEventListener('ouput', updateConversion)
fromCurrencySelect.addEventListener('change', updateConversion)
toCurrencySelect.addEventListener('change', updateConversion)

function updateConversion () {
  const amount = parseFloat(amountInput.value) || 0
  // const toamount = parseFloat(convertedAmount.value) || 0
  const fromCurrency = fromCurrencySelect.value
  const toCurrency = toCurrencySelect.value

  // Replace with your own exchange rate logic here
  const exchangeRates = {
    usd: 1,
    eur: 0.85,
    gbp: 0.72
  }

  const exchangeRate = exchangeRates[fromCurrency] / exchangeRates[toCurrency]
  const converted = (amount * exchangeRate).toFixed(2)
  // const convert = (toamount * exchangeRate).toFixed(2)
  convertedAmount.value = converted
}
