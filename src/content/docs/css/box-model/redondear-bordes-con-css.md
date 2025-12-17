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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7EIVDZ3%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T171045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDg%2BRmQOFyL%2F7TOQnGPEzISPcfvAF7CmtHNkRxpIWUW8AiEAg9R6Mn45e7XOd1IM13nVyqvIK2hupDde1TJqYs28srMqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM3EjaDP%2Fu2QczWGLCrcAzx39rbiik27o42CAT3i75UtXF6WVoJG19aeAn1wL4Lcx6rnbgoaPWzum0GixWDxmW%2BaIAAR3nSm7tfC3pFcS8E0R%2FWyetghBkhELpgD9LE58bCp4cgvFpplEsNcjjrHLNbVtfT%2BDAS7uwJDiFrJGAyO0hYAlQt3j7PTI02gB%2BPWsg7p%2BzE%2Blm%2Frg0QsYG0DaUQNbk%2BP1iWUsEA88VXtSfsiQo3TBlkfM%2Fc1vMrcDO8Eqxn6Fyx0JTgTZ8vEbWrg8kVZRsqTJWUFkztaw40kd%2BqTjidLwUYMbA7uQ5TqgEXPoGbDMji0cGGqvyTkH9h7PxIovExV0d0Ly7ymSdTtx%2Bvpd9eI6vwTGx%2BYo2Qgp%2Fur0tpybhJXkNdwonZmilOrhR8XKgvuRmM%2FSqltMLqNzcdYLBUD4Hm%2FYcShdkIExB%2BAqMk5ksdH2Vp2gx6EcCZ9AVblwErWsFZV66GpXa5%2FCk88u7tK8l0oAbgNiL1XVWLheivD1tHU1iUydkEh1UANezchaONQ6DIcR6jOqIJE%2FpCaJxcdT91iRokVgetkU8HAiPoDeVbgfQ45GigZM5zsSlA2z4Lc1JUf%2FguOrndTKItOf%2FpJijtM%2Bzcf1bgk5K8aBFf1CxhEYCj%2FmY8bMNGfi8oGOqUBKvcA4Nj7LgAFCabwscrMpqCLggkLJk53XRGo%2Bf4X9wNr5nFjKxHpGnBIfJfMTifAor49viUw%2BqWbyKiLj3k%2BhSZLLB6Zg3%2B8x49DAno3dWuV7C3EhR3TbyIyD7EeDyEMsoUBOBqE0aVQxjaEIXEH1IKxqwFuQpvulUl8aeGar37mUUsDV6kC5jHCRdIV0drbNh4FaHkicxNUP4lSzcjzASyB2yX0&X-Amz-Signature=e3188b2cfc58ed9fedbe0a46a49defa6d1930197ce085fc60008239852d36260&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7EIVDZ3%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T171045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDg%2BRmQOFyL%2F7TOQnGPEzISPcfvAF7CmtHNkRxpIWUW8AiEAg9R6Mn45e7XOd1IM13nVyqvIK2hupDde1TJqYs28srMqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM3EjaDP%2Fu2QczWGLCrcAzx39rbiik27o42CAT3i75UtXF6WVoJG19aeAn1wL4Lcx6rnbgoaPWzum0GixWDxmW%2BaIAAR3nSm7tfC3pFcS8E0R%2FWyetghBkhELpgD9LE58bCp4cgvFpplEsNcjjrHLNbVtfT%2BDAS7uwJDiFrJGAyO0hYAlQt3j7PTI02gB%2BPWsg7p%2BzE%2Blm%2Frg0QsYG0DaUQNbk%2BP1iWUsEA88VXtSfsiQo3TBlkfM%2Fc1vMrcDO8Eqxn6Fyx0JTgTZ8vEbWrg8kVZRsqTJWUFkztaw40kd%2BqTjidLwUYMbA7uQ5TqgEXPoGbDMji0cGGqvyTkH9h7PxIovExV0d0Ly7ymSdTtx%2Bvpd9eI6vwTGx%2BYo2Qgp%2Fur0tpybhJXkNdwonZmilOrhR8XKgvuRmM%2FSqltMLqNzcdYLBUD4Hm%2FYcShdkIExB%2BAqMk5ksdH2Vp2gx6EcCZ9AVblwErWsFZV66GpXa5%2FCk88u7tK8l0oAbgNiL1XVWLheivD1tHU1iUydkEh1UANezchaONQ6DIcR6jOqIJE%2FpCaJxcdT91iRokVgetkU8HAiPoDeVbgfQ45GigZM5zsSlA2z4Lc1JUf%2FguOrndTKItOf%2FpJijtM%2Bzcf1bgk5K8aBFf1CxhEYCj%2FmY8bMNGfi8oGOqUBKvcA4Nj7LgAFCabwscrMpqCLggkLJk53XRGo%2Bf4X9wNr5nFjKxHpGnBIfJfMTifAor49viUw%2BqWbyKiLj3k%2BhSZLLB6Zg3%2B8x49DAno3dWuV7C3EhR3TbyIyD7EeDyEMsoUBOBqE0aVQxjaEIXEH1IKxqwFuQpvulUl8aeGar37mUUsDV6kC5jHCRdIV0drbNh4FaHkicxNUP4lSzcjzASyB2yX0&X-Amz-Signature=eb19b03e2a30d1ee1045079af44b86f9834bd132ca1058da3f47afd755fa8ccf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
