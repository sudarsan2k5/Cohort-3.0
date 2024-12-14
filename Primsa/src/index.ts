import express from "express";
import { PrismaClient } from "@prisma/client";


const app = express()
const client = new PrismaClient();

app.get('/users', async (req, res)=> {
    const users = await client.user.findMany();
    
    res.json({
        users
    });
})

app.get('/todos/:id', async (req, res) => {
    const id = req.params.id;
    const user = await client.user.findFirst({
        where: {
            id: parseInt(id)
        },
        select: {
            todos: true,
            username: true,
            password: true
        }
    })
    res.json({
        user
    })
})

// async function createUser() {
//     try {
//         const user = await client.user.create({
//             data: {
//                 username: "Sudarsan",
//                 password: "123sd",
//                 age: 23,
//                 city: "Delhi"
//             }
//         });
//         console.log("User created successfully:", user);
//     } catch (error) {
//         console.error("Error creating user:", error);
//     } finally {
//         await client.$disconnect();
//     }
// }

// createUser();


app.listen(3000);