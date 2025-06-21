import React from 'react';
import './vuivai.css';

const Vuivai = () => {
    const handleSeeAllPromotions = () => {
        // Chuyển hướng đến trang datmon.js
        window.location.href = '/datmon';
    };
    const images = [
        
        {
            src: '/images/1.webp',
            title: 'McDonald\'s - Hồ Gươm',
            description: 'Món Mỹ, Bánh Mì Kẹp, Gà Rán'
        },
        {
            src: '/images/2.webp',
            title: 'KFC - Tràng Tiền',
            description: 'Gà Rán, Burger, Khoai Tây Chiên'
        },
        {
            src: '/images/3.webp',
            title: 'Lotteria - Times City',
            description: 'Burger, Gà Sốt Cay, Mì Ý'
        },
        {
            src: '/images/4.webp',
            title: 'Pizza Hut - Royal City',
            description: 'Pizza, Mì Ý, Salad'
        }
    ];
    const foods = [
    { name: 'Cháo', image: '/images/chao.webp' },
    { name: 'Đồ ăn nhẹ', image: '/images/doannhe.webp' },
    { name: 'Bánh Mì', image: '/images/banhmi.webp' },
    { name: 'Thịt', image: '/images/thit.webp' },
    { name: 'Gà rán', image: '/images/garan.webp' },
    { name: 'Hiso Party', image: '/images/hisoparty.webp' },
    { name: 'Hủ tiếu', image: '/images/hutieu.webp' },
    { name: 'Weekend Treats', image: '/images/weekendtreats.webp' },
    { name: 'Thịt gà', image: '/images/thitga.webp' },
    { name: 'Cơm', image: '/images/com.webp' },
    { name: 'Cơm tấm', image: '/images/comtam.webp' },
    { name: 'Đồ uống lạnh', image: '/images/douonglanh.webp' },
  ];
    return (
        
        <div className="container">
             <div className="image-container">
                <img src="/images/about-img2.png" alt="Hotel Mellow" />
            </div>

            <div className="line"></div>
            <div className="offer">Ưu đãi chỉ có tại Taurus Fast Foot</div>
            <div className="images-container">
                {images.map((image, index) => (
                    <div className="image-card" key={index}>
                        <img src={image.src} alt={`Promotion ${index + 1}`} />
                        <div className="image-description">
                            <div>{image.title}</div>
                            <div>{image.description}</div>
                        </div>
                    </div>
                ))}
            </div>
            <button className="see-all-button" onClick={handleSeeAllPromotions}>
                See all promotions
            </button>
            <div className="offer">Đồ ăn nhanh dành cho mọi người </div>
            <div className="images-container">
                <div className="food-grid">
                {foods.map((food, index) => (
                    <div key={index} className="food-item">
                    <img src={food.image} alt={food.name} />
                    <p>{food.name}</p>
                    </div>
                ))}
                </div>
            </div>
            <div className="offer">Vì sao bạn nên Order trên Taurus </div>
            <div>
      <p>Nhanh nhất - Taurus Fast Food cung cấp dịch vụ giao đồ ăn nhanh nhất thị trường.</p>
      <p>Đề dành nhất - Giữ ngày, ban đêm thức đêm vui vẻ với những chỗ ăn nhậu, đĩa đầy đồ ăn. Hãy đặt đồ ăn trực tuyến hôm nay tại xưởng siêu ưu đãng với chương trình đổi thưởng.</p>
      <p>Đáp ứng mọi nhu cầu - Từ món ăn sáng đơn giản đến các bữa ăn dồn dập với thức ăn nhanh, chúng tôi luôn sẵn sàng phục vụ bạn.</p>
      <p>Thanh toán - Giao nhanh bằng cách thanh toán trực tuyến hoặc trả tiền mặt khi nhận hàng.</p>
      <p>Nhiều ưu đãng nhất - Tích điểm thưởng cho mỗi đơn hàng và bạn sẽ được dùng điểm thưởng để đổi quà nhiều ưu đãng.</p>
      <button className="see-all-button" onClick={handleSeeAllPromotions}>Read More</button>

      <div className="container">
      <div className="row row-1">
        <img src="/images/anh.jpg" alt="Food" className="image" />
      </div>
      <div className="row row-2">
        <p>
          Từ những bữa ăn nhỏ cho đến những bữa ăn lớn, chúng tôi sẽ không giới hạn sự thèm ăn của bạn. Hãy cứ gọi món bạn muốn.
        </p>
      </div>
    </div>
        </div>
        </div>
    );
};

export default Vuivai;


       