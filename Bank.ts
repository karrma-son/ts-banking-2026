class Bank {

    constructor(
        private usersList: User[],
        public institution: string,
        public currentUser: User | null,
    ) { };

    //recieve User info?
    //create User object?
    //push User to userList?
    //consistent return statements

    isCurrentSession(){                                                          //HELPER FUNCTION
       return this.currentUser === null || !this.currentUser.getIsLoggedIn;
    }


    register(firstName: string, lastName: string, username: string, password: string) {


        // guards for all arguments 

        const foundUser = this.usersList.some(
            (user) => user.getUsername === username // true or false
        )

        if (foundUser) {
            return `${username} is already registered`;
        }

        const newUser = new User(firstName, lastName, username, password);


        newUser.setBalance = 1000;

        newUser.setIsRegistered = true;


        this.usersList.push(newUser);

        this.currentUser = newUser;

        this.currentUser.setIsLoggedIn = true;

        return (`
            ${username} has signed up}`
        )

    }

    login(username: string, password: string) {


        const foundUser = this.usersList.find(
            (user) => user.getUsername === username && user.getPassword === password
        );

        if (!foundUser) {
            console.log(`Username or password was not found`)
            return false;
        }
        this.currentUser = foundUser;
        this.currentUser.setIsLoggedIn = true;
        return this.currentUser.getIsLoggedIn; // could return true instead or return nothing?
    }

    // must be loggedin to logout - isLoggedIn === true

    // if logged in - setIsLoggedIn === false


    logout() {
        if (this.isCurrentSession()) {  // !conditionally false ---- helper method
            return;
        }
        this.currentUser = null;
    }

    // Do I need to return a boolean for deposit or withdraw?

    deposit(depositedAmount: number) {
        if (this.currentUser === null || !this.currentUser.getIsLoggedIn) {         //current user null or not logged in 
            console.log('Cannot deposit if not signed in ');
            return false;
        } else if (depositedAmount <= 0) {                       // user logged in but 0 deposit
            console.log('Cannot deposit 0 dollars or less')
            return false;
        }

        this.currentUser.setBalance = this.currentUser.getBalance + depositedAmount;
        return true;                                               // deposit true if it worked?
    }

    withdraw(withdrawAmount: number) {
        if (this.currentUser === null || !this.currentUser.getIsLoggedIn) {
            console.log('Cannot withdraw if not signed in')
            return false;                                            //user must be signed in to see balance?
        } else if (withdrawAmount > this.currentUser.getBalance) {
            console.log('Withdrawal ammount is more than total balance');  //overdraft?
            return false;
        } else if (withdrawAmount <= 0) {
            console.log("Cannot withdraw $0 or less")
            return false;
        }

        this.currentUser.setBalance = this.currentUser.getBalance - withdrawAmount;
        return true;
    }

    // set guard clauses
    // set overdraft conditionals 

    getBalance() {
        if (this.currentUser === null || !this.currentUser.getIsLoggedIn) {
            return 0;
        }
        return this.currentUser.getBalance;
    }


    display() {
        //updated balance??
        if (this.currentUser === null || !this.currentUser.getIsLoggedIn) {
          console.log("Must be signed in to display");
          return;
        }
        console.log(`
            Username: ${this.currentUser.getUsername} 
            Balance: ${this.currentUser.getBalance}  `
        )
    }
}





