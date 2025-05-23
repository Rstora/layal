import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Lock, Check } from 'lucide-react';
import Button from '../components/ui/Button';
import PaymentMethods from '../components/ui/PaymentMethods';
import { getCourseById } from '../data/courses';
import { Course } from '../types';

const Checkout: React.FC = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const [course, setCourse] = useState<Course | null>(null);
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [formData, setFormData] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    nameOnCard: '',
  });
  const [isProcessing, setIsProcessing] = useState(false);
  
  useEffect(() => {
    if (courseId) {
      const foundCourse = getCourseById(courseId);
      if (foundCourse) {
        setCourse(foundCourse);
      } else {
        navigate('/courses');
      }
    }
  }, [courseId, navigate]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      // Redirect to dashboard with success message
      navigate('/dashboard?purchased=true');
    }, 2000);
  };

  if (!course) {
    return (
      <div className="pt-24 pb-16 min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-gray-500">Loading...</div>
      </div>
    );
  }

  // Get localized title based on current language
  const localizedTitle = i18n.language === 'fr' && course.titleFr ? course.titleFr : course.title;

  return (
    <div className="pt-24 pb-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-3xl font-serif font-semibold text-gray-800 mb-8 text-center">
            {t('checkout.title')}
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                  {t('checkout.paymentMethod')}
                </h2>
                <PaymentMethods 
                  onSelect={setPaymentMethod} 
                  selected={paymentMethod} 
                />
              </div>
              
              {paymentMethod === 'card' && (
                <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6">
                  <h2 className="text-xl font-semibold text-gray-800 mb-4">
                    {t('checkout.cardDetails')}
                  </h2>
                  
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700 mb-1">
                        {t('checkout.cardNumber')}
                      </label>
                      <input
                        type="text"
                        id="cardNumber"
                        name="cardNumber"
                        value={formData.cardNumber}
                        onChange={handleInputChange}
                        placeholder="1234 5678 9012 3456"
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent"
                        required
                      />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-700 mb-1">
                          {t('checkout.expiryDate')}
                        </label>
                        <input
                          type="text"
                          id="expiryDate"
                          name="expiryDate"
                          value={formData.expiryDate}
                          onChange={handleInputChange}
                          placeholder="MM/YY"
                          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent"
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="cvv" className="block text-sm font-medium text-gray-700 mb-1">
                          {t('checkout.cvv')}
                        </label>
                        <input
                          type="text"
                          id="cvv"
                          name="cvv"
                          value={formData.cvv}
                          onChange={handleInputChange}
                          placeholder="123"
                          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent"
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="nameOnCard" className="block text-sm font-medium text-gray-700 mb-1">
                        {t('checkout.nameOnCard')}
                      </label>
                      <input
                        type="text"
                        id="nameOnCard"
                        name="nameOnCard"
                        value={formData.nameOnCard}
                        onChange={handleInputChange}
                        placeholder="John Smith"
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <Button 
                      type="submit" 
                      variant="primary" 
                      fullWidth 
                      size="lg"
                      disabled={isProcessing}
                    >
                      {isProcessing ? (
                        <span className="flex items-center justify-center">
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          {t('processing')}
                        </span>
                      ) : (
                        <span className="flex items-center justify-center">
                          <Lock size={16} className="mr-2" />
                          {t('checkout.completePayment')}
                        </span>
                      )}
                    </Button>
                  </div>
                </form>
              )}
              
              {paymentMethod === 'applepay' && (
                <div className="bg-white rounded-lg shadow-md p-6 text-center">
                  <button className="bg-black text-white font-medium py-3 px-6 rounded-md w-full flex items-center justify-center">
                    <span className="mr-2">🍎</span>
                    {t('checkout.applePay')}
                  </button>
                </div>
              )}
              
              {(paymentMethod === 'visa' || paymentMethod === 'mastercard') && (
                <div className="bg-white rounded-lg shadow-md p-6 text-center">
                  <p className="text-gray-700 mb-4">
                    {t('redirectingToProvider')}
                  </p>
                  <Button variant="primary" fullWidth size="lg" onClick={() => navigate('/dashboard?purchased=true')}>
                    {t('simulatePayment')}
                  </Button>
                </div>
              )}
            </div>
            
            <div>
              <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
                <h2 className="text-lg font-semibold text-gray-800 mb-4">
                  {t('orderSummary')}
                </h2>
                
                <div className="flex items-start mb-4">
                  <img 
                    src={course.thumbnail} 
                    alt={localizedTitle} 
                    className="w-16 h-16 object-cover rounded mr-3" 
                  />
                  <div>
                    <h3 className="font-medium text-gray-800">
                      {localizedTitle}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {course.duration} {t('weeks')}
                    </p>
                  </div>
                </div>
                
                <div className="border-t border-gray-200 pt-4">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">{t('checkout.price')}</span>
                    <span className="text-gray-800">€{course.price}</span>
                  </div>
                  
                  <div className="flex justify-between font-semibold text-lg mt-4 pt-4 border-t border-gray-200">
                    <span>{t('checkout.total')}</span>
                    <span className="text-primary-700">€{course.price}</span>
                  </div>
                </div>
                
                <div className="mt-6 text-sm text-gray-500 flex items-start">
                  <Lock size={14} className="mr-2 mt-0.5" />
                  <span>{t('checkout.securePayment')}</span>
                </div>
                
                <div className="mt-4 text-xs text-gray-500">
                  <p>{t('checkout.termsAgree')}</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Checkout;