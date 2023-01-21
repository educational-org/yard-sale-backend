const express = require('express'); // Importing the express module
const router = express.Router();

router.get('/users', (req, res) => {
  //http://localhost:6969/users?limit=10&offset=200
  const { limit, offset } = req.query;
  if (limit && offset) {
    res.json({
      limit,
      offset,
    });
  } else {
    res.send("There's no params");
  }
});

module.exports = router;
