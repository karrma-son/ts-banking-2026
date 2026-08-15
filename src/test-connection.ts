import { query } from './db.ts';

async function testConnection() {
    try {
        console.log('Connecting to PostgresSQL...');



        const res = await query('SELECT NOW()');
        // const values = ['Joe', 'Schmogan', 'JoSchmo1', 'password123', '53235', '155.55'];
        // const insert = await query(
        //     `INSERT INTO users (first_name, last_name, username, user_password, account_number, balance)
        //     VALUES($1, $2, $3, $4, $5, $6)
        //     `, values
        // )
        const loging = ['jasonized1', 'password123']

        const login = await query ('SELECT * FROM users WHERE username = $1 and user_password = $2;', loging)
        
        // const depositing = [160.00, 1]  
        // const deposit = await query('UPDATE users SET balance = balance + $1 WHERE user_id = $2;', depositing)
        
        // const withdrawing = [360.00, 1]
        // const withdrawal = await query ('UPDATE users SET balance = balance - $1 WHERE user_id = $2;', withdrawing)
        
        // const id = [1]
        // const balance = await query ('SELECT balance FROM users WHERE user_id = $1;', id)
       
        const dis = ['T-style32', 2]
        const display = await query ('SELECT username, balance FROM users WHERE username = $1 and user_id = $2', dis)
        
        const test = await query('SELECT * FROM users');
        console.log(login.rows[0])

        console.log(display.rows[0])


        // console.log(balance.rows[0])
        console.log(test.rows);
        // console.log('Connection Successful')
        // console.log(`Server time: ${res.rows[0].now}`)
    } catch (err) {
        console.log('Connection Failed!');
        console.error(err);
    } finally {
        process.exit();
    }
}

testConnection();