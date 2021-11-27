const Pool= require("pg").Pool;

const pool= new Pool({
    user: "postgres",
    password: "Dr@715142",
    database: "facultydb",
    host: "localhost",
    port: 3000
});

module.exports= pool;