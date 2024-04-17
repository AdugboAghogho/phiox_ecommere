export { default as Footer } from './Footer';
export { default as Layout } from './Layout';
export { default as Navbar } from './Navbar';
export { default as Products } from './Products';
export { default as HeroBanner } from './HeroBanner';
export { default as FooterBanner } from './FooterBanner';
export { default as Cart } from './Cart';

export async function getServerSideProps() {
    const query = '*[_type == "product"]';
    const products = await client.fetch(query);
    const bannerQuery = '*[_type == "banner"]';
    const bannerData = await client.fetch(bannerQuery);
  
    return {
      props: { products, bannerData },
    };
  }