import axios from "axios";

async function getUser(){
    
}

export default async function UserInfo(){
    // const userData = await getUser()
    
    const userData = await axios.get("https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details");

    await new Promise(r => setTimeout(r, 5000));

    // Promise(r = setimeout(r, 5000));

    const daata =  userData.data;
    return <div>
        <div className="flex
        ">{daata.email}</div>
        
        {daata.name}
    </div>
    
}