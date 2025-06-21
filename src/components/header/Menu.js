import React from 'react';

const Menu = ({ onMenuClick }) => {
    return (
        <nav className="menu">
            <ul className='menulist'>
                <li onClick={() => onMenuClick('Home')}>Đồ ăn</li>
                <li onClick={() => onMenuClick('About')}>Giới thiệu</li>
                <li onClick={() => onMenuClick('Contact')}>Đặt món</li>
            </ul>
        </nav>
    );
};

export default Menu;