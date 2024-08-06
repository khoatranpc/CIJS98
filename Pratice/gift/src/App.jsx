import LikeNow from './components/LikeNow';
import Filter from './components/Filter';
import GiftItem from './components/GiftItem';
import Pagination from './components/Pagination';
import { listGift } from './data.js';
import Modal from './components/Modal/index.jsx';
import './App.css';

function App() {

  return (
    <div className="pageHobbies">
      <Modal /> 
      <LikeNow />
      <Filter />
      <div className="gifts">
        <div className="section">
          <h1>Quà tặng</h1>
          <button>Tạo</button>
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
