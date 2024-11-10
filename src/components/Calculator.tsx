import React, { useState, useMemo } from 'react';
import { DollarSign, Clock, TrendingUp, Calculator as CalcIcon } from 'lucide-react';
import { ROIChart } from './ROIChart';
import { Input } from './Input';
import { Results } from './Results';

interface CalculatorInputs {
  investment: number;
  monthlySavings: number;
  hoursPerMonth: number;
  revenueIncrease: number;
}

const HOURLY_RATE = 50; // Average hourly rate in USD

export function Calculator() {
  const [inputs, setInputs] = useState<CalculatorInputs>({
    investment: 50000,
    monthlySavings: 5000,
    hoursPerMonth: 100,
    revenueIncrease: 10000,
  });

  const results = useMemo(() => {
    const laborSavings = inputs.hoursPerMonth * HOURLY_RATE;
    const monthlyBenefit = inputs.monthlySavings + inputs.revenueIncrease + laborSavings;
    const breakEvenMonths = Math.ceil(inputs.investment / monthlyBenefit);
    const annualROI = ((monthlyBenefit * 12 - inputs.investment) / inputs.investment) * 100;
    
    return {
      breakEvenMonths,
      annualROI: Math.max(annualROI, 0),
      yearlyBenefit: monthlyBenefit * 12,
      monthlySavings: inputs.monthlySavings,
      monthlyLaborSavings: laborSavings,
      monthlyRevenueIncrease: inputs.revenueIncrease,
    };
  }, [inputs]);

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8">
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Calculate Your AI ROI</h3>
            <div className="space-y-6">
              <Input
                icon={<DollarSign className="w-5 h-5 text-purple-600" />}
                label="Initial Investment"
                value={inputs.investment}
                onChange={(value) => setInputs((prev) => ({ ...prev, investment: value }))}
                min={1000}
                max={1000000}
                step={1000}
                formatter="currency"
              />
              
              <Input
                icon={<DollarSign className="w-5 h-5 text-purple-600" />}
                label="Monthly Operational Savings"
                value={inputs.monthlySavings}
                onChange={(value) => setInputs((prev) => ({ ...prev, monthlySavings: value }))}
                min={0}
                max={100000}
                step={100}
                formatter="currency"
              />
              
              <Input
                icon={<Clock className="w-5 h-5 text-purple-600" />}
                label={`Hours Saved per Month ($${HOURLY_RATE}/hour)`}
                value={inputs.hoursPerMonth}
                onChange={(value) => setInputs((prev) => ({ ...prev, hoursPerMonth: value }))}
                min={0}
                max={1000}
                step={10}
                formatter="hours"
                dollarValue={inputs.hoursPerMonth * HOURLY_RATE}
              />
              
              <Input
                icon={<TrendingUp className="w-5 h-5 text-purple-600" />}
                label="Monthly Revenue Increase"
                value={inputs.revenueIncrease}
                onChange={(value) => setInputs((prev) => ({ ...prev, revenueIncrease: value }))}
                min={0}
                max={100000}
                step={100}
                formatter="currency"
              />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6">
          <Results results={results} />
          <div className="mt-8 h-64">
            <ROIChart
              investment={inputs.investment}
              monthlyBenefit={results.monthlySavings + results.monthlyLaborSavings + results.monthlyRevenueIncrease}
            />
          </div>
          <div className="mt-8 text-center">
            <a
              href="mailto:hello@convertx.in"
              className="inline-flex items-center gap-2 bg-[#5000ff] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#4000cc] transition-colors"
            >
              <CalcIcon className="w-5 h-5" />
              Get Your Custom ROI Analysis
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}