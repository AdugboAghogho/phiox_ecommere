import React from "react";

import { client } from "../lib/client";
import { Product, FooterBanner, HeroBanner } from "../../components";

const Home = ({ products, bannerData }) => {
  return (
    <>
      <HeroBanner
        HeroBanner={bannerData && bannerData.length && bannerData[0]}
      />

      <div className="products-heading">
        <h2>Best seller Products</h2>
        <p>Heaed phones</p>
      </div>
      <div className="products-container">
        {products && products.map((item) => <Product item={item} />)}
      </div>
      <FooterBanner
        footerBanner={bannerData && bannerData.length && bannerData[0]}
      />
    </>
  );
};






















export default Home;