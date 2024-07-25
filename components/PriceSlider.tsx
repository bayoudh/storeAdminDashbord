// src/components/DoubleThumbSlider.tsx
"use client"
import React, { useState, ChangeEvent } from 'react';

interface DoubleThumbSliderProps {
  minPrice: number;
  maxPrice: number;
}

const DoubleThumbSlider: React.FC<DoubleThumbSliderProps> = ({ minPrice, maxPrice }) => {
  const [minValue, setMinValue] = useState<number>(minPrice);
  const [maxValue, setMaxValue] = useState<number>(maxPrice);

  const handleMinChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = Math.min(parseInt(e.target.value), maxValue - 1);
    setMinValue(value);
  };

  const handleMaxChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(parseInt(e.target.value), minValue + 1);
    setMaxValue(value);
  };

  return (
    <div className="flex flex-col items-center w-full p-4">
      <div className="relative w-full">
        <input
          type="range"
          min={minPrice}
          max={maxPrice}
          value={minValue}
          onChange={handleMinChange}
          className="absolute w-full h-2 bg-transparent appearance-none"
          style={{ zIndex: 2 }}
          aria-label="Minimum price slider"
        />
        <input
          type="range"
          min={minPrice}
          max={maxPrice}
          value={maxValue}
          onChange={handleMaxChange}
          className="absolute w-full h-2 bg-transparent appearance-none"
          style={{ zIndex: 3 }}
          aria-label="Maximum price slider"
        />
        <div className="absolute left-0 right-0 h-2 bg-gray-200 rounded-lg">
          <div
            className="absolute h-full bg-blue-500 rounded-lg"
            style={{ left: `${((minValue - minPrice) / (maxPrice - minPrice)) * 100}%`, right: `${100 - ((maxValue - minPrice) / (maxPrice - minPrice)) * 100}%` }}
          />
        </div>
      </div>
      <div className="flex justify-between w-full mt-2">
        <span className="text-gray-700 dark:text-gray-200">${minPrice}</span>
        <span className="text-gray-700 dark:text-gray-200">${minValue} - ${maxValue}</span>
        <span className="text-gray-700 dark:text-gray-200">${maxPrice}</span>
      </div>
    </div>
  );
};

export default DoubleThumbSlider
