//LAB 17: DATABASE

const db = require('./util/database')
db.execute('SELECT * FROM materiales');

db.execute('SELECT * FROM members')
.then(([rows, fieldData]) => {
    console.log(rows);
})
.catch(err => {
    console.log(err);
});
