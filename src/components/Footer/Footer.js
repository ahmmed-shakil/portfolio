import React, { useContext } from 'react';
import { CgFacebook, CgTwitter } from 'react-icons/cg';
import { FaLinkedin } from 'react-icons/fa';
import { ThemeContext } from '../../context';
import './Footer.css'

const Footer = () => {
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div className="footer">
            <div>
                <ul style={{ display: 'flex', justifyContent: 'center', listStyle: 'none', fontSize: '16px', padding: '0', marginTop: '10px' }}>
                    <li><a style={{ textDecoration: 'none', fontSize: '30px', color: darkMode ? 'white' : 'white' }} href="https://www.facebook.com/shakilahmmed.joy.12/" target="_blank" rel="noreferrer"><CgFacebook /></a></li>
                    <li><a style={{ textDecoration: 'none', fontSize: '30px', color: darkMode ? 'white' : 'white' }} href="https://www.linkedin.com/in/shakil-ahmmed-joy/" target="_blank" rel="noreferrer">   <FaLinkedin />             </a></li>
                </ul>
            </div>

            <p>Copyright &copy; Shakil Ahmmed Joy | 2021</p>
        </div>
    );
};

export default Footer;