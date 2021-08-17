const { connect, connection } = require("mongoose")

module.exports = async () => {
	connect("mongodb+srv://aikoadmin2021:MbNr66Ddjcvb89Xn@cluster0.xvbcj.mongodb.net/Pruebas?retryWrites=true&w=majority", {
  		keepAlive: true,
  		useNewUrlParser: true,
  		useUnifiedTopology: true,
  		useCreateIndex: true,
	})

	connection.on("error", err => {
  		console.log("err", err)
	})
	
	connection.on("connected", (err, res) => {
  		console.log("Conectada la base de datos.")
	})
}