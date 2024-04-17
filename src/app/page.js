import React from 'react'


import { Product, FooterBanner, HeroBanner } from '../../components';
import { client } from "../../lib/client";

const Home = ({ products, bannerData }) => {
  return (
    <div>
      <HeroBanner heroBanner= {bannerData.length && bannerData[0]}  />
      
      <div className="products-heading">
        <h2>Best Seller Products</h2>
        <p>speaker There are many variations passages</p>
      </div>

      <div className="products-container">
        {products?.map((product) => <Product key={product._id} product={product} />)}
      </div>

      <FooterBanner  />
      {/* <FooterBanner footerBanner={bannerData && bannerData[0]} /> */}
    </div>
  );
}




// src/pages/products.js (Create a new page component)

export async function getServerSideProps() {
  const client = /* Your Sanity client setup here */; // Assuming you have it defined elsewhere

  const productQuery = '*[_type == "product"]';
  const products = await client.fetch(productQuery);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData },
  };
}

export default function ProductsPage({ products, bannerData }) {
  return (
    <ul>
      {products.map((product) => (
        <li key={product._id}>{product.name}</li> // Assuming `_id` is your product identifier
      ))}
    </ul>
  );
}



export default Home
