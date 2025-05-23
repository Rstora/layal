import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Clock, Users, Star, Book, Check, ChevronDown, ChevronUp } from 'lucide-react';
import Button from '../components/ui/Button';
import { getCourseById } from '../data/courses';
import { Course } from '../types';

const CourseDetail: React.FC = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const [course, setCourse] = useState<Course | null>(null);
  const [expandedModules, setExpandedModules] = useState<Record<number, boolean>>({});

  useEffect(() => {
    if (courseId) {
      const foundCourse = getCourseById(courseId);
      if (foundCourse) {
        setCourse(foundCourse);
        // Initialize first module as expanded
        setExpandedModules({ 0: true });
      } else {
        navigate('/courses');
      }
    }
  }, [courseId, navigate]);

  const toggleModule = (index: number) => {
    setExpandedModules(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  if (!course) {
    return (
      <div className="pt-24 pb-16 min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-gray-500">Loading...</div>
      </div>
    );
  }

  // Get localized content based on current language
  const localizedTitle = i18n.language === 'fr' && course.titleFr ? course.titleFr : course.title;
  const localizedDescription = i18n.language === 'fr' && course.descriptionFr ? course.descriptionFr : course.description;

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Course Content - Left Column */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img 
                  src={course.thumbnail} 
                  alt={localizedTitle} 
                  className="w-full h-64 object-cover" 
                />
                
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-primary-100 text-primary-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      {t(`home.categories.${course.category}`)}
                    </span>
                    <span className="bg-secondary-100 text-secondary-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      {t(`courses.level.${course.level}`)}
                    </span>
                  </div>
                  
                  <h1 className="text-3xl font-serif font-semibold text-gray-800 mb-4">
                    {localizedTitle}
                  </h1>
                  
                  <div className="flex flex-wrap items-center text-sm text-gray-600 mb-6 gap-4">
                    <div className="flex items-center">
                      <Clock size={16} className="mr-1" />
                      <span>{course.duration} {t('weeks')}</span>
                    </div>
                    <div className="flex items-center">
                      <Users size={16} className="mr-1" />
                      <span>{course.studentsCount} {t('students')}</span>
                    </div>
                    <div className="flex items-center text-warning-500">
                      <Star size={16} fill="currentColor" className="mr-1" />
                      <span>{course.rating}</span>
                    </div>
                    <div className="flex items-center">
                      <Book size={16} className="mr-1" />
                      <span>{course.language.map(lang => lang.toUpperCase()).join(' / ')}</span>
                    </div>
                  </div>
                  
                  <div className="mb-8">
                    <h2 className="text-xl font-semibold text-gray-800 mb-3">
                      {t('about')}
                    </h2>
                    <p className="text-gray-700">
                      {localizedDescription}
                    </p>
                  </div>
                  
                  <div className="mb-8">
                    <h2 className="text-xl font-semibold text-gray-800 mb-3">
                      {t('instructor')}
                    </h2>
                    <div className="flex items-center">
                      <img 
                        src={course.instructor.avatar} 
                        alt={course.instructor.name} 
                        className="w-12 h-12 rounded-full mr-4 object-cover" 
                      />
                      <div>
                        <h3 className="font-medium text-gray-800">
                          {course.instructor.name}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {course.instructor.bio}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">
                      {t('courseDetail.curriculum')}
                    </h2>
                    <div className="border rounded-lg overflow-hidden divide-y">
                      {course.modules.map((module, moduleIndex) => {
                        const localizedModuleTitle = i18n.language === 'fr' && module.titleFr 
                          ? module.titleFr 
                          : module.title;
                        
                        const isExpanded = expandedModules[moduleIndex];
                        
                        return (
                          <div key={moduleIndex} className="bg-white">
                            <button 
                              onClick={() => toggleModule(moduleIndex)}
                              className="flex justify-between items-center w-full p-4 text-left focus:outline-none"
                            >
                              <h3 className="font-medium text-gray-800">
                                {moduleIndex + 1}. {localizedModuleTitle}
                              </h3>
                              {isExpanded ? (
                                <ChevronUp size={18} className="text-gray-500" />
                              ) : (
                                <ChevronDown size={18} className="text-gray-500" />
                              )}
                            </button>
                            
                            {isExpanded && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.3 }}
                                className="px-4 pb-4"
                              >
                                <ul className="space-y-2 border-l border-gray-200 pl-4 ml-2">
                                  {module.lessons.map((lesson, lessonIndex) => {
                                    const localizedLessonTitle = i18n.language === 'fr' && lesson.titleFr 
                                      ? lesson.titleFr 
                                      : lesson.title;
                                    
                                    return (
                                      <li key={lessonIndex} className="text-gray-700">
                                        <div className="flex items-center">
                                          <span className="w-5 h-5 bg-gray-100 rounded-full flex items-center justify-center text-xs mr-2">
                                            {lessonIndex + 1}
                                          </span>
                                          <span>{localizedLessonTitle}</span>
                                          <span className="ml-auto text-xs text-gray-500">
                                            {lesson.duration} {t('minutes')}
                                          </span>
                                        </div>
                                      </li>
                                    );
                                  })}
                                </ul>
                              </motion.div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Course Sidebar - Right Column */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-lg shadow-md p-6 sticky top-24"
            >
              <div className="text-center mb-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                  €{course.price}
                </h3>
              </div>
              
              <Link to={`/checkout/${course.id}`}>
                <Button variant="primary" fullWidth size="lg" className="mb-4">
                  {t('courseDetail.enroll', { price: course.price })}
                </Button>
              </Link>
              
              <div className="border-t border-gray-200 pt-4 mt-4">
                <h4 className="font-medium text-gray-800 mb-3">
                  {t('courseDetail.includes')}
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check size={18} className="text-success-500 mr-2 mt-0.5" />
                    <span className="text-gray-700">
                      {t('courseDetail.duration', { duration: course.duration * 2 })}
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check size={18} className="text-success-500 mr-2 mt-0.5" />
                    <span className="text-gray-700">
                      {t('courseDetail.certificate')}
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check size={18} className="text-success-500 mr-2 mt-0.5" />
                    <span className="text-gray-700">
                      {t('courseDetail.videos', { 
                        count: course.modules.reduce((total, module) => total + module.lessons.length, 0) 
                      })}
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check size={18} className="text-success-500 mr-2 mt-0.5" />
                    <span className="text-gray-700">
                      {t('courseDetail.materials')}
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check size={18} className="text-success-500 mr-2 mt-0.5" />
                    <span className="text-gray-700">
                      {t('courseDetail.feedback')}
                    </span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;