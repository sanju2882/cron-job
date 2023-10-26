const express = require("express");
const mysql = require("mysql");
const cron = require("node-cron");
const app = express();
app.use(express.json());
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "cron_db",
});
const insertIntoDb = () => {
    const sql = "INSERT INTO users(name,email,roll)VALUES(?,?,?);";
    const values = ["john", "john@mail.com", "admin"];
    db.query(sql, values, (err, result) => {
        err ? console.log(err) : console.log("success");
    });
};
cron.schedule("*/10 * * * * *", () => {
    console.log("cron running");
    insertIntoDb();
});

app.listen(3000, () => {
    console.log("3000 running");
});
