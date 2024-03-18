// import 'dotenv/config.js'
import sql from 'mysql2';
//import { DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT, DB_USER } from './config'

const con = sql.createConnection({
    /*host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    port: DB_PORT,
    database: DB_NAME*/

    // DATABASE LOCALHOST
    host: 'localhost',
    user: 'root',
   password: 'yender',
   database: 'postest'
});

const connect = ()=>{

    console.log('connecting to database');
    con.connect(error=> {
        if(error) throw error;
        console.log('connect to the database successfully');
    })
}

export default {
    con,
    connect
};