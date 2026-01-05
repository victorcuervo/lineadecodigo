import type { Quiz } from '../types';

const arraysInitialization: Quiz = {
  topic: 'Arrays en Java',
  question: '¿Cuál de las siguientes opciones inicializa correctamente un array de String con 3 elementos?',
  answers: [
    'String[] nombres = {"Ana", "Luis", "Carlos"};',
    'String nombres[] = new String[3] {"Ana", "Luis", "Carlos"};',
    'String nombres = ["Ana", "Luis", "Carlos"];',
    'String[] nombres = new String(3);'
  ],
  correctIndex: 0,
  ctaUrl: 'https://www.testprogramacion.com/java/'
};

export default arraysInitialization;