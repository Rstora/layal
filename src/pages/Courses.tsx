import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useSearchParams } from 'react-router-dom';
import CourseCard from '../components/ui/CourseCard';
import CourseFilter from '../components/ui/CourseFilter';
import { courses, getCoursesByCategory, getCoursesByPriceRange, searchCourses } from '../data/courses';
import { Course } from '../types';

const Courses: React.FC = () => {
  const { t } = useTranslation();
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');
  
  const [filteredCourses, setFilteredCourses] = useState<Course[]>(courses);
  const [filters, setFilters] = useState({
    searchTerm: '',
    priceRange: [20, 89],
    category: categoryParam,
  });

  useEffect(() => {
    applyFilters();
  }, [filters]);

  useEffect(() => {
    if (categoryParam) {
      setFilters(prev => ({ ...prev, category: categoryParam }));
    }
  }, [categoryParam]);

  const applyFilters = () => {
    let result = courses;
    
    // Apply category filter
    if (filters.category) {
      result = getCoursesByCategory(filters.category);
    }
    
    // Apply price range filter
    result = getCoursesByPriceRange(filters.priceRange[0], filters.priceRange[1]).filter(
      course => result.includes(course)
    );
    
    // Apply search term filter
    if (filters.searchTerm) {
      result = searchCourses(filters.searchTerm).filter(
        course => result.includes(course)
      );
    }
    
    setFilteredCourses(result);
  };

  const handleFilterChange = (newFilters: any) => {
    setFilters({ ...filters, ...newFilters });
  };

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-3xl md:text-4xl font-serif font-semibold text-gray-800 mb-4">
            {t('courses.title')}
          </h1>
          <p className="text-gray-600 max-w-2xl">
            {t('coursesDescription')}
          </p>
        </motion.div>

        <CourseFilter onFilter={handleFilterChange} />

        {filteredCourses.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-lg text-gray-600">
              {t('noCoursesFound')}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <CourseCard course={course} />
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Courses;