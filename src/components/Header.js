import React from 'react';
import './Header.css';
import ContactInfo from './header/ContactInfo';
import Menu from './header/Menu';
import SearchBar from './header/SearchBar';

const Header = ({ onMenuClick }) => {
    return (
        <div className="headerContainer">
            <div className="logoContainer">
                <ContactInfo />
            </div>
            <div className="addressContainer">
                <Menu onMenuClick={onMenuClick} /> {/* Truyền hàm vào Menu */}
                <SearchBar />
            </div>
        </div>
    );
};

export default Header;