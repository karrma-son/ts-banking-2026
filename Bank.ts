import { User } from "./User.ts";
import { registerUser, loginRetrieval, depositFunds, withdrawFunds, findUser } from './src/Bank_Repo.ts'
export class Bank {
    public currentUser: User | null;
    public institution: string | undefined;
    usersList: User[] = [];
    constructor(
        currentUser: User,
        institution?: string,
    ) {
        this.currentUser = currentUser;
        this.institution = institution;
    };

    //recieve User info?
    //create User object?
    //push User to userList?
    //consistent return statements

    isCurrentSession() {                                                          //HELPER FUNCTION
        return this.currentUser !== null && this.currentUser.getIsLoggedIn;
    }


    async register(firstName: string, lastName: string, username: string, password: string) {


        // guards for all arguments 


        const foundUser = await findUser(username);

        if (foundUser === undefined) {
            console.log(`
                Registration currently unavailable: 
                    please try again.
                `);
            return false;
        }

        if (foundUser) {
            console.log(`
                The username ${username} is already registered:
                 Please provide a different username.
                `)
            return false;
        }

        let newUser = new User(firstName, lastName, username, password);


        newUser.setBalance = 1000;

        newUser.setIsRegistered = true;

        newUser.setAccountNumber = Math.floor(Math.random() * 1000)

        // this.usersList.push(newUser);

        const registeredUser = await registerUser(newUser);

        if (registeredUser === undefined) {
            console.log("ERROR: An error happened while registering")
            console.log("Please try again!")
            console.log('')
            return false;

        }
        this.currentUser = registeredUser;

        this.currentUser.setIsLoggedIn = true;

        console.log(`${username} has signed up`);

        return true;

    }

    async login(username: string, password: string) {

        // const foundUser = this.usersList.find(
        //     (user) => user.getUsername === username && user.getPassword === password
        // );

        const foundUser = await loginRetrieval(username, password)

        // console.log("FOUND USER", foundUser.getUsername)

        if (foundUser === undefined) {
            console.log(`Username or password was not found`)
            return false;
        }
        this.currentUser = foundUser;
        this.currentUser.setIsLoggedIn = true;
        console.log(`
                Welcome ${this.currentUser.getFirstName}!`)
        return this.currentUser.getIsLoggedIn; // could return true instead or return nothing?
    }

    // must be loggedin to logout - isLoggedIn === true

    // if logged in - setIsLoggedIn === false


    logout() {
        if (!this.isCurrentSession()) {  // !conditionally false ---- helper method
            return;
        }
        this.currentUser = null;
    }

    // Do I need to return a boolean for deposit or withdraw?

    async deposit(depositedAmount: number) {


        if (this.currentUser === null || !this.currentUser.getIsLoggedIn) {         //current user null or not logged in 
            console.log('Cannot deposit if not signed in ');
            return false;
        } else if (depositedAmount <= 0) {                       // user logged in but 0 deposit
            console.log('Cannot deposit 0 dollars or less')
            return false;
        }

        const id = this.currentUser.getUserID;
        const result = await depositFunds(depositedAmount, id);

        if (result === undefined) {
            console.log("ERROR: Deposit is currently unvailable due to an error!");
            console.log('')
            return false;
        }
        this.currentUser.setBalance = result;
        return true;                                               // deposit true if it worked?
    }

    async withdraw(withdrawAmount: number) {
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
        const id = this.currentUser.getUserID;
        const result = await withdrawFunds(withdrawAmount, id);
        this.currentUser.setBalance = result;
        return true;
    }

    // set guard clauses
    // set overdraft conditionals 

    async balance() {
        if (this.currentUser === null || !this.currentUser.getIsLoggedIn) {
            return 0;
        }

        // const id = this.currentUser.getUserID;
        // await balanceRetrieval(id);
        console.log(`Balance: $${this.currentUser.getBalance}`)
    }


    display() {
        //updated balance??
        if (this.currentUser === null || !this.currentUser.getIsLoggedIn) {
            console.log("Must be signed in to display");
            return;
        }
        console.log(`
            Username: ${this.currentUser.getUsername} 
            Account Number: ${this.currentUser.getAccountNumber}
            `)
    }
}





