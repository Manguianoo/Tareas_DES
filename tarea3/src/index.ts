enum Roles{
    'ADMIN' = 'admin',
    'MANAGER' = 'manager',
    'CLIENT' = 'client'
}

enum Status{
    'ACTIVE' = 'active',
    'BLOCKED' = 'blocked'
}

interface IUsuario {
    readonly id: number;
    name: string;
    email: string;
    role: Roles;
    status: Status
}

const users: IUsuario[] = [
    {
        id: 1,
        name: "Mariana Anguiano",
        email: "mariana@iteso.mx",
        role: Roles.ADMIN,
        status: Status.ACTIVE
    },
    {
        id: 2,
        name: "Diego Salas",
        email: "Diego@iteso.mx",
        role: Roles.MANAGER,
        status: Status.ACTIVE  
    },
    {
        id: 3,
        name: "Paulina Aceves",
        email: "Pau@iteso.mx",
        role: Roles.CLIENT,
        status: Status.ACTIVE  
    },
    {
        id: 4,
        name: "Fatima Velez",
        email: "Fatima@iteso.mx",
        role: Roles.CLIENT,
        status: Status.ACTIVE  
    },
    {
        id: 5,
        name: "Luis Orozco",
        email: "Luis@hotmail.com",
        role: Roles.MANAGER,
        status: Status.ACTIVE  
    },
    {
        id: 6,
        name: "Sofia Jimenez",
        email: "Sofia@iteso.mx",
        role: Roles.CLIENT,
        status: Status.ACTIVE  
    },
    {
        id: 7,
        name: "Karlos Said",
        email: "Karlos@hotmail.com",
        role: Roles.CLIENT,
        status: Status.BLOCKED  
    },
    {
        id: 8,
        name: "Danna Caruso",
        email: "Danna@iteso.mx",
        role: Roles.CLIENT,
        status: Status.ACTIVE  
    },
    {
        id: 9,
        name: "Jessica Aceves",
        email: "Jessica@hotmail.com",
        role: Roles.MANAGER,
        status: Status.ACTIVE  
    },
    {
        id: 10,
        name: "Daniel Ibarra",
        email: "Daniel@iteso.mx",
        role: Roles.CLIENT,
        status: Status.BLOCKED  
    }
]

function findUserById(id:number): IUsuario | undefined{
    return users.find((user) => { //find porque es 1 solo
        return user.id === id;
    });
}

function findUsersByName(name:string): IUsuario[]{
   return users.filter((user) => { //filter porque pueden ser varios
        return user.name.toLowerCase().includes(name.toLowerCase());
    });
}

function findUsersByEmail(email:string): IUsuario[]{
      return users.filter((user) => { 
        return user.email.toLowerCase().includes(email.toLowerCase());
    });
}

function findUserByRole(role:Roles): IUsuario[]{
          return users.filter((user) => { 
        return user.role === role;
    });
}

function findUserByStatus(status:Status): IUsuario[]{
          return users.filter((user) => { 
        return user.status === status;
    });
}

//PRUEBAS
console.log("-----Buscar por ID 1-----");
console.log(findUserById(1));

console.log("\n-----Buscar por nombre: Mariana-----");
console.log(findUsersByName("Mariana"));

console.log("\n-----Buscar por email: @iteso.mx-----");
console.log(findUsersByEmail("@iteso.mx"));
console.log("-----Buscar por email: @hotmail.com-----");
console.log(findUsersByEmail("@hotmail.com"));

console.log("\n-----Buscar por role: cliente-----");
console.log(findUserByRole(Roles.CLIENT));

console.log("\n-----Buscar por status: blocked-----");
console.log(findUserByStatus(Status.BLOCKED));






 