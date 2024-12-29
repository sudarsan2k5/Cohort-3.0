// function greet(name: String): String{
//     return "Hello " + name;
// }

// function isEven(num: number): boolean{
//     if(num % 2 == 0){
//         return true;
//     }else{
//         return false;
//     }
// }

// const greet = 

interface User {
    name: string;
    age: number;
    address: {
        city: string;
        country: string;
        pincode: number;
    }
}

let user: User = {
    name: "Sudarsan",
    age: 20,
    address: {
        city: "Bhubaneswar",
        country: "asdf",
        pincode: 78970
    }
}

function isLegal(user: User): boolean{
    if(user.age <= 18){
        return false;
    }else{
        return true;
    }
}

