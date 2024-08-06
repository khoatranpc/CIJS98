import React from 'react';
import IconCart from '../../Icons/IconCart';
import './styles.css';

const GiftItem = (props) => {
    const handleClickGift = () => {
        alert(`${props.gift.name} - ${Number(props.gift.price).toLocaleString()}VND`);
    }
    return (
        <div className='giftItem' onClick={handleClickGift}>
            <img src={props.gift.image} alt="" />
            <div className="information">
                <div className="rowName">
                    <p>{props.gift.name}</p>
                    <IconCart />
                </div>
                <div className="rowPrice">
                    <span>{Number(props.gift.price).toLocaleString()} VND</span>
                    <span>-{props.gift.saleOff * 100}%</span>
                </div>
            </div>
        </div >
    )
}

export default GiftItem;