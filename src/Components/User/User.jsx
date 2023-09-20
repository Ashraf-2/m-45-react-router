import { Link } from "react-router-dom";
import UserDetails from "../UserDetails/UserDetails";

const User = ({usr}) => {
    const {id,name,email,phone} = usr;
    return (
        <div>
            <h3>Name: {name}</h3>
            <p>id: {id}</p>
            <p>email: {email}</p>
            <p className="text-red-500">Phone: {phone}</p>
            <Link to={`/user/${id}`}>Show Details</Link>
            {/* <UserDetails usr={usr}></UserDetails> */}
        </div>
    );
};

export default User;