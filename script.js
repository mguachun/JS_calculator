class Calculator {
    // where to place display prev and current text el
    constructor(previousOperandTextElement, currentOperandTextElement){
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
        this.clear()
    }

    clear() {
        this.currentOperand = ''
        this.previousOperand = ''
        this.operation = undefined

    }

    delete(){

    }

    appendNumber(number){
        if (number === '.' && this.currentOperand.includes('.')) return
        this.currentOperand = this.currentOperand.toString() + number.toString()

    }

    chooseOperation(operation){
        if (this.currentOperand === '') return
        this.operation = operation
        this.previousOperand = this.currentOperand
        this.currentOperand = ''

    }

    compute(){

    }

    updateDislpay(){
    this.currentOperandTextElement.innerText = this.currentOperand
    this.previousOperandTextElement.innerText = this.previousOperand
    }
}

const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
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

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText)
        calculator.updateDislpay()
    })
})

equalsButton.addEventListener('click', button => {
    calculator.compute()
    calculator.updateDislpay()
})

allClearButton.addEventListener('click', button => {
    calculator.clear()
    calculator.updateDislpay()
})


deleteButton.addEventListener('click', button => {
    calculator.clear()
    calculator.updateDislpay
})