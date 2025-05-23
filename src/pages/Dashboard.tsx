import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { User, BookOpen, Award, ChevronRight, CheckCircle } from 'lucide-react';
import Button from '../components/ui/Button';
import { courses } from '../data/courses';

// Mock user data (in a real app, this would come from an API)
const mockUser = {
  id: 'user123',
  name: 'John Smith',
  email: 'john@example.com',
  enrolledCourses: [
    {
      courseId: 'hair-styling-essentials',
      progress: 65,
      completed: false,
      enrollmentDate: '2023-09-15',
      accessCode: 'HAIR2023',
    },
    {
      courseId: 'makeup-pro-techniques',
      progress: 100,
      completed: true,
      enrollmentDate: '2023-07-10',
      accessCode: 'MAKEUP2023',
    }
  ],
  certificates: [
    {
      courseId: 'makeup-pro-techniques',
      issueDate: '2023-08-28',
    }
  ]
};

const Dashboard: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [searchParams] = useSearchParams();
  const justPurchased = searchParams.get('purchased') === 'true';
  const [accessCode, setAccessCode] = useState('');
  const [accessCodeError, setAccessCodeError] = useState('');
  const [accessCodeSuccess, setAccessCodeSuccess] = useState('');
  const [enrolledCourses, setEnrolledCourses] = useState(mockUser.enrolledCourses);
  
  // Show success message if user just completed a purchase
  useEffect(() => {
    if (justPurchased) {
      // In a real app, we would refresh user data from the API
      setEnrolledCourses([
        ...mockUser.enrolledCourses,
        {
          courseId: 'complete-beauty-program',
          progress: 0,
          completed: false,
          enrollmentDate: new Date().toISOString().split('T')[0],
          accessCode: 'BEAUTY2023',
        }
      ]);
    }
  }, [justPurchased]);

  const handleAccessCodeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setAccessCodeError('');
    setAccessCodeSuccess('');
    
    // Check if code is valid (this would be an API call in a real app)
    if (accessCode === 'SKINCARE2023') {
      setAccessCodeSuccess(t('codeAccepted'));
      setEnrolledCourses([
        ...enrolledCourses,
        {
          courseId: 'skincare-specialist',
          progress: 0,
          completed: false,
          enrollmentDate: new Date().toISOString().split('T')[0],
          accessCode: accessCode,
        }
      ]);
      setAccessCode('');
    } else {
      setAccessCodeError(t('dashboard.accessCode.invalid'));
    }
  };

  // Get the user's enrolled courses with details
  const userCourses = enrolledCourses.map(enrollment => {
    const course = courses.find(c => c.id === enrollment.courseId);
    return {
      ...enrollment,
      course: course,
    };
  });

  // Get the user's certificates with details
  const userCertificates = mockUser.certificates.map(certificate => {
    const course = courses.find(c => c.id === certificate.courseId);
    return {
      ...certificate,
      course: course,
    };
  });

  return (
    <div className="pt-24 pb-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        {justPurchased && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-success-100 border-l-4 border-success-500 text-success-700 p-4 rounded mb-8"
          >
            <div className="flex">
              <CheckCircle className="h-5 w-5 mr-2" />
              <p>{t('purchaseSuccess')}</p>
            </div>
          </motion.div>
        )}
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex items-center mb-8"
        >
          <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mr-4">
            <User className="h-8 w-8 text-primary-600" />
          </div>
          <div>
            <h1 className="text-3xl font-serif font-semibold text-gray-800">
              {t('dashboard.welcome', { name: mockUser.name })}
            </h1>
            <p className="text-gray-600">{mockUser.email}</p>
          </div>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {/* My Courses Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-lg shadow-md p-6 mb-8"
            >
              <div className="flex items-center mb-6">
                <BookOpen className="h-6 w-6 text-primary-600 mr-2" />
                <h2 className="text-xl font-semibold text-gray-800">
                  {t('dashboard.myCourses')}
                </h2>
              </div>
              
              {userCourses.length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-gray-600 mb-4">
                    {t('dashboard.noCourses')}
                  </p>
                  <Link to="/courses">
                    <Button variant="primary">
                      {t('dashboard.browseCoursesBtn')}
                    </Button>
                  </Link>
                </div>
              ) : (
                <div className="space-y-6">
                  {userCourses.map((enrollment) => {
                    const course = enrollment.course;
                    if (!course) return null;
                    
                    // Get localized title based on current language
                    const localizedTitle = i18n.language === 'fr' && course.titleFr 
                      ? course.titleFr 
                      : course.title;
                    
                    return (
                      <div key={enrollment.courseId} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                        <div className="flex flex-col md:flex-row">
                          <img 
                            src={course.thumbnail} 
                            alt={localizedTitle} 
                            className="w-full md:w-32 h-20 object-cover rounded mb-4 md:mb-0 md:mr-4" 
                          />
                          <div className="flex-1">
                            <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                              <h3 className="font-medium text-gray-800">
                                {localizedTitle}
                              </h3>
                              <span className="text-sm text-gray-500">
                                {t('enrolledOn')}: {new Date(enrollment.enrollmentDate).toLocaleDateString()}
                              </span>
                            </div>
                            
                            <div className="mb-3">
                              <div className="flex justify-between text-sm mb-1">
                                <span>{t('progress')}</span>
                                <span>{t('dashboard.progress', { completed: enrollment.progress })}</span>
                              </div>
                              <div className="w-full bg-gray-200 rounded-full h-2.5">
                                <div 
                                  className="bg-primary-600 h-2.5 rounded-full" 
                                  style={{ width: `${enrollment.progress}%` }}
                                ></div>
                              </div>
                            </div>
                            
                            <div className="flex flex-col md:flex-row md:items-center justify-between">
                              <div className="mb-2 md:mb-0">
                                <span className="text-xs font-medium px-2.5 py-0.5 rounded bg-primary-100 text-primary-800">
                                  {t(`home.categories.${course.category}`)}
                                </span>
                                {enrollment.completed && (
                                  <span className="ml-2 text-xs font-medium px-2.5 py-0.5 rounded bg-success-100 text-success-800">
                                    {t('completed')}
                                  </span>
                                )}
                              </div>
                              <Link to={`/courses/${course.id}`}>
                                <Button variant="outlined" size="sm">
                                  {t('dashboard.continue')}
                                </Button>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </motion.div>
            
            {/* Certificates Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-lg shadow-md p-6"
            >
              <div className="flex items-center mb-6">
                <Award className="h-6 w-6 text-primary-600 mr-2" />
                <h2 className="text-xl font-semibold text-gray-800">
                  {t('dashboard.certificates')}
                </h2>
              </div>
              
              {userCertificates.length === 0 ? (
                <p className="text-center text-gray-600 py-4">
                  {t('noCertificates')}
                </p>
              ) : (
                <div className="space-y-4">
                  {userCertificates.map((certificate) => {
                    const course = certificate.course;
                    if (!course) return null;
                    
                    // Get localized title based on current language
                    const localizedTitle = i18n.language === 'fr' && course.titleFr 
                      ? course.titleFr 
                      : course.title;
                    
                    return (
                      <div key={certificate.courseId} className="flex justify-between items-center p-4 border border-gray-200 rounded-lg">
                        <div>
                          <h3 className="font-medium text-gray-800">
                            {localizedTitle}
                          </h3>
                          <p className="text-sm text-gray-500">
                            {t('issuedOn')}: {new Date(certificate.issueDate).toLocaleDateString()}
                          </p>
                        </div>
                        <Link to={`/certificate/${certificate.courseId}`}>
                          <Button variant="outlined" size="sm">
                            {t('dashboard.viewCertificate')}
                          </Button>
                        </Link>
                      </div>
                    );
                  })}
                </div>
              )}
            </motion.div>
          </div>
          
          <div>
            {/* Access Code Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white rounded-lg shadow-md p-6 mb-8"
            >
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                {t('dashboard.accessCode.title')}
              </h2>
              <form onSubmit={handleAccessCodeSubmit}>
                <div className="mb-4">
                  <input
                    type="text"
                    value={accessCode}
                    onChange={(e) => setAccessCode(e.target.value)}
                    placeholder={t('dashboard.accessCode.placeholder')}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent"
                    required
                  />
                </div>
                
                {accessCodeError && (
                  <div className="text-error-600 text-sm mb-4">
                    {accessCodeError}
                  </div>
                )}
                
                {accessCodeSuccess && (
                  <div className="text-success-600 text-sm mb-4">
                    {accessCodeSuccess}
                  </div>
                )}
                
                <Button type="submit" variant="primary" fullWidth>
                  {t('dashboard.accessCode.submit')}
                </Button>
              </form>
              <p className="text-sm text-gray-500 mt-4">
                {t('accessCodeDescription')}
              </p>
            </motion.div>
            
            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white rounded-lg shadow-md p-6"
            >
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                {t('quickLinks')}
              </h2>
              <ul className="space-y-2">
                <li>
                  <Link to="/courses" className="flex items-center justify-between p-3 rounded-md hover:bg-gray-50 text-gray-700 hover:text-primary-600">
                    <span>{t('browseCourses')}</span>
                    <ChevronRight size={16} />
                  </Link>
                </li>
                <li>
                  <a href="#" className="flex items-center justify-between p-3 rounded-md hover:bg-gray-50 text-gray-700 hover:text-primary-600">
                    <span>{t('accountSettings')}</span>
                    <ChevronRight size={16} />
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center justify-between p-3 rounded-md hover:bg-gray-50 text-gray-700 hover:text-primary-600">
                    <span>{t('helpCenter')}</span>
                    <ChevronRight size={16} />
                  </a>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;