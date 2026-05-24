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
        this.currentUser.setIsLoggedIn === true;
        return this.currentUser.getIsLoggedIn; // could return true instead
    }

    // must be loggedin to logout - isLoggedIn === true
    
    // if logged in - setIsLoggedIn === false


    logout() {

        if (this.currentUser){
            this.currentUser.setIsLoggedIn === false;
            this.currentUser = null;
        }
       
  
    }


    deposit(depositedAmount: number) {
        if (this.currentUser?.getIsLoggedIn == false) {
            console.log('Cannot deposit if not signed in ');
            return;
        }
        else if (depositedAmount <= 0) {
            console.log('Cannot deposit 0 dollars or less')
            return;
        }

        if (!this.currentUser) {
            return;
        }

        const updatedBalance = this.currentUser.getBalance + depositedAmount;

        this.currentUser.setBalance = updatedBalance
        return this.currentUser.getBalance;


    }

    withdraw(withdrawAmount: number) {
        if (!this.currentUser) {
            return
        }
        if (this.currentUser.getIsLoggedIn == false) {
            console.log('Cannot withdraw if not signed in')
            return this.currentUser.getBalance;                                             //user must be signed in to see balance?
        } else if (withdrawAmount > this.currentUser.getBalance) {
            console.log('Withdrawal ammount is more than total balance');
            return this.currentUser.getBalance;
        } else if (withdrawAmount <= 0) {
            console.log("Cannot withdraw $0")

        }

        const updatedBalance = this.currentUser.getBalance - withdrawAmount;
        this.currentUser.setBalance = updatedBalance
        return this.currentUser.getBalance
    }

    // set guard clauses
    // set overdraft conditionals 

    getBalance() {

        if (!this.currentUser) {
            return;
        }

        if (this.currentUser?.getIsLoggedIn == true) {
            return this.currentUser.getBalance
        }

        return (`${this.currentUser.getUsername} must log in to be able to see balance`)
    }



    display() {
        if (!this.currentUser) {
            return;
        }
        if (this.currentUser.getIsLoggedIn == false) {
            return ("Must be signed in to display")

        } else {
            return `${this.currentUser.getUsername} ${this.currentUser.getBalance} ${this.currentUser.getIsLoggedIn} `
        }
    }
}




const user1 = new User("Yohiho124", "asfasfa12", "Unc", "Man", "1255251", 2000)

