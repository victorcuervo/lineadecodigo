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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OUI4I5Z%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T035025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID2vRvl88EghWv83aiW5MuQyGxP1iKlYsJgureduO86uAiBBvIe22HJvUThhc9omrj1Hb%2Bv1FfhKIvaiO0mVC9jtkCr%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMphDjB9zHvdaWHwUPKtwDV1%2BN6ObIFVtWvEaD%2FUyZ8meXvjfv365JW7sII4bLkl0Y8LszGaqvewYnfFdnhcXtDiuL4bwZNpSDaNeQs0qgbYgIiEQw8Y%2F8Y0ENJ9rbUwixHzKAJCgAFmeMXzvwk135WOylgCkkObmaVoEV4NMtu4Z3QOq7MHkDpaEvyXh74VYCkLGYsi%2F2QS2ULMnKzLSlGlk34VQEuFdL2Hri%2Fh2GBZrGyfTpVHMTgWD8K5ujkD8JnP5hRnPPL%2FSagUAIm7Pus2rwbYJfxXyT%2BFOmvi4AFPfC2%2BeVuset8BQzGNk44QkXTZWrSAuTJZoPNCiIE2OAREVl%2B1YAme7kqqrqZOd7NHdrq0fceE%2BNANNHQoJvxIt1r2WFsjVwBeaY%2BQy%2FsePHtKtviW%2FL9F29or%2BuvQ3kXGW9oIMBb3wrI7kFFO%2BVon3kZheV4kGSx4Ag4C4CPySP93qVMXv87sTlh0qYzSTSFY6fu%2FE8TZqFMBBFG3Qkhm356hzazI40pQKzlXDYwZ40WbzDwZqPRUldRjLzzk%2BVtX6AIvHOqCbrl%2BsEaRQBrWHchwn2ViKvAgWXNg4qNioOmQyE6K%2FPkc1E88aIgIN9m%2FAWeRo9rUMTMTdcvQ7VGu%2F4vwaeYIpwEWhGgF4wsMPOyQY6pgEEv0fuxzjuehdEU52QrACMjUmENaw7MPC2EKBrGS%2B1Vnki0rKQekbtj7pH12mQDYdD0hEMfRW%2BB4DWxmzHoTwCAEjZoRQ5KqUOKotcmGyPbO4FjOIa7%2BxKo7RtNu4hHdj3hJj7ub9dm3P3K74A%2FdFKfGIVZ%2Fma7FrtlcurbLGuZO5l81hiKahS0VHlaxOWykOz64EVHI58hvpaSQFKB2OnksqLH2Dq&X-Amz-Signature=c4431a6ffa425a5c06129714caabc9b467948ffb80e4aecc2ec5bd9567b4c575&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OUI4I5Z%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T035025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID2vRvl88EghWv83aiW5MuQyGxP1iKlYsJgureduO86uAiBBvIe22HJvUThhc9omrj1Hb%2Bv1FfhKIvaiO0mVC9jtkCr%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMphDjB9zHvdaWHwUPKtwDV1%2BN6ObIFVtWvEaD%2FUyZ8meXvjfv365JW7sII4bLkl0Y8LszGaqvewYnfFdnhcXtDiuL4bwZNpSDaNeQs0qgbYgIiEQw8Y%2F8Y0ENJ9rbUwixHzKAJCgAFmeMXzvwk135WOylgCkkObmaVoEV4NMtu4Z3QOq7MHkDpaEvyXh74VYCkLGYsi%2F2QS2ULMnKzLSlGlk34VQEuFdL2Hri%2Fh2GBZrGyfTpVHMTgWD8K5ujkD8JnP5hRnPPL%2FSagUAIm7Pus2rwbYJfxXyT%2BFOmvi4AFPfC2%2BeVuset8BQzGNk44QkXTZWrSAuTJZoPNCiIE2OAREVl%2B1YAme7kqqrqZOd7NHdrq0fceE%2BNANNHQoJvxIt1r2WFsjVwBeaY%2BQy%2FsePHtKtviW%2FL9F29or%2BuvQ3kXGW9oIMBb3wrI7kFFO%2BVon3kZheV4kGSx4Ag4C4CPySP93qVMXv87sTlh0qYzSTSFY6fu%2FE8TZqFMBBFG3Qkhm356hzazI40pQKzlXDYwZ40WbzDwZqPRUldRjLzzk%2BVtX6AIvHOqCbrl%2BsEaRQBrWHchwn2ViKvAgWXNg4qNioOmQyE6K%2FPkc1E88aIgIN9m%2FAWeRo9rUMTMTdcvQ7VGu%2F4vwaeYIpwEWhGgF4wsMPOyQY6pgEEv0fuxzjuehdEU52QrACMjUmENaw7MPC2EKBrGS%2B1Vnki0rKQekbtj7pH12mQDYdD0hEMfRW%2BB4DWxmzHoTwCAEjZoRQ5KqUOKotcmGyPbO4FjOIa7%2BxKo7RtNu4hHdj3hJj7ub9dm3P3K74A%2FdFKfGIVZ%2Fma7FrtlcurbLGuZO5l81hiKahS0VHlaxOWykOz64EVHI58hvpaSQFKB2OnksqLH2Dq&X-Amz-Signature=e2feff5860e011ce587c3753500f63d62a129343540051803b0101e577f39050&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
