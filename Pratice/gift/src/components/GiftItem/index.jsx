import React from 'react';
import IconCart from '../../Icons/IconCart';
import './styles.css';

const GiftItem = () => {
    return (
        <div className='giftItem'>
            <img src="/public/images/img1.png"alt="" />
            <div className="information">
                <div className="rowName">
                    <p>Tên sản phẩm ở đây</p>
                    <IconCart />
                </div>
                <div className="rowPrice">
                    <span>300.000 VND</span>
                    <span>-{10}%</span>
                </div>
            </div>
        </div >
    )
}

export default GiftItem;