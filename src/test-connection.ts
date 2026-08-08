import { query } from './db.ts';

async function testConnection() {
    try {
        console.log('Connecting to PostgresSQL...');

        const test = await query('SELECT * FROM users');
        console.log(test.rows[0]);
        const res = await query('SELECT NOW()');
        console.log('Connectioin Successful')
        console.log(`Server time: ${res.rows[0].now}`)
    } catch (err) {
        console.log('Connection Failed!');
        console.error(err);
    } finally {
        process.exit();
    }
}

testConnection();