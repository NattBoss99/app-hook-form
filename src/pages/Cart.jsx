import { useCartStore } from "../store/cartStore";

export default function CartPage() {
  // ดึงข้อมูลจาก Store และใช้ฟังก์ชันลบสินค้า
  // ... ทำเพิ่มตรงนี้
  const cart = useCartStore((state) => state.cart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);

  return (
    <div>
      <h1>My Cart</h1>
      {/* แสดงข้อความเมื่อตะกร้าว่าง และ Loop แสดงสินค้า */}
      {/* ... ทำเพิ่มตรงนี้ */}
      {cart.length === 0 && <p>Your Cart is empty</p>}

      {cart.map((item) => (
        <div key={item.id}>
          <h3>{item.title}</h3>
          <p>{item.price}</p>

          <button onClick={() => removeFromCart(item.id)}>Remove</button>
        </div>
      ))}
    </div>
  );
}
