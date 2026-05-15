const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

const db = new sqlite3.Database("./users.db");


// CREATE TABLE
db.run(`
CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT,
    password TEXT
)
`);


// REGISTER
app.post("/register", (req, res) => {

    const { username, password } = req.body;

    db.run(
        "INSERT INTO users(username, password) VALUES(?, ?)",
        [username, password],
        function(err) {

            if (err) {
                return res.send("Error");
            }

            res.send("Registration Successful");
        }
    );
});


// LOGIN
app.post("/login", (req, res) => {

    const { username, password } = req.body;

    db.get(
        "SELECT * FROM users WHERE username=? AND password=?",
        [username, password],
        (err, user) => {

            if (user) {
                res.send("Login Successful");
            } else {
                res.send("Invalid Username or Password");
            }
        }
    );
});


app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});