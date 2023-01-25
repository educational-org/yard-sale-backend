const bcrypt = require('bcrypt');

async function hashingPassword(){
  const myPasword = 'admin123.202';
  const hash = await bcrypt.hash(myPasword,10);
  console.log(hash);
}

hashingPassword();
