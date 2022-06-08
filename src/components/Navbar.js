import { Link } from "react-router-dom";
import "./styles.css";

const Navbar = () => {
  return (
    <div className="nav">
      <div className="navWrapper">
        <div className="logo">
          <Link to="/">ReactQueryDemo</Link>
        </div>
        <div className="links">
          <div className="link">
            <Link to="/">Home</Link>
          </div>
          <div className="link">
            <Link to="/super-heroes">Super Heroes</Link>
          </div>
          <div className="link">
            <Link to="/rq-super-heroes">RQ Super Heroes</Link>
          </div>
          <div className="link">
            <Link to="/rq-parallel">RQ Parallel</Link>
          </div>
          <div className="link">
            <Link to="/rq-dynamic-parallel">RQ Dynamic Parallel</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
