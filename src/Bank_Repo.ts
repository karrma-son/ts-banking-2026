import { User } from '../User.ts';
import { query } from './db.ts';

export async function registerUser(user: User) {
    try {
        const values = [user.getFirstName, user.getLastName, user.getUsername, user.getPassword, user.getAccountNumber, user.getBalance]
        const res = await query(
            `INSERT INTO users (first_name, last_name, username, user_password, account_number, balance)
            VALUES($1, $2, $3, $4, $5, $6) RETURNING user_id, first_name, last_name, username, user_password, account_number, balance;
            `, values
        )
        const resultObject = res.rows[0];


        if (resultObject === undefined) {
            return undefined
        }
        const newUser = new User(resultObject.first_name, resultObject.last_name, resultObject.username, resultObject.user_password, resultObject.user_id, resultObject.account_number, resultObject.balance)
        return newUser;

    } catch (error) {
        console.log('')
        console.error("ERROR:", error.message)
        return undefined
    }

};

export async function loginRetrieval(username: string, password: string) {
    try {
        const res = await query(`SELECT * FROM users WHERE username = $1 and user_password = $2;`, [username, password])
        const resultObject = res.rows[0];


        if (resultObject === undefined) {
            return undefined
        }
        const newUser = new User(resultObject.first_name, resultObject.last_name, resultObject.username, resultObject.user_password, resultObject.user_id, resultObject.account_number, resultObject.balance)
        return newUser;
    } catch (error) {
        console.log('')
        console.error("ERROR:", error.message)
        return undefined
    }
}

export async function depositFunds(depositAmount: number, id: number) {
    try {
        const res = await query(`UPDATE users SET balance = balance + $1 WHERE user_id = $2 RETURNING balance;`, [depositAmount, id]);
        return res.rows[0].balance;
    } catch (error) {
        console.log('')
        console.error("ERROR:", error.message)
        return undefined;
    }

}


export async function withdrawFunds(withdrawAmount: number, id: number) {
    try {
        const res = await query(`UPDATE users SET balance = balance - $1 WHERE user_id = $2 RETURNING balance;`, [withdrawAmount, id]);
        return res.rows[0].balance;
    } catch (error) {
        console.log('')
        console.error("ERROR:", error.message)
        return undefined;
    }

}


export async function balanceRetrieval(id: number) {
    await query(`SELECT balance from user_id = $1;`, [id])

}

export async function displayInfo(id: number) {
    await query(`SELECT username, account_number FROM users WHERE user_id = $1;`, [id])
}

export async function findUser(username: string) {
    await query(`SELECT username FROM users WHERE username = $1;`, [username])

}