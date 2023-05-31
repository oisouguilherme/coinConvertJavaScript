const convertButton = document.querySelector(".button-convert")
const curencySelect = document.querySelector(".currency-select")

function convertValues() {
  //pegando valor do input aqui abaixo
  const inputCurrencyValue = document.querySelector(".input-currency").value
  const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
  const currencyValueToConverted = document.querySelector(".currency-value")

  const dolarToday = 5.2
  const euroToday = 6.2

  if (curencySelect.value == "dolar") {
    currencyValueToConverted.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD"
    }).format(inputCurrencyValue / dolarToday)
  } if (curencySelect.value == "euro") {
    currencyValueToConverted.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR"
    }).format(inputCurrencyValue / euroToday)
  }

  currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
  }).format(inputCurrencyValue)



}

function changeCurrency() {
  const currencyName = document.getElementById('currency-name')
  const currencyImage = document.getElementById("currency-img")

  if (curencySelect.value == "dolar") {
    currencyName.innerHTML = 'Dólar americano'
    currencyImage.src = './assets/usa.png'
  } if (curencySelect.value == 'euro') {
    currencyName.innerHTML = 'Euro'
    currencyImage.src = './assets/euro.png'
  }

  convertValues()
}

curencySelect.addEventListener('change', changeCurrency)
convertButton.addEventListener("click", convertValues)