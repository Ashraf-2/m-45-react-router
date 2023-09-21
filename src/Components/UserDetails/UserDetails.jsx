import { Link, useLoaderData } from "react-router-dom";

const UserDetails = () => {
    const user = useLoaderData();
    const {name,address,website} = user;
    const {city,street,zipcode} = address;
    return (
        <div className="border-2 border-amber-700 rounded-lg flex flex-col items-center gap-3 p-5 ">
            <h3 className="text-red-700 font-bold text-xl">User Name: {name}</h3>    
            {/* <h3>User Name: {usr.name}</h3>     */}
            <p>City: {city}</p>
            <p>Street: {street}</p>
            <p>Zipcode: {zipcode}</p>
            <p>Website: {website}</p>
            {/* <Link to="/users" className="bg-blue-700 hover:bg-blue-500 text-lg px-5  py-2 rounded-lg text-white font-bold ">Back</Link> */}
            <Link to="/users"><button className="btn btn-neutral">Back</button> </Link>
        </div>
    );
}
export default UserDetails;    