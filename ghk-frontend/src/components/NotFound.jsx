//components/NotFound.jsx
import { Link } from "react-router-dom";
import './NotFound.css';

  const NotFound = () => {
    return (
        <div className="NotFound">
                <h1>Side ikke funnet (404)</h1>
                <p>Vi klarer visst ikke å finne det du leter etter. Det er mulig at innholdet har blitt fjernet.</p>
                <Link to="/">
                    Tilbake til hjemmesiden
                </Link>
        </div>
    );
}

export default NotFound;