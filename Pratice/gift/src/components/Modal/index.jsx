import React, { useContext } from 'react';
import IconTrash from '../../Icons/IconTrash';
import IconClose from '../../Icons/IconClose';
import IconUnRate from '../../Icons/IconUnRate';
import IconRateFull from '../../Icons/IconRateFull';
import IconArrowDown from '../../Icons/IconArrowDown';
import { useParams, useNavigate } from 'react-router-dom';
import { Store } from '../../Store';
import './styles.css';

const getRating = {
    1: <div className="rating">
        <IconRateFull />
        <IconUnRate />
        <IconUnRate />
        <IconUnRate />
        <IconUnRate />
    </div>,
    2: <div className="rating">
        <IconRateFull />
        <IconRateFull />
        <IconUnRate />
        <IconUnRate />
        <IconUnRate />
    </div>,
    3: <div className="rating">
        <IconRateFull />
        <IconRateFull />
        <IconRateFull />
        <IconUnRate />
        <IconUnRate />
    </div>,
    4: <div className="rating">
        <IconRateFull />
        <IconRateFull />
        <IconRateFull />
        <IconRateFull />
        <IconUnRate />
    </div>,
    5: <div className="rating">
        <IconRateFull />
        <IconRateFull />
        <IconRateFull />
        <IconRateFull />
        <IconRateFull />
    </div>,
}
const Modal = (props) => {
    const store = useContext(Store);
    const params = useParams();
    const crrid = params.productId;
    const crrProduct = store.listGift.findIndex(item => String(item.id) === String(crrid));
    const nav = useNavigate();

    return (
        <div className="modalGift">

            <div className="content">
                <div className="topModal">
                    <button className='btnDeleteGift' onClick={() => {
                        store.listGift.splice(props.index, 1);
                        store.setListGift([...store.listGift]);
                    }}><IconTrash /></button>
                    <button className='btnCloseModal' onClick={() => {
                        nav('/');
                    }}><IconClose /></button>
                </div>
                {crrProduct < 0 ? <p>Không tìm thấy sản phẩm</p> : <div className="bodyModal">
                    <div className="rowInfo">
                        <div className="image">
                            <img src={store.listGift[crrProduct].image} alt="" />
                        </div>
                        <div className="giftInfo">
                            <p className='nameGift'>{store.listGift[crrProduct].name}</p>
                            {getRating[store.listGift[crrProduct].rating]}
                            <p className="price">
                                <span style={{ fontSize: '26px' }}>Giá: {Number(store.listGift[crrProduct].price).toLocaleString()} VND</span> <IconArrowDown /> <sup style={{ color: '#DF3939', fontWeight: 'bold' }}>-{store.listGift[crrProduct].saleOff * 100}%</sup>
                            </p>
                            <div className="types">
                                <p style={{ fontSize: '26px', marginBottom: '28px' }}>Phân loại</p>
                                <div className="listType">
                                    <button>Nhỏ</button>
                                    <button>Vừa</button>
                                    <button>Lớn</button>
                                </div>
                            </div>
                            <div className="btnFunction">
                                <div className="changeAmount">
                                    <button>-</button>
                                    <span>0</span>
                                    <button>+</button>
                                </div>
                                <button className='buy'>Chọn mua</button>
                            </div>
                        </div>
                    </div>
                    <p style={{ fontSize: 24, marginTop: '38px' }}>{store.listGift[crrProduct].des}</p>
                </div>}

            </div>
        </div>
    )
}

export default Modal;