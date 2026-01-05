import type { Quiz } from '../types';

const base: Quiz = {
  topic: 'HTML',
  question: '¿Qué etiqueta HTML se utiliza para crear un enlace?',
  answers: [
    '<link>',
    '<a>',
    '<href>',
    '<url>'
  ],
  correctIndex: 1,
  ctaUrl: 'https://www.testprogramacion.com/html/'
};

export default base;