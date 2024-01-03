class Calculator {
    constructor(previousOperendTextElement, currentOperendTextElement){
        this.previousOperendTextElement = previousOperendTextElement
        this.currentOperendTextElement = currentOperendTextElement
        this.clear()
    }

    clear() {
        this.currentOperand = ''
        this.previousOperand = ''
        this.operation = undefined
    }
    delete() {

    }
    appendNumber(number){
        this.currentOperand = this.currentOperand.toString()+ number.toString()
    }
    chooseOperation(operation){

    }
    compute(){

    }
    updateDisplay(){
       this.currentOperendTextElement = this.currentOperand 
    }
}




const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalButtons = document.querySelector('[data-equals]');
const deleteButtons = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-all-clear]');
const previousOperendTextElement = document.querySelector('[data-previous-operend]');
const currentOperendTextElement = document.querySelector('[data-current-operend]');


const calculator = new Calculator(previousOperendTextElement, currentOperendTextElement)


numberButtons.forEach(button => {
    button.addEventListener('click', ()=> {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})

