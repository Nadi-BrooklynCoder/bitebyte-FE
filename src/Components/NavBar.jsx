import React from "react"
import { Link } from "react-router-dom";
import "./NavBar.css"

function NavBar() {
    return (
        <nav>
            <h3 className="vamp_button">
                <Link to="/vamps">Vamps</Link>
            </h3>
            <button>
                <Link to="/vamps/new">New Vamp</Link>
            </button>
        </nav>
    )
}

export default NavBar;