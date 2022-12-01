import React from "react";
import "./Navbar.css";
import Logo from "./images/logo-ecom.png";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";


const Navbar = () => {
    const [{ cart, user }, dispatch] = useStateValue();

    const handleAuthenticaton = () => {
        if (user) {
            auth.signOut();
        }
    }

    return (
        <div className="navbar">
            <Link to="/" className="link">
                <img
                    className="navbar__logo"
                    src={Logo}
                />
            </Link>

            <div className="navbar__nav">
                <Link to={!user && '/login'} className="link">
                    <div className="navbar__option">
                        <span className="navbar__optionLineOne">{!user ? 'Guest' : user.email}</span>

                    </div>
                </Link>
                <Link to={!user && '/login'} className="link">
                    <div onClick={handleAuthenticaton} className="navbar__option">
                        <span className="navbar__optionLineOne">{user ? 'Sign Out' : 'Sign In'}</span>
                    </div>
                </Link>
                <Link to="/checkout" className="link">
                    <div className="navbar__optionCart">
                        <ShoppingCartIcon />
                        <span className="navbar__optionLineOne navbar__cartCount">
                            {user ? cart.length : '0'}
                        </span>
                    </div>
                </Link>

            </div>
        </div>

    )
}

export default Navbar;
