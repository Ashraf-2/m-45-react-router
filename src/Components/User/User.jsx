
const User = ({usr}) => {
    const {id,name,email,phone} = usr;
    return (
        <div>
            <h4>Name: {name}</h4>
            <p>id: {id}</p>
            <p>email: {email}</p>
            <p>Phone: {phone}</p>
        </div>
    );
};

export default User;