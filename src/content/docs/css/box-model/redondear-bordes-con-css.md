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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUNIKAE2%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T075102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHUPHVyN8Un%2BUJUkuay10ldzeLPzzexiACXeEhtxfnHBAiEAgU1FCJZN1GD3Iyyskc%2BGgyKcDJcpzVNlpTHH9TLfdawq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDMT0s7aCh3Vtf8v%2BuCrcA6aQ44a0xCum6arKvnBravjqLgBAC5lDAGXk94VqspCD%2B2j4eXpWcC2pjl7mYECYIo783eulicnuP4gKenKU04zyujtLeg3U%2FNuEqPTwwhEFAoMMCNjPI7h32iWWxZqvyYdqe3CqmQ1%2B8CF2T8xLdcOLTa2i0qVnVawJPQo5JWuK%2Fo5H8PWFUsTh2YQxvB9gmqMXwSmFZqT8zf9vbMeuVJHISTMKcznwTXXVFR3Ce9IH2xuYUZEfa0PUnESwm2m43%2FIYKDBIzijbxcGQXPtJ4dyackfVMWyBNXuaedWPQyGKC80hZgmIkYAXnXs04qKiwCZz2CrKPG1nR0Bh25GKaF9cq2uEnvs%2FPwJTzUTvMIOkEX86V%2BBbMLKkYxKZJUngsXEvmOJxknHidr2IY1TW8VPdm1gfuejookq1T8czET4pL%2BIk68U7MbVGU9V%2B%2F%2B4gtwIcx5pE%2F6dGgOMDAvlGydDIBEToKb3r9l8zTsIM4hhJJ0mhKaLPlZALJSGPXF%2BhbCQCbu4mNvUFzzt4oIbJL6LRMLw2SLr3uVm2L4aEJah3r9oUDURrUApqLNV9cD6k8D0%2BaudVNm3S6b5ULEfUFam1zvRcYcYJGy0o%2FYRztViEUxtCCIH83ljSs8wrMMm3icoGOqUBxU%2BntQS%2BEMgka7ukmyywRhn3ndM2umeXj1ZbAZwnAibHNkeqa5nGy8AJrW0EcVNHSb%2Bh1vBCQW2wwVUOPmUO8ZEm%2BbWYYdZ6b25zEPmXAZYm9N%2BCbmGlwmIJL4dh4Ud5jVD5LmyRjUamnr2ZU3m%2Fexx1G9ttG9GkLuPFuFZUHIqlOmW07OOmaui01oELCVF%2Ffq69G6dZUOw2Jnb2kDEr4y8D8tru&X-Amz-Signature=cc51a8a64a2e84e835a149ac755e175575d9690f82913cca358c5875994623c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUNIKAE2%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T075102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHUPHVyN8Un%2BUJUkuay10ldzeLPzzexiACXeEhtxfnHBAiEAgU1FCJZN1GD3Iyyskc%2BGgyKcDJcpzVNlpTHH9TLfdawq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDMT0s7aCh3Vtf8v%2BuCrcA6aQ44a0xCum6arKvnBravjqLgBAC5lDAGXk94VqspCD%2B2j4eXpWcC2pjl7mYECYIo783eulicnuP4gKenKU04zyujtLeg3U%2FNuEqPTwwhEFAoMMCNjPI7h32iWWxZqvyYdqe3CqmQ1%2B8CF2T8xLdcOLTa2i0qVnVawJPQo5JWuK%2Fo5H8PWFUsTh2YQxvB9gmqMXwSmFZqT8zf9vbMeuVJHISTMKcznwTXXVFR3Ce9IH2xuYUZEfa0PUnESwm2m43%2FIYKDBIzijbxcGQXPtJ4dyackfVMWyBNXuaedWPQyGKC80hZgmIkYAXnXs04qKiwCZz2CrKPG1nR0Bh25GKaF9cq2uEnvs%2FPwJTzUTvMIOkEX86V%2BBbMLKkYxKZJUngsXEvmOJxknHidr2IY1TW8VPdm1gfuejookq1T8czET4pL%2BIk68U7MbVGU9V%2B%2F%2B4gtwIcx5pE%2F6dGgOMDAvlGydDIBEToKb3r9l8zTsIM4hhJJ0mhKaLPlZALJSGPXF%2BhbCQCbu4mNvUFzzt4oIbJL6LRMLw2SLr3uVm2L4aEJah3r9oUDURrUApqLNV9cD6k8D0%2BaudVNm3S6b5ULEfUFam1zvRcYcYJGy0o%2FYRztViEUxtCCIH83ljSs8wrMMm3icoGOqUBxU%2BntQS%2BEMgka7ukmyywRhn3ndM2umeXj1ZbAZwnAibHNkeqa5nGy8AJrW0EcVNHSb%2Bh1vBCQW2wwVUOPmUO8ZEm%2BbWYYdZ6b25zEPmXAZYm9N%2BCbmGlwmIJL4dh4Ud5jVD5LmyRjUamnr2ZU3m%2Fexx1G9ttG9GkLuPFuFZUHIqlOmW07OOmaui01oELCVF%2Ffq69G6dZUOw2Jnb2kDEr4y8D8tru&X-Amz-Signature=fc4ab887f6051875ad86030d07cc2e4c2235249ed3b832f307a1e008ef0f2aae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
