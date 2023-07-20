import React from 'react';
import { BiChevronLeft } from 'react-icons/bi';
import { AiOutlineMore } from 'react-icons/ai';
import Card from './Card';
import Footer from './Footer';
import BuyAndSell from './BuyAndSell';

export default function Header() {
  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor:'white',
        width: '350px',height:'50px', margin: '5px auto', marginBottom: '5px'}}>
        <BiChevronLeft style={{ color: 'gray', fontSize: '30px', marginRight: '25px' }} />
        <label style={{ fontSize: '25px', textAlign: 'center', flex: '1' }}>Bitcoin Wallet</label>
        <AiOutlineMore style={{ color: 'gray', fontSize: '30px', marginLeft: '25px' }} />
      </div>
      <Card />
      <BuyAndSell />
      <Footer />
    </div>
  );
}
