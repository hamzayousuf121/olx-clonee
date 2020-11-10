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

const items = [
    {
        src: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60',
    },
    {
        src: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60',
    },
    {
        src: 'https://images.unsplash.com/photo-1503602642458-232111445657?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60',
    }
];

const ProductDetails = (props) => {
    const history = useHistory();
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);
    console.log(history, 'Product')
     const {location: {state:{product}}} = history;

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }


    const slides = items.map((item) => {
        return (
            <CarouselItem
                className='productsCarousel'
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={item.src}
            >
                <img src={product.images[0]} alt={item.altText} width='100%' height='600px' />
            </CarouselItem>
        );
    });

    return (
        <>
            <BreadCrumb />
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