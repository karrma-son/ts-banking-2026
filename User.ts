class User {
    
    
    constructor(   
        private firstName: string,
        private lastName: string,
        private username: string,
        private password: string,
     
        private accountNumber?: string,
        private balance: number = 0,
        private isLoggedIn: boolean = false,
        private isRegistered: boolean = false,

    ) { };

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

    public set setAccountNumber(accountNumber: string) {
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

    public displayUserInfo(){
        console.log(`${this.username} ${this.firstName} ${this.lastName} ${this.balance}`)
    }

}


// user1.displayUserInfo();
// const newUser1 = new User("Mason", "ASFASFA", 1230)