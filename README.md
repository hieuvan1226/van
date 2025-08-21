# Fashion Store - Website Bán Quần Áo

Một trang web bán quần áo hiện đại và responsive được xây dựng bằng HTML, CSS và JavaScript thuần.

## Tính Năng

### 🏠 Trang Chủ
- Header với logo và navigation
- Hero section với banner chính
- Menu điều hướng mượt mà
- Responsive design cho mọi thiết bị

### 👕 Sản Phẩm
- Hiển thị danh sách sản phẩm dạng grid
- Bộ lọc theo danh mục (Nam, Nữ, Phụ kiện)
- Modal chi tiết sản phẩm
- Chọn kích thước sản phẩm
- Thêm vào giỏ hàng

### 🛒 Giỏ Hàng
- Thêm/xóa sản phẩm
- Cập nhật số lượng
- Tính tổng tiền tự động
- Modal giỏ hàng với animation

### 📞 Liên Hệ
- Form liên hệ với validation
- Thông tin liên hệ đầy đủ
- Tích hợp icon mạng xã hội

### 🎨 Giao Diện
- Thiết kế hiện đại, chuyên nghiệp
- Responsive trên mọi thiết bị
- Animation và hiệu ứng mượt mà
- Color scheme nhất quán

## Cấu Trúc File

```
fashion-store/
├── index.html          # Trang chủ chính
├── styles.css          # File CSS styling
├── script.js           # JavaScript functionality
└── README.md           # Hướng dẫn sử dụng
```

## Cách Sử Dụng

1. **Mở trang web**: Mở file `index.html` trong trình duyệt web
2. **Duyệt sản phẩm**: Scroll xuống phần "Sản Phẩm Nổi Bật"
3. **Lọc sản phẩm**: Sử dụng các nút lọc (Tất Cả, Nam, Nữ, Phụ Kiện)
4. **Xem chi tiết**: Click vào sản phẩm để xem thông tin chi tiết
5. **Thêm vào giỏ**: Click nút "Thêm vào giỏ" để thêm sản phẩm
6. **Quản lý giỏ hàng**: Click icon giỏ hàng ở header để xem và quản lý
7. **Liên hệ**: Scroll xuống cuối trang để gửi tin nhắn liên hệ

## Tùy Chỉnh

### Thêm Sản Phẩm Mới
Chỉnh sửa mảng `products` trong file `script.js`:

```javascript
const products = [
    {
        id: 9, // ID duy nhất
        name: "Tên sản phẩm",
        price: 500000, // Giá bằng VND
        image: "URL_hình_ảnh",
        category: "men|women|accessories",
        description: "Mô tả sản phẩm"
    }
];
```

### Thay Đổi Màu Sắc
Chỉnh sửa các biến CSS trong file `styles.css`:

```css
/* Màu chính */
#e74c3c -> màu mới

/* Màu nền */
#f8f9fa -> màu nền mới
```

### Cập Nhật Thông Tin Liên Hệ
Chỉnh sửa phần contact trong `index.html`:

```html
<div class="contact-item">
    <i class="fas fa-map-marker-alt"></i>
    <div>
        <h3>Địa Chỉ</h3>
        <p>Địa chỉ mới của bạn</p>
    </div>
</div>
```

## Công Nghệ Sử Dụng

- **HTML5**: Cấu trúc trang web
- **CSS3**: Styling và responsive design
- **JavaScript ES6**: Tính năng tương tác
- **Font Awesome**: Icons
- **Unsplash**: Hình ảnh mẫu

## Tính Năng Responsive

Website được tối ưu cho:
- 📱 Mobile (< 480px)
- 📱 Tablet (480px - 768px)
- 💻 Desktop (> 768px)

## Browser Support

- ✅ Chrome (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge

## Hướng Dẫn Triển Khai

### Triển Khai Local
1. Download tất cả files
2. Mở `index.html` trong trình duyệt

### Triển Khai Online
1. Upload files lên hosting
2. Đảm bảo `index.html` là file chính
3. Cấu hình domain (nếu có)

## Tối Ưu SEO

- Meta tags đầy đủ
- Semantic HTML structure
- Alt text cho images
- Structured data ready

## Bảo Mật

- Form validation
- XSS protection
- Safe external links
- No sensitive data exposure

## Performance

- Optimized images
- Minified CSS/JS ready
- Lazy loading ready
- Fast loading time

## Hỗ Trợ

Nếu bạn cần hỗ trợ hoặc có câu hỏi:
1. Kiểm tra file README này
2. Xem code comments trong files
3. Test trên nhiều browsers khác nhau

## License

Free to use for personal and commercial projects.

---

**Chúc bạn thành công với website bán quần áo! 🎉**
