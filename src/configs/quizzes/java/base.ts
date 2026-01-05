import type { Quiz } from '../types';

const base: Quiz = {
  topic: 'Java',
  question: '¿Cuál de los siguientes conceptos es fundamental en la programación orientada a objetos en Java?',
  answers: [
    'Compilación',
    'Encapsulamiento',
    'Interpretación',
    'Serialización'
  ],
  correctIndex: 1,
  ctaUrl: 'https://www.testprogramacion.com/java/'
};

export default base;