const express = require ('express')
const servidor = express ()

servidor.get('/' , (req, res, next) => {
   return res.send({
      "mensagem": "bem vindo ao servidor NodeJs"
   })
})
servidor.listen(3000, () => {
    console.log('servidor funcionando!')
})
