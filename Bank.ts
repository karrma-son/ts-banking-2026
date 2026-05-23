class Bank {

    constructor(
        private users: User[],
        private username: User,
        private password: User,
        private currentUser: User,
        private balance: number,


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
            ${this.username} has signed up with, 
            a new balance of: $${this.balance},
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
        } else if (withdrawAmount <= 0) {
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

        return (`${this.username} must log in to be able to see balance`)
    }

    login(username: string, password: string) {

        if (this.isRegistered == false) {
            console.log("Must register before logging in")
            return this.isRegistered;
        }

        if (this.loggedIn == true && this.isRegistered == true) {
            console.log(`${this.username} is logged in: ${this.loggedIn}`)
        }



        if (this.loggedIn == true) {
            console.log("User already logged in")
            return this.loggedIn;
        }

        this.loggedIn = username === this.username && password === this.password;
        return this.loggedIn;


    }

    logout() {
        if (this.loggedIn == false) {
            console.log("Must be logged in before logging out");
            return `${this.loggedIn}`;
        }

        console.log(`${this.username} is logged in: ${this.loggedIn}`)

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




