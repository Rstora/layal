import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Home } from 'lucide-react';
import Button from '../components/ui/Button';

const NotFound: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <div className="pt-24 pb-16 min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-9xl font-bold text-primary-300 mb-4">404</h1>
          <h2 className="text-3xl font-serif font-semibold text-gray-800 mb-4">
            {t('pageNotFound')}
          </h2>
          <p className="text-gray-600 mb-8 max-w-lg mx-auto">
            {t('pageNotFoundDescription')}
          </p>
          <Link to="/">
            <Button variant="primary" size="lg">
              <Home size={18} className="mr-2" />
              {t('backToHome')}
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;