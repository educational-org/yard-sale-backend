const bcrypt = require('bcrypt');

async function veerifyPassword(){
  const myPasword = 'admin123.202';
  const hash =  "$2b$10$Kt5rT0dgqGfB7.s0XQQbO.nDApiDSAELzfEmpk01Lje3dZDtZDwGW";
  const isMatch = await bcrypt.compare(myPasword,hash);

  console.log(isMatch);
}

veerifyPassword();
