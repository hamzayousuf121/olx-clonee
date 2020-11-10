import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import './BreadCrumbs.css';

const BreadCrumb = (props) => {
  return (
    <div >
      <Breadcrumb>
        <BreadcrumbItem><span className='pl-4'>Home</span></BreadcrumbItem>
        <BreadcrumbItem><span >Library</span></BreadcrumbItem>
        <BreadcrumbItem><span >Data</span></BreadcrumbItem>
      </Breadcrumb>
    </div>
  );
};

export default BreadCrumb;