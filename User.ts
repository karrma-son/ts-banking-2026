class User {
    constructor(
        public username: string,
        private password: string,
        private balance: number = 0,
        private loggedIn: boolean = false,
        private isRegistered: boolean = false,
    ) { };

    register(): string {

        if (this.isRegistered == true) {
            console.log(`${this.username} is already registered`)

        } else {
            this.balance += 1000;
            this.loggedIn = true;
            this.isRegistered = true;
        }

        return (`
            ${this.username} 
            has signed up with, 
            and a new balance of: $${this.balance}
            and now logged in?: ${this.loggedIn}
            and registered?: ${this.isRegistered}`
        )
    }


    deposit(depositedAmount: number) {
        if (this.loggedIn == false) {
            console.log('Cannot deposit if not signed in ');
            return;
        }
        else if (depositedAmount <= 0) {
            console.log('Cannot deposit 0 dollars or less')
            return;
        }


        this.balance += depositedAmount
        return this.balance;


    }

    withdraw(withdrawAmount: number) {
        if (this.loggedIn == false) {
            console.log('Cannot withdraw if not signed in')
            return this.balance;                                             //user must be signed in to see balance?
        } else if (withdrawAmount > this.balance) {
            console.log('Withdrawal ammount is more than total balance');
            return this.balance;
        } else if (withdrawAmount == 0) {
            console.log("Cannot withdraw $0")

        }

        this.balance -= withdrawAmount
        return this.balance
    }
    // set guard clauses
    // set overdraft conditionals 

    getBalance() {
        if (this.loggedIn == true) {
            return this.balance
        }
        return 0;
    }

    login(username: string, password: string) {
        if (this.loggedIn == true) {
            console.log("User already logged in")
            return this.loggedIn;
        }
        this.loggedIn = username === this.username && password === this.password;

        if (this.loggedIn == true) {
            console.log(`${this.username} is logged in: ${this.loggedIn}`)
        }
        return this.loggedIn;

    }

    logout() {
        this.loggedIn == true ? this.loggedIn = false : this.loggedIn = true  // true??
        return (`${this.username} is logged in: ${this.loggedIn}`)

    }

    display() {
        if (this.loggedIn == false) {
            return ("Must be signed in to display")

        } else {
            return `${this.username} ${this.balance} ${this.loggedIn} `
        }
    }
}


const newUser1 = new User("Mason", "ASFASFA", 1230)

// console.log(newUser1.register());
console.log(newUser1.getBalance())
// console.log(newUser1.deposit(2000));
// newUser1.logout();
// console.log(newUser1.withdraw(0));
// console.log(newUser1.logout());
// (newUser1.withdraw(550));
//  console.log(newUser1.display());

// (newUser1.deposit(2000))
console.log(newUser1.login("Mason", "AggsFA"))
console.log(newUser1.login("Mason", "ASFASFA"))
// console.log(newUser1.display())
// console.log(newUser1.logout());
//


//port logic to bank class