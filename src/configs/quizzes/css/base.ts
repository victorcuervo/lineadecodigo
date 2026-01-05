import type { Quiz } from '../types';

const base: Quiz = {
  topic: 'CSS',
  question: '¿Qué propiedad de CSS se utiliza para cambiar el color del texto?',
  answers: [
    'font-color',
    'text-color',
    'color',
    'foreground'
  ],
  correctIndex: 2,
  ctaUrl: 'https://www.testprogramacion.com/css/'
};

export default base;
