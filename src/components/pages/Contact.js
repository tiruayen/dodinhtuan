import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="intro-container">
      <div className="image-container">
                <img src="/images/about-img2.png" alt="Hotel Mellow" />
            </div>
            <div className="contact-container">
            <div className="contact-menu">
                <ul className="contact-menu-list">
                    <li className="contact-menu-item">Dành cho bạn</li>
                    <li className="contact-menu-item">Combo ưu đãi</li>
                    <li className="contact-menu-item">Combo gia đình</li>
                    <li className="contact-menu-item">Best Seller</li>
                    <li className="contact-menu-item">Món ăn nhẹ</li>
                    <li className="contact-menu-item">Đồ uống</li>
                </ul>
            </div>
            <div className="contact-featured">
                <h3 className="contact-featured-title">Dành cho bạn</h3>
            </div>
           <div className="food-first-row">
        {/* Cột 1 */}
        <div className="food-first-product">
          <img src="/images/bigmac.webp" alt="Burger Big Mac" className="food-first-image" />
          <div className="food-first-details">
            <h4 className="food-first-name">Phần Ăn Burger Big Mac</h4>
            <p className="food-first-description">Giá gốc: 153,000đ. Phần ăn kèm khoai tây chiên (L) và Nước uống (L). Đã bao gồm 2x Tương Cà</p>
            <div className="food-first-price-container">
              <span className="food-first-price">119k</span>
              <button className="food-first-add-btn">+</button>
            </div>
          </div>
        </div>
        
        {/* Cột 2 */}
        <div className="food-first-product">
          <img src="/images/anh1.webp" alt="Burger 2 Lớp Bò Phô Mai" className="food-first-image" />
          <div className="food-first-details">
            <h4 className="food-first-name">Phần Ăn Burger 2 Lớp Bò Phô Mai</h4>
            <p className="food-first-description">Giá gốc: 143,000đ. Phần ăn kèm khoai tây chiên (L) và Nước uống (L). Đã bao gồm 2x Tương Cà</p>
            <div className="food-first-price-container">
              <span className="food-first-price">104k</span>
              <button className="food-first-add-btn">+</button>
            </div>
          </div>
        </div>
        
        {/* Cột 3 */}
        <div className="food-first-product">
          <img src="/images/anh2.webp" alt="Burger 2 Lớp Bò Phô Mai" className="food-first-image" />
          <div className="food-first-details">
            <h4 className="food-first-name">Burger 2 Lớp Bò Phô Mai</h4>
            <p className="food-first-description">Không bao gồm tương gói đi kèm</p>
            <div className="food-first-price-container">
              <span className="food-first-price">69k</span>
              <button className="food-first-add-btn">+</button>
            </div>
          </div>
        </div>
      </div>
      {/* Hàng 2 - 3 cột mới */}
      <div className="food-second-row">
        {/* Cột 4 */}
        <div className="food-second-product">
          <img src="/images/anh3.webp" alt="Burger Big Mac Large" className="food-second-image" />
          <div className="food-second-details">
            <h4 className="food-second-name">Burger Big Mac Large Combo</h4>
            <p className="food-second-description">Giá gốc: 178,000đ. Bao gồm khoai tây L + 2 nước uống L</p>
            <div className="food-second-price-container">
              <span className="food-second-price">149k</span>
              <button className="food-second-add-btn">+</button>
            </div>
          </div>
        </div>
        
        {/* Cột 5 */}
        <div className="food-second-product">
          <img src="/images/anh4.webp" alt="McSpicy Deluxe" className="food-second-image" />
          <div className="food-second-details">
            <h4 className="food-second-name">Phần ăn McSpicy Deluxe</h4>
            <p className="food-second-description">Giá gốc: 168,000đ. Khoai tây (L) + Nước uống (L) + Tương McFree</p>
            <div className="food-second-price-container">
              <span className="food-second-price">129k</span>
              <button className="food-second-add-btn">+</button>
            </div>
          </div>
        </div>
        
        {/* Cột 6 */}
        <div className="food-second-product">
          <img src="/images/anh5.webp" alt="Gà McNuggets" className="food-second-image" />
          <div className="food-second-details">
            <h4 className="food-second-name">Phần ăn Gà McNuggets</h4>
            <p className="food-second-description">6 miếng + Khoai tây + Nước uống (M). Tương chọn: tương cay hoặc sốt mật ong</p>
            <div className="food-second-price-container">
              <span className="food-second-price">99k</span>
              <button className="food-second-add-btn">+</button>
            </div>
          </div>
        </div>
            </div>
             <div className="contact-featured">
                <h3 className="contact-featured-title">Combo ưu đãi</h3>
            </div>
           <div className="food-first-row">
        {/* Cột 1 */}
        <div className="food-first-product">
          <img src="/images/anh2.1.webp" alt="Burger Big Mac" className="food-first-image" />
          <div className="food-first-details">
            <h4 className="food-first-name"> Mua 1 Tặng 1 chỉ 109k (2256)</h4>
            <p className="food-first-description">
    Giá gốc: 199,000đ. Mua 1 Combo 1 Mì ý, 1 Miếng Gà Rán Không Cay , 1 Nước (R) TẶNG 1 Miếng Gà Rán Không Cay và 1 Nước (R) </p>
            <div className="food-first-price-container">
              <span className="food-first-price">109k</span>
              <button className="food-first-add-btn">+</button>
            </div>
          </div>
        </div>
        
        {/* Cột 2 */}
        <div className="food-first-product">
          <img src="/images/anh2.2.webp" alt="Burger 2 Lớp Bò Phô Mai" className="food-first-image" />
          <div className="food-first-details">
            <h4 className="food-first-name">6 Miếng Gà Viên</h4>
            <p className="food-first-description">Giá gốc: 60,000đ . Đã bao gồm 1x Xốt BBQ hoặc Xốt Chua Ngọt</p>
            <div className="food-first-price-container">
              <span className="food-first-price">59k</span>
              <button className="food-first-add-btn">+</button>
            </div>
          </div>
        </div>
        
        {/* Cột 3 */}
        <div className="food-first-product">
          <img src="/images/anh2.3.webp" alt="Burger 2 Lớp Bò Phô Mai" className="food-first-image" />
          <div className="food-first-details">
            <h4 className="food-first-name">Khoai Tây Chiên cỡ Vừa</h4>
            <p className="food-first-description">Đã bao gồm 1x Tương Cà</p>
            <div className="food-first-price-container">
              <span className="food-first-price">33k</span>
              <button className="food-first-add-btn">+</button>
            </div>
          </div>
        </div>
         </div>
         <div className="food-second-row">
        {/* Cột 4 */}
        <div className="food-second-product">
          <img src="/images/anh2.4.webp" alt="Burger Big Mac Large" className="food-second-image" />
          <div className="food-second-details">
            <h4 className="food-second-name">Combo Hợp Cạ Hợp Ý</h4>
            <p className="food-second-description">Giá gốc: 293,000đ . Gồm: 1 Mì Ý, 1 Burger Bò Đặc Biệt, 4 Miếng Gà Viên Vui Vè, 1 Miếng Gà Rán, 1 Khoai (L), 3 Nước (R). Đã bao gồm 1x Xốt BBQ hoặc xốt Chua Ngọt, 3x Tương Cà, 1x Tương Ớt Ngọt. Nếu khách hàng lựa chọn gà có xốt thì trừ 1 tương cà và 1 tương ớt ngọt.</p>
            <div className="food-second-price-container">
              <span className="food-second-price">209k</span>
              <button className="food-second-add-btn">+</button>
            </div>
          </div>
        </div>
        
        {/* Cột 5 */}
        <div className="food-second-product">
          <img src="/images/anh2.5.webp" alt="McSpicy Deluxe" className="food-second-image" />
          <div className="food-second-details">
            <h4 className="food-second-name">combo Song Ý</h4>
            <p className="food-second-description">Giá gốc: 218,000đ . Gồm : 2 Mì Ý (M), 2 Miếng Gà Rán, 2 Nước (R). Đã bao gồm: 1x Tương Cà, 1x Tương Ớt Ngọt, Nếu khách hàng lựa chọn gà có xốt thì không bao gồm tương gói đi kèm cho phần ăn.</p>
            <div className="food-second-price-container">
              <span className="food-second-price">169k</span>
              <button className="food-second-add-btn">+</button>
            </div>
          </div>
        </div>
        
        {/* Cột 6 */}
        <div className="food-second-product">
          <img src="/images/anh2.6.webp" alt="Gà McNuggets" className="food-second-image" />
          <div className="food-second-details">
            <h4 className="food-second-name">Combo Ưng Ý</h4>
            <p className="food-second-description">Giá gốc: 173,000đ . Gồm : 1 Mì Ý, 1 Miếng Gà Rán, 1 Khoai (M), 2 Nước (R). Đã bao gồm 1x Tương Cà. Nếu khách hàng lựa chọn gà có xốt thì không bao gồm tương gói đi kèm cho phần ăn.</p>
            <div className="food-second-price-container">
              <span className="food-second-price">149k</span>
              <button className="food-second-add-btn">+</button>
            </div>
          </div>
        </div>
            </div>
            <div className="contact-featured">
                <h3 className="contact-featured-title">Combo gia đình</h3>
            </div>
           <div className="food-first-row">
           {/** thứ 3 */}
        {/* Cột 1 */}
        <div className="food-first-product">
          <img src="/images/anh3.1.webp" alt="Burger Big Mac" className="food-first-image" />
          <div className="food-first-details">
            <h4 className="food-first-name">6 Miếng Gà Viên</h4>
            <p className="food-first-description">Giá gốc: 60,000đ . Đã bao gồm 1x Xốt BBQ hoặc Xốt Chua Ngọt</p>
            <div className="food-first-price-container">
              <span className="food-first-price">59k</span>
              <button className="food-first-add-btn">+</button>
            </div>
          </div>
        </div>
        
        {/* Cột 2 */}
        <div className="food-first-product">
          <img src="/images/anh3.2.webp" alt="Burger 2 Lớp Bò Phô Mai" className="food-first-image" />
          <div className="food-first-details">
            <h4 className="food-first-name">Combo 2 người - C</h4>
            <p className="food-first-description">Giá gốc: 291,000đ . Gồm: 1 Burger Bò phô mai đặc biệt, 1 Burger Gà Mayo, 2 Miếng gà rán,1 Khoai tây (M), 2 Nước uống (M). Đã bao gồm 2 Tương Cà, 1 Tương Ớt Ngọt.
</p>
            <div className="food-first-price-container">
              <span className="food-first-price">199k</span>
              <button className="food-first-add-btn">+</button>
            </div>
          </div>
        </div>
        
        {/* Cột 3 */}
        <div className="food-first-product">
          <img src="/images/anh3.3.webp" alt="Burger 2 Lớp Bò Phô Mai" className="food-first-image" />
          <div className="food-first-details">
            <h4 className="food-first-name">Combo 2 người - B</h4>
            <p className="food-first-description">Giá gốc: 251,000đ . Gồm: 3 Miếng gà rán, 4 Miếng gà Chicken Bites, 1 Khoai cỡ (L), 2 Nước uống (M). Đã bao gồm 1x Xốt BBQ hoặc Xốt Chua Ngọt, 4x Tương Cà, 1x Tương Ớt Ngọt, 1x Tương Ớt Tỏi</p>
            <div className="food-first-price-container">
              <span className="food-first-price">189k</span>
              <button className="food-first-add-btn">+</button>
            </div>
          </div>
        </div>
         </div>
         <div className="food-second-row">
        {/* Cột 4 */}
        <div className="food-second-product">
          <img src="/images/anh3.4.webp" alt="Burger Big Mac Large" className="food-second-image" />
          <div className="food-second-details">
            <h4 className="food-second-name">Combo 2 Người - A</h4>
            <p className="food-second-description">Giá gốc: 189,000đ . Gồm: 1 Burger Bò phô mai đặc biệt, 2 Miếng gà rán, 2 nước uống (M). Đã bao gồm 1x Tương Cà, 1x Tương Ớt Ngọt</p>
            <div className="food-second-price-container">
              <span className="food-second-price">141k</span>
              <button className="food-second-add-btn">+</button>
            </div>
          </div>
        </div>
        
        {/* Cột 5 */}
        <div className="food-second-product">
          <img src="/images/anh3.5.webp" alt="McSpicy Deluxe" className="food-second-image" />
          <div className="food-second-details">
            <h4 className="food-second-name">Combo 3 người - B</h4>
            <p className="food-second-description">Giá gốc: 428,000đ . Gồm: 1 Burger bò phô mai đặc biệt,1 Burger Gà Mayo, 4 Miếng gà rán,2 Khoai cỡ (M),3 Nước uống (M). Đã bao gồm 4x Tương Cà, 1x Tương Ớt Ngọt, 1x Tương Ớt Tỏi</p>
            <div className="food-second-price-container">
              <span className="food-second-price">299k</span>
              <button className="food-second-add-btn">+</button>
            </div>
          </div>
        </div>
        
        {/* Cột 6 */}
        <div className="food-second-product">
          <img src="/images/anh3.6.webp" alt="Gà McNuggets" className="food-second-image" />
          <div className="food-second-details">
            <h4 className="food-second-name">Combo 3 người - A</h4>
            <p className="food-second-description">Giá gốc: 428,000đ . Gồm: 5 Miếng gà rán, 6 Miếng gà Chicken Bites, 2 Khoai cỡ (M), 3 Nước uống (M). Đã bao gồm 1x Xốt BBQ hoặc Xốt Chua Ngọt1, 5x Tương Cà, 1x Tương Ớt Ngọt, 2x Tương Ớt Tỏi</p>
            <div className="food-second-price-container">
              <span className="food-second-price">289k</span>
              <button className="food-second-add-btn">+</button>
            </div>
          </div>
        </div>
            </div>
            <div className="contact-featured">
                <h3 className="contact-featured-title">Best Seller</h3>
            </div>
           <div className="food-first-row">
        {/* Cột 1 */}
        <div className="food-first-product">
          <img src="/images/anh4.1.webp" alt="Burger Big Mac" className="food-first-image" />
          <div className="food-first-details">
            <h4 className="food-first-name">Phần Ăn Burger Big Mac</h4>
            <p className="food-first-description">Giá gốc: 153,000đ . Phần ăn kèm khoai tây chiên (L) và Nước uống (L). Đã bao gồm 2x Tương Cà </p>
            <div className="food-first-price-container">
              <span className="food-first-price">119k</span>
              <button className="food-first-add-btn">+</button>
            </div>
          </div>
        </div>
        
        {/* Cột 2 */}
        <div className="food-first-product">
          <img src="/images/anh4.2.webp" alt="Burger 2 Lớp Bò Phô Mai" className="food-first-image" />
          <div className="food-first-details">
            <h4 className="food-first-name">Phần Ăn Burger Gà Cay</h4>
            <p className="food-first-description">Giá gốc: 166,000đ . Phần ăn kèm khoai tây chiên (L) và Nước uống (L). Đã bao gồm 2x Tương Cà.</p>
            <div className="food-first-price-container">
              <span className="food-first-price">129k</span>
              <button className="food-first-add-btn">+</button>
            </div>
          </div>
        </div>
        
        {/* Cột 3 */}
        <div className="food-first-product">
          <img src="/images/anh4.3.webp" alt="Burger 2 Lớp Bò Phô Mai" className="food-first-image" />
          <div className="food-first-details">
            <h4 className="food-first-name">Phần Ăn 2 Miếng Gà Rán</h4>
            <p className="food-first-description">Giá gốc: 152,000đ . Phần ăn kèm khoai tây chiên (L) và Nước uống (L). Đã bao gồm 3x Tương Cà, 1x Tương Ớt Ngọt</p>
            <div className="food-first-price-container">
              <span className="food-first-price">114k</span>
              <button className="food-first-add-btn">+</button>
            </div>
          </div>
        </div>
         </div>
         <div className="food-second-row">
        {/* Cột 4 */}
        <div className="food-second-product">
          <img src="/images/anh4.4.webp" alt="Burger Big Mac Large" className="food-second-image" />
          <div className="food-second-details">
            <h4 className="food-second-name">Phần Ăn 6 Miếng Gà Viên</h4>
            <p className="food-second-description">Giá gốc: 134,000đ . Phần ăn kèm khoai tây chiên (L) và Nước uống (L). Đã bao gồm 1x Xốt BBQ hoặc Xốt Chua Ngọt và 2 Tương Cà</p>
            <div className="food-second-price-container">
              <span className="food-second-price">94k</span>
              <button className="food-second-add-btn">+</button>
            </div>
          </div>
        </div>
        
        {/* Cột 5 */}
        <div className="food-second-product">
          <img src="/images/anh4.5.webp" alt="McSpicy Deluxe" className="food-second-image" />
          <div className="food-second-details">
            <h4 className="food-second-name">Phần ăn McSpicy Deluxe</h4>
            <p className="food-second-description">Giá gốc: 168,000đ. Khoai tây (L) + Nước uống (L) + Tương McFree</p>
            <div className="food-second-price-container">
              <span className="food-second-price">129k</span>
              <button className="food-second-add-btn">+</button>
            </div>
          </div>
        </div>
        
        {/* Cột 6 */}
        <div className="food-second-product">
          <img src="/images/anh4.6.webp" alt="Gà McNuggets" className="food-second-image" />
          <div className="food-second-details">
            <h4 className="food-second-name">Phần ăn Gà McNuggets</h4>
            <p className="food-second-description">6 miếng + Khoai tây + Nước uống (M). Tương chọn: tương cay hoặc sốt mật ong</p>
            <div className="food-second-price-container">
              <span className="food-second-price">99k</span>
              <button className="food-second-add-btn">+</button>
            </div>
          </div>
        </div>
            </div>
            <div className="contact-featured">
                <h3 className="contact-featured-title">Món ăn nhẹ</h3>
            </div>
           <div className="food-first-row">
        {/* Cột 1 */}
        <div className="food-first-product">
          <img src="/images/anh5.1.webp" alt="Burger Big Mac" className="food-first-image" />
          <div className="food-first-details">
            <h4 className="food-first-name">Khoai Tây Chiên</h4>
            <p className="food-first-description">Đã bao gồm 2x Tương Cà</p>
            <div className="food-first-price-container">
              <span className="food-first-price">43k</span>
              <button className="food-first-add-btn">+</button>
            </div>
          </div>
        </div>
        
        {/* Cột 2 */}
        <div className="food-first-product">
          <img src="/images/anh5.2.webp" alt="Burger 2 Lớp Bò Phô Mai" className="food-first-image" />
          <div className="food-first-details">
            <h4 className="food-first-name">Xà Lách Lắc</h4>
            <p className="food-first-description">Kèm 1 xốt Thousand Island</p>
            <div className="food-first-price-container">
              <span className="food-first-price">39k</span>
              <button className="food-first-add-btn">+</button>
            </div>
          </div>
        </div>
        
        {/* Cột 3 */}
        <div className="food-first-product">
          <img src="/images/anh5.3.webp" alt="Burger 2 Lớp Bò Phô Mai" className="food-first-image" />
          <div className="food-first-details">
            <h4 className="food-first-name">Burger Bò Phô Mai</h4>
            <p className="food-first-description">Không bao gồm tương gói đi kèm</p>
            <div className="food-first-price-container">
              <span className="food-first-price">49k</span>
              <button className="food-first-add-btn">+</button>
            </div>
          </div>
        </div>
         </div>
         <div className="food-second-row">
        {/* Cột 4 */}
        <div className="food-second-product">
          <img src="/images/anh5.4.webp" alt="Burger Big Mac Large" className="food-second-image" />
          <div className="food-second-details">
            <h4 className="food-second-name">Bắp Ngô Tách Hạt</h4>
            <p className="food-second-description">Sweet Corn</p>
            <div className="food-second-price-container">
              <span className="food-second-price">40k</span>
              <button className="food-second-add-btn">+</button>
            </div>
          </div>
        </div>
        
        {/* Cột 5 */}
        <div className="food-second-product">
          <img src="/images/anh5.5.webp" alt="McSpicy Deluxe" className="food-second-image" />
          <div className="food-second-details">
            <h4 className="food-second-name">Burger Gà Mayo</h4>
            <p className="food-second-description">Không bao gồm tương gói đi kèm</p>
            <div className="food-second-price-container">
              <span className="food-second-price">39k</span>
              <button className="food-second-add-btn">+</button>
            </div>
          </div>
        </div>
        
        {/* Cột 6 */}
        <div className="food-second-product">
          <img src="/images/anh5.6.webp" alt="Gà McNuggets" className="food-second-image" />
          <div className="food-second-details">
            <h4 className="food-second-name">Burger Xúc Xíc</h4>
            <p className="food-second-description">Không bao gồm tương gói đi kèm</p>
            <div className="food-second-price-container">
              <span className="food-second-price">39k</span>
              <button className="food-second-add-btn">+</button>
            </div>
          </div>
        </div>
            </div>
            <div className="contact-featured">
                <h3 className="contact-featured-title">Đồ uống phổ biến</h3>
            </div>
           <div className="food-first-row">
        {/* Cột 1 */}
        <div className="food-first-product">
          <img src="/images/anh6.1.webp" alt="Burger Big Mac" className="food-first-image" />
          <div className="food-first-details">
            <h4 className="food-first-name">Coca-Cola Zero Cỡ Lớn</h4>
            <p className="food-first-description"></p>
            <div className="food-first-price-container">
              <span className="food-first-price">31k</span>
              <button className="food-first-add-btn">+</button>
            </div>
          </div>
        </div>
        
        {/* Cột 2 */}
        <div className="food-first-product">
          <img src="/images/anh6.2.webp" alt="Burger 2 Lớp Bò Phô Mai" className="food-first-image" />
          <div className="food-first-details">
            <h4 className="food-first-name">Coca-Cola Cỡ Lớn</h4>
            <p className="food-first-description"></p>
            <div className="food-first-price-container">
              <span className="food-first-price">31k</span>
              <button className="food-first-add-btn">+</button>
            </div>
          </div>
        </div>
        
        {/* Cột 3 */}
        <div className="food-first-product">
          <img src="/images/anh6.3.webp" alt="Burger 2 Lớp Bò Phô Mai" className="food-first-image" />
          <div className="food-first-details">
            <h4 className="food-first-name">Sprite Cỡ Lớn</h4>
            <p className="food-first-description"></p>
            <div className="food-first-price-container">
              <span className="food-first-price">31k</span>
              <button className="food-first-add-btn">+</button>
            </div>
          </div>
        </div>
         </div>
         <div className="food-second-row">
        {/* Cột 4 */}
        <div className="food-second-product">
          <img src="/images/anh6.4.webp" alt="Burger Big Mac Large" className="food-second-image" />
          <div className="food-second-details">
            <h4 className="food-second-name">Fanta cỡ Lớn
</h4>
            <p className="food-second-description"></p>
            <div className="food-second-price-container">
              <span className="food-second-price">31k</span>
              <button className="food-second-add-btn">+</button>
            </div>
          </div>
        </div>
        
        {/* Cột 5 */}
        <div className="food-second-product">
          <img src="/images/anh6.5.webp" alt="McSpicy Deluxe" className="food-second-image" />
          <div className="food-second-details">
            <h4 className="food-second-name">Nước Suối Dasani</h4>
            <p className="food-second-description">1-Tên sản phẩm: Nước Uống Đóng Chai Dasani. 2-Thành phần: 100% nước. 3-Xuất xứ hàng hóa: Công ty TNHH Nước Giải Khát Coca-Cola Việt Nam. 4-Tên tổ chức, cá nhân: Công ty TNHH Nước Giải Khát Coca-Cola Việt Nam</p>
            <div className="food-second-price-container">
              <span className="food-second-price">26k</span>
              <button className="food-second-add-btn">+</button>
            </div>
          </div>
        </div>
        
        {/* Cột 6 */}
        <div className="food-second-product">
          <img src="/images/anh6.6.webp" alt="Gà McNuggets" className="food-second-image" />
          <div className="food-second-details">
            <h4 className="food-second-name">Milk</h4>
            <p className="food-second-description">1-Tên sản phẩm: SỮA TƯƠI NGUYÊN CHẤT TIỆT TRÙNG - VINAMILK GREEN FARM. 2-Thành phần: Sữa tươi (100%). 3-Xuất xứ hàng hóa: Công ty Cổ Phần Sữa Việt Nam. 4-Tên tổ chức, cá nhân: Công ty Cổ Phần Sữa Việt Nam</p>
            <div className="food-second-price-container">
              <span className="food-second-price">26k</span>
              <button className="food-second-add-btn">+</button>
            </div>
          </div>
        </div>
            </div>
            
        </div>
    </div>
  );
};
export default Contact;