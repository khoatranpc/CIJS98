import React, { useState } from 'react';
import IconCart from '../../Icons/IconCart';
import './styles.css';
import Modal from '../Modal';

const GiftItem = (props) => {
    const [modal, setModal] = useState({
        open: false,
        data: null
    });
    let viewModal = null;
    if (modal.open) {
        viewModal = <Modal
            gift={modal.data}
            index={props.index}
            onClose={(e) => {
                e.stopPropagation();
                setModal({
                    open: false,
                    data: null
                });
            }} />
    }
    const handleClickGift = (e) => {
        e.stopPropagation();
        setModal({
            open: true,
            data: props.gift
        });
    }
    return (
        <div className='giftItem' onClick={handleClickGift}>
            {viewModal}
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