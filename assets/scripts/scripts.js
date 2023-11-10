const amountInput = document.getElementById('amount')
const fromCurrencySelect = document.getElementById('from')
const toCurrencySelect = document.getElementById('to')
const convertedAmount = document.getElementById('converted-amount')

amountInput.addEventListener('input', updateConversion)
fromCurrencySelect.addEventListener('change', updateConversion)
toCurrencySelect.addEventListener('change', updateConversion)
convertedAmount.addEventListener('input', () => {
  const amount2 = parseFloat(convertedAmount.value) || 0
  const exchangeRate2 = exchangeRates[toCurrencySelect.value] / exchangeRates[fromCurrencySelect.value]
  const convert2 = (amount2 * exchangeRate2).toFixed(2)
  amountInput.value = convert2
  return convert2,
  updateConversion()
})
const exchangeRates = {
  usd: 1,
  eur: 0.95,
  gbp: 0.72,
  yen: 149.4
}

  let converted;
function updateConversion () {
  if (fromCurrencySelect.value === toCurrencySelect.value) {
    alert('con not convert to the same currency')
    return
  }
  const amount = parseFloat(amountInput.value) || 0
  console.log(amount);
  const fromCurrency = fromCurrencySelect.value
  const toCurrency = toCurrencySelect.value

  const exchangeRate = exchangeRates[fromCurrency] / exchangeRates[toCurrency]
   converted = (amount * exchangeRate).toFixed(2)
  convertedAmount.value = converted;
}
console.log(converted);


function updateSecondConverter(){
  if (fromCurrencySelect.value === toCurrencySelect.value) {
    alert('con not convert to the same currency')
    return
  }
  const toAmount = parseFloat(convertedAmount.value) || 0  
  console.log(toAmount);

}
