import React, { useState } from 'react';
import IconCart from '../../Icons/IconCart';
import { useNavigate } from 'react-router-dom';
import './styles.css';
import Modal from '../Modal';

const GiftItem = (props) => {
    const crrid = String(props.gift.id);
    const nav = useNavigate();
    const handleClickGift = (e) => {
        e.stopPropagation();
        nav(`/${crrid}`);
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