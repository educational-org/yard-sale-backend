const  { Client } = require('pg');

async function getConexion(){
  const client = new Client({
    host: "localhost",
    port:5432,
    user:"juancacode",
    password:"admin123",
    database:'my_store_db'
  })
  await client.connect();
  return client;
}

module.exports = getConexion;
