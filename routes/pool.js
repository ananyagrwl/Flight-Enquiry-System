var mysql = require("mysql")
var pool= mysql.createPool({
    host:"localhost",
    port:3306,
    user:"root",
    database:"flight_enquiry",
    password:"ananya123",
    multipleStatements:true,
    connectionLimit:100
})

module.exports=pool