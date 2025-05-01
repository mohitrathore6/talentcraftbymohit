
const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

const db = new sqlite3.Database('database.sqlite', (err) => {
    if (err) console.error(err.message);
    else console.log('Connected to the database.');
});

db.run('CREATE TABLE IF NOT EXISTS applications (id INTEGER PRIMARY KEY, name TEXT, email TEXT)');

app.post('/apply', (req, res) => {
    const { name, email } = req.body;
    db.run('INSERT INTO applications (name, email) VALUES (?, ?)', [name, email], function(err) {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.status(200).json({ message: 'Application submitted!', id: this.lastID });
        }
    });
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
