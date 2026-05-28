import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import { BankMenu } from './BankMenu';

class Input {
    rl = readline.createInterface({ input, output });
    bankMenu = new BankMenu();

    async startMenuChoice() {

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
        return answer;
        // input answers form these menus

    }


    async userMenuChoice() {

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


}

async function test() {
    const newInput = new Input();
    const answer = await newInput.startMenuChoice();
    const testAnswer = await newInput.userMenuChoice();
    console.log(answer);
    console.log(testAnswer);
}

test();
