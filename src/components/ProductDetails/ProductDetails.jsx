import React, { useState } from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
} from 'reactstrap';
import BreadCrumb from '../BreadCrumbs/BreadCrumb';
import ProductDescription from './ProductDescription';
import ProductDetailSectionTwo from './SectionTwo';
import Featured from '../Featured/Featured'
import {useHistory} from 'react-router-dom';
import { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux'

const ProductDetails = () => {
    
    const history = useHistory();
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);
    const {location: {state:{product}}} = history;
    const dispatch = useDispatch();
    const store = useSelector(state => state.products );

    function filterCategory(param) {
        const filterCategory1 = store.filter(item => item.category === param)
       dispatch({type: 'SETFILTERCATEGORY', payload: filterCategory1})
       }
    useEffect(() => {
        filterCategory(product.category)
    }, [filterCategory])

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === product.images.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? product.images.item.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }


    const slides = product.images.map((item, i) => {
        return (
            <CarouselItem
                className='productsCarousel'
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={i}
            >
                <img src={item} alt={item} width='100%' height='600px' />
            </CarouselItem>
        );
    });

    return (
        <>
            <BreadCrumb category={product.category} productname={product.title} />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-7 col-md-12 col-12 col-sm-12">
                        <Carousel
                            activeIndex={activeIndex}
                            next={next}
                            previous={previous}>
                            {slides}
                            <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
                            <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
                        </Carousel>
                        <ProductDescription product={product}/>
                    </div>
                <ProductDetailSectionTwo product={product}/>

                </div>
                <Featured heading='Realted Ads' />
            </div>
        </>
    );
}

export default ProductDetails;