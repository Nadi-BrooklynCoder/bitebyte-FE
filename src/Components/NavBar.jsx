import React from "react"
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <nav>
            <h3>
                <Link to="/vamps">Vamps</Link>
            </h3>
            <button>
                <Link to="/vamps/new">New Vamp</Link>
            </button>
        </nav>
    )
}

export default NavBar;