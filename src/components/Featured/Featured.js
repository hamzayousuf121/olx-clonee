import React, {useEffect} from "react";
import { Card, CardImg, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./featured.css";

import { useSelector } from "react-redux";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 4, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

function Featured({ deviceType, }) {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const category = useSelector((state) => state.filterCategory);
  return (
    <div className="featured__main">
      <h3 className="text-dark text-center">Based on Your Last Search</h3>
      <Carousel
        className="featuredParent"
        swipeable={true}
        draggable={true}
        showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={false}
        autoPlay={deviceType !== "mobile" ? true : false}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        deviceType={deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {category?.map((item, i) => (
          <div key={i}>
            <Card>
              <CardImg
                className="CardImg"
                top
                width="100%"
                src={(item?.images) ? item?.images[0] : 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZHVjdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80'}
                alt={item?.title}
              />
              <CardBody>
                <CardTitle>{item?.title}</CardTitle>
                <CardSubtitle>{item?.price}</CardSubtitle>
                <CardSubtitle>{item?.category}</CardSubtitle>
              </CardBody>
            </Card>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default Featured;
