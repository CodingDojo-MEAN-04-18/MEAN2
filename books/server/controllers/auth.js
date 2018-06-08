const User = require('mongoose').model('User');

module.exports = {
  login(request, response) {
    const { email, password } = request.body;

    User.findOne({ email })
      .then(user => {
        if (!user) {
          throw Error();
        }

        return User.validatePassword(password, user.password).then(() => {
          // handle login
          handleLogin(request, response, user);
        });
      })
      .catch(error => {
        response.status(402).json('User password combo not found');
      });
  },
  register(request, response) {
    User.create(request.body)
      .then(user => {
        // handle login
        handleLogin(request, response, user);
      })
      .catch(console.log);
  },
  logout(request, response) {
    request.session.destroy();

    response.clearCookie('userID');
    response.clearCookie('expiration');

    response.json(true);
  },
};

function handleLogin(request, response, user) {
  console.log('logging in ');

  request.session.user = user.toObject();
  delete request.session.password;

  response.cookie('userID', user._id.toString());
  response.cookie('expiration', Date.now() + 86400 * 1000);

  response.json(user);
}
