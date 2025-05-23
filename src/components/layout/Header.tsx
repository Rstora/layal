import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X, ShoppingCart, User, LogIn } from 'lucide-react';
import LanguageSwitcher from '../ui/LanguageSwitcher';
import Button from '../ui/Button';

const Header: React.FC = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-serif font-semibold text-primary-800">
            Beauté Académie
          </span>
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          <nav className="flex items-center space-x-6">
            <Link
              to="/"
              className={`text-sm font-medium ${
                location.pathname === '/' 
                  ? 'text-primary-700 border-b-2 border-primary-500' 
                  : 'text-gray-700 hover:text-primary-600'
              }`}
            >
              {t('navigation.home')}
            </Link>
            <Link
              to="/courses"
              className={`text-sm font-medium ${
                location.pathname.includes('/courses') 
                  ? 'text-primary-700 border-b-2 border-primary-500' 
                  : 'text-gray-700 hover:text-primary-600'
              }`}
            >
              {t('navigation.courses')}
            </Link>
            <Link
              to="/dashboard"
              className={`text-sm font-medium ${
                location.pathname === '/dashboard' 
                  ? 'text-primary-700 border-b-2 border-primary-500' 
                  : 'text-gray-700 hover:text-primary-600'
              }`}
            >
              {t('navigation.dashboard')}
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <LanguageSwitcher />
            <Button variant="outlined" size="sm">
              <LogIn size={16} className="mr-1" />
              {t('navigation.login')}
            </Button>
            <Button variant="primary" size="sm">
              {t('navigation.register')}
            </Button>
          </div>
        </div>

        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={toggleMenu}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg animate-fade-in">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <Link
                to="/"
                className={`text-base font-medium py-2 ${
                  location.pathname === '/' 
                    ? 'text-primary-700 border-l-4 border-primary-500 pl-3' 
                    : 'text-gray-700 hover:text-primary-600'
                }`}
              >
                {t('navigation.home')}
              </Link>
              <Link
                to="/courses"
                className={`text-base font-medium py-2 ${
                  location.pathname.includes('/courses')
                    ? 'text-primary-700 border-l-4 border-primary-500 pl-3' 
                    : 'text-gray-700 hover:text-primary-600'
                }`}
              >
                {t('navigation.courses')}
              </Link>
              <Link
                to="/dashboard"
                className={`text-base font-medium py-2 ${
                  location.pathname === '/dashboard' 
                    ? 'text-primary-700 border-l-4 border-primary-500 pl-3' 
                    : 'text-gray-700 hover:text-primary-600'
                }`}
              >
                {t('navigation.dashboard')}
              </Link>
              
              <div className="pt-4 flex items-center justify-between">
                <LanguageSwitcher />
                <div className="flex space-x-2">
                  <Button variant="outlined" size="sm">
                    {t('navigation.login')}
                  </Button>
                  <Button variant="primary" size="sm">
                    {t('navigation.register')}
                  </Button>
                </div>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;