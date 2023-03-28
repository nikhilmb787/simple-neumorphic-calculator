// Get all the calculator buttons
const buttons = document.querySelectorAll('span');

// Get the display element
const display = document.getElementById('value');

// Track the current value and operation
let currentValue = '0';
let currentOperation = null;

// Update the display with the initial value
display.textContent = currentValue;

// Add an event listener to each button
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const buttonText = button.textContent;

    // Handle each button type
    switch (buttonText) {
      case 'AC':
        currentValue = '0';
        currentOperation = null;
        break;

      case 'DEL':
        currentValue = currentValue.slice(0, -1) || '0';
        break;

      case '+':
      case '-':
      case 'X':
      case '/':
        if (currentValue !== '0') {
          // If a previous operation exists, perform it first
          if (currentOperation !== null) {
            const operands = currentValue.split(currentOperation);
            let result;
            switch (currentOperation) {
              case '+':
                result = parseFloat(operands[0]) + parseFloat(operands[1]);
                break;

              case '-':
                result = parseFloat(operands[0]) - parseFloat(operands[1]);
                break;

              case 'X':
                result = parseFloat(operands[0]) * parseFloat(operands[1]);
                break;

              case '/':
                result = parseFloat(operands[0]) / parseFloat(operands[1]);
                break;
            }
            currentValue = result.toString();
          }
          currentOperation = buttonText;
          currentValue += currentOperation;
        }
        break;

      case '%':
        if (currentValue !== '0' && currentOperation !== null) {
          const operands = currentValue.split(currentOperation);
          const percent = parseFloat(operands[0]) * parseFloat(operands[1]) / 100;
          let result;
          switch (currentOperation) {
            case '+':
              result = parseFloat(operands[0]) + percent;
              break;

            case '-':
              result = parseFloat(operands[0]) - percent;
              break;

            case 'X':
              result = percent;
              break;

            case '/':
              result = parseFloat(operands[0]) / percent;
              break;
          }
          currentValue = result.toString();
        }
        break;

      case '=':
        if (currentValue !== '0' && currentOperation !== null) {
          const operands = currentValue.split(currentOperation);
          let result;
          switch (currentOperation) {
            case '+':
              result = parseFloat(operands[0]) + parseFloat(operands[1]);
              break;

            case '-':
              result = parseFloat(operands[0]) - parseFloat(operands[1]);
              break;

            case 'X':
              result = parseFloat(operands[0]) * parseFloat(operands[1]);
              break;

            case '/':
              result = parseFloat(operands[0]) / parseFloat(operands[1]);
              break;
          }
          currentValue = result.toString();
          currentOperation = null;
        }
        break;

      default:
        if (currentValue === '0') {
          currentValue = buttonText;
        } else {
          currentValue += buttonText;
        }
        break;
    }

    // Update the display
    display.textContent = currentValue;
  });
});
