import React from 'react';
import IconClose from '../../Icons/IconClose';
import './styles.css';

const ModalCreateGift = (props) => {
    return (
        <div className="modalCreateGift">
            <div className="content">
                <div className="topContent">
                    <h1>Thêm thông tin quà tặng</h1>
                    <button className='btnCloseModal' onClick={() => props.onClose()} ><IconClose /></button>
                </div>
                <div>
                    <form className='formCreateNewGift'>
                        <div className="row">
                            <label htmlFor="name">Tên sản phẩm</label>
                            <input type="text" id='name' />
                        </div>
                        <div className="row">
                            <label htmlFor="image">Hình ảnh sản phẩm</label>
                            <input type="text" id='image' />
                        </div>
                        <div className="row">
                            <label htmlFor="rating">Rating</label>
                            <input type="number" id='rating' max={5} min={0} />
                        </div>
                        <div className="row">
                            <label htmlFor="price">Giá</label>
                            <input type="text" id='price' />
                        </div>
                        <div className="row">
                            <label htmlFor="saleOff">Giảm giá</label>
                            <input type="text" id='saleOff' />
                        </div>
                        <div className="row">
                            <label htmlFor="status">Trạng thái</label>
                            <input type="text" id='status' />
                        </div>
                        <div className="row">
                            <label htmlFor="type">Phân loại</label>
                            <input type="text" id='type' />
                        </div>
                        <div className="row">
                            <label htmlFor="category">Danh mục</label>
                            <input type="text" id='category' />
                        </div>
                        <div className="row">
                            <label htmlFor="des">Mô tả</label>
                            <input type="text" id='des' />
                        </div>
                        <div className="row">
                            <button className='btnSave'>Lưu</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ModalCreateGift;