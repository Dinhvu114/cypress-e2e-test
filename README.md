# BÀI TẬP THỰC HÀNH 3
# Bài Lab Kiểm Thử End-to-End với Cypress

## 1. Giới thiệu

Bài lab này sử dụng **Cypress** để thực hiện kiểm thử **End-to-End (E2E)** cho website demo:

https://www.saucedemo.com

Mục tiêu của bài là tự động hóa các thao tác người dùng như:

* Đăng nhập hệ thống
* Kiểm tra đăng nhập thất bại
* Thêm sản phẩm vào giỏ hàng

Qua đó giúp kiểm tra xem hệ thống hoạt động đúng như mong đợi hay không.

---

## 2. Công nghệ sử dụng

Trong bài lab này sử dụng các công nghệ sau:

* Node.js
* Cypress
* JavaScript
* Visual Studio Code

---

## 3. Cấu trúc project

```
cypress-e2e-test
│
├── cypress
│   └── e2e
│       └── login.cy.js
│
├── node_modules
├── package.json
└── README.md
```

---

## 4. Các test case đã thực hiện

### Test case 1: Đăng nhập thành công

Bước thực hiện:

1. Truy cập website
2. Nhập username và password hợp lệ
3. Nhấn nút Login
4. Kiểm tra chuyển sang trang sản phẩm

Kết quả mong đợi:

Người dùng đăng nhập thành công và được chuyển đến trang **Inventory**.

---

### Test case 2: Đăng nhập thất bại

Bước thực hiện:

1. Nhập username và password sai
2. Nhấn Login

Kết quả mong đợi:

Hệ thống hiển thị thông báo lỗi.

---

### Test case 3: Thêm sản phẩm vào giỏ hàng

Bước thực hiện:

1. Đăng nhập vào hệ thống
2. Chọn một sản phẩm
3. Nhấn **Add to cart**

Kết quả mong đợi:

Biểu tượng giỏ hàng hiển thị số lượng sản phẩm.

---

## 5. Cách chạy project

### Bước 1: Cài đặt dependencies

```
npm install
```

### Bước 2: Mở Cypress

```
npx cypress open
```

### Bước 3: Chạy test

Chọn file:

```
login.cy.js
```

Cypress sẽ tự động mở trình duyệt và chạy các test case.

---

## 6. Kết quả

Các test case đã được chạy thành công bằng Cypress và hiển thị trạng thái **PASS**.
<img width="960" height="505" alt="{EDC17F48-7BDD-4817-94F4-DF4B1E384551}" src="https://github.com/user-attachments/assets/39c8d545-11ac-4706-8969-cc46454b360a" />

