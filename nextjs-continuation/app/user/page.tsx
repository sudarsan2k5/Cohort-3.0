import axios from "axios"

export default async function User(){

    const respose = await axios.get("https://dummyjson.com/todos/random");

    const data = respose.data;



    return <div>
       
        <div className="flex">
        {data.id}
        </div>
        {data.todo}
    </div>
}