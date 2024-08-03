import LikeNow from './components/LikeNow';
import Filter from './components/Filter';
import GiftItem from './components/GiftItem';
import { listGift } from './data';
import Pagination from './components/Pagination';
import './App.css';

function App() {

  return (
    <div className="pageHobbies">
      <LikeNow />
      <Filter />
      <div className="gifts">
        <div className="section">
          <h1>Quà tặng</h1>
          <button>Tạo</button>
        </div>
        <div className="listGift">
          <div class="div1">
            <GiftItem />
          </div>
          <div class="div2">
            <GiftItem />
          </div>
          <div class="div3">
            <GiftItem />
          </div>
          <div class="div4">
            <GiftItem />
          </div>
          <div class="div5">
            <GiftItem />
          </div>
          <div class="div6">
            <GiftItem />
          </div>
          <div class="div7">
            <GiftItem />
          </div>
          <div class="div8">
            <GiftItem />
          </div>
        </div>
      </div>
      <Pagination />
    </div>
  )
}

export default App;
