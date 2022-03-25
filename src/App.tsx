import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
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

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header>
        <ul>
          <li><NavLink to="/">HomePage</NavLink></li>
          <li><NavLink to="/product">Product</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
        </ul>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<WebsiteLayout />}>
            <Route index element={<HomePage />} />
            <Route path="product">
              <Route index element={<ProductPage />} />
              <Route path=":id" element={<ProductDetail />} />
            </Route>
          </Route>

          <Route path="admin" element={<AdminLayout />}>
            <Route index element={<Navigate to="dashboard" />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="product">
              <Route index element={<ProductManager />} />
              <Route path=":id/edit" element={<ProductEdit />} />
              <Route path="add" element={<ProductAdd />} />
            </Route>
          </Route>
        </Routes>
      </main>
    </div>
  )
}

export default App
