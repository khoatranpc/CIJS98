import React from 'react';
import { useContext, useState } from 'react';
import LikeNow from './components/LikeNow';
import Filter from './components/Filter';
import GiftItem from './components/GiftItem';
import Pagination from './components/Pagination';
import { Routes, Route, useParams, Outlet } from 'react-router-dom';
import ModalCreateGift from './components/ModalCreateGift'
import { listGift } from './data.js';
import './App.css';
import { Store } from './Store.jsx';

const Listing = () => {
    const [modalCreateGift, setModalCreateGift] = useState(false);
    const store = useContext(Store);
    const [newGift, setNewGift] = useState({
        name: '',
        image: '',
        rating: '',
        des: '',
        price: '',
        saleOff: '',
        category: '',
        type: '',
        status: '',
        createdAt: new Date()
    });
    let ModalCreate = null;
    if (modalCreateGift) {
        ModalCreate = <ModalCreateGift
            onClose={() => {
                setModalCreateGift(false);
            }}
            gift={newGift}
            setNewGift={setNewGift}
            onSubmit={(newGift) => {
                const getNewGift = {
                    ...newGift,
                    id: new Date().getTime(),
                    createdAt: new Date()
                };
                store.setListGift([...store.listGift, getNewGift]);
            }}
        />;
    }
    return (
        <div className="pageHobbies">
            <LikeNow />
            <Filter />
            {ModalCreate}
            <div className="gifts">
                <div className="section">
                    <h1>Quà tặng</h1>
                    <button onClick={() => {
                        setModalCreateGift(true);
                    }}>Tạo</button>
                </div>
                <div className="listGift">
                    {
                        store.listGift.map((item, idx) => {
                            return <div key={item.id} class={`div${idx + 1}`}>
                                <GiftItem gift={item} index={idx} />
                            </div>
                        })
                    }
                </div>
            </div>
            <Pagination />
            <Outlet />
        </div>
    )
}

export default Listing;