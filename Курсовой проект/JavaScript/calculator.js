const rates = {
    usd: 0.31,
    rub: 27.34,
    eur: 0.27
  };
  
  function convertCurrency() {
    const amount = parseFloat(document.getElementById('amount').value);
    const currency = document.getElementById('currency').value;
    const customRate = parseFloat(document.getElementById('custom-rate').value);
    let result;
  
    if (isNaN(amount) || amount <= 0) {
      document.getElementById('result').innerHTML = "Пожалуйста, введите корректную сумму.";
      return;
    }
  
    if (currency === 'custom' && isNaN(customRate)) {
      document.getElementById('result').innerHTML = "Пожалуйста, введите корректный коэффициент.";
      return;
    }
  
    if (document.getElementById('direction').value === "to") {
      switch (currency) {
        case 'usd':
          result = amount * rates.usd;
          document.getElementById('result').innerHTML = `${amount} BYN = ${result.toFixed(2)} USD`;
          break;
        case 'rub':
          result = amount * rates.rub;
          document.getElementById('result').innerHTML = `${amount} BYN = ${result.toFixed(2)} RUB`;
          break;
        case 'eur':
          result = amount * rates.eur;
          document.getElementById('result').innerHTML = `${amount} BYN = ${result.toFixed(2)} EUR`;
          break;
        case 'custom':
          result = amount * customRate;
          document.getElementById('result').innerHTML = `${amount} BYN = ${result.toFixed(2)} (по вашему коэффициенту)`;
          break;
      }
    } else {
      switch (currency) {
        case 'usd':
          result = amount / rates.usd;
          document.getElementById('result').innerHTML = `${amount} USD = ${result.toFixed(2)} BYN`;
          break;
        case 'rub':
          result = amount / rates.rub;
          document.getElementById('result').innerHTML = `${amount} RUB = ${result.toFixed(2)} BYN`;
          break;
        case 'eur':
          result = amount / rates.eur;
          document.getElementById('result').innerHTML = `${amount} EUR = ${result.toFixed(2)} BYN`;
          break;
        case 'custom':
          result = amount / customRate;
          document.getElementById('result').innerHTML = `${amount} (по вашему коэффициенту) = ${result.toFixed(2)} BYN`;
          break;
      }
    }
  }
  
  document.getElementById('direction').addEventListener('change', function () {
    if (this.value === 'to') {
      document.getElementById('custom-rate-container').style.display = 'none';
    } else {
      document.getElementById('custom-rate-container').style.display = 'block';
    }
  });
  