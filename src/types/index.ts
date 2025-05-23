export interface Course {
  id: string;
  title: string;
  titleFr?: string;
  description: string;
  descriptionFr?: string;
  thumbnail: string;
  price: number;
  category: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  duration: number; // in weeks
  language: string[];
  rating: number;
  studentsCount: number;
  instructor: {
    name: string;
    avatar: string;
    bio: string;
  };
  modules: {
    title: string;
    titleFr?: string;
    lessons: {
      title: string;
      titleFr?: string;
      duration: number; // in minutes
    }[];
  }[];
}

export interface Testimonial {
  id: string;
  name: string;
  avatar: string;
  role: string;
  content: string;
  rating: number;
  course: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  enrolledCourses: {
    courseId: string;
    progress: number;
    completed: boolean;
    enrollmentDate: string;
    accessCode: string;
  }[];
  certificates: {
    courseId: string;
    issueDate: string;
  }[];
}