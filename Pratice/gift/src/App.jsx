import { Routes, Route, useParams } from 'react-router-dom';
import Modal from './components/Modal/index.jsx';
import Listing from './Listing.jsx';
import './App.css';
/**
 * 
 * Bật tắt modal 
 * Bật modal
 * - b1: khởi tạo 1 cái state dành cho modal
 * - b2: thực hiện tạo 1 biến tương lai lưu trữ modal
 * - kiểm tra nếu trạng thái modal là đang mở (true) -> biến trên kia sẽ gán bằng Component Modal
 * 
 * - Tắt modal
 * 
 * 
 * 
 * Lesson 6
 * 
 * -> vẽ được modal Thêm sản phẩm (tạo thông tin sản phẩm), thực hiện bật tắt được
 */

function App() {
  return (
    <Routes>
      <Route path='' element={<Listing />} >
        <Route path='/:productId' element={<Modal />} />
      </Route>
    </Routes>
  )
}

export default App;
