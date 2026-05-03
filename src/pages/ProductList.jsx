import { useLoaderData,Link } from "react-router"

export default function ProductListPage() {
  // ใช้ useLoaderData ดึงข้อมูลสินค้า
  // ... ทำเพิ่มตรงนี้
  const products = useLoaderData()
  // console.log(products);

  return (
    <div>
      <h1>Product List (Shop)</h1>
      <div style={{ display: 'grid', gridTemplateColumns: '1-1-1', gap: '10px' }}>
        {/* แสดงรายการสินค้าที่นี่ (Map) */}
        {/* ... ทำเพิ่มตรงนี้ */}
        
        {products.map((products)=>(
            <div style={{ border: '1px solid #ccc', padding: '10px' }}>
              <h3 className="font-bold">{products.title}</h3>
              <p>Price: ${products.price}</p>
              <Link to={`/product/${products.id}`}>
                <button className="cursor-pointer">View Detail</button>
              </Link>
            </div>
          ))}

        
      </div>
    </div>
  )
}
