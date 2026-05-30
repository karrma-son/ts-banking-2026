import { User } from "./User";
import { Bank } from "./Bank";
import { Input } from "./Input";
import { start } from "node:repl";

const bank = new Bank(null);
const input = new Input();

async function startMenu() {
    while (true) {
        const startMenuInput = await input.startMenuInput();

        if (startMenuInput == "A") {
            console.log("*** Registration ***");
            let firstName = await input.getFirstNameInput();
            let lastName = await input.getLastNameInput();
            let username = await input.getUsernameInput();
            let password = await input.getPasswordInput();


            console.log(bank.register(firstName, lastName, username, password));



        } else if (startMenuInput == "B") {
            console.log("*** Login ***");

            let username = await input.getUsernameInput();
            let password = await input.getPasswordInput();

            let loggedIn = bank.login(username, password);

            if (loggedIn === true) {
                console.log("User is logged in");
            } else {
                console.log("User has not logged in");
            }


        } else {
            console.log("Exiting program...");
            input.closeInput();
            break;
        }

       await userMenu()
    }

}

async function userMenu() {
    while (true) {
        let userMenu = await input.userMenuInput();

        if (userMenu == "A") {
            console.log("*** User Info ***");
            bank.display();
        } else if (userMenu == "B") {
            console.log("*** Deposit ***");
            let depositValue = await input.getDepositInput();
            bank.deposit(depositValue);
        } else if (userMenu == "C") {
            console.log("*** Withdraw ***");
            let withdrawValue = await input.getWithdrawInput();
            bank.withdraw(withdrawValue);
        } else {
            console.log("Logging out...");
            bank.logout();
            break;
        }


    }


}

// must go through startMenu to get to userMenu

startMenu()



