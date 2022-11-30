let USERS = [
]

const UserModel = {
    getUser : () => {
        return USERS;
    },
    saveUser:(userDetail)=>{
      USERS.push(userDetail)
    }
}

module.exports = UserModel