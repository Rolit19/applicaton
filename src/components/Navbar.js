import React,{ useState } from 'react';
import './Navbar.css'
import Logo from '../img/logo.jfif';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import IconButton from '@material-ui/core/IconButton';
import Sidedrawer from './SideDrawer';

const Navbar =() =>{
    const [scrolled, setScrolled] = useState(false);
    const [showSidedrawer, setShowSidedrawer] = useState(false);
    window.onscroll = () => {
        if(window.scrollY) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    }
    const closeShowSidedrawer = () => {
        setShowSidedrawer(false);
    }
    return(
        <>
        {
            showSidedrawer ? <Sidedrawer show={showSidedrawer} closeSidedrawer={closeShowSidedrawer} /> : null
        }
        <div className={"Header " + (scrolled ? "Header_BoxShadow" : "")}>
                <div className="Header_Container">
                    <div className="Header_Logo">
                        <img src={Logo} alt="Logo" />
                    </div>
                    <div className="Header_SideMenuBtn">
                        <IconButton onClick={() => setShowSidedrawer(true)}>
                            <MenuRoundedIcon />
                        </IconButton>
                    </div>
                    <div className="Header_LinksContainer">
                        <ul className="Header_Links">
                            <li>
                                <a href="#" style={{color:"black"}}>Integration</a>
                            </li>
                            <li>
                                <a href="#">Pricing</a>
                            </li>
                            <li>
                                <a href="#">Blog</a>
                            </li>
                            <li>
                                <a href="#">About Us</a>
                            </li>
                        </ul>
                        <div className="Header_Buttons">
                            {/* <button className="Header_CreateAcc">Create Account</button> */}
                            <button className="nav-button">Get early access</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Navbar;