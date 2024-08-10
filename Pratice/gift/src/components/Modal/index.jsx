import React from 'react';
import IconTrash from '../../Icons/IconTrash';
import IconClose from '../../Icons/IconClose';
import IconUnRate from '../../Icons/IconUnRate';
import IconRateFull from '../../Icons/IconRateFull';
import IconArrowDown from '../../Icons/IconArrowDown';
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
    return (
        <div className="modalGift">
            <div className="content">
                <div className="topModal">
                    <button className='btnDeleteGift'><IconTrash /></button>
                    <button className='btnCloseModal' onClick={props.onClose}><IconClose /></button>
                </div>
                <div className="bodyModal">
                    <div className="rowInfo">
                        <div className="image">
                            <img src={props.gift.image} alt="" />
                        </div>
                        <div className="giftInfo">
                            <p className='nameGift'>{props.gift.name}</p>
                            {getRating[props.gift.rating]}
                            <p className="price">
                                <span style={{ fontSize: '26px' }}>Giá: {Number(props.gift.price).toLocaleString()} VND</span> <IconArrowDown /> <sup style={{ color: '#DF3939', fontWeight: 'bold' }}>-{props.gift.saleOff * 100}%</sup>
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
                    <p style={{ fontSize: 24, marginTop: '38px' }}>{props.gift.describe}</p>
                </div>
            </div>
        </div>
    )
}

export default Modal;