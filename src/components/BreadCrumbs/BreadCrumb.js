import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import {Link} from 'react-router-dom'
import './BreadCrumbs.css';

const BreadCrumb = ({category, productname}) => {
  return (
    <div >
      <Breadcrumb>
        <BreadcrumbItem><Link to="/"><span className='pl-4'>Home</span></Link></BreadcrumbItem>
        <BreadcrumbItem><span >{category}</span></BreadcrumbItem>
        <BreadcrumbItem><span >{productname}</span></BreadcrumbItem>
      </Breadcrumb>
    </div>
  );
};

export default BreadCrumb;