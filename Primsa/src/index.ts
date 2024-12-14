import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();


async function createUser(){
    client.user.create({
        data: {
            username: "Sudarsan",
            password: "123sd",
            age: 23,
            city: "Delhi"
        }
    })
}

createUser();
