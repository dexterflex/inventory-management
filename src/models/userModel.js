export default class userModel {
    constructor(id, name, email, password) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
    }
    static push(name, email, password) {
        let user = users.find(curr => curr.email === email);
        if (!user) {
            let currUser = new userModel(users.length + 1, name, email, password);
            users.push(currUser);
            return true;
        }
        return false;
    }
    static find(email, password) {
        let index = users.findIndex(curr => curr.email.toLowerCase() == email.toLowerCase() && curr.password == password);
        return index;
    }
}
let users = [
    {
        "id": 1,
        "name": "Vivek Kumar",
        "email": "vk281977@gmail.com",
        "password": "vivekkumar@1"
    },
    {
        "id": 2,
        "name": "jhon Doe",
        "email": "jhon@gmail.com",
        "password": "password"
    }
]