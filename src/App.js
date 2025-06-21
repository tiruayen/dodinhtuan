// src/App.js
import React, { useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import './App.css';

const App = () => {
    // State để quản lý menu được chọn
    const [selectedMenu, setSelectedMenu] = useState('Home');

    // Hàm cập nhật menu khi được nhấp
    const handleMenuClick = (menu) => {
        setSelectedMenu(menu);
    };

    return (
        <div className="app">
            <Header onMenuClick={handleMenuClick} />
            <Main selectedMenu={selectedMenu} />
            <Footer />
        </div>
    );
};

export default App;