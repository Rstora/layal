import React from 'react';
import { Star } from 'lucide-react';
import { Testimonial } from '../../types';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  const { name, avatar, role, content, rating, course } = testimonial;

  return (
    <div className="bg-white rounded-lg shadow-md p-6 relative">
      <div className="flex items-center mb-4">
        <img
          src={avatar}
          alt={name}
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="font-medium text-gray-800">{name}</h4>
          <p className="text-sm text-gray-500">{role}</p>
        </div>
      </div>
      
      <div className="flex items-center mb-3">
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            size={16}
            className={`${
              index < rating ? 'text-warning-500 fill-current' : 'text-gray-300'
            }`}
          />
        ))}
      </div>
      
      <p className="text-gray-700 mb-3">{content}</p>
      
      <p className="text-sm text-gray-500 italic">
        Course: {course}
      </p>
      
      <div className="absolute -top-2 -left-2 w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
        <span className="text-4xl text-primary-500 leading-none">"</span>
      </div>
    </div>
  );
};

export default TestimonialCard;