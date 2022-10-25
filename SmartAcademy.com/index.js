const { Pool } = require("pg");

const config = {
    user: "postgres",
    host: "localhost",
    password: "",
    database: "SmartAcademy"
};

const pool = new Pool(config);

const getStudents = async () => {
    try {
        const res = await pool.query("SELECT * FROM usuario");
        console.log(res.rows[0]);
        pool.end();
    } catch (e) {
        console.log(e);
    }
};

getStudents();