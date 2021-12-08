import React, { useContext, useState } from "react";
import './Headar.css';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { HeaderData } from './HeadaerData';
import { IconContext } from 'react-icons';
import { ThemeContext } from "../../context";
import { NavHashLink } from "react-router-hash-link";

const Header = () => {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    return (
        <>
            <IconContext.Provider value={{ color: 'white' }}>
                <div className='navbar'>
                    <Link to='#' className='menu-bars'>
                        <FaIcons.FaBars style={{ color: darkMode ? 'white' : 'black' }} onClick={showSidebar} />
                    </Link>
                </div>
                <nav className={sidebar ? 'nav-menu active' : 'nav-menu'} style={{ backgroundColor: darkMode ? 'black' : '#59b256', color: darkMode ? '#59b256' : 'black' }}>
                    <ul className='nav-menu-items' onClick={showSidebar}>
                        {sidebar &&
                            <li className='navbar-toggle' style={{ backgroundColor: darkMode ? 'black' : '#59b256' }}>
                                <Link to='#' className='menu-bars' style={{ backgroundColor: darkMode ? 'black' : '#59b256' }} >
                                    <AiIcons.AiOutlineClose style={{ color: 'white' }} />
                                </Link>
                            </li>
                        }
                        {HeaderData.map((item, index) => {
                            return (
                                <li key={index} className={item.cName}>
                                    <NavHashLink to={item.path} style={{ color: 'white' }} >
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </NavHashLink>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </IconContext.Provider>
        </>
    );
};

export default Header;