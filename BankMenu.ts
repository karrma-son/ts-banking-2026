class BankMenu{

    startMenu(){
        console.log(`Start Menu`)
        console.log("A. Register")
        console.log("B. Login")
        console.log("C. Exit")
        console.log("Please make a choice: ")
    }

    
    userMenu(){
        console.log("User Menu");
        console.log("A. Display Info");
        console.log("B. Deposit");
        console.log("C. Withdraw");
        console.log("D. Logout");
        console.log("Please make a choice: ")
    }

    
}

const bank1 = new BankMenu();
