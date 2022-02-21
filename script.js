const numberButton = document.querySelectorAll('[data-number]')
const operationButton = document.querySelectorAll('[data-operation]')
const equalsButton =  document.querySelector('[data-equals]')
const deleteButton =  document.querySelector('[data-delete]')
const allClearButton =  document.querySelector('[data-all-clear]')
const previousOperandTextElement =  document.querySelector('[data-previous-operand')
const currentOperandTextElement =  document.querySelector('[data-current-operand]')

class Calculator {
    // where to place display prev and current text el
    constructor(previousOperandTextElement, currentOperandTextElement){
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
    }

    clear() {

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
        
    }
}
