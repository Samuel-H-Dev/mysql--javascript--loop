import mysql from "mysql2";
import { dbconnect } from "./secrets.js";

const db = mysql.createConnection(dbconnect);

const query = "SELECT * FROM movietable LIMIT 4";

db.query(
    query,
    function(err, results){
        console.log(err);
        console.log(results);


        for(let i = 0; i<results.length; i++){
            console.log(results[i].name_title );
        }

    db.end();
    }
)