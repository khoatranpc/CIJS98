import React from 'react';
import IconTrash from '../../Icons/IconTrash';
import IconClose from '../../Icons/IconClose';
import IconUnRate from '../../Icons/IconUnRate';
import IconRateFull from '../../Icons/IconRateFull';
import IconArrowDown from '../../Icons/IconArrowDown';
import './styles.css';

const Modal = () => {
    return (
        <div className="modalGift">
            <div className="content">
                <div className="topModal">
                    <button className='btnDeleteGift'><IconTrash /></button>
                    <button className='btnCloseModal'><IconClose /></button>
                </div>
                <div className="bodyModal">
                    <div className="rowInfo">
                        <div className="image">
                            <img src="/public/images/img1.png" alt="" />
                        </div>
                        <div className="giftInfo">
                            <p className='nameGift'>Ngũ hạt thập cẩm, hũ trang trí ý nghĩa</p>
                            <div className="rating">
                                <IconRateFull />
                                <IconRateFull />
                                <IconRateFull />
                                <IconRateFull />
                                <IconUnRate />
                            </div>
                            <p className="price">
                                <span style={{ fontSize: '26px' }}>Giá: 42.000 VND</span> <IconArrowDown /> <sup style={{ color: '#DF3939', fontWeight: 'bold' }}>-30%</sup>
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
                    <p style={{ fontSize: 24, marginTop: '38px' }}>Ngũ hạt thập cẩm đặc sản Langfarm - Món ăn vặt ưa thích, hương vị thơm ngon, an toàn vệ sinh. Phù hợp làm quà vào các dịp lễ, thân thiện với mọi nhà</p>
                </div>
            </div>
        </div>
    )
}

export default Modal;