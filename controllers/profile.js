const { handleSignin } = require('./signin');

const handleProfile = (db) => (req, res) => {
  const { id } = req.params; //check if param or params
  db.select('*')
    .from('users')
    .where({ id })
    .then((user) => {
      if (user.length) {
        res.json(user[0]);
      } else {
        res.status(400).json('Error: not found');
      }
    })
    .catch((err) => res.status(400).json('Errror getting user'));
};

module.exports = {
  handleProfile
};
