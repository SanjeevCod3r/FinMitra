import { useState, useEffect } from 'react';
import { Calculator, TrendingUp } from 'lucide-react';

export default function EMICalculator() {
  const [loanAmount, setLoanAmount] = useState(500000);
  const [interestRate, setInterestRate] = useState(10.5);
  const [loanTenure, setLoanTenure] = useState(24);
  const [emi, setEmi] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);

  useEffect(() => {
    calculateEMI();
  }, [loanAmount, interestRate, loanTenure]);

  const calculateEMI = () => {
    const principal = loanAmount;
    const ratePerMonth = interestRate / 12 / 100;
    const numberOfMonths = loanTenure;

    if (principal > 0 && interestRate > 0 && numberOfMonths > 0) {
      const emiValue =
        (principal * ratePerMonth * Math.pow(1 + ratePerMonth, numberOfMonths)) /
        (Math.pow(1 + ratePerMonth, numberOfMonths) - 1);

      const totalPayment = emiValue * numberOfMonths;
      const interestPayment = totalPayment - principal;

      setEmi(Math.round(emiValue));
      setTotalAmount(Math.round(totalPayment));
      setTotalInterest(Math.round(interestPayment));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-blue-50 to-white pt-32 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-sky-400 to-blue-500 rounded-full mb-4">
            <Calculator className="text-white" size={32} />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            EMI Calculator
          </h1>
          <p className="text-xl text-gray-600">
            Calculate your monthly loan payments instantly
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Loan Details
            </h2>

            <div className="space-y-8">
              <div>
                <div className="flex justify-between items-center mb-3">
                  <label className="text-sm font-semibold text-gray-700">
                    Loan Amount
                  </label>
                  <span className="text-xl font-bold text-sky-600">
                    ₹{loanAmount.toLocaleString('en-IN')}
                  </span>
                </div>
                <div className="flex gap-3 items-center mb-3">
                  <div className="relative flex-1 group">
                    <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">₹</span>
                    <input
                      type="number"
                      min={50000}
                      max={10000000}
                      step={1000}
                      value={loanAmount}
                      onChange={(e) => {
                        const v = Number(e.target.value);
                        const clamped = Math.min(10000000, Math.max(50000, isNaN(v) ? 0 : v));
                        setLoanAmount(clamped);
                      }}
                      className="w-full pl-7 pr-3 py-3 rounded-lg border border-gray-300 focus:border-sky-400 focus:ring-2 focus:ring-sky-200 transition bg-white hover:border-sky-300"
                    />
                  </div>
                  <button
                    onClick={() => setLoanAmount(loanAmount + 50000 <= 10000000 ? loanAmount + 50000 : 10000000)}
                    className="px-3 py-2 rounded-lg border text-sm font-medium text-gray-700 bg-gray-50 hover:bg-sky-50 hover:text-sky-700 hover:border-sky-300 transition"
                  >
                    +50k
                  </button>
                  <button
                    onClick={() => setLoanAmount(loanAmount - 50000 >= 50000 ? loanAmount - 50000 : 50000)}
                    className="px-3 py-2 rounded-lg border text-sm font-medium text-gray-700 bg-gray-50 hover:bg-sky-50 hover:text-sky-700 hover:border-sky-300 transition"
                  >
                    -50k
                  </button>
                </div>
                <input
                  type="range"
                  min="50000"
                  max="10000000"
                  step="50000"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(Number(e.target.value))}
                  className="w-full h-2 bg-sky-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>₹50K</span>
                  <span>₹1Cr</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-3">
                  <label className="text-sm font-semibold text-gray-700">
                    Interest Rate (% p.a.)
                  </label>
                  <span className="text-xl font-bold text-sky-600">
                    {interestRate}%
                  </span>
                </div>
                <div className="flex gap-3 items-center mb-3">
                  <div className="relative flex-1 group">
                    <input
                      type="number"
                      min={5}
                      max={25}
                      step={0.1}
                      value={interestRate}
                      onChange={(e) => {
                        const v = Number(e.target.value);
                        const clamped = Math.min(25, Math.max(5, isNaN(v) ? 0 : v));
                        setInterestRate(Number(clamped.toFixed(2)));
                      }}
                      className="w-full pl-3 pr-10 py-3 rounded-lg border border-gray-300 focus:border-sky-400 focus:ring-2 focus:ring-sky-200 transition bg-white hover:border-sky-300"
                    />
                    <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">%</span>
                  </div>
                  <button
                    onClick={() => setInterestRate(Math.min(25, Number((interestRate + 0.5).toFixed(2))))}
                    className="px-3 py-2 rounded-lg border text-sm font-medium text-gray-700 bg-gray-50 hover:bg-sky-50 hover:text-sky-700 hover:border-sky-300 transition"
                  >
                    +0.5
                  </button>
                  <button
                    onClick={() => setInterestRate(Math.max(5, Number((interestRate - 0.5).toFixed(2))))}
                    className="px-3 py-2 rounded-lg border text-sm font-medium text-gray-700 bg-gray-50 hover:bg-sky-50 hover:text-sky-700 hover:border-sky-300 transition"
                  >
                    -0.5
                  </button>
                </div>
                <input
                  type="range"
                  min="5"
                  max="25"
                  step="0.5"
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  className="w-full h-2 bg-sky-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>5%</span>
                  <span>25%</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-3">
                  <label className="text-sm font-semibold text-gray-700">
                    Loan Tenure (Months)
                  </label>
                  <span className="text-xl font-bold text-sky-600">
                    {loanTenure} months
                  </span>
                </div>
                <div className="flex gap-3 items-center mb-3">
                  <div className="relative flex-1 group">
                    <input
                      type="number"
                      min={6}
                      max={360}
                      step={1}
                      value={loanTenure}
                      onChange={(e) => {
                        const v = Number(e.target.value);
                        const clamped = Math.min(360, Math.max(6, isNaN(v) ? 0 : v));
                        setLoanTenure(Math.round(clamped));
                      }}
                      className="w-full pl-3 pr-16 py-3 rounded-lg border border-gray-300 focus:border-sky-400 focus:ring-2 focus:ring-sky-200 transition bg-white hover:border-sky-300"
                    />
                    <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">months</span>
                  </div>
                  <button
                    onClick={() => setLoanTenure(Math.min(360, loanTenure + 6))}
                    className="px-3 py-2 rounded-lg border text-sm font-medium text-gray-700 bg-gray-50 hover:bg-sky-50 hover:text-sky-700 hover:border-sky-300 transition"
                  >
                    +6m
                  </button>
                  <button
                    onClick={() => setLoanTenure(Math.max(6, loanTenure - 6))}
                    className="px-3 py-2 rounded-lg border text-sm font-medium text-gray-700 bg-gray-50 hover:bg-sky-50 hover:text-sky-700 hover:border-sky-300 transition"
                  >
                    -6m
                  </button>
                </div>
                <input
                  type="range"
                  min="6"
                  max="360"
                  step="6"
                  value={loanTenure}
                  onChange={(e) => setLoanTenure(Number(e.target.value))}
                  className="w-full h-2 bg-sky-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>6 months</span>
                  <span>30 years</span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-r from-sky-400 to-blue-500 rounded-2xl shadow-xl p-8 text-white">
              <div className="flex items-center space-x-2 mb-4">
                <TrendingUp size={24} />
                <h3 className="text-xl font-semibold">Monthly EMI</h3>
              </div>
              <div className="text-5xl font-bold mb-2">
                ₹{emi.toLocaleString('en-IN')}
              </div>
              <p className="text-sky-100">
                Your monthly payment amount
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Payment Breakdown
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-600">Principal Amount</span>
                  <span className="text-xl font-bold text-gray-900">
                    ₹{loanAmount.toLocaleString('en-IN')}
                  </span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-600">Total Interest</span>
                  <span className="text-xl font-bold text-orange-600">
                    ₹{totalInterest.toLocaleString('en-IN')}
                  </span>
                </div>
                <div className="flex justify-between items-center py-3 bg-sky-50 rounded-lg px-4">
                  <span className="text-gray-800 font-semibold">Total Amount Payable</span>
                  <span className="text-2xl font-bold text-sky-600">
                    ₹{totalAmount.toLocaleString('en-IN')}
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-sky-50 to-blue-50 rounded-2xl p-6">
              <div className="flex space-x-4">
                <div className="flex-1">
                  <div className="text-sm text-gray-600 mb-1">Principal</div>
                  <div className="h-4 bg-sky-500 rounded transition-[width] duration-500" style={{ width: `${Math.max(0, Math.min(100, (loanAmount / (totalAmount || 1)) * 100))}%` }}></div>
                  <div className="text-xs text-gray-500 mt-1">
                    {((loanAmount / totalAmount) * 100).toFixed(1)}%
                  </div>
                </div>
                <div className="flex-1">
                  <div className="text-sm text-gray-600 mb-1">Interest</div>
                  <div className="h-4 bg-orange-500 rounded transition-[width] duration-500" style={{ width: `${Math.max(0, Math.min(100, (totalInterest / (totalAmount || 1)) * 100))}%` }}></div>
                  <div className="text-xs text-gray-500 mt-1">
                    {((totalInterest / totalAmount) * 100).toFixed(1)}%
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-white rounded-2xl shadow-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to apply for a loan?
          </h3>
          <p className="text-gray-600 mb-6">
            Get personalized loan offers from our partner banks and NBFCs
          </p>
          <a
            href="tel:8178625027"
            className="inline-block bg-gradient-to-r from-sky-400 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-all"
          >
            Contact Us Now
          </a>
        </div>
      </div>
    </div>
  );
}
