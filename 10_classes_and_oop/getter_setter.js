class User{
    constructor(email, password){
        this.email = email;
        this.password = password
    }
    get email(){
        return this._email.toUpperCase()// only return in getters
    }
    set email(value){
     this._email= value// we don't return in settters
    }
    get password(){
        return `${this._password}diya` 

    }
    set password(value){
        this._password=value
    }
}
const diya = new User("diya.ai", "abc")
console.log(diya.password);
console.log(diya.email);
