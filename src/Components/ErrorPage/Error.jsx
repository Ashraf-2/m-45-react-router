import { useParams, useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";

const Error = () => {
    const error = useRouteError();
    const {userId} = useParams();

    return (
        <div>
            <h1>404! Not Found web Page!!!</h1>
            <p>{error.statusText || error.message}</p>{
                error.status === 404 && <div>
                    <p>--Go Back Where You From--</p>
                    <Link to="/"><button className="btn btn-neutral">Home</button></Link>
                </div>
            }

        </div>
    );
};

export default Error;