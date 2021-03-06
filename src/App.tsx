import { useEffect, useState } from 'react'
import logo from './logo.svg'
import { Navigate, NavLink, Route, Routes } from 'react-router-dom'
import WebsiteLayout from './pages/layouts/WebsiteLayout'
import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage'
import ProductDetail from './pages/ProductDetail'
import AdminLayout from './pages/layouts/AdminLayout'
import Dashboard from './pages/layouts/Dashboard'
import ProductManager from './pages/ProductManager'
import ProductEdit from './pages/ProductEdit'
import ProductAdd from './pages/ProductAdd'
import { ProductType } from './types/product'
import { add, list, remove, update } from './api/product'
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import toastr from 'toastr'
import 'toastr/build/toastr.min.css'
import IntroducPage from './pages/IntroducPage'
import ContactPage from './pages/ContactPage'
import PrivateRouter from './components/PrivateRouter'
import AddCategory from './pages/AddCategory'
import CategoryManager from './pages/CategoryManager'
import { TypeCategory } from './types/category'
import { addct, listct, updatect, removect } from './api/category'
import EditCategory from './pages/EditCategory'
import PageCart from './pages/PageCart'

function App() {
  const [products, setProducts] = useState<ProductType[]>([])
  const [categorys, setCategory] = useState<TypeCategory[]>([])

  useEffect(() => {
    const getProducts = async () => {
      const { data } = await list();
      setProducts(data);
    }
    getProducts();
  }, []);

  useEffect(() => {
    const getCategory = async () => {
      const { data } = await listct();
      setCategory(data);
    }
    getCategory()
  }, [])

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
      //T???o ra 1 v??ng l???p, n???u item.id == id s???n ph???m v???a c???p nh???t (data), th?? c???p nh???t ng?????c l???i gi??? nguy??n
      setProducts(products.map(item => item._id === data._id ? product : item))
    } catch (error) {
    }
  }

  //Remove product
  const onHandleRemove = async (id: number) => {
    //reRender
    const confirm = window.confirm("B???n c?? mu???n xo?? khum");
    toastr.success("Xo?? th??nh c??ng")
    if (confirm) {
      remove(id);
      setProducts(products.filter(item => item._id != id));
    }
  }

  //Add categorys
  const AddCategorys = async (category: any) => {
    const { data } = await addct(category)
    toastr.success("Th??m th??nh c??ng")
    setCategory([...categorys, data])
  }

  //Edit category
  const UpdateCategory = async (editcategory: TypeCategory) => {
    const { data } = await updatect(editcategory)
    toastr.success("S???a th??nh c??ng")
    setCategory(categorys.map(item => item._id == data._id ? data : item))
  }

  //Remove category
  const RemoveCategory = async (_id: number) => {
    const confirm = window.confirm("B???n c?? mu???n xo?? danh m???c kh??ng?")
    toastr.success("Xo?? th??nh c??ng")
    if (confirm) {
      removect(_id)
      setCategory(categorys.filter(item => item._id != _id))
    }
  }

  return (
    <div className="App">
      <main>
        <Routes>
          <Route path="/" element={<WebsiteLayout />}>
            <Route index element={<HomePage products={products} />} />
            <Route path="/products/:id" element={<ProductDetail />} />
            <Route path="/introduct/page" element={<IntroducPage />} />
            <Route path="/contact/page" element={<ContactPage />} />
            <Route path="/product/page" element={<ProductPage categorys={categorys} />} />
            <Route path="/cart/page" element={<PageCart />} />
          </Route>

          <Route path="admin" element={<PrivateRouter><AdminLayout /></ PrivateRouter>}>
            <Route index element={<Navigate to="dashboard" />} />
            <Route path="dashboard" element={<Dashboard />} />

            <Route path="product">
              <Route index element={<ProductManager products={products} onRemove={onHandleRemove} />} />
              <Route path=":id/edit" element={<ProductEdit onUpdate={onHandleUpdate} categorys={categorys} />} />
              <Route path="add" element={<ProductAdd onAdd={onHandleAdd} categorys={categorys} />} />
            </Route>

            <Route path="category">
              <Route index element={<CategoryManager categorys={categorys} onRemoveCt={RemoveCategory} />} />
              <Route path="add" element={<AddCategory onAddCategory={AddCategorys} />} />
              <Route path=":id/edit" element={<EditCategory onUpdateCategory={UpdateCategory} />} />
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
