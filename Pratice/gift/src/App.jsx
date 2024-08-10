import { useState } from 'react';
import LikeNow from './components/LikeNow';
import Filter from './components/Filter';
import GiftItem from './components/GiftItem';
import Pagination from './components/Pagination';
import { listGift } from './data.js';
import ModalCreateGift from './components/ModalCreateGift';
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
  const [modalCreateGift, setModalCreateGift] = useState(false);
  const [newGift, setNewGift] = useState({});

  let ModalCreate = null;
  if (modalCreateGift) {
    ModalCreate = <ModalCreateGift onClose={() => {
      setModalCreateGift(false);
    }} />;
  }

  return (
    <div className="pageHobbies">
      <LikeNow />
      <Filter />
      {ModalCreate}
      <div className="gifts">
        <div className="section">
          <h1>Quà tặng</h1>
          <button onClick={() => {
            setModalCreateGift(true);
          }}>Tạo</button>
        </div>
        <div className="listGift">
          <div class="div1">
            <GiftItem gift={listGift[0]} />
          </div>
          <div class="div2">
            <GiftItem gift={listGift[1]} />
          </div>
          <div class="div3">
            <GiftItem gift={listGift[2]} />
          </div>
          <div class="div4">
            <GiftItem gift={listGift[3]} />
          </div>
          <div class="div5">
            <GiftItem gift={listGift[4]} />
          </div>
          <div class="div6">
            <GiftItem gift={listGift[5]} />
          </div>
          <div class="div7">
            <GiftItem gift={listGift[6]} />
          </div>
          <div class="div8">
            <GiftItem gift={listGift[7]} />
          </div>
        </div>
      </div>
      <Pagination />
    </div>
  )
}

export default App;
