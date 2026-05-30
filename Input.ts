// import readlineSync from 'readline-sync';
import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import { BankMenu } from './BankMenu';


export class Input {
    rl = readline.createInterface({ input, output });
    bankMenu = new BankMenu();

    async startMenuInput() {

        let answer = "";
        let incorrectAnswer = answer !== "A" && answer !== "B" && answer !== "C"
        // loop through a,b,c ask the same question if not the questions not answered with the selection?
        while (incorrectAnswer) {
            this.bankMenu.startMenu();
            answer = (await this.rl.question('Please make a choice: ')).toUpperCase().trim();
            incorrectAnswer = answer !== "A" && answer !== "B" && answer !== "C";

            if (incorrectAnswer) {
                console.log("Invalid choice")
            }
        }

        return answer;              // input answers from these menus                                                     
    }


    async userMenuInput() {

        let answer = ""
        let incorrectAnswer = answer !== "A" && answer !== "B" && answer !== "C" && answer !== "D"

        while (incorrectAnswer) {
            this.bankMenu.userMenu();
            answer = (await this.rl.question("Please make a choice: ")).toUpperCase();
            incorrectAnswer = answer !== "A" && answer !== "B" && answer !== "C" && answer !== "D"

            if (incorrectAnswer) {
                console.log("Invalid choice")
            }
        }
        return answer;

    }

    async getFirstNameInput() {
        const firstName = (await this.rl.question("Please enter your first name: ")).trim();
        return firstName;
    }

    async getLastNameInput() {
        const lastName = (await this.rl.question("Please enter your last name: ")).trim();
        return lastName
    }

    async getUsernameInput() {
        const username = (await this.rl.question("Please enter a username: ")).trim();
        return username;
    }

    async getPasswordInput() {
        const passwordInput = (await this.rl.question("Please enter a password: ")).trim();
        return passwordInput;
    }


    async getDepositInput() {
        let depositInput = NaN;

        while (Number.isNaN(depositInput)) {
            depositInput = parseInt((await this.rl.question("Enter a deposit amount: ")).trim());

            if (Number.isNaN(depositInput)) {
                console.log("Invalid selection: Please enter a number")
            }
        }

        return depositInput;
    }


    async getWithdrawInput() {
        let withdrawInput = NaN;

        while (Number.isNaN(withdrawInput)) {
            withdrawInput = parseInt((await this.rl.question("Enter a withdraw amount: ")).trim());

            if (Number.isNaN(withdrawInput)) {
                console.log("Invalid selection: Please enter a number")
            }
        }

        return withdrawInput;
    }


    async getValueInput(type: string) {
        type = type.trim().toUpperCase();
        if(type !== "DEPOSIT" && type !== "WITHDRAW"){
            console.log("Invalid selection type: ")
            return 0;
        }

        let valueInput = NaN;
        let typeOfTransaction = type === "DEPOSIT" ? "deposit" : "withdraw";

        while (Number.isNaN(valueInput)) {
            valueInput = parseInt((await this.rl.question(`Enter a ${typeOfTransaction} amount: `)).trim());

            if (Number.isNaN(valueInput)) {
                console.log("Invalid selection: Please enter a number");
            }
        }

        return valueInput;
    }
    // only numbers for account and balances

    closeInput() {
        this.rl.close()
    }


}




// async function register() {
//     console.log("*** Register ***")
//     const newInput = new Input();
//     const deposit = await newInput.getValueInput("deposit")
//     console.log(deposit)

// }

