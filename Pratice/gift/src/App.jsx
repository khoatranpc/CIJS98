import { useContext, useState } from 'react';
import LikeNow from './components/LikeNow';
import Filter from './components/Filter';
import GiftItem from './components/GiftItem';
import Pagination from './components/Pagination';
import { listGift } from './data.js';
import ModalCreateGift from './components/ModalCreateGift';
import { Store } from './Store';
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
  const store = useContext(Store);

  const [newGift, setNewGift] = useState({
    name: '',
    image: '',
    rating: '',
    des: '',
    price: '',
    saleOff: '',
    category: '',
    type: '',
    status: '',
    createdAt: new Date()
  });
  let ModalCreate = null;
  if (modalCreateGift) {
    ModalCreate = <ModalCreateGift
      onClose={() => {
        setModalCreateGift(false);
      }}
      gift={newGift}
      setNewGift={setNewGift}
      onSubmit={(newGift) => {
        const getNewGift = {
          ...newGift,
          id: new Date().getTime(),
          createdAt: new Date()
        };
        store.setListGift([...store.listGift, getNewGift]);
      }}
    />;
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
          {
            store.listGift.sort((a, b) => {
              return - new Date(a.createdAt).getTime() + new Date(b.createdAt).getTime()
            }).map((item, idx) => {
              return <div key={item.id} class={`div${idx + 1}`}>
                <GiftItem gift={item} />
              </div>
            })
          }
        </div>
      </div>
      <Pagination />
    </div>
  )
}

export default App;
