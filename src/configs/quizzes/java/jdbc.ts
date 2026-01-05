import type { Quiz } from '../types';

const jdbc: Quiz = {
  topic: 'JDBC en Java',
  question: '¿Qué clase se utiliza para conectarse a una base de datos en JDBC?',
  answers: [
    'DatabaseConnection',
    'DriverManager',
    'ConnectionFactory',
    'DBConnect'
  ],
  correctIndex: 1,
  ctaUrl: 'https://www.testprogramacion.com/java/'
};

export default jdbc;
