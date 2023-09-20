import { Link, useLoaderData } from "react-router-dom";

const UserDetails = () => {
    const user = useLoaderData();
    const {name,address,website} = user;
    const {city,street,zipcode} = address;
    return (
        <div>
            <h3>User Name: {name}</h3>    
            {/* <h3>User Name: {usr.name}</h3>     */}
            <p>City: {city}</p>
            <p>Street: {street}</p>
            <p>Zipcode: {zipcode}</p>
            <p>Website: {website}</p>
            <Link to="/users">Back</Link>
        </div>
    );
}
export default UserDetails;    