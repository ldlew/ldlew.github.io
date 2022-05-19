import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
        <h1>Character Sheet Manager</h1>
        <h6>The purpose of this web app is to manage an increasingly growing player base (80+ members) in an
            online dungeons and dragons campaign.
        </h6>
        <h4>User Links</h4>
        <nav>
            <Link to="/home">Manage Characters</Link> |{" "}
            <Link to="/create">Create New Character</Link> |{" "}
        </nav>
        <hr></hr>
    </div>
  );
}
export default Navbar;
