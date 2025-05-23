import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-serif font-semibold text-primary-800 mb-4">
              Beauté Académie
            </h3>
            <p className="text-gray-600 mb-4">
              Premium online beauty education for professionals and enthusiasts.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-primary-600">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary-600">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary-600">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary-600">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-primary-600">
                  {t('navigation.home')}
                </Link>
              </li>
              <li>
                <Link to="/courses" className="text-gray-600 hover:text-primary-600">
                  {t('navigation.courses')}
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="text-gray-600 hover:text-primary-600">
                  {t('navigation.dashboard')}
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-primary-600">
                  {t('footer.about')}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-primary-600">
                  {t('footer.terms')}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-primary-600">
                  {t('footer.privacy')}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-primary-600">
                  {t('footer.contact')}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Contact Us</h4>
            <address className="not-italic text-gray-600">
              <p className="mb-2">Paris, France</p>
              <p className="mb-2">Email: contact@beauteacademie.com</p>
              <p>Phone: +33 (0)1 23 45 67 89</p>
            </address>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-6 text-center text-gray-500 text-sm">
          <p>{t('footer.copyright', { year: currentYear })}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;