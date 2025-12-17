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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RN3PBIM2%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T135306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGE4PksLAPcG0HLz5m3ISLsF901qFUG7xNLoBbRJA0rRAiEAxH0E57VcJWdVLX4vLc5%2F2UYkV4RJkc03WrDOO0d6XJ0q%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDGLvEw2tEligYNC90ircA8qdTImFS7bgbGJ0xPt8tNb9BFlZ0tapi43pueXHN0n%2BwQJQY%2FAJwpCkWZL81POX29ZdW%2Fz%2BIwFJUYetG1ABDBYn6Ynj5EDjcHDd0eeYrEOmyTEm6At8yzVdySZXmdpJ%2BPzBOGcijc86X4kU2xWKeQ7WCcaMfTU%2BrX8TupFDq32tqmhyks2RWc29pKnsn5vjjNA9eksF9Mev37Z2qcZtq8GwA2RMAE%2BjDWJzyMe%2F3z5fanMWUZTznRDOpZ%2BzG3aymGsE7NVdRSbNLa6L1z1NvSvAlSVIeRVb6aM3ssvGJ2yv7Mavji%2Fbqgj3qj6UTV6EXAOMlGpa3n4L8uj67zUtzGEzdvPpMsYCGTeArV7wcD8rd%2BXS%2F1LwZd3mV0mq13INZf9VeF6xFEoyz3E8vwTnkYNd3d%2FWtigW7t2xu7a3LEDZZdZntnZI8MuOJlj6QCRDMHZEfkO%2FJseRocLhJxDDRI0KUCPE%2Bq%2F9ClJlSyzjrKYDtebl%2Bd7EooCzEb04phrSsguH%2BG8KI0O3xqU7FLrNbymVw1i6ccUDyGDlt%2BRJBy7o9CjbkTh7gRMfzq5aCPl30E8rDYwllnbI%2FWzjELK%2BicuBG89eVSQY5bjQo665iIXn41WPakirBd5mX1nqMJnjisoGOqUBnaYTfuLCmHCyUPQKo4Z9Q%2Ft%2FuBFzpcKNZPSYCOBiUh3s3e0wOLazuLR1Q5dV5jIVfhyQ507JiJUdjyW9AuMz9U00iW1wnogOrm0S7yQpfCQxWahOIbpPGqEcS0GQsaqFa69bPoDT8QP2laOkuB7Td8ZwEebMWdCr8QV5lde0vVRyjWStJcrM1hjKYjhgqFWsWSwKGEKjx9Fdrm6Kj7lMJ6kXSmAM&X-Amz-Signature=86487eaca4229c5ae968c166fdf42dc5363e869ab699f26cab229d10d4017cf8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RN3PBIM2%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T135306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGE4PksLAPcG0HLz5m3ISLsF901qFUG7xNLoBbRJA0rRAiEAxH0E57VcJWdVLX4vLc5%2F2UYkV4RJkc03WrDOO0d6XJ0q%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDGLvEw2tEligYNC90ircA8qdTImFS7bgbGJ0xPt8tNb9BFlZ0tapi43pueXHN0n%2BwQJQY%2FAJwpCkWZL81POX29ZdW%2Fz%2BIwFJUYetG1ABDBYn6Ynj5EDjcHDd0eeYrEOmyTEm6At8yzVdySZXmdpJ%2BPzBOGcijc86X4kU2xWKeQ7WCcaMfTU%2BrX8TupFDq32tqmhyks2RWc29pKnsn5vjjNA9eksF9Mev37Z2qcZtq8GwA2RMAE%2BjDWJzyMe%2F3z5fanMWUZTznRDOpZ%2BzG3aymGsE7NVdRSbNLa6L1z1NvSvAlSVIeRVb6aM3ssvGJ2yv7Mavji%2Fbqgj3qj6UTV6EXAOMlGpa3n4L8uj67zUtzGEzdvPpMsYCGTeArV7wcD8rd%2BXS%2F1LwZd3mV0mq13INZf9VeF6xFEoyz3E8vwTnkYNd3d%2FWtigW7t2xu7a3LEDZZdZntnZI8MuOJlj6QCRDMHZEfkO%2FJseRocLhJxDDRI0KUCPE%2Bq%2F9ClJlSyzjrKYDtebl%2Bd7EooCzEb04phrSsguH%2BG8KI0O3xqU7FLrNbymVw1i6ccUDyGDlt%2BRJBy7o9CjbkTh7gRMfzq5aCPl30E8rDYwllnbI%2FWzjELK%2BicuBG89eVSQY5bjQo665iIXn41WPakirBd5mX1nqMJnjisoGOqUBnaYTfuLCmHCyUPQKo4Z9Q%2Ft%2FuBFzpcKNZPSYCOBiUh3s3e0wOLazuLR1Q5dV5jIVfhyQ507JiJUdjyW9AuMz9U00iW1wnogOrm0S7yQpfCQxWahOIbpPGqEcS0GQsaqFa69bPoDT8QP2laOkuB7Td8ZwEebMWdCr8QV5lde0vVRyjWStJcrM1hjKYjhgqFWsWSwKGEKjx9Fdrm6Kj7lMJ6kXSmAM&X-Amz-Signature=b388e2fcedabf10ec0629f3026b8d8bff08127558a6f0ad01b6f9df24fc4e5aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
