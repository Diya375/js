const User={
    _email: 'd@diy.com',
    _password:'abc',

    get email(){
      return this._email.toUpperCase()

    },
    
    set email(value){
        this._email= value

    }
}


const Tea = Object.create(User)//factory function
console.log(tea.email);
