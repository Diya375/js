 class User{
    constructor(username){
        this.username = username
    }
    logMe(){//method give value to the username you made
        console.log(`USERNAME IS ${this.username}`);
    }
 }

 class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
        
    }
 }

 const tea =new Teacher("tea", "tea@gmail.com", "345")
 tea.logMe()

 const coffee = new User("coffee")
 coffee.logMe()

 console.log(tea instanceof Teacher);