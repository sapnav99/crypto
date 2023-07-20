import React, { useState } from 'react';
import bicon from '../Images/icons8-bitcoin.svg';
import { BsChevronCompactDown } from 'react-icons/bs';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import Tabs from './Tabs';
import './Card.css';

export default function Card() {
  const [activeTab, setActiveTab] = useState('Day');
  const [showOptions, setShowOptions] = useState(false);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleToggleOptions = () => {
    setShowOptions(!showOptions);
  };

  const chartData = {
    Day: [
      { name: '00:00', value: 400 },
      { name: '04:00', value: 300 },
      { name: '08:00', value: 500 },
      { name: '12:00', value: 200 },
      { name: '16:00', value: 600 },
      { name: '20:00', value: 400 },
      { name: '24:00', value: 700 },
    ],
    Week: [
      { name: 'Mon', value: 500 },
      { name: 'Tue', value: 400 },
      { name: 'Wed', value: 300 },
      { name: 'Thu', value: 600 },
      { name: 'Fri', value: 700 },
      { name: 'Sat', value: 800 },
      { name: 'Sun', value: 900 },
    ],
    Month: [
      { name: 'Jan', value: 400 },
      { name: 'Feb', value: 300 },
      { name: 'Mar', value: 500 },
      { name: 'Apr', value: 200 },
      { name: 'May', value: 600 },
      { name: 'Jun', value: 400 },
      { name: 'Jul', value: 700 },
      { name: 'Aug', value: 900 },
      { name: 'Sep', value: 800 },
      { name: 'Oct', value: 600 },
      { name: 'Nov', value: 500 },
      { name: 'Dec', value: 300 },
    ],
    Year: [
      { name: '2020', value: 1000 },
      { name: '2021', value: 1500 },
      { name: '2022', value: 1200 },
      { name: '2023', value: 1800 },
    ],
  };

  const data = chartData[activeTab];

  return (
    <div>
      <div className="card-container">
        <div className="card bg-light">
          <div className="card-header bg-light ">
            <div className="header-content bg-light ">
              <img src={bicon} className='card-img-top'  alt="Bitcoin"  />
              <div  className="labels bg-light">
                <label style={{fontWeight:'600', fontSize:'15px', marginRight:'150px'}}>Bitcoin</label>
                <label className="btc-label bg-light" style={{color:'gray', fontWeight:'600', 
                fontSize:'15px', marginLeft:'-5px' }}>BTC</label>
              </div>
            </div>
          </div>
          <div>
            <h1 className="card-text bg-light">3.529020 BTC</h1>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <p style={{ textAlign: 'left', marginRight: '90px', color:'gray', fontSize:'19px', paddingLeft:'15px' }}>$19.153 USD</p>
            <span style={{ backgroundColor: 'rgb(241, 63, 131)', padding: '5px 10px', borderRadius: '20px', 
            textAlign: 'right',color:'white', fontSize:'12px', marginRight:'15px' }}>
              -2.32%
            </span>
          </div>
          <div className="down-icon-container" onClick={handleToggleOptions}>
            <BsChevronCompactDown className="down-icon" />
          </div>
        </div>
        {showOptions && (
          <div className="options-container">
            <button className="buy-button">Buy</button>
            <button className="sell-button">Sell</button>
          </div>
        )}
      </div>
      <div>
        <Tabs activeTab={activeTab} handleTabChange={handleTabChange} />
      </div>
      <div className="chart-container">
        <ResponsiveContainer height={200}>
          <AreaChart  data={data}>
            <XAxis dataKey="name" hide  />
            <YAxis hide  />
            
            <Tooltip />
            <Area  type="monotone" dataKey="value" stroke="orange" fill="#ffece6" strokeWidth={3} />
          </AreaChart >
        </ResponsiveContainer>
      </div>
    </div>
  );
}
