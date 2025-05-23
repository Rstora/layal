import React from 'react';
import { CreditCard } from 'lucide-react';

interface PaymentMethodsProps {
  onSelect: (method: string) => void;
  selected: string;
}

const PaymentMethods: React.FC<PaymentMethodsProps> = ({ onSelect, selected }) => {
  const methods = [
    { id: 'card', name: 'Credit/Debit Card', icon: <CreditCard size={20} /> },
    { id: 'applepay', name: 'Apple Pay', icon: '🍎' },
    { id: 'visa', name: 'Visa', icon: 'VISA' },
    { id: 'mastercard', name: 'MasterCard', icon: 'MC' },
  ];

  return (
    <div className="grid grid-cols-2 gap-3">
      {methods.map((method) => (
        <button
          key={method.id}
          onClick={() => onSelect(method.id)}
          className={`flex items-center justify-center p-4 border rounded-lg ${
            selected === method.id
              ? 'border-primary-500 bg-primary-50 text-primary-700'
              : 'border-gray-200 hover:border-gray-300'
          }`}
        >
          <span className="mr-2">{method.icon}</span>
          <span>{method.name}</span>
        </button>
      ))}
    </div>
  );
};

export default PaymentMethods;