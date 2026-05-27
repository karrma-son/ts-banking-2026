import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';


class Input {

    async enterName() {
        const rl = readline.createInterface({ input, output });
        const answer = await rl.question('What is your name? ');
        console.log(answer);
        rl.close();
    }
}
