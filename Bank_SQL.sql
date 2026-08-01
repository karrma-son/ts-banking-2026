CREATE DATABASE bankdb;

use bankdb;

CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    username VARCHAR(50) NOT NULL UNIQUE,
    user_password VARCHAR(50) NOT NULL,
    account_number VARCHAR(8) NOT NULL UNIQUE,
    balance DECIMAL(10, 2) NOT NULL
);

INSERT INTO users (
    first_name, 
    last_name,
    username,
    user_password,
    account_number,
    balance 
) VALUES (
   'Jason',
    'Marr',
    'jasonized1',
    'password123',
    124141,
    1200.00
);
INSERT INTO users (
    first_name, 
    last_name,
    username,
    user_password,
    account_number,
    balance 
) VALUES (
   'Kacey',
    'Tamara',
    'T-style32',
    'password111',
    25541,
    300.57
);