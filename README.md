# 🛒 Mini Product Store (CCWE1)

[![React](https://img.shields.io/badge/React-19-blue?logo=react)](https://react.dev/)
[![React Router](https://img.shields.io/badge/React_Router-7-CA4245?logo=react-router)](https://reactrouter.com/)
[![Zustand](https://img.shields.io/badge/Zustand-5-443E38)](https://zustand-demo.pmnd.rs/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)

โปรเจกต์แบบฝึกหัดสร้างร้านค้าขนาดเล็ก เพื่อฝึกฝนการจัดการ **Global State** ด้วย **Zustand** และการจัดการเส้นทาง **Routing** ด้วย **React Router (Data Mode)**

---

## 🚀 เป้าหมายของโปรเจกต์ (Project Goals)
สร้างแอปพลิเคชันที่มีการรับส่งข้อมูลผ่าน API, จัดการสถานะตะกร้าสินค้าในระดับ Global และใช้งาน Routing ที่มีประสิทธิภาพ

### 🛠️ เทคโนโลยีที่ใช้ (Tech Stack)
- **Framework:** React 19 (Vite)
- **Routing:** React Router v7 (Data Router)
- **State Management:** Zustand
- **Styling:** Tailwind CSS v4
- **API:** [DummyJSON Products](https://dummyjson.com/docs/products)

---

## 🏗️ โครงสร้างและการทำงาน (Requirement)

### 1️⃣ ระบบ Layout หลัก (Root Layout)
- **Navbar:** แสดงผลในทุกหน้า
- **Navigation:** ลิงก์ไปยังหน้า "Shop" (`/`) และ "Cart" (`/cart`)
- **Cart Count:** แสดงจำนวนสินค้าทั้งหมดในตะกร้าแบบ Real-time (ดึงจาก Zustand)

### 2️⃣ หน้ารายการสินค้า (Product List - `/`)
- ใช้ `loader` เพื่อดึงข้อมูลสินค้าจาก `https://dummyjson.com/products`
- **การแสดงผล:** การ์ดสินค้าประกอบด้วย ชื่อ, ราคา และปุ่ม **"View Detail"**

### 3️⃣ หน้ารายละเอียดสินค้า (Product Detail - `/product/:id`)
- ใช้ `loader` และ `params` เพื่อดึงข้อมูลสินค้าเฉพาะชิ้น
- **การแสดงผล:** ชื่อสินค้า, ราคา และรายละเอียด (Description)
- **ฟังก์ชัน:** ปุ่ม **"Add to Cart"** สำหรับเพิ่มสินค้าเข้า Zustand Store

### 4️⃣ หน้าตะกร้าสินค้า (Cart Page - `/cart`)
- ดึงข้อมูลจาก Zustand Store มาแสดงผล
- **Empty State:** แสดงข้อความ "Your cart is empty" หากไม่มีสินค้า
- **Bonus:** ปุ่ม **"Remove"** เพื่อลบสินค้าออกจากตะกร้า

---

## 🛠️ วิธีการติดตั้งและรันโปรเจกต์

```bash
# 1. Clone โปรเจกต์
git clone <repository-url>

# 2. ติดตั้ง Dependencies
npm install

# 3. รันโปรเจกต์ (Development)
npm run dev
```

---

## 📖 แหล่งข้อมูลเพิ่มเติม
- [Zustand Documentation](https://docs.pmnd.rs/zustand/getting-started/introduction)
- [React Router Data Fetching](https://reactrouter.com/en/main/guides/data-libs)
- [DummyJSON API](https://dummyjson.com/docs/products)

---
Developed with ❤️ for CodeCamp Thailand
