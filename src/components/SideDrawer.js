import React, { useState, useEffect } from 'react';
import './Sidedrawer.css';
import Backdrop from './Backdrop';
import Logo from '../img/logo.jfif';
import { Link } from 'react-router-dom';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';

const Sidedrawer = ({show, closeSidedrawer}) => {
    const [closing, setClosing] = useState(false);
    const closeSidedrawerUtil = () => {
        setClosing(true);
        setTimeout(() => closeSidedrawer(), 300);
    }

    useEffect(() => {
        return () => {
            setClosing(false);
        }
        
    }, [show])

    return (
        <>
            <Backdrop closeSidedrawer={closeSidedrawerUtil} />
            <div className={"Sidedrawer " + (closing ? "Sidedrawer_Close" : "Sidedrawer_Open")}>
                <div className="d-flex justify-content-between">
                    <div className="d-flex flex-column p-1 flex-end">
                        <IconButton onClick={closeSidedrawerUtil}>
                            <CloseIcon fontSize="large" />
                        </IconButton>
                    </div>
                    <div className="Sidedrawer_Logo">
                        <img src={Logo} alt="Logo"/>
                    </div>
                </div>
                <ul className="d-flex flex-column mt-3 Sidedrawer_Links">
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
                    <br/>
                    <li> 
                        <button className="Sidedrawer-button">Get early access</button>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Sidedrawer;