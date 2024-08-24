import React from 'react';
import { useContext } from 'react';
import IconChevronLeft from '../../Icons/IconChevronLeft';
import { useSearchParams } from 'react-router-dom';
import { Store } from '../../Store';
import { getTotalPage } from '../../utils';
import './styles.css';

const Pagination = () => {
    const store = useContext(Store);
    const listGift = store.listGift;
    const [queries, setQueries] = useSearchParams();
    const items = queries.get('items');
    const totalPage = getTotalPage(listGift.length, Number(items) ?? 8);
    const getArrayPage = new Array(totalPage);
    const handleChangePage = (page) => {
        setQueries({
            items,
            currentPage: page
        });
    }
    return (
        <div className='pagination'>
            <span>
                <IconChevronLeft />
            </span>
            <div className="pages">
                {[...getArrayPage].map((_, index) => {
                    return <button key={index + 1} onClick={() => handleChangePage(index + 1)}>{index + 1}</button>
                })}
                <span style={{ color: '#383838' }}>...</span>
            </div>
            <span className='chevRight'>
                <IconChevronLeft />
            </span>
        </div>
    )
}

export default Pagination;