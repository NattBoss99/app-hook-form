import { createBrowserRouter } from "react-router";
import Layout from "../components/Layout";
import ErrorPage from "../pages/ErrorPage";
import ProductList from "../pages/ProductList";
import ProductDetail from "../pages/ProductDetail";
import Cart from "../pages/Cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <ProductList />,
        loader: async () => {
          // fetch('https://dummyjson.com/products')
          // ... ทำเพิ่มตรงนี้
          return null;
        },
      },
      {
        path: "product/:id",
        element: <ProductDetail />,
        loader: async ({ params }) => {
          // fetch(`https://dummyjson.com/products/${params.id}`)
          // ... ทำเพิ่มตรงนี้
          return null;
        },
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);

export default router;
