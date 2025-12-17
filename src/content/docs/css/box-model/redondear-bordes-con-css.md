---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2025-12-17
slug: css/redondear-bordes-con-css
author: victor_cuervo
---

Gracias a [CSS3](https://www.manualweb.net/css/) podemos redondear los bordes de los elementos. Y es que para redondear bordes con [CSS3](https://www.manualweb.net/css/) utilizaremos la propiedad [`border-radius`](https://w3api.com/CSS/border-radius/).


La sintaxis general de la propiedad [`border-radius`](https://w3api.com/CSS/border-radius/) es la siguiente:


```css
border-radius: [tamaño|porcentaje];
```


De esta forma podemos indicar **el tamaño o porcentaje** en el que se redondeará cada una de las esquinas de la capa. El valor corresponde con el radio de la circunferencia trazada en la esquina.


Así, si utilizamos:


```css
border-radius: 15px;
```


Veremos el siguiente resultado:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YK52GUPK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T014120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH0Ww0D%2FYuNcWGQc0rTeKzwqStKcS2ZMW%2FJ16bIN9CNoAiB5ZaVN1A1G%2FbsqpiIU5Wzwpihg%2Fbn2qFVaRtTn4sDcfyr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMUYHZk1KRfFZfOe2iKtwDWHMWn7PhX51APHMzHSiQhCrrBteEqW9XayuvgVomh2czk7LVXAZpQP9nmOU4kH7FCrRYcQd8%2F3DDHdBiBcAsjpws3doypbspiQaojzuDZZlWHhSKXNdrdiQ0mzWfXtk67lsdbwjPnOn5BJ2swk3pDL9j5nOP9vzf4186sM9eDcFbyIZEx6WW5ufw0uwvZoqU2dBHJdd1jPMMnAswH%2BsPBYlz%2BQa7cEiZhoyz1enaBXR3JVjm9DuFMZJQvYnIQGZOEMH7mW77csbm1d%2BPfG859SX3PeRmVYzYwftglBD%2FTaAIMZ%2BoYbCqjxbFhjGLFY2%2BnsqJoVptKzCI7kbEfkQlACcbrbXJr9OYAq1NE746ueQ1jPcN1TH1EPZYCcbcvtzLvEdBWvL1M8KyZUFBpeIuj17eLS8zea6YR2llNOram7f4qTrsFPntufDUJvzZfmakgeCJydWhy0qB20%2BuwCu01cX0uAqpRKQCqExT3dPN2bdYSpM1lWtUMcaqMM1rmwZKJJRumxpWt8xoRRUD91Ugwd1kIRvM4bsPEYvqxnU2%2BNeb8oZLxvCuGgmQuxVv2o1W0AvdFgfIAAQQ%2FKEe3tHAzIrqJKGwHNmHh%2BmI2jdBqcuRxlFe8fTpQ9TtTokwq%2FqHygY6pgFx3YEhL0yC0o4wYaPzaj6ZE8XwOK%2BjJ3lTGC6M4STNOlcJ32cL6bPAaQ%2BGUl2tGyy%2FPhLy87%2Fsk6SNZ8qguEL85NQMBeCV7cn8USutPc%2Fxl0Wdv0Z%2BzKOHEAlP6ssrLL9VOZdsnRrH7pxsFXcUTjjWP6ImZmuX2daGYj5ai2LhgDjuZ9wDPHnh6x8zS15mLqDh2hXe4DAVKLCJ4A4cOt5BTy73r3n3&X-Amz-Signature=7fd2c101af95a0294ecff7d922c0c39abf2dfd777b63de74a6be9dfe54677907&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Podemos especificar un radio para cada una de las esquinas. En este caso se aplicará el orden de las agujas del reloj, empezado por la esquina superior izquierda, siguiendo por la esquina superior derecha, esquina inferior derecha y esquina inferior izquierda.


```css
border-radius: 5px 30px 45px 60px;
```


Si bien tenemos la capacidad de indicar el tamaño de cada de las esquinas por separado mediante las propiedades: border-top-left-radius, border-bottom-left-radius, border-top-right-radius y border-bottom-right-radius.


```css
border-top-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
border-bottom-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
border-top-right-radius: [tamaño|porcentaje] [tamaño|porcentaje];
border-bottom-right-radius: [tamaño|porcentaje] [tamaño|porcentaje;
```


Cuando identificamos los radios de las esquinas por separado podemos indicar de forma diferente los dos radios que conforman la esquina. Por ejemplo, podríamos modificar la esquina superior izquierda de la siguiente forma:


```css
border-top-left-radius: 400px 200px;
```


Y obtendremos el siguiente resultado:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YK52GUPK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T014120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH0Ww0D%2FYuNcWGQc0rTeKzwqStKcS2ZMW%2FJ16bIN9CNoAiB5ZaVN1A1G%2FbsqpiIU5Wzwpihg%2Fbn2qFVaRtTn4sDcfyr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMUYHZk1KRfFZfOe2iKtwDWHMWn7PhX51APHMzHSiQhCrrBteEqW9XayuvgVomh2czk7LVXAZpQP9nmOU4kH7FCrRYcQd8%2F3DDHdBiBcAsjpws3doypbspiQaojzuDZZlWHhSKXNdrdiQ0mzWfXtk67lsdbwjPnOn5BJ2swk3pDL9j5nOP9vzf4186sM9eDcFbyIZEx6WW5ufw0uwvZoqU2dBHJdd1jPMMnAswH%2BsPBYlz%2BQa7cEiZhoyz1enaBXR3JVjm9DuFMZJQvYnIQGZOEMH7mW77csbm1d%2BPfG859SX3PeRmVYzYwftglBD%2FTaAIMZ%2BoYbCqjxbFhjGLFY2%2BnsqJoVptKzCI7kbEfkQlACcbrbXJr9OYAq1NE746ueQ1jPcN1TH1EPZYCcbcvtzLvEdBWvL1M8KyZUFBpeIuj17eLS8zea6YR2llNOram7f4qTrsFPntufDUJvzZfmakgeCJydWhy0qB20%2BuwCu01cX0uAqpRKQCqExT3dPN2bdYSpM1lWtUMcaqMM1rmwZKJJRumxpWt8xoRRUD91Ugwd1kIRvM4bsPEYvqxnU2%2BNeb8oZLxvCuGgmQuxVv2o1W0AvdFgfIAAQQ%2FKEe3tHAzIrqJKGwHNmHh%2BmI2jdBqcuRxlFe8fTpQ9TtTokwq%2FqHygY6pgFx3YEhL0yC0o4wYaPzaj6ZE8XwOK%2BjJ3lTGC6M4STNOlcJ32cL6bPAaQ%2BGUl2tGyy%2FPhLy87%2Fsk6SNZ8qguEL85NQMBeCV7cn8USutPc%2Fxl0Wdv0Z%2BzKOHEAlP6ssrLL9VOZdsnRrH7pxsFXcUTjjWP6ImZmuX2daGYj5ai2LhgDjuZ9wDPHnh6x8zS15mLqDh2hXe4DAVKLCJ4A4cOt5BTy73r3n3&X-Amz-Signature=0b04d1befcce4e7e7ec358763dac3101ab917110a00db792f15190f35dff7968&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Si queremos modificar los dos radios de todas las esquinas podemos utilizar la versión reducida de [`border-radius`](https://w3api.com/CSS/border-radius/):


```css
border-radius: [tamaño|porcentaje] {1,4} [tamaño|porcentaje] {1,4};
```


Por último tenemos que ser conscientes del soporte de la propiedad [`border-radius`](https://w3api.com/CSS/border-radius/) de [CSS3](https://www.manualweb.net/css/). Ya que no todos los navegadores van a poder ejecutarla. En esos casos, los bordes que hayamos redondeado no se verán.


La implementación de [`border-radius`](https://w3api.com/CSS/border-radius/) que hemos visto es la de la [W3C](https://w3.org/). Hay implementaciones propietarias en los motores de renderizado de los browsers. Este es el caso de [Mozilla Firefox](https://www.ayudaenlaweb.com/navegadores/que-es-firefox/). Dónde las propiedades para redondear los borders con [CSS](https://www.manualweb.net/css/) están especificadas como:


```css
-moz-border-radius: [tamaño|porcentaje];
-moz-border-top-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-moz-border-bottom-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-moz-border-top-right-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-moz-border-bottom-right-radius: [tamaño|porcentaje] [tamaño|porcentaje;
```


En el caso de Webkit (sería, por ejemplo, para versiones antiguas de [Safari](https://ayudaenlaweb.com/navegadores/que-es-safari/)) se soportaba mediante el prefijo `-webkit`:


```css
-webkit-border-radius: [tamaño|porcentaje];
-webkit-border-top-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-webkit-border-bottom-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-webkit-border-top-right-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-webkit-border-bottom-right-radius: [tamaño|porcentaje] [tamaño|porcentaje;
```


Por lo cual, si queremos buscar compatibilidad con nuestros ejemplos anteriores podemos poner lo siguiente:


```css
border-radius: 15px;
-moz-border-radius: 15px;
-webkit-border-radius: 15px;
```


```css
border-radius: 5px 30px 45px 60px;
-moz-border-radius: 5px 30px 45px 60px;
-webkit-border-radius: 15px;
```


```css
border-top-left-radius: 400px 200px;
-moz-border-top-left-radius: 400px 200px;
-webkit-border-radius: 15px;
```


Los navegadores a partir de los cuales se empezó a dar soporte a [`border-radius`](https://w3api.com/CSS/border-radius/) son:

- [Chrome](https://ayudaenlaweb.com/navegadores/que-es-chrome/) 0.2 (con -webkit) y [Chrome](https://ayudaenlaweb.com/navegadores/que-es-chrome/) 4.0 (con el estándar)
- [Opera](https://ayudaenlaweb.com/navegadores/que-es-opera/) 10.5
- [Safari](https://ayudaenlaweb.com/navegadores/que-es-safari/) 3.0 (con -webkit) y [Safari](https://ayudaenlaweb.com/navegadores/que-es-safari/) 5.0 (con el estándar)
- [Firefox](https://www.ayudaenlaweb.com/navegadores/que-es-firefox/) 1.0 (con -moz) y [Firefox](https://www.ayudaenlaweb.com/navegadores/que-es-firefox/) 4.0 (con el estándar)
- [Internet Explorer](https://ayudaenlaweb.com/navegadores/que-es-internet-explorer/) 9
