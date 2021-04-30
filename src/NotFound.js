import { Link } from 'react-router-dom'

const NotFound = () => {
    return (  
        <div className="notFound">
            <h2>Sorry,not found!!</h2>
            <Link to='/'>Back to homepage</Link>
        </div>
    );
}
 
export default NotFound;
