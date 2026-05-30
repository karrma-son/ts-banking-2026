import { Bank } from "./Bank";
import { Input } from "./Input";

const bank = new Bank(null);
const input = new Input();

async function startProgram() {
    while (true) {
        const startMenuInput = await input.startMenuInput();
        if (startMenuInput == "C") {
            console.log("Exiting...")
            input.closeInput();
            break;
        }

        let canContinue = false;

        if(startMenuInput == "A"){
            canContinue = await register();
        } else {
            canContinue = await login();
        }

        if (canContinue) {
            await userMenu();
        }
    }

}
async function register() {
    console.log("*** Registration ***");
    let firstName = await input.getFirstNameInput();
    let lastName = await input.getLastNameInput();
    let username = await input.getUsernameInput();
    let password = await input.getPasswordInput();


    return bank.register(firstName, lastName, username, password);
}

async function login() {
    console.log("*** Login ***");

    let username = await input.getUsernameInput();
    let password = await input.getPasswordInput();

    let loggedIn = bank.login(username, password);

    if (loggedIn === true) {
        console.log("User is logged in");
    } else {
        console.log("User has not logged in");
    }

    return loggedIn;
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

startProgram();


