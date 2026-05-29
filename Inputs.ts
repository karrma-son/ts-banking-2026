import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import { BankMenu } from './BankMenu';
import { User } from './User';

class Input {
    rl = readline.createInterface({ input, output });
    bankMenu = new BankMenu();

    async startMenuInput() {

        let answer = "";
        let incorrectAnswer = answer !== "A" && answer !== "B" && answer !== "C"
        // loop through a,b,c ask the same question if not the questions not answered with the selection?
        while (incorrectAnswer) {
            this.bankMenu.startMenu();
            answer = (await this.rl.question('Please make a choice: ')).toUpperCase();
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

        while(incorrectAnswer){
            this.bankMenu.userMenu();
            answer = (await this.rl.question("Please make a choice: ")).toUpperCase();
            incorrectAnswer = answer !== "A" && answer !== "B" && answer !== "C" && answer !== "D"

            if(incorrectAnswer){
                console.log("Invalid choice")
            }
        }
        return answer;
    
    }

    async getFirstNameInput(){
        const firstName = (await this.rl.question("Please enter your first name: ")).trim();
        return firstName;
    }

    async getLastNameInput(){
        const lastName = (await this.rl.question("Please enter your last name: ")).trim();
        return lastName
    }

    async getUsernameInput(){
        const username = (await this.rl.question("Please enter a username: ")).trim();
        return username;
    }

    async getPasswordInput(){
        const passwordInput = (await this.rl.question("Please enter a password: ")).trim();
        return passwordInput;
    }

    

   closeInput(){
        this.rl.close()
    }


}

    
    // 

async function register() {
    console.log("*** Register ***")
    const newInput = new Input();
    const firstname = await newInput.getFirstNameInput();
    const lastname = await newInput.getLastNameInput();
    const username = await newInput.getUsernameInput();
    const password = await newInput.getPasswordInput();
    console.log(firstname)
    console.log(lastname)
    console.log(username)
    console.log(password)


}

register();
