const express = require('express');
const app = express();
const port = 3000;
const route = express.Router();
const mysql = require('mysql');
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.listen(port, () => {
  console.log('App running');
});
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'mydb1',
  multipleStatements: true,
});

connection.connect((err, res) => {
  err ? console.log(err) : console.log('DB');
  //   connection.query(
  //     'INSERT INTO logins (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), phone INT) ',
  //     (err, res) => {
  //       err ? console.log(err) : console.log('Table updated');
  //     }
  //   );
});
app.put('/add/:name/:phone', (req, res) => {
  let name1 = req.params.name;
  let phone1 = req.params.phone;
  console.log(name1);
  //res.send('name2');
  let insertQuery = 'INSERT INTO ?? (??,??) VALUES (?,?)';
  let query = mysql.format(insertQuery, [
    'logins',
    'name',
    'phone',
    name1,
    phone1,
  ]);
  connection.query(query, (err, res) => {
    err ? console.log(err) : console.log('data updated');
  });
  res.send('value added');
});

app.get('/visitors', (req, res) => {
  let a = connection.query('SELECT * FROM logins', (err, data) => {
    err ? console.log(err) : console.log(data);
    var objs = [];
    console.log(data.length);
    for (var i = 0; i < data.length; i++) {
      objs.push({ name: data[i].name, phone: data[i].phone });
    }
    // connection.end();
    res.send(JSON.stringify(objs));
  });
});
app.delete('/:visitor', (req, res) => {
  let visitor = req.params.visitor;
  let delQuery =
    'SET SQL_SAFE_UPDATES = 0;  DELETE FROM ?? WHERE name=?;  SET SQL_SAFE_UPDATES = 1';
  let query = mysql.format(delQuery, ['logins', visitor]);
  let a = connection.query(query, (err, data) => {
    err ? console.log(err) : console.log(data);
  });
  res.send('data deleted');
});

app.put('/update/:visitor/:phone', (req, res) => {
  let visitor = req.params.visitor;
  let phone = req.params.phone;

  let updateQuery = 'UPDATE ?? SET phone=? where name=? ';
  let query = mysql.format(updateQuery, ['logins', phone, visitor]);
  connection.query(query, (err, data) => {
    err ? console.log(err) : console.log(data);

    res.send('data updated');
  });
  //res.send('data updated');
});
