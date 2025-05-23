import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Download, Share2 } from 'lucide-react';
import Button from '../components/ui/Button';
import { getCourseById } from '../data/courses';
import { Course } from '../types';

// Mock user data
const mockUser = {
  id: 'user123',
  name: 'John Smith',
  email: 'john@example.com',
  certificates: [
    {
      courseId: 'makeup-pro-techniques',
      issueDate: '2023-08-28',
    }
  ]
};

const Certificate: React.FC = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const [course, setCourse] = useState<Course | null>(null);
  const [certificate, setCertificate] = useState<any | null>(null);
  
  useEffect(() => {
    if (courseId) {
      const foundCourse = getCourseById(courseId);
      
      if (foundCourse) {
        setCourse(foundCourse);
        
        // Find user certificate for this course
        const foundCertificate = mockUser.certificates.find(cert => cert.courseId === courseId);
        
        if (foundCertificate) {
          setCertificate(foundCertificate);
        } else {
          // User doesn't have a certificate for this course
          navigate('/dashboard');
        }
      } else {
        // Course not found
        navigate('/courses');
      }
    }
  }, [courseId, navigate]);
  
  if (!course || !certificate) {
    return (
      <div className="pt-24 pb-16 min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-gray-500">Loading...</div>
      </div>
    );
  }

  // Get localized title based on current language
  const localizedTitle = i18n.language === 'fr' && course.titleFr ? course.titleFr : course.title;
  const certificateDate = new Date(certificate.issueDate).toLocaleDateString();
  
  return (
    <div className="pt-24 pb-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            {/* Certificate Header */}
            <div className="bg-primary-600 text-white text-center py-4">
              <h1 className="text-2xl font-serif font-semibold">
                {t('certificate.title')}
              </h1>
            </div>
            
            {/* Certificate Content */}
            <div className="p-8 border-8 border-double border-gray-200 m-6 bg-gray-50 relative">
              <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
                <img 
                  src="/certificate-bg.svg" 
                  alt="" 
                  className="w-full h-full object-cover" 
                />
              </div>
              
              <div className="relative z-10 text-center">
                <div className="mb-8">
                  <img 
                    src="https://images.pexels.com/photos/3738366/pexels-photo-3738366.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="Beauté Académie" 
                    className="h-20 mx-auto mb-2" 
                  />
                  <h2 className="text-3xl font-serif font-bold text-primary-800">
                    Beauté Académie
                  </h2>
                </div>
                
                <p className="text-lg text-gray-700 mb-4">
                  {t('certificate.presented')}
                </p>
                
                <h2 className="text-3xl font-serif font-bold text-gray-800 mb-4">
                  {mockUser.name}
                </h2>
                
                <p className="text-lg text-gray-700 mb-4">
                  {t('certificate.completed')}
                </p>
                
                <h3 className="text-2xl font-serif font-semibold text-primary-700 mb-8">
                  {localizedTitle}
                </h3>
                
                <div className="flex justify-center space-x-16 mb-8">
                  <div className="text-center">
                    <p className="text-sm text-gray-500 mb-1">
                      {t('certificate.date')}
                    </p>
                    <p className="font-medium text-gray-800">
                      {certificateDate}
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <p className="text-sm text-gray-500 mb-1">
                      {t('certificate.signature')}
                    </p>
                    <p className="font-medium text-gray-800">
                      Isabella Moreau
                    </p>
                  </div>
                </div>
                
                <div className="text-sm text-gray-500">
                  Certificate ID: CERT-{course.id.toUpperCase()}-{mockUser.id}
                </div>
              </div>
            </div>
            
            {/* Certificate Actions */}
            <div className="p-6 bg-gray-50 border-t border-gray-200 flex justify-center space-x-4">
              <Button variant="primary">
                <Download size={16} className="mr-2" />
                {t('certificate.download')}
              </Button>
              
              <Button variant="outlined">
                <Share2 size={16} className="mr-2" />
                {t('certificate.share')}
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Certificate;