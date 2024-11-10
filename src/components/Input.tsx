import React from 'react';

interface InputProps {
  icon: React.ReactNode;
  label: string;
  value: number;
  onChange: (value: number) => void;
  min: number;
  max: number;
  step: number;
  formatter: 'currency' | 'hours';
  dollarValue?: number;
}

export function Input({ icon, label, value, onChange, min, max, step, formatter, dollarValue }: InputProps) {
  return (
    <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
      <div className="flex items-center gap-3 mb-3">
        {icon}
        <label className="text-gray-700 font-medium">{label}</label>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#5000ff]"
      />
      <div className="mt-2 flex justify-between text-sm text-gray-600">
        <span>
          {formatter === 'currency' && `$${value.toLocaleString()}`}
          {formatter === 'hours' && (
            <>
              {value.toLocaleString()} hours
              <span className="text-purple-600 ml-2">
                (${dollarValue?.toLocaleString()})
              </span>
            </>
          )}
        </span>
        <span>
          {formatter === 'currency' && `$${max.toLocaleString()}`}
          {formatter === 'hours' && `${max.toLocaleString()} hours`}
        </span>
      </div>
    </div>
  );
}