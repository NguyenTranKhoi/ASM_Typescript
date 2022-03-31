import { useEffect, useState } from 'react'
import logo from './logo.svg'
import { Navigate, NavLink, Route, Routes } from 'react-router-dom'
import WebsiteLayout from './pages/layouts/WebsiteLayout'
import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage'
import ProductDetail from './pages/ProductDetail'
import AdminLayout from './pages/layouts/AdminLayout'
import Dashboard from './pages/Dashboard'
import ProductManager from './pages/ProductManager'
import ProductEdit from './pages/ProductEdit'
import ProductAdd from './pages/ProductAdd'
import { ProductType } from './types/product'
import { add, list, remove, update } from './api/product'
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import ProductMale from './components/ProductMale'

function App() {
  const [products, setProducts] = useState<ProductType[]>([])

  useEffect(() => {
    const getProducts = async () => {
      const { data } = await list();
      setProducts(data);
    }
    getProducts();
  }, []);

  //Add product
  const onHandleAdd = async (product: any) => {
    const { data } = await add(product);
    setProducts([...products, data]);
  }

  //Edit product
  const onHandleUpdate = async (product: ProductType) => {
    try {
      //api
      const { data } = await update(product);
      //reRender
      //Tạo ra 1 vòng lặp, nếu item.id == id sản phẩm vừa cập nhật (data), thì cập nhật ngược lại giữ nguyên
      setProducts(products.map(item => item.id === data.id ? product : item))
    } catch (error) {

    }
  }

  //Remove product
  const onHandleRemove = async (id: number) => {
    remove(id);
    //reRender
    setProducts(products.filter(item => item.id !== id));
  }

  return (
    <div className="App">
      <main>
        <Routes>
          <Route path="/" element={<WebsiteLayout />}>
            <Route index element={<HomePage product={products} />} />
            <Route path="product">
              <Route index element={<ProductPage />} />
              <Route path=":id" element={<ProductDetail />} />
            </Route>
          </Route>

          <Route path="admin" element={<AdminLayout />}>
            <Route index element={<Navigate to="dashboard" />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="product">
              <Route index element={<ProductManager products={products} onRemove={onHandleRemove} />} />
              <Route path=":id/edit" element={<ProductEdit onUpdate={onHandleUpdate} />} />
              <Route path="add" element={<ProductAdd onAdd={onHandleAdd} />} />
            </Route>
          </Route>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
