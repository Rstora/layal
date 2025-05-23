import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Search, Filter, ChevronDown } from 'lucide-react';
import Button from './Button';

interface CourseFilterProps {
  onFilter: (filters: any) => void;
}

const CourseFilter: React.FC<CourseFilterProps> = ({ onFilter }) => {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');
  const [priceRange, setPriceRange] = useState([20, 89]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);

  const categories = [
    { id: 'all', name: t('courses.filter.all') },
    { id: 'hairdressing', name: t('home.categories.hairdressing') },
    { id: 'nails', name: t('home.categories.nails') },
    { id: 'makeup', name: t('home.categories.makeup') },
    { id: 'skincare', name: t('home.categories.skincare') },
    { id: 'massage', name: t('home.categories.massage') },
    { id: 'allInOne', name: t('home.categories.allInOne') },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    applyFilters();
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPriceRange([Number(e.target.value), priceRange[1]]);
  };

  const handleMaxPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPriceRange([priceRange[0], Number(e.target.value)]);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  const toggleFilters = () => {
    setIsFiltersOpen(!isFiltersOpen);
  };

  const applyFilters = () => {
    onFilter({
      searchTerm,
      priceRange,
      category: selectedCategory === 'all' ? null : selectedCategory,
    });
  };

  const resetFilters = () => {
    setSearchTerm('');
    setPriceRange([20, 89]);
    setSelectedCategory('all');
    onFilter({
      searchTerm: '',
      priceRange: [20, 89],
      category: null,
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
      <form onSubmit={handleSearch} className="flex mb-4">
        <div className="relative flex-grow">
          <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder={t('courses.filter.search')}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent"
          />
        </div>
        <Button type="submit" variant="primary">
          {t('search')}
        </Button>
      </form>

      <div className="flex justify-between items-center">
        <button
          onClick={toggleFilters}
          className="flex items-center text-gray-700 hover:text-primary-600 focus:outline-none"
        >
          <Filter size={18} className="mr-2" />
          <span>{t('courses.filter.filter')}</span>
          <ChevronDown
            size={18}
            className={`ml-1 transition-transform ${isFiltersOpen ? 'rotate-180' : ''}`}
          />
        </button>
        
        {isFiltersOpen && (
          <button
            onClick={resetFilters}
            className="text-sm text-primary-600 hover:text-primary-700"
          >
            {t('reset')}
          </button>
        )}
      </div>

      {isFiltersOpen && (
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in">
          <div>
            <h4 className="font-medium text-gray-700 mb-2">{t('courses.filter.price')}</h4>
            <div className="space-y-2">
              <div className="flex justify-between text-sm text-gray-500">
                <span>€{priceRange[0]}</span>
                <span>€{priceRange[1]}</span>
              </div>
              <input
                type="range"
                min="20"
                max="89"
                value={priceRange[0]}
                onChange={handlePriceChange}
                className="w-full"
              />
              <input
                type="range"
                min="20"
                max="89"
                value={priceRange[1]}
                onChange={handleMaxPriceChange}
                className="w-full"
              />
            </div>
          </div>

          <div>
            <h4 className="font-medium text-gray-700 mb-2">{t('courses.filter.category')}</h4>
            <div className="space-y-2">
              {categories.map((category) => (
                <label key={category.id} className="flex items-center">
                  <input
                    type="radio"
                    name="category"
                    checked={selectedCategory === category.id}
                    onChange={() => handleCategoryChange(category.id)}
                    className="form-radio text-primary-600 focus:ring-primary-500"
                  />
                  <span className="ml-2 text-gray-700">{category.name}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="md:col-span-2">
            <Button onClick={applyFilters} variant="primary" fullWidth>
              {t('applyFilters')}
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CourseFilter;