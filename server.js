const express = require("express");
const app = express();
const apiRoutes = require("./routes");
//const bodyParser = require("body-parser");
const mongoose = require('mongoose');


const log = require("./middlewares/log");
const authentication = require("./middlewares/authentication");

app.use(log);
//app.use(bodyParser.json());
app.use(express.json());

app.get("/",(req, res) => {
	res.send("Bienvenido, Registrate!!");
})
app.use("/",authentication, apiRoutes);

mongoose.connect('mongodb://127.0.0.1:27017/registros', (error) => {
	if (error) {
		console.log("Hubo un error en la conexion a Mongo", error);
	} else {
		console.log("Conexion exitosa con MongoDB");
	}
});

app.listen(3000);