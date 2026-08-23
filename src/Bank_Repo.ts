import { User } from '../User.ts';
import { query } from './db.ts';

export async function registerUser(user:User){
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
    const newUser = new User(resultObject.first_name, resultObject.last_name, resultObject.username, resultObject.user_password, resultObject.user_id, resultObject.account_number, resultObject.balance)
    return newUser;
}

export async function depositFunds(depositAmount:number, id:number){
    const res = await query(`UPDATE users SET balance = balance + $1 WHERE user_id = $2 RETURNING balance;`,[depositAmount, id]);
    return res.rows[0].balance;
}

export async function withdrawFunds(withdrawAmount:number, id:number){
    const res = await query(`UPDATE users SET balance = balance - $1 WHERE user_id = $2 RETURNING balance;`,[withdrawAmount, id]);
    return res.rows[0].balance;
}


export async function balanceRetrieval(id: number) {
    await query (`SELECT balance fomr user_id = $1;`, [id])
    
}

export async function displayInfo(id: number) {
    await query(`SELECT username, account_number FROM users WHERE user_id = $1;`, [id])
}

export async function findUser(username:string){
    await query(`SELECT username FROM users WHERE username = $1;`, [username])

}