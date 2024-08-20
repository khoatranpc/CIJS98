import { useContext } from 'react';
import Dics from '../../dictionaries';
import { StoreDic } from '../../dictionaries/ContextDic';
import './styles.css';

const LikeNow = () => {
    const storeDic = useContext(StoreDic);
    return <div className="likeNow">
        <h1 className="titleLikeNow">{Dics[storeDic.lang]['A2']}</h1>
        <button onClick={() => {
            storeDic.setLang('VI');
        }}>Change</button>
        <div className="banner">
            <img src="/public/banner.png" alt="" />
            <p>Thêm ngay vào mục yêu thích để nhận được thông báo mỗi khi sản phẩm có ưu đãi</p>
        </div>
    </div>
}
export default LikeNow;