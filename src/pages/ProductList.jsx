export default function ProductListPage() {
  // ใช้ useLoaderData ดึงข้อมูลสินค้า
  // ... ทำเพิ่มตรงนี้
  return (
    <div>
      <h1>Product List (Shop)</h1>
      <div style={{ display: 'grid', gridTemplateColumns: '1-1-1', gap: '10px' }}>
        {/* แสดงรายการสินค้าที่นี่ (Map) */}
        {/* ... ทำเพิ่มตรงนี้ */}
        <div style={{ border: '1px solid #ccc', padding: '10px' }}>
           <h3>Product Name</h3>
           <p>Price: $0</p>
           <button>View Detail</button>
        </div>
      </div>
    </div>
  )
}
