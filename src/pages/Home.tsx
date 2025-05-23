import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ChevronRight, Medal, Clock, Award, Users } from 'lucide-react';
import Button from '../components/ui/Button';
import TestimonialCard from '../components/ui/TestimonialCard';
import { courses } from '../data/courses';
import { testimonials } from '../data/testimonials';

const Home: React.FC = () => {
  const { t, i18n } = useTranslation();
  const featuredCourses = courses.slice(0, 3);
  const featuredTestimonials = testimonials.slice(0, 3);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-900 to-secondary-900 text-white pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.pexels.com/photos/3736397/pexels-photo-3736397.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="max-w-2xl"
          >
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {t('home.hero.title')}
            </h1>
            <p className="text-lg md:text-xl opacity-90 mb-8">
              {t('home.hero.subtitle')}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/courses">
                <Button variant="primary" size="lg">
                  {t('home.hero.cta')}
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-serif font-semibold text-gray-800 mb-3">
              {t('home.features.title')}
            </h2>
            <div className="w-24 h-1 bg-primary-500 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow"
            >
              <div className="bg-primary-100 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                <Medal className="text-primary-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {t('home.features.expertInstructors.title')}
              </h3>
              <p className="text-gray-600">
                {t('home.features.expertInstructors.description')}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow"
            >
              <div className="bg-secondary-100 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                <Clock className="text-secondary-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {t('home.features.flexibleLearning.title')}
              </h3>
              <p className="text-gray-600">
                {t('home.features.flexibleLearning.description')}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow"
            >
              <div className="bg-accent-100 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                <Award className="text-accent-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {t('home.features.certification.title')}
              </h3>
              <p className="text-gray-600">
                {t('home.features.certification.description')}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow"
            >
              <div className="bg-success-100 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                <Users className="text-success-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {t('home.features.communityAccess.title')}
              </h3>
              <p className="text-gray-600">
                {t('home.features.communityAccess.description')}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-serif font-semibold text-gray-800 mb-3">
              {t('home.categories.title')}
            </h2>
            <div className="w-24 h-1 bg-primary-500 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <Link to="/courses?category=hairdressing">
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white rounded-lg shadow-sm overflow-hidden group transition-all"
              >
                <div className="h-32 overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/3993444/pexels-photo-3993444.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt={t('home.categories.hairdressing')}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-3 text-center">
                  <h3 className="font-medium text-gray-800">
                    {t('home.categories.hairdressing')}
                  </h3>
                </div>
              </motion.div>
            </Link>

            <Link to="/courses?category=nails">
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white rounded-lg shadow-sm overflow-hidden group transition-all"
              >
                <div className="h-32 overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/704815/pexels-photo-704815.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt={t('home.categories.nails')}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-3 text-center">
                  <h3 className="font-medium text-gray-800">
                    {t('home.categories.nails')}
                  </h3>
                </div>
              </motion.div>
            </Link>

            <Link to="/courses?category=makeup">
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white rounded-lg shadow-sm overflow-hidden group transition-all"
              >
                <div className="h-32 overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/457701/pexels-photo-457701.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt={t('home.categories.makeup')}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-3 text-center">
                  <h3 className="font-medium text-gray-800">
                    {t('home.categories.makeup')}
                  </h3>
                </div>
              </motion.div>
            </Link>

            <Link to="/courses?category=skincare">
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white rounded-lg shadow-sm overflow-hidden group transition-all"
              >
                <div className="h-32 overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/3764013/pexels-photo-3764013.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt={t('home.categories.skincare')}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-3 text-center">
                  <h3 className="font-medium text-gray-800">
                    {t('home.categories.skincare')}
                  </h3>
                </div>
              </motion.div>
            </Link>

            <Link to="/courses?category=massage">
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white rounded-lg shadow-sm overflow-hidden group transition-all"
              >
                <div className="h-32 overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/3865548/pexels-photo-3865548.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt={t('home.categories.massage')}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-3 text-center">
                  <h3 className="font-medium text-gray-800">
                    {t('home.categories.massage')}
                  </h3>
                </div>
              </motion.div>
            </Link>

            <Link to="/courses?category=allInOne">
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white rounded-lg shadow-sm overflow-hidden group transition-all"
              >
                <div className="h-32 overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/3738366/pexels-photo-3738366.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt={t('home.categories.allInOne')}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-3 text-center">
                  <h3 className="font-medium text-gray-800">
                    {t('home.categories.allInOne')}
                  </h3>
                </div>
              </motion.div>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex justify-between items-center mb-12"
          >
            <div>
              <h2 className="text-3xl font-serif font-semibold text-gray-800 mb-3">
                {t('featuredCourses')}
              </h2>
              <div className="w-24 h-1 bg-primary-500"></div>
            </div>
            <Link to="/courses" className="flex items-center text-primary-600 font-medium hover:text-primary-700">
              {t('viewAll')}
              <ChevronRight size={16} className="ml-1" />
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCourses.map((course, index) => {
              const localizedTitle = i18n.language === 'fr' && course.titleFr ? course.titleFr : course.title;
              
              return (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-md overflow-hidden transition-all hover:shadow-lg"
                >
                  <div className="relative">
                    <img src={course.thumbnail} alt={localizedTitle} className="w-full h-48 object-cover" />
                    <div className="absolute top-3 left-3 bg-primary-600 text-white text-xs font-semibold px-2 py-1 rounded">
                      {t(`home.categories.${course.category}`)}
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{localizedTitle}</h3>
                    <div className="flex justify-between items-center mb-4">
                      <div className="flex items-center text-warning-500">
                        <span className="text-sm font-medium">⭐ {course.rating}</span>
                      </div>
                      <div className="text-sm text-gray-500">
                        {course.duration} {t('weeks')}
                      </div>
                    </div>
                    <div className="flex justify-between items-center pt-3 border-t border-gray-100">
                      <span className="text-primary-700 font-semibold">€{course.price}</span>
                      <Link to={`/courses/${course.id}`}>
                        <Button variant="primary" size="sm">
                          {t('courses.details')}
                        </Button>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-serif font-semibold text-gray-800 mb-3">
              {t('home.testimonials.title')}
            </h2>
            <div className="w-24 h-1 bg-primary-500 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredTestimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <TestimonialCard testimonial={testimonial} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-serif font-semibold mb-4">
              {t('home.cta.title')}
            </h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8">
              {t('home.cta.subtitle')}
            </p>
            <Link to="/courses">
              <Button variant="outlined" size="lg" className="border-white text-white hover:bg-white hover:text-primary-600">
                {t('home.cta.button')}
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;