import React from 'react';

function ProductDescription({product}) {
    return (
        <div className="border p-3">
            <h4>Details</h4>
            <div className="d-flex justify-content-between border-bottom">
                <p>Category</p>
                <p>{product.category}</p>
                <p>Condition </p>
                <p>{product.condition || 'Old'}</p>
             
            </div>
            <h4 className='mt-3'>Description</h4>
                {product.description}
        </div>
    )
}

export default ProductDescription
