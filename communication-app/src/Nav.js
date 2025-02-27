import { Link, Outlet } from 'react-router-dom';


function Nav() {


    const logout = () => {
        localStorage.removeItem("loggedInUser");
    }


    return (
        <div className="row">
            <nav className="navbar navbar-dark bg-primary navbar-expand-lg">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav mr-6">
                            <li className="nav-item active ">
                                <Link className="nav-link" to="/groupchat">Group Chat</Link>
                            </li>
                            <li className="nav-item active">
                                <Link className="nav-link" to="/usermgt">Manage Users</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/docmgt">Manage Documents</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" onClick={logout} to="/">Logout</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Outlet />
        </div>
    );
}


export default Nav;