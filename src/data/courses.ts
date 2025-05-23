import { Course } from '../types';

export const courses: Course[] = [
  {
    id: 'hair-styling-essentials',
    title: 'Hair Styling Essentials',
    titleFr: 'Essentiels de la Coiffure',
    description: 'Master the fundamentals of hair styling with techniques for cutting, coloring, and styling different hair types.',
    descriptionFr: 'Maîtrisez les fondamentaux de la coiffure avec des techniques de coupe, coloration et coiffage pour différents types de cheveux.',
    thumbnail: 'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    price: 49,
    category: 'hairdressing',
    level: 'beginner',
    duration: 8, // weeks
    language: ['en', 'fr'],
    rating: 4.7,
    studentsCount: 1243,
    instructor: {
      name: 'Sophie Martin',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      bio: 'Award-winning hairstylist with 15 years of experience in luxury salons.',
    },
    modules: [
      {
        title: 'Hair Fundamentals',
        titleFr: 'Fondamentaux des Cheveux',
        lessons: [
          { title: 'Understanding Hair Types', titleFr: 'Comprendre les Types de Cheveux', duration: 25 },
          { title: 'Essential Tools', titleFr: 'Outils Essentiels', duration: 20 },
          { title: 'Preparation Techniques', titleFr: 'Techniques de Préparation', duration: 30 },
        ],
      },
      {
        title: 'Basic Cutting Techniques',
        titleFr: 'Techniques de Coupe de Base',
        lessons: [
          { title: 'Straight Line Cutting', titleFr: 'Coupe en Ligne Droite', duration: 45 },
          { title: 'Layering Basics', titleFr: 'Bases du Dégradé', duration: 40 },
          { title: 'Texturizing', titleFr: 'Texturisation', duration: 35 },
        ],
      },
      {
        title: 'Styling and Finishing',
        titleFr: 'Coiffage et Finition',
        lessons: [
          { title: 'Blow Drying Techniques', titleFr: 'Techniques de Brushing', duration: 50 },
          { title: 'Curling and Straightening', titleFr: 'Boucler et Lisser', duration: 55 },
          { title: 'Updos and Special Occasions', titleFr: 'Chignons et Occasions Spéciales', duration: 60 },
        ],
      },
    ],
  },
  {
    id: 'nail-art-masterclass',
    title: 'Nail Art Masterclass',
    titleFr: 'Masterclass d\'Art des Ongles',
    description: 'Learn professional nail art techniques, from basic manicures to advanced designs and applications.',
    descriptionFr: 'Apprenez les techniques professionnelles d\'art des ongles, des manucures de base aux designs et applications avancés.',
    thumbnail: 'https://images.pexels.com/photos/939836/pexels-photo-939836.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    price: 39,
    category: 'nails',
    level: 'intermediate',
    duration: 6, // weeks
    language: ['en', 'fr'],
    rating: 4.8,
    studentsCount: 856,
    instructor: {
      name: 'Emma Chen',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      bio: 'Renowned nail artist with clients including celebrities and fashion brands.',
    },
    modules: [
      {
        title: 'Nail Preparation',
        titleFr: 'Préparation des Ongles',
        lessons: [
          { title: 'Nail Anatomy', titleFr: 'Anatomie des Ongles', duration: 20 },
          { title: 'Perfect Filing', titleFr: 'Limage Parfait', duration: 25 },
          { title: 'Cuticle Care', titleFr: 'Soin des Cuticules', duration: 30 },
        ],
      },
      {
        title: 'Polish Application',
        titleFr: 'Application du Vernis',
        lessons: [
          { title: 'Base and Top Coats', titleFr: 'Bases et Top Coats', duration: 25 },
          { title: 'Perfect Polish Application', titleFr: 'Application Parfaite du Vernis', duration: 40 },
          { title: 'Gel Polish Techniques', titleFr: 'Techniques de Vernis Gel', duration: 45 },
        ],
      },
      {
        title: 'Nail Art Designs',
        titleFr: 'Designs d\'Art des Ongles',
        lessons: [
          { title: 'Freehand Designs', titleFr: 'Designs à Main Levée', duration: 50 },
          { title: 'Stamping Techniques', titleFr: 'Techniques de Stamping', duration: 35 },
          { title: 'Embellishments and 3D Art', titleFr: 'Embellissements et Art 3D', duration: 55 },
        ],
      },
    ],
  },
  {
    id: 'makeup-pro-techniques',
    title: 'Professional Makeup Techniques',
    titleFr: 'Techniques de Maquillage Professionnel',
    description: 'From everyday makeup to glamorous evening looks, learn to enhance natural beauty with professional techniques.',
    descriptionFr: 'Du maquillage quotidien aux looks glamour de soirée, apprenez à mettre en valeur la beauté naturelle avec des techniques professionnelles.',
    thumbnail: 'https://images.pexels.com/photos/457701/pexels-photo-457701.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    price: 59,
    category: 'makeup',
    level: 'beginner',
    duration: 7, // weeks
    language: ['en', 'fr'],
    rating: 4.9,
    studentsCount: 1876,
    instructor: {
      name: 'James Rodriguez',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      bio: 'Celebrity makeup artist with experience in film, television, and fashion shows.',
    },
    modules: [
      {
        title: 'Makeup Essentials',
        titleFr: 'Essentiels du Maquillage',
        lessons: [
          { title: 'Skin Preparation', titleFr: 'Préparation de la Peau', duration: 30 },
          { title: 'Color Theory', titleFr: 'Théorie des Couleurs', duration: 25 },
          { title: 'Tools and Products', titleFr: 'Outils et Produits', duration: 35 },
        ],
      },
      {
        title: 'Everyday Makeup',
        titleFr: 'Maquillage Quotidien',
        lessons: [
          { title: 'Natural Daytime Look', titleFr: 'Look Naturel de Jour', duration: 45 },
          { title: 'Office Makeup', titleFr: 'Maquillage de Bureau', duration: 40 },
          { title: 'Quick Fixes', titleFr: 'Solutions Rapides', duration: 25 },
        ],
      },
      {
        title: 'Evening and Special Occasion',
        titleFr: 'Soirée et Occasions Spéciales',
        lessons: [
          { title: 'Smokey Eye Techniques', titleFr: 'Techniques de Smokey Eye', duration: 60 },
          { title: 'Contouring and Highlighting', titleFr: 'Contour et Illumination', duration: 50 },
          { title: 'Bridal Makeup', titleFr: 'Maquillage de Mariée', duration: 70 },
        ],
      },
    ],
  },
  {
    id: 'skincare-specialist',
    title: 'Skincare Specialist Certification',
    titleFr: 'Certification de Spécialiste en Soins de la Peau',
    description: 'Understand skin biology, common conditions, and professional treatment protocols for different skin types.',
    descriptionFr: 'Comprenez la biologie de la peau, les conditions courantes et les protocoles de traitement professionnels pour différents types de peau.',
    thumbnail: 'https://images.pexels.com/photos/3762175/pexels-photo-3762175.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    price: 69,
    category: 'skincare',
    level: 'intermediate',
    duration: 8, // weeks
    language: ['en', 'fr'],
    rating: 4.7,
    studentsCount: 1122,
    instructor: {
      name: 'Dr. Aisha Johnson',
      avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      bio: 'Dermatologist with 10+ years of experience in clinical and cosmetic skincare.',
    },
    modules: [
      {
        title: 'Skin Biology',
        titleFr: 'Biologie de la Peau',
        lessons: [
          { title: 'Skin Structure and Function', titleFr: 'Structure et Fonction de la Peau', duration: 40 },
          { title: 'Skin Types and Analysis', titleFr: 'Types de Peau et Analyse', duration: 35 },
          { title: 'Common Skin Conditions', titleFr: 'Conditions Cutanées Courantes', duration: 45 },
        ],
      },
      {
        title: 'Professional Treatments',
        titleFr: 'Traitements Professionnels',
        lessons: [
          { title: 'Facial Techniques', titleFr: 'Techniques de Soin du Visage', duration: 60 },
          { title: 'Exfoliation Methods', titleFr: 'Méthodes d\'Exfoliation', duration: 50 },
          { title: 'Masks and Treatment Products', titleFr: 'Masques et Produits de Traitement', duration: 45 },
        ],
      },
      {
        title: 'Customized Skincare',
        titleFr: 'Soins Personnalisés',
        lessons: [
          { title: 'Ingredient Science', titleFr: 'Science des Ingrédients', duration: 55 },
          { title: 'Creating Skincare Routines', titleFr: 'Création de Routines de Soins', duration: 40 },
          { title: 'Anti-Aging Protocols', titleFr: 'Protocoles Anti-Âge', duration: 50 },
        ],
      },
    ],
  },
  {
    id: 'therapeutic-massage',
    title: 'Therapeutic Massage Foundations',
    titleFr: 'Fondements du Massage Thérapeutique',
    description: 'Learn essential massage techniques to relieve tension, improve circulation, and promote relaxation.',
    descriptionFr: 'Apprenez les techniques de massage essentielles pour soulager les tensions, améliorer la circulation et favoriser la relaxation.',
    thumbnail: 'https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    price: 79,
    category: 'massage',
    level: 'beginner',
    duration: 8, // weeks
    language: ['en', 'fr'],
    rating: 4.6,
    studentsCount: 789,
    instructor: {
      name: 'Michael Chang',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      bio: 'Licensed massage therapist with expertise in Swedish, deep tissue, and sports massage.',
    },
    modules: [
      {
        title: 'Massage Fundamentals',
        titleFr: 'Fondamentaux du Massage',
        lessons: [
          { title: 'Anatomy for Massage', titleFr: 'Anatomie pour le Massage', duration: 50 },
          { title: 'Client Assessment', titleFr: 'Évaluation du Client', duration: 30 },
          { title: 'Draping and Positioning', titleFr: 'Drapage et Positionnement', duration: 25 },
        ],
      },
      {
        title: 'Basic Techniques',
        titleFr: 'Techniques de Base',
        lessons: [
          { title: 'Swedish Massage Strokes', titleFr: 'Mouvements de Massage Suédois', duration: 60 },
          { title: 'Pressure and Rhythm', titleFr: 'Pression et Rythme', duration: 40 },
          { title: 'Full Body Sequence', titleFr: 'Séquence Corps Entier', duration: 70 },
        ],
      },
      {
        title: 'Specialized Applications',
        titleFr: 'Applications Spécialisées',
        lessons: [
          { title: 'Back and Neck Focus', titleFr: 'Focus Dos et Cou', duration: 55 },
          { title: 'Stress Relief Techniques', titleFr: 'Techniques Anti-Stress', duration: 45 },
          { title: 'Self-Care for Practitioners', titleFr: 'Auto-Soins pour Praticiens', duration: 30 },
        ],
      },
    ],
  },
  {
    id: 'complete-beauty-program',
    title: 'Complete Beauty Professional Program',
    titleFr: 'Programme Complet de Beauté Professionnelle',
    description: 'Comprehensive training in hair styling, makeup, skincare, nails, and business skills for beauty professionals.',
    descriptionFr: 'Formation complète en coiffure, maquillage, soins de la peau, ongles et compétences commerciales pour les professionnels de la beauté.',
    thumbnail: 'https://images.pexels.com/photos/3738366/pexels-photo-3738366.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    price: 89,
    category: 'allInOne',
    level: 'advanced',
    duration: 8, // weeks
    language: ['en', 'fr'],
    rating: 4.9,
    studentsCount: 2356,
    instructor: {
      name: 'Isabella Moreau',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      bio: 'Award-winning beauty educator with 20+ years in the industry and salon ownership experience.',
    },
    modules: [
      {
        title: 'Beauty Industry Foundations',
        titleFr: 'Fondements de l\'Industrie de la Beauté',
        lessons: [
          { title: 'Industry Overview', titleFr: 'Aperçu de l\'Industrie', duration: 30 },
          { title: 'Professional Ethics', titleFr: 'Éthique Professionnelle', duration: 25 },
          { title: 'Client Communication', titleFr: 'Communication avec les Clients', duration: 35 },
        ],
      },
      {
        title: 'Multi-Disciplinary Skills',
        titleFr: 'Compétences Multidisciplinaires',
        lessons: [
          { title: 'Hair Essentials', titleFr: 'Essentiels des Cheveux', duration: 60 },
          { title: 'Makeup Fundamentals', titleFr: 'Fondamentaux du Maquillage', duration: 55 },
          { title: 'Skincare Basics', titleFr: 'Bases des Soins de la Peau', duration: 50 },
          { title: 'Nail Care Introduction', titleFr: 'Introduction aux Soins des Ongles', duration: 45 },
        ],
      },
      {
        title: 'Advanced Techniques',
        titleFr: 'Techniques Avancées',
        lessons: [
          { title: 'Creative Coloring', titleFr: 'Coloration Créative', duration: 70 },
          { title: 'Editorial Makeup', titleFr: 'Maquillage Éditorial', duration: 65 },
          { title: 'Advanced Skin Treatments', titleFr: 'Traitements Cutanés Avancés', duration: 60 },
          { title: 'Nail Art Masterclass', titleFr: 'Masterclass d\'Art des Ongles', duration: 55 },
        ],
      },
      {
        title: 'Business Skills',
        titleFr: 'Compétences Commerciales',
        lessons: [
          { title: 'Building Your Brand', titleFr: 'Construire Votre Marque', duration: 40 },
          { title: 'Social Media Marketing', titleFr: 'Marketing sur les Réseaux Sociaux', duration: 45 },
          { title: 'Client Retention', titleFr: 'Fidélisation des Clients', duration: 35 },
          { title: 'Financial Management', titleFr: 'Gestion Financière', duration: 50 },
        ],
      },
    ],
  }
];

export const getCourseById = (id: string): Course | undefined => {
  return courses.find(course => course.id === id);
};

export const getCoursesByCategory = (category: string | null): Course[] => {
  if (!category) return courses;
  return courses.filter(course => course.category === category);
};

export const getCoursesByPriceRange = (min: number, max: number): Course[] => {
  return courses.filter(course => course.price >= min && course.price <= max);
};

export const searchCourses = (query: string): Course[] => {
  const lowercaseQuery = query.toLowerCase();
  return courses.filter(
    course => 
      course.title.toLowerCase().includes(lowercaseQuery) || 
      course.description.toLowerCase().includes(lowercaseQuery)
  );
};