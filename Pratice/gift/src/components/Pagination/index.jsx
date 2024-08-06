import React from 'react';
import IconChevronLeft from '../../Icons/IconChevronLeft';
import './styles.css';

const Pagination = () => {
    return (
        <div className='pagination'>
            <span>
                <IconChevronLeft />
            </span>
            <div className="pages">
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>4</button>
                <span style={{ color: '#383838' }}>...</span>
            </div>
            <span className='chevRight'>
                <IconChevronLeft />
            </span>
        </div>
    )
}

export default Pagination;