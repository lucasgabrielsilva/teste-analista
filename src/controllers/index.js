const BuscaCep = require('busca-cep');

module.exports = {
	async checkCEP(req, res) {
		try{
      BuscaCep(req.body.cep, {sync: false, timeout: 3000}).then(endereco => {
        return res.status(200).send({status: "Sucess", data: endereco});
      }).catch(err => {
        return res.status(400).send({status: "ERROR", msg: err.toString()});
      });
		} catch(err){
			return res.status(400).send({status: "ERROR", msg: err.toString()});
		}
    },
    async getCursos(req, res) {
		try{
        const cursos = require("../configs");
        return res.status(200).send({status: "Sucess", data: cursos});
		} catch(err){
			return res.status(400).send({status: "ERROR", msg: err.toString()});
		}
    },

};