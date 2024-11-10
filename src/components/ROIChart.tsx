import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, ReferenceLine } from 'recharts';

interface ROIChartProps {
  investment: number;
  monthlyBenefit: number;
}

export function ROIChart({ investment, monthlyBenefit }: ROIChartProps) {
  const data = Array.from({ length: 13 }, (_, i) => ({
    month: i,
    value: -investment + monthlyBenefit * i,
  }));

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data} margin={{ top: 5, right: 20, left: 40, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis
          tickFormatter={(value) => `$${Math.abs(value).toLocaleString()}`}
          label={{ value: 'Return ($)', angle: -90, position: 'insideLeft', offset:-30 }}
        />
        <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
        <Legend />
        <ReferenceLine y={0} stroke="red" label="Break-even" />
        <Line type="monotone" dataKey="value" stroke="#8884d8" name="ROI" />
      </LineChart>
    </ResponsiveContainer>
  );
}