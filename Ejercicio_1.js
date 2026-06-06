function normalizacionUsuarios(data){
    let result = {};

    data.forEach(user => {
        let id = user.id;

        if(result[id]){
            let rolesCombined = new Set([...result[id].roles, ...user.roles]);
            result[id].roles = Array.from(rolesCombined);
        } else result[id] = user;
    });

    return result;
}


const data = [
    { id: 1, name: "Ana", roles: ["admin", "editor"] },
    { id: 2, name: "Luis", roles: ["editor"] },
    { id: 1, name: "Ana", roles: ["viewer"] },
    { id: 3, name: "Diego", roles: ["viewer"] },
    { id: 3, name: "Diego", roles: ["viewer"] },
    { id: 2, name: "Luis", roles: ["viewer"] }
]

console.log(normalizacionUsuarios(data));