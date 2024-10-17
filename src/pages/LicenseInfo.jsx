import React from 'react';

const plans = [
  {
    name: 'Basic Plan',
    price: '₹99 per month',
    features: ['Ad-supported experience', 'Standard audio quality', 'Limited access to songs'],
  },
  {
    name: 'Premium Plan',
    price: '₹199 per month',
    features: ['Ad-free experience', 'High-quality audio', 'Unlimited skips', 'Download for offline listening'],
  },
  {
    name: 'Exclusive Plan',
    price: '₹299 per month',
    features: ['All Premium features', 'Early access to new releases', 'Priority customer support', 'Access to exclusive content'],
  },
];

const LicenseInfo = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">License Information</h1>
      <p className="text-center text-lg mb-12">
        Choose the plan that suits your needs. Enjoy music on your terms!
      </p>

      {/* Plan Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <div key={index} className="bg-gray-900 text-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
            <p className="text-xl mb-4">{plan.price}</p>
            <ul className="space-y-2">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-2 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.707a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 10-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
            <button className="mt-6 bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded shadow-lg transition duration-300">
              Choose {plan.name}
            </button>
          </div>
        ))}
      </div>

      {/* Decorative Comparison Table Section */}
      <div className="mt-12">
        <h2 className="text-3xl font-bold text-center mb-8">Feature Comparison</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white text-gray-900 rounded-lg shadow-md">
            <thead className="bg-gray-900 text-white">
              <tr>
                <th className="px-4 py-3 text-left">Feature</th>
                <th className="px-4 py-3">Basic</th>
                <th className="px-4 py-3">Premium</th>
                <th className="px-4 py-3">Exclusive</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-gray-50 hover:bg-gray-100 transition duration-200">
                <td className="border px-4 py-3">Ad-free experience</td>
                <td className="border px-4 py-3 text-center">❌</td>
                <td className="border px-4 py-3 text-center">✔</td>
                <td className="border px-4 py-3 text-center">✔</td>
              </tr>
              <tr className="bg-white hover:bg-gray-100 transition duration-200">
                <td className="border px-4 py-3">High-quality audio</td>
                <td className="border px-4 py-3 text-center">❌</td>
                <td className="border px-4 py-3 text-center">✔</td>
                <td className="border px-4 py-3 text-center">✔</td>
              </tr>
              <tr className="bg-gray-50 hover:bg-gray-100 transition duration-200">
                <td className="border px-4 py-3">Offline listening</td>
                <td className="border px-4 py-3 text-center">❌</td>
                <td className="border px-4 py-3 text-center">✔</td>
                <td className="border px-4 py-3 text-center">✔</td>
              </tr>
              <tr className="bg-white hover:bg-gray-100 transition duration-200">
                <td className="border px-4 py-3">Priority support</td>
                <td className="border px-4 py-3 text-center">❌</td>
                <td className="border px-4 py-3 text-center">❌</td>
                <td className="border px-4 py-3 text-center">✔</td>
              </tr>
              <tr className="bg-gray-50 hover:bg-gray-100 transition duration-200">
                <td className="border px-4 py-3">Exclusive content</td>
                <td className="border px-4 py-3 text-center">❌</td>
                <td className="border px-4 py-3 text-center">❌</td>
                <td className="border px-4 py-3 text-center">✔</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default LicenseInfo;
