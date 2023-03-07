(() => {
  let firstNumber,
      secondNumber;

  let button = document.querySelector('.js-button');

  function isEven(num) {
    return num % 2 === 0;
  };

  function result() {
    firstNumber = parseInt(document.getElementById('first_number').value);
    secondNumber = parseInt(document.getElementById('second_number').value);

    if (isEven(firstNumber) && !isEven(secondNumber)){
      return alert('Это не четное число: ' + secondNumber)
    } else if (!isEven(firstNumber) && isEven(secondNumber))
      return alert('Это не четное число: ' + firstNumber);

      if (isEven(firstNumber) && isEven(secondNumber)) {
        return alert('Оба числа четные, произведение: ' + (firstNumber * secondNumber))
      }
      if (!isEven(firstNumber) && !isEven(secondNumber)){
        return alert('Оба нечетные, сумаа: '+ (firstNumber + secondNumber))
      } 
      
      if( isNaN(firstNumber)) {
        alert('Первое не число блять!');
        
    } else if( isNaN(secondNumber)) {
      alert('Второе не число блять!');      
  }
  }

  button.addEventListener('click', result);
})();