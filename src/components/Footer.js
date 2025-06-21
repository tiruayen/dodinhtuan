import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-grid">
        {/* Column 1 */}
        <div className="footer-column">
          <div className="logo-section"><img src="/images/Logo.png" alt="Logo" className="logo2" />
          <div className="linesss"></div>
          </div>
          <div className="text-section">Về Taurus Fast Food</div>
          <div className="text-section">Trung tâm hỗ trợ</div>
        </div>
        {/* Column 2 */}
        <div className="footer-column">
          <div className="empty-section"></div>
          <div className="text-sections">Câu hỏi thường gặp</div>
          <div className="text-section">Đối tác của Taurus Fast Food</div>
        </div>
        {/* Column 3 */}
        <div className="footer-column">
          <div className="empty-section"></div>
          <div className="icon-section">
            <img src="/images/icon/Icon1.png" alt="Icon 1" className="icon" />
            <img src="/images/icon/Icon2.webp" alt="Icon 2" className="icon" />
            <img src="/images/icon/Icon3.png" alt="Icon 3" className="icon" />
          </div>
          <div className="empty-section"></div>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;