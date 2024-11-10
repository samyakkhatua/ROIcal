import React from 'react';
import { Timer, TrendingUp, DollarSign } from 'lucide-react';

interface ResultsProps {
  results: {
    breakEvenMonths: number;
    annualROI: number;
    yearlyBenefit: number;
  };
}

export function Results({ results }: ResultsProps) {
  const metrics = [
    {
      icon: <Timer className="w-6 h-6 text-purple-600" />,
      label: 'Break-even Point',
      value: `${results.breakEvenMonths} months`,
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-purple-600" />,
      label: 'Annual ROI',
      value: `${Math.round(results.annualROI)}%`,
    },
    {
      icon: <DollarSign className="w-6 h-6 text-purple-600" />,
      label: 'Yearly Benefit',
      value: `$${results.yearlyBenefit.toLocaleString()}`,
    },
  ];

  return (
    <div className="grid grid-cols-3 gap-4">
      {metrics.map((metric) => (
        <div key={metric.label} className="text-center">
          <div className="flex justify-center mb-2">{metric.icon}</div>
          <div className="text-sm text-gray-600 mb-1">{metric.label}</div>
          <div className="text-lg font-semibold text-gray-900">{metric.value}</div>
        </div>
      ))}
    </div>
  );
}