const numberButton = document.querySelectorAll('[data-number]')
const operationButton = document.querySelectorAll('[data-operation]')
const equalsButton =  document.querySelector('[data-equals]')
const deleteButton =  document.querySelector('[data-delete]')
const allClearButton =  document.querySelector('[data-all-clear]')
const previousOperandTextElement =  document.querySelector('[data-previous-operand')
const currentOperandTextElement =  document.querySelector('[data-current-operand]')


const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDislpay()
    })
})

class Calculator {
    // where to place display prev and current text el
    constructor(previousOperandTextElement, currentOperandTextElement){
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
        this.clear
    }

    clear() {
        this.currentOperandTextElement = ''
        this.previousOperandTextElement = ''
        this.operation = undefined

    }

    delete(){

    }

    appendNumber(number){

    }

    chooseOperation(operation){

    }

    compute(){

    }

    updateDislpay(){
    this.currentOperandTextElement.innerText
    }
}
