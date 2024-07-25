// src/App.tsx
import React from 'react';
import DoubleThumbSlider from '@/components/PriceSlider'; 

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="text-2xl font-bold">Double Thumb Price Slider</h1>
        <DoubleThumbSlider minPrice={0} maxPrice={1000} />
      </header>
    </div>
  );
};

export default App;
