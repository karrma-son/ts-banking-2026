import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import { BankMenu } from './BankMenu';

class Input {

    async enterName() {
        const rl = readline.createInterface({ input, output });
        const bankMenu = new BankMenu()
        bankMenu.startMenu();
        const answer = await rl.question('Please make a choice: ');
        console.log(answer);
        rl.close();
    }
}

const newInput = new Input();
newInput.enterName();