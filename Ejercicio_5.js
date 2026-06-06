function forSearch(users, email){
    for(let i = 0; i < users.length; i++){
        if(users[i].email === email){
            return users[i];
        } 
    }
}

function findSearch(users, email){
    return users.find(function(user){
        return user.email === email;
    });
}

function precomputo(users){
    let index = {};

    users.forEach(function(user){
        index[user.email] = user;
    });
    return index;
}

function indexSearch(index, email){
   return index[email];
}

const users = [
  { id: 1, nombre: "Paulina",  email: "pau@gmail.com" },
  { id: 2, nombre: "Luis", email: "luis@gmail.com" },
  { id: 3, nombre: "Diego", email: "diego@gmail.com" },
  { id: 4, nombre: "Mariana", email: "mariana@gmail.com" }
];

let index = precomputo(users);
let emailBuscar = "diego@gmail.com";

console.log(index);
console.log("for: ", forSearch(users, emailBuscar));
console.log("find: ", findSearch(users, emailBuscar));
console.log("precomputo: ", indexSearch(index, emailBuscar));