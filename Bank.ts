// class User {
//     constructor(
//         public username: string,
//         private password: string,
//         private balance: number = 0,
//         private loggedIn: boolean = false
//     ){};

//         checkPassword(){
            
//         }
        
//         deposit(depositedAmount: number) {
//             if (this.loggedIn == true && depositedAmount > 0){
//                 this.balance += depositedAmount
//                 return;
//             }else if ( this.loggedIn == false) { 
//                 console.log('Cannot deposit if not signed in ');
//             } else if (depositedAmount < 0){
//                 ('Cannot deposit 0 dollars or less')
//             }
//             return this.balance
//         }

//         withdraw(withdrawAmount: number){
//             if (this.loggedIn == true && withdrawAmount < this.balance && withdrawAmount > 0 ){
//                return this.balance -= withdrawAmount
//             } else if(this.loggedIn == true && withdrawAmount > this.balance){
//                 console.log('Withdrawal ammount is more than total balance')
//                 return this.balance;
//             } else {
//                 console.log('Cannot withdraw if not signed in') 
//                 return;
//             }
    
//         }
//          // set guard clauses
//         // set overdraft conditionals 

//         getBalance(){
//             return this.balance 
//         }

        
//         display(){
//             if (this.loggedIn == false) {
//             return ("Must be signed in to display")
               
//             } else { 
//              return `${this.username} ${this.balance} ${this.loggedIn} `
//             }
//         }
// }

class Bank {

   constructor( 
    private users: User[],
    private username: User,
    private password: User,
    private currentUser : User,
    private balance:number,
    

){};
    
   

    
    register(username:string, password:string): string{
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
        
        login(username:string, password:any){
           this.loggedIn == false && username === this.username && password === this.password ? this.loggedIn = true : this.loggedIn = false
            return ( `${this.username} is logged in: ${this.loggedIn}`)
            
        }

        logout(){
            this.loggedIn == true ? this.loggedIn = false: this.loggedIn = true
            return ( `${this.username} is logged in: ${this.loggedIn}`)
        
        }
    }
}

const newUser1 = new User("Mason", "ASFASFA", 1230)

console.log(newUser1.register())
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