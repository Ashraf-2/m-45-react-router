import { useLoaderData } from "react-router-dom";
import User from "../User/User";

const Users = () => {

    const users = useLoaderData();
    // console.log("users: ",users);
    return (
        <div>
            <h2>Our Users:{users.length}</h2>
            <p className="text-xl">All are fantastic boaring users. </p>
            <div>
                {
                    users.map((usr) => <User key={usr.id} usr={usr}></User>)
                }
            </div>            
        </div>
    );
};

export default Users;