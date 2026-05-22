class Bank {

    constructor(
        private users: User[],
        private username: User,
        private password: User,
        private currentUser: User,
        private balance: number,


    ) { };



// user object to User array?
    register(username: string, password: string): string {
        username;
        password;
        this.balance += 1000
        this.users.push()
        return (`
            ${this.username} 
            has signed up with, 
            a new balance of: $${this.balance}
            and now logged in?: ${this.loggedIn}`
        )
    }

    login(username: string, password: any) {
        this.loggedIn == false && username === this.username && password === this.password ? this.loggedIn = true : this.loggedIn = false
        return (`${this.username} is logged in: ${this.loggedIn}`)

    }

    logout() {
        this.loggedIn == true ? this.loggedIn = false : this.loggedIn = true
        return (`${this.username} is logged in: ${this.loggedIn}`)

    }
}




