const jwt = require('jsonwebtoken');

const secret = 'myCat';
const token = "ddeyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInJvbGUiOiJjdXN0b21lciIsImlhdCI6MTY3NDY5MzIwNX0.z-_EJbjfsnGW0WC3riASvsFwqK6z6qnsJmJPNbHVFTU"

function verifyToken(token, secret){
  return jwt.verify(token,secret);
}

const payload = verifyToken(token, secret);
console.log(payload)
