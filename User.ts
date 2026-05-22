class User {
    constructor(
        public username: string,
        private password: any,
        private balance: number = 0,
        private loggedIn: boolean = false,
        private isRegistered: boolean = false,
    ){};

    register(): string {
        
        if (this.isRegistered = true){
            console.log(`${this.username} is already registered`)
            
        }
        if (this.isRegistered = false)
        this.username;
        this.password;
        this.balance += 1000
        this.loggedIn = true;
        this.isRegistered = true;

        
        return (`
            ${this.username} 
            has signed up with, 
            and a new balance of: $${this.balance}
            and now logged in?: ${this.loggedIn}
            and registered?: ${this.isRegistered}`
        )
    }

        deposit(depositedAmount: number) {
            if (this.loggedIn == true ){
                if(depositedAmount > 0) {
                    this.balance += depositedAmount
                    return this.balance;
                }
            } if ( this.loggedIn == false) { 
               console.log('Cannot deposit if not signed in ');
            } else if (depositedAmount <= 0){
               console.log('Cannot deposit 0 dollars or less')
            }
    
        }

        withdraw(withdrawAmount: number) {
            if (this.loggedIn == true){
                if ( withdrawAmount <= this.balance){
                    if (withdrawAmount > 0 ){
                        this.balance -= withdrawAmount
                    }
                }
                return this.balance
            }            
              
              if (this.loggedIn = true && withdrawAmount > this.balance){
                console.log('Withdrawal ammount is more than total balance'); 
            } else {
               console.log('Cannot withdraw if not signed in') 
            }
    
        }
         // set guard clauses
        // set overdraft conditionals 

        getBalance(){
            if(this.loggedIn == true)
            return this.balance 
        }

        login(username:string, password:any){
            if(this.loggedIn == false)
                if(username === this.username)
                    if(password === this.password) {
                        this.loggedIn = true
                    } else { 
                        this.loggedIn = false  // alert?
                    }
            return ( `${this.username} is logged in: ${this.loggedIn}`)
            
        }

        logout(){
            this.loggedIn == true ? this.loggedIn = false: this.loggedIn = true  // true??
            return ( `${this.username} is logged in: ${this.loggedIn}`)
        
        }
        
        display(){
            if (this.loggedIn == false) {
            return ("Must be signed in to display")
               
            } else { 
             return `${this.username} ${this.balance} ${this.loggedIn} `
            }
        }
}


const newUser1 = new User("Mason", "ASFASFA", 1230)

console.log(newUser1.register());
console.log(newUser1.getBalance())
console.log(newUser1.deposit(2000))
console.log(newUser1.withdraw(550))
console.log(newUser1.withdraw(6550))
console.log(newUser1.logout());
console.log(newUser1.deposit(2000))
console.log(newUser1.login("Mason", "AggsFA"))
console.log(newUser1.login("Mason", "ASFASFA"))
console.log(newUser1.display())
console.log(newUser1.logout());
console.log(newUser1.display())