import React from 'react';

export default function Tabs({ activeTab, handleTabChange }) {
  return (
    <div className="tabs-container">
      <button
        className={`tab ${activeTab === 'Day' ? 'active' : ''}`}
        onClick={() => handleTabChange('Day')}
      >
        Day
      </button>
      <button
        className={`tab ${activeTab === 'Week' ? 'active' : ''}`}
        onClick={() => handleTabChange('Week')}
      >
        Week
      </button>
      <button
        className={`tab ${activeTab === 'Month' ? 'active' : ''}`}
        onClick={() => handleTabChange('Month')}
      >
        Month
      </button>
      <button
        className={`tab ${activeTab === 'Year' ? 'active' : ''}`}
        onClick={() => handleTabChange('Year')}
      >
        Year
      </button>
    </div>
  );
}
