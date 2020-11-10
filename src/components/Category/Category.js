import React from 'react'

import './Category.css';
import {useDispatch, useSelector} from 'react-redux'

function Category() {
    const dispatch = useDispatch();
    const store = useSelector(state => state.products );

     const filterCategory = (param) => {
            const filterCategory = store.filter(item => item.category === param)
            dispatch({type: 'SETFILTERCATEGORY', payload: filterCategory})
    }
    return (
        <div className='category__Main'>
            <h5>All Categories</h5>
            <p onClick={() => filterCategory('Mobile Phone')}>Mobile Phone</p>
            <p onClick={() => filterCategory('Cars')}>Cars</p>
            <p onClick={() => filterCategory('Motorcycles')}>Motorcycles</p>
            <p onClick={() => filterCategory('Houses')}>Houses</p>
            <p onClick={() => filterCategory('Electronics')}>Electronics</p>
            <p onClick={() => filterCategory('Tablet')}>Tablet</p>
            <p onClick={() => filterCategory('Land and plots')}>Land and plots</p>
        </div>
    )
}

export default Category
