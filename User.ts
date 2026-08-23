export class User {

    private firstName: string;
    private lastName: string;
    private username: string;
    private password: string;

    private userID?: number |undefined;
    private accountNumber?: number;
    private balance: number = 0;
    private isLoggedIn: boolean = false;
    private isRegistered: boolean = false;

    constructor(

        firstName: string,
        lastName: string,
        username: string,
        password: string,
        
        userID?: number,
        accountNumber?: number|undefined,
        balance: number = 0,
        isLoggedIn: boolean = false,
        isRegistered: boolean = false,

    ) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.username = username;
        this.password = password;

        this.userID = userID;

        this.accountNumber = accountNumber;
        this.balance = balance;
        this.isLoggedIn = isLoggedIn;
        this.isRegistered = isRegistered;

    };

    public get getUserID() {
        return this.userID
    }

    public set setUsername(username: string) {
        this.username = username;
    }

    public get getUsername() {
        return this.username;
    }

    public set setPassword(password: string) {
        this.password = password;
    }

    public get getPassword() {
        return this.password;
    }

    public set setFirstName(firstName: string) {
        this.firstName = firstName;
    }

    public get getFirstName() {
        return this.firstName;
    }

    public set setLastName(lastName: string) {
        this.lastName = lastName;
    }

    public get getLastName() {
        return this.lastName;
    }

    public get getFullName() {
        return `${this.firstName}  ${this.lastName}`;
    }

    public set setAccountNumber(accountNumber: number) {
        this.accountNumber = accountNumber;
    }

    public get getAccountNumber() {
        return this.accountNumber;
    }

    public set setBalance(balance: number) {
        this.balance = balance;
    }

    public get getBalance() {
        return this.balance;
    }

    public set setIsLoggedIn(isLoggedIn: boolean) {
        this.isLoggedIn = isLoggedIn;
    }

    public get getIsLoggedIn() {
        return this.isLoggedIn;
    }

    public set setIsRegistered(isRegistered: boolean) {
        this.isRegistered = isRegistered;
    }

    public get getIsRegistered() {
        return this.isRegistered;
    }

    public displayUserInfo() {
        console.log(`${this.username} ${this.firstName} ${this.lastName} ${this.balance}`)
    }

}


// user1.displayUserInfo();
// const newUser1 = new User("Mason", "ASFASFA", 1230)