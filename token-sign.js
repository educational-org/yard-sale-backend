const jwt = require('jsonwebtoken');

const secret = 'myCat';
const payload = {
  sub: 1, //-> Identificador del usuario
  role:"customer" //-> Se utiliza para los permisos
}

function signToken(payload, secret){
  return jwt.sign(payload,secret);
}

const token = signToken(payload, secret);
console.log(token)
