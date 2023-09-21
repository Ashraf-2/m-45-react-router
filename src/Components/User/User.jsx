import { Link } from "react-router-dom";
import UserDetails from "../UserDetails/UserDetails";

const User = ({usr}) => {
    const {id,name,email,phone} = usr;
    return (
        <div className="flex flex-col  items-center p-5 gap-2 border-2 border-red-300 rounded-xl">
            <h3>Name: {name}</h3>
            <p>id: {id}</p>
            <p>email: {email}</p>
            <p className="text-red-500">Phone: {phone}</p>
            <Link className="bg-blue-700 hover:bg-blue-500 text-lg  w-1/2 py-2 rounded-lg text-white font-bold " to={`/user/${id}`}>Show Details</Link>
            {/* <UserDetails usr={usr}></UserDetails> */}
        </div>
    );
};

export default User;