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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QAFD3HQ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T123817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMq8YIFq11buPWWJ8s383ZaAhMQKcWGksOm7XxOp48OwIhAMA8%2FboIXXqLHu%2FdBGVrqjCS%2FT8qb1Nawi0LUnUTiwUAKv8DCH4QABoMNjM3NDIzMTgzODA1IgyFog8RsAEN4RRecLYq3APGHZAqk%2BgzIzCe94vvHXJ6K%2FAOkKFAKwZ8d9KBaUwwdrispAW%2F42MczoANkeYOAs7yfNBEwlYEaLpqd5bFy6QgMUHs4ANk59ziw%2B6WNg2Z4YcU%2FlMwBGbghowOfhn2Xs8uE0GZ9eNNt%2B5nKJbb57I4AB1vzrdscueIX1Ea3D1ke37zsyBL52iPIjf3nfEj3pYdnfY%2BA19qwvs6qYGNs45aTOAycpQeKW9Z7wiS0B20ZX3CA5gWKo30DSdP8GkL2KC0OKnKfKR3XUL3HvtyGIK9q4OSvCdl%2FcRz8md5dimu7usKCcjNm2wh%2FjkIgm9iB1MI8wJKPmoPNrtjHBKkK6nKG6Ih41Q8y83Gp2qlKhiDgCxfKnpWkmru88EdSgDBgM5VXBMxXRbNZj%2FAps%2FJjW4tmnVj8DzW5OHqu9YyokemySxDX0y2Iz6CKoATIa8EKXrAWzN2q9gy3eZbnXj2KX9iSdu%2BEauw5COuU9DBLb%2FSP9HY6qCP7CAuep%2BhpEOKX%2BZTlHB8ryUFgMbWLCyLaU%2BKhgcmCyZB9LY6C61s2EzW51slOdTBzN38VAZN6edKauYbsjsd6zmCO5nI6sGntEDGnoftEJi4lhClkBEI2ig3ILt1LEqOayKd79zGiTDqxYrKBjqkAW9WdySxi1zPlwM6Gj5o3Fii1%2F6j%2FYXfK9HTXC0ogQ2j6vehUieG%2F%2BRiq%2FxqMruzcMGmetwoYsuiax45dQXUdqtexwHDlAHNH9fPrlrztP%2FQKAKze9ntdMDi3MLt37xJ2aItMEXAD4vhpq0uatCmVH2jlSlKWkt0tuqfKLh0MZDFody5Whjak6FYztWkzBGisaqVdR1DH%2BNr1WDrZN8H9ga4CyA6&X-Amz-Signature=1650ed0fe12164e58b08c7651824c018dd73eac7d5f3df09e4b4f6891a5e6733&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QAFD3HQ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T123817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMq8YIFq11buPWWJ8s383ZaAhMQKcWGksOm7XxOp48OwIhAMA8%2FboIXXqLHu%2FdBGVrqjCS%2FT8qb1Nawi0LUnUTiwUAKv8DCH4QABoMNjM3NDIzMTgzODA1IgyFog8RsAEN4RRecLYq3APGHZAqk%2BgzIzCe94vvHXJ6K%2FAOkKFAKwZ8d9KBaUwwdrispAW%2F42MczoANkeYOAs7yfNBEwlYEaLpqd5bFy6QgMUHs4ANk59ziw%2B6WNg2Z4YcU%2FlMwBGbghowOfhn2Xs8uE0GZ9eNNt%2B5nKJbb57I4AB1vzrdscueIX1Ea3D1ke37zsyBL52iPIjf3nfEj3pYdnfY%2BA19qwvs6qYGNs45aTOAycpQeKW9Z7wiS0B20ZX3CA5gWKo30DSdP8GkL2KC0OKnKfKR3XUL3HvtyGIK9q4OSvCdl%2FcRz8md5dimu7usKCcjNm2wh%2FjkIgm9iB1MI8wJKPmoPNrtjHBKkK6nKG6Ih41Q8y83Gp2qlKhiDgCxfKnpWkmru88EdSgDBgM5VXBMxXRbNZj%2FAps%2FJjW4tmnVj8DzW5OHqu9YyokemySxDX0y2Iz6CKoATIa8EKXrAWzN2q9gy3eZbnXj2KX9iSdu%2BEauw5COuU9DBLb%2FSP9HY6qCP7CAuep%2BhpEOKX%2BZTlHB8ryUFgMbWLCyLaU%2BKhgcmCyZB9LY6C61s2EzW51slOdTBzN38VAZN6edKauYbsjsd6zmCO5nI6sGntEDGnoftEJi4lhClkBEI2ig3ILt1LEqOayKd79zGiTDqxYrKBjqkAW9WdySxi1zPlwM6Gj5o3Fii1%2F6j%2FYXfK9HTXC0ogQ2j6vehUieG%2F%2BRiq%2FxqMruzcMGmetwoYsuiax45dQXUdqtexwHDlAHNH9fPrlrztP%2FQKAKze9ntdMDi3MLt37xJ2aItMEXAD4vhpq0uatCmVH2jlSlKWkt0tuqfKLh0MZDFody5Whjak6FYztWkzBGisaqVdR1DH%2BNr1WDrZN8H9ga4CyA6&X-Amz-Signature=f9d9099f9d35bb5db3330d0af02f9cef8a4c0de335a61883e4919a6a1fef9143&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
