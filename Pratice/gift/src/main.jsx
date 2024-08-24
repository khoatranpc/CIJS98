import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
import StoreProvider from './Store';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <StoreProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StoreProvider>
)
/**
 * Cài đặt route với url params
 * lấy được giá trị được truyền
 * từ giá trị đấy -> tìm kiếm thông tin cụ thể của một sản phẩm -> modal
 */