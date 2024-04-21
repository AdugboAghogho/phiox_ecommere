import React from 'react';
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai'
import logo from '../public/assets/shi.jpeg'
import { Cart } from './';
import { useStateContext} from '../context/StateContext';
import Image from 'next/image';

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();

  return (
    <div className="navbar-container">
      <Link href="/">
        <Image 
          src={logo} 
          alt="logo" 
          width={50} 
          height={50} 
          className='navber_image' 
        />
      </Link>
      <p className="logo">
        <Link href="/">KELVIN Headphones</Link>
      </p>

      <button type="button" className="cart-icon" onClick={() => setShowCart(true)}>
        <AiOutlineShopping />
        <span className="cart-item-qty">{totalQuantities}</span>
      </button>

      {showCart && <Cart />}
    </div>
  )
}

export default Navbar