---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
slug: /css/redondear-bordes-con-css/
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EIKC7GN%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T012110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEbNivhCxGvZl3q%2FQ0GrzIvNBrKPJovfFdbGXNj7lBmDAiA76E2yQbyArTS0ZqKHUZ5ZuCrAexM4MHHAK6sSxSDcyCr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMcxQWFrywPPUSlSnNKtwDEIg3ouTX13Z7%2BGpgnOI4c%2FcTz7VuBGs7kZRwqJkdO0ieWxg0%2FGwS9VfIX6m3HY4GLjhDUgZjE7ybPh1mZ%2F6PtrfYsQ%2BEmjZU0qFP6UVmWn2qu8WztpqnRy%2FVQhwDq2lsNPWDPpoBkreCO3%2ForvK1vq6rzr8DvhkymITQHwnkVTYZpBISOzkOed9Z%2B4OOvFDrXGsDIiArYB2hVd9DRAv7dxa0OqDOrb7IjxrloE7oImzZch5PjMYhYVwr5IsViMma5wLwsJptbXCkXBvo5acfDMIqLWwrP8CLM%2FPjSsOMS7th7tgqiCd8rjx7BQ18bQ%2FNWJOydUbHPe89ky4M8fqaczXWYaI4vB%2Bt30UeYu9jLvJlulCwrKxmiUaHBSDNlfzQ%2FwIFMLvcCfCfwJkmmFO971xflgtaKpHTZKmnNrXJy9LmzD6q%2BVmfNi1wepQbW%2FYT7rp1xDP1sh9VWz0jKmpSBQvetn%2Fa8MHXV9DBhiWc8LDLFQeQP2ABQOXU%2FeNmlOnx931t7bV7BZbOuOcnzn%2BmR9FmA3lZrGiMrUFWMSYcqLFWPC8RMiWb6GTcph9uzr9%2BH6ui3mM2YbeVQahT2u6hJhYWgfImgy4rQ9IbWx3NLrTLyuLknon4UQaDBsgw8ozIyQY6pgGLkOoOzvHYVel1r1Cdz9bTmSnvi%2BJo3W2fZoJWV4uTMj128fFp%2BeMDU4uyRHvvjP4%2BN0Qn7QbKzH6u7wXLWp78HwQxzvLEHEqu26u6LYQ6ZF8jTdaWqr8w7Tvllp9pFFUILEpVR2eBUsWNspkiFbIWSy%2FBaFgp%2BjIQ3RXmZFdvrWji4oMOVD%2B7CFmDXOnDuJFjM30qw%2F%2F2ePKPoTzMngS7OMsXy8Ry&X-Amz-Signature=9990c4ec76f7a958e6c513cf528b095ef4c999d0936a44e3593bdcd41bfff3af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EIKC7GN%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T012110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEbNivhCxGvZl3q%2FQ0GrzIvNBrKPJovfFdbGXNj7lBmDAiA76E2yQbyArTS0ZqKHUZ5ZuCrAexM4MHHAK6sSxSDcyCr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMcxQWFrywPPUSlSnNKtwDEIg3ouTX13Z7%2BGpgnOI4c%2FcTz7VuBGs7kZRwqJkdO0ieWxg0%2FGwS9VfIX6m3HY4GLjhDUgZjE7ybPh1mZ%2F6PtrfYsQ%2BEmjZU0qFP6UVmWn2qu8WztpqnRy%2FVQhwDq2lsNPWDPpoBkreCO3%2ForvK1vq6rzr8DvhkymITQHwnkVTYZpBISOzkOed9Z%2B4OOvFDrXGsDIiArYB2hVd9DRAv7dxa0OqDOrb7IjxrloE7oImzZch5PjMYhYVwr5IsViMma5wLwsJptbXCkXBvo5acfDMIqLWwrP8CLM%2FPjSsOMS7th7tgqiCd8rjx7BQ18bQ%2FNWJOydUbHPe89ky4M8fqaczXWYaI4vB%2Bt30UeYu9jLvJlulCwrKxmiUaHBSDNlfzQ%2FwIFMLvcCfCfwJkmmFO971xflgtaKpHTZKmnNrXJy9LmzD6q%2BVmfNi1wepQbW%2FYT7rp1xDP1sh9VWz0jKmpSBQvetn%2Fa8MHXV9DBhiWc8LDLFQeQP2ABQOXU%2FeNmlOnx931t7bV7BZbOuOcnzn%2BmR9FmA3lZrGiMrUFWMSYcqLFWPC8RMiWb6GTcph9uzr9%2BH6ui3mM2YbeVQahT2u6hJhYWgfImgy4rQ9IbWx3NLrTLyuLknon4UQaDBsgw8ozIyQY6pgGLkOoOzvHYVel1r1Cdz9bTmSnvi%2BJo3W2fZoJWV4uTMj128fFp%2BeMDU4uyRHvvjP4%2BN0Qn7QbKzH6u7wXLWp78HwQxzvLEHEqu26u6LYQ6ZF8jTdaWqr8w7Tvllp9pFFUILEpVR2eBUsWNspkiFbIWSy%2FBaFgp%2BjIQ3RXmZFdvrWji4oMOVD%2B7CFmDXOnDuJFjM30qw%2F%2F2ePKPoTzMngS7OMsXy8Ry&X-Amz-Signature=b661295f25f7b4cdbe57bd25ada3b3b2193c8bf68e442b75de8790c96cbf65c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Si queremos modificar los dos radios de todas las esquinas podemos utilizar la versión reducida de [`border-radius`](https://w3api.com/CSS/border-radius/):


```text
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


```text
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
