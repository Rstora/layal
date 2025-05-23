import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Clock, Star, Users } from 'lucide-react';
import Button from './Button';
import { Course } from '../../types';

interface CourseCardProps {
  course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  const { t, i18n } = useTranslation();
  const {
    id,
    title,
    thumbnail,
    price,
    category,
    level,
    duration,
    rating,
    studentsCount,
  } = course;

  // Get localized title and description based on current language
  const localizedTitle = i18n.language === 'fr' && course.titleFr ? course.titleFr : title;
  
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="relative">
        <img
          src={thumbnail}
          alt={localizedTitle}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-3 left-3 bg-primary-600 text-white text-xs font-semibold px-2 py-1 rounded">
          {t(`home.categories.${category}`)}
        </div>
      </div>
      
      <div className="p-5">
        <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
          {localizedTitle}
        </h3>
        
        <div className="flex justify-between items-center mb-3">
          <div className="flex items-center text-warning-500">
            <Star size={16} fill="currentColor" />
            <span className="ml-1 text-sm font-medium">{rating}</span>
            <span className="ml-1 text-xs text-gray-500">({studentsCount})</span>
          </div>
          <div className="flex items-center text-gray-500 text-sm">
            <Clock size={14} className="mr-1" />
            <span>{duration} {t('courseDetail.weeks')}</span>
          </div>
        </div>
        
        <div className="flex items-center text-gray-500 text-sm mb-4">
          <Users size={14} className="mr-1" />
          <span>{t(`courses.level.${level}`)}</span>
        </div>
        
        <div className="flex justify-between items-center pt-3 border-t border-gray-100">
          <span className="text-primary-700 font-semibold">€{price}</span>
          <Link to={`/courses/${id}`}>
            <Button variant="outlined" size="sm">
              {t('courses.details')}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;