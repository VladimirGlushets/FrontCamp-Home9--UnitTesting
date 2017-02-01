var UserService = require('../../services/userService');

var getUserDto = function(dbUser){
  let currentUser = {};
  if (dbUser) {
      currentUser.id = dbUser._id;
      currentUser.name = dbUser.username;
      currentUser.email = dbUser.email;
  }
  else{
    currentUser = null;
  }
  return currentUser;
};

class ApiUserController {

  constructor(req, res, next) {
      this.req = req;
      this.res = res;
      this.res.setHeader('Content-Type', 'application/json');
      this.next = next;
      this.userService = new UserService();
  }

    getCurrentUser(){
      return this.sendResult(getUserDto(this.req.user));
    }

    createUser(model){
      this.userService.create(model).then((result) => {
        return this.sendResult(getUserDto(result));
      });
    }

    logout() {
        this.req.logout();
        return this.sendResult(true);
    }

    sendResult(data) {
        this.res.json(data);
    }
}

module.exports = ApiUserController;
