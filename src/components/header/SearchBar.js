import React, { useState } from 'react';

function SearchBar() {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const toggleLogin = () => {
    setShowLogin(!showLogin);
    setShowRegister(false);
  };

  const toggleRegister = () => {
    setShowRegister(!showRegister);
  };

  return (
    <div className="addressContainer">
      {/* Input địa chỉ + hình */}
      <div className="addressBox">
        <input
          type="text"
          placeholder="hãy chọn địa chỉ giao hàng"
          className="addressInput"
        />
        <img src="/images/icon/timkiem.png" alt="Hình" className="addressImage" />
      </div>

      {/* Nút đăng nhập */}
      <button onClick={toggleLogin} className="loginButton">
        Đăng nhập
      </button>

      {/* Form đăng nhập */}
      {showLogin && (
        <div className="loginForm">
          {!showRegister ? (
            <>
              <h3>Đăng nhập</h3>
              <input type="text" placeholder="Tên đăng nhập" />
              <input type="password" placeholder="Mật khẩu" />
              <button>Đăng nhập</button>
              <p className="registerLink">
                Chưa có tài khoản?{' '}
                <span onClick={toggleRegister}>Đăng ký tại đây</span>
              </p>
            </>
          ) : (
            // Giao diện đăng ký
            <>
              <h3>Đăng ký</h3>
              <input type="text" placeholder="Số điện thoại" />
              <input type="password" placeholder="Mật khẩu" />
              <div className="otpContainer">
                <input type="text" placeholder="Mã OTP" className="otpInput" />
                <button className="sendOtpButton">Gửi mã</button>
              </div>
              
              <button>Đăng ký</button>
              <p className="registerLink">
                Đã có tài khoản?{' '}
                <span onClick={toggleRegister}>Quay lại đăng nhập</span>
              </p>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default SearchBar;