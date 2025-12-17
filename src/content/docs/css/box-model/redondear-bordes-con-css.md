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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDZWH4FF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T212724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD1NMKkL7Wj8e1G6Gw00nX7jcyUsr3GOcXX2zdz9tQGugIhANdGG2nnCg4V2Ld%2FR32deCabOdydF2zWSpOy2c%2FP%2Fnu1KogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxH0hMsm%2FMBFQJZXYgq3AMyS8dk8bgtnVzp%2Fl1uLxhPwRPXVUI6w39QFIl4cXge4J5dlH%2F3zhocqUJyHzMqRAuXu6LkBaOUcyfqLTuswltOH0ylluJu2b1Oj1PxVPF%2F5HRyaikOvJYL8u00jmkwrN5ThMWxOJ4CPM5cZQ%2BfMrHs882q11IQ4wsciiDWIIHlLzk0fYQnhKqrazGD1Dgz0DResjGwRe99upqv2nnEw1l%2FwGu%2F%2Fui9kuyCpIytxRgDpynRXZPySPxAeWYYvp3BiJUkofP5kYKZ4A1DvBKzHbXbt9lq4K94U5VXELWNbka3g9%2BPA9zsxBEmAbp7nW9bkw7jnFIerpr5MbVrOkZreGs8NRICGj4aRWAskGnUD08mFGOyCD0rCg76qXkENNH6657hoCWcS9x%2FUClArnrJfp7optRzCPT3aOJC4sZGE7DT0C0S6mScKSfcJ3aeZ0Pln64Bda1dEG8thkI8SLMaILoxkBfDCu4wo8j5tOmiOc7IQsNTKEW14EQY%2B60GVxDMFMoZtMerFfE1iMlmjICkS0Z5OZRFmMGqifuJ3YG3QSfkgmdLrqtg%2F61ddnAl4X8h3YG8A8SWjDEvTKR7e2Tn01%2BF%2Fw5ethAZBwonla4V0thuS0q6Ul3Fg85Dbb6ZdDC%2FrozKBjqkAaPCSXz7YNX7isVciGa0aRE43TCX1rgRFac75%2FgtMvhceBPXUU2fkJ79T0sIwJtRMwrqeu8w4DbY4GPNXtHCMi7JJgGZE%2BpPf7I2TdpZVwvJM95O5HZi6tPrLH4%2BbruuewzLn7SELB6x1zq7e6bjADjmQsQGwU02V8qP3o5%2FaGC%2FSKcKF4vqBxA130lYo%2F0nS17tAMtafoqJIkx5CW202eA6c8a%2F&X-Amz-Signature=bcee36f71b90b3bfa3219609745a64a4dfc934d9fb7fc40e8fb7fae9646a3aaa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDZWH4FF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T212724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD1NMKkL7Wj8e1G6Gw00nX7jcyUsr3GOcXX2zdz9tQGugIhANdGG2nnCg4V2Ld%2FR32deCabOdydF2zWSpOy2c%2FP%2Fnu1KogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxH0hMsm%2FMBFQJZXYgq3AMyS8dk8bgtnVzp%2Fl1uLxhPwRPXVUI6w39QFIl4cXge4J5dlH%2F3zhocqUJyHzMqRAuXu6LkBaOUcyfqLTuswltOH0ylluJu2b1Oj1PxVPF%2F5HRyaikOvJYL8u00jmkwrN5ThMWxOJ4CPM5cZQ%2BfMrHs882q11IQ4wsciiDWIIHlLzk0fYQnhKqrazGD1Dgz0DResjGwRe99upqv2nnEw1l%2FwGu%2F%2Fui9kuyCpIytxRgDpynRXZPySPxAeWYYvp3BiJUkofP5kYKZ4A1DvBKzHbXbt9lq4K94U5VXELWNbka3g9%2BPA9zsxBEmAbp7nW9bkw7jnFIerpr5MbVrOkZreGs8NRICGj4aRWAskGnUD08mFGOyCD0rCg76qXkENNH6657hoCWcS9x%2FUClArnrJfp7optRzCPT3aOJC4sZGE7DT0C0S6mScKSfcJ3aeZ0Pln64Bda1dEG8thkI8SLMaILoxkBfDCu4wo8j5tOmiOc7IQsNTKEW14EQY%2B60GVxDMFMoZtMerFfE1iMlmjICkS0Z5OZRFmMGqifuJ3YG3QSfkgmdLrqtg%2F61ddnAl4X8h3YG8A8SWjDEvTKR7e2Tn01%2BF%2Fw5ethAZBwonla4V0thuS0q6Ul3Fg85Dbb6ZdDC%2FrozKBjqkAaPCSXz7YNX7isVciGa0aRE43TCX1rgRFac75%2FgtMvhceBPXUU2fkJ79T0sIwJtRMwrqeu8w4DbY4GPNXtHCMi7JJgGZE%2BpPf7I2TdpZVwvJM95O5HZi6tPrLH4%2BbruuewzLn7SELB6x1zq7e6bjADjmQsQGwU02V8qP3o5%2FaGC%2FSKcKF4vqBxA130lYo%2F0nS17tAMtafoqJIkx5CW202eA6c8a%2F&X-Amz-Signature=54eb7324d169d8ab5f174d18e53b003543bebe955cddb5560c292f527b65c7bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
