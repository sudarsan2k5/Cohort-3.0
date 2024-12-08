import { Client } from "pg";

// postgresql://neondb_owner:1ojYIdpP6@ep-icy-recipe-a5mmitjj.us-east-2.aws.neon.tech/neondb?sslmode=require
const pgClient = new Client("postgresql://neondb_owner:1ojYIdpP6@ep-icy-recipe-a5mmitjj.us-east-2.aws.neon.tech/neondb?sslmode=require"
);

async function main(){
    await pgClient.connect();
    const response = await pgClient.query("SELECT * FROM users;")
    console.log(response);
}

main()