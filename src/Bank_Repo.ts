import { User } from '../User.ts';
import { query } from './db.ts';

export async function inserts(user:User){
    const values = [user.getFirstName, user.getLastName, user.getUsername, user.getPassword, user.getAccountNumber, user.getBalance]
    await query(
            `INSERT INTO users (first_name, last_name, username, user_password, account_number, balance)
            VALUES($1, $2, $3, $4, $5, $6)
            `, values
        )
};

export async function loginRetrieval(username:string, password:string){

    const res = await query(`SELECT * FROM users WHERE username = $1 and user_password = $2;`,[username, password])
    const resultObject = res.rows[0]
    const newUser = new User(resultObject.first_name, resultObject.last_name, resultObject.username, resultObject.user_password, resultObject.account_number, resultObject.balance)
    return newUser;
}