
import { createRoot } from 'react-dom/client'
import {BrowserRouter,Route,Routes} from 'react-router'
import LoginPage from './pages/authorization/login/LoginPage.tsx'
import RegisterPage from './pages/authorization/register/RegisterPage.tsx'
import ProductPage from './pages/product/ProductPage.tsx'
import NotFoundPage from './pages/NotFoundPage.tsx'
import './index.css'
import App from './App.tsx'
import { Provider } from 'react-redux'
import { store } from './api/store.ts'
import CategoriesPage from './pages/category/CategoriesPage.tsx'
createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App />} />
    <Route path="/login" element={<LoginPage />} />
    <Route path="/register" element={<RegisterPage />} />
    <Route path="/category" element={<CategoriesPage />} />
    <Route path="/product" element={<ProductPage />} />
    <Route path="*" element={<NotFoundPage />} />
  </Routes>
  </BrowserRouter>
  </Provider>
)
