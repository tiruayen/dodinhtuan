import React, { useState } from 'react';

function ContactInfo() {
  const [showLocationDropdown, setShowLocationDropdown] = useState(false);
  const [selectedProvince, setSelectedProvince] = useState('Bắc Ninh');
  const provinces = ['Bắc Ninh','Hà Nội', 'TP. Hồ Chí Minh', 'Đà Nẵng', 'Hải Phòng', 'Cần Thơ'];

  const handleProvinceSelect = (province) => {
    setSelectedProvince(province);
    setShowLocationDropdown(false);
  };

  return (
    <div className="logoContainer">
      <img src="/images/Logo.png" alt="Logo" className="logo" />
      <div className="locationDropdown">
        <button
          onClick={() => setShowLocationDropdown(!showLocationDropdown)}
          className="locationButton"
        >
          {selectedProvince}
        </button>
        {showLocationDropdown && (
          <div className="dropdownMenu">
            <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
              {provinces.map((province) => (
                <li
                  key={province}
                  className="dropdownItem"
                  onClick={() => handleProvinceSelect(province)}
                >
                  {province}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default ContactInfo;