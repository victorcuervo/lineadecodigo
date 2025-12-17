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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EWZPNI6%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T003305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDRMDQFtdv6n%2FQWACdiE269u%2FqhHAYZBSZ2gCmtLdFrqAIhAL0SR3QjmK99OlygG1iDTVjTajGR4BWM9sTL31um0i%2BCKv8DCHEQABoMNjM3NDIzMTgzODA1IgwTlnhXkKlK6h0CwtEq3AMw0%2FVjrxpZ9LqGkaxX6b%2BWBwE2Pl65WF5HWOtRzd6mUYKOcW6DZ6WUMKVOyXoymUwq9FlIJHTWkX00Mwz%2F%2BjLaldPJq85JqyvpSUnTZPGx0TI26giRhOSYFCkwbc7owSqwC9PJMXJ1avcLfZ0oppeNjhYifgHB%2FYcY1JVntrKeEkB0SBdrICCQVqV7qUZC6khJPYiXGTxscBNtNs%2FgacV6TZjCrR%2BbZZqiYWkXRUUUl4os1iWXRjC5uysXM7hLNFLIhvMcmFb4CcLeBY%2B8QyX1OL6vrlu84Rhw%2FmufNVxsyhPpkMviu0e3DAknqebSVdehWcWnIRUZX%2FQpb2%2FlP9BaFxyqHmkdXA7XJQ4Mfac2%2BVM6kiQepGFnh9gX2UnfEmJa7THjYa9tSYVafdzsuFqOSRXVR7tU%2FMKTDKEKs8zDJlmmnT5EG1tTvv8Wtcm92nORBvIpVKHLKJsT00Oxy3xvS8%2BQLkrZJzAe%2BZ5F0Qhqe%2BkTjlVXaZe0wa%2FUF%2BGk7qZwYu66M5cui7OK2vx2kb77zBoz%2FiYF8JlHA1RODLDOASb3LM4d2o1hCJN3HmcTDQRHr%2FkE5RKyPph%2FYJv7mhGiRwcCyhDGmv22X7On20xPLnZtz1v0xCX4I5QcZjD73ofKBjqkAfh7bgW2fBxHzGtLHal%2BXD2MTwwqDiUVOWyZuV3ZoEHfYu6UBLxoEvnMPreuFme1sqRYN95978Z5cfvr6jSTX9UJhMYo3EKdme%2Fh7weNrv2s5l8scVQG5%2FHGETtW1uR6ytUPHSPE%2FE05AoB5EvDlaBsvJJ8OHw%2F4ufglqNmpYxU%2BOOhysaqfDy25TJ7%2BeIDapzv29%2Bu1035iqh2N0Bj%2F6xRHmbRV&X-Amz-Signature=2e30d4a02431bc83af5fc08fb692adeee1a0dd561b38ddb15d143e047d073dd9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EWZPNI6%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T003305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDRMDQFtdv6n%2FQWACdiE269u%2FqhHAYZBSZ2gCmtLdFrqAIhAL0SR3QjmK99OlygG1iDTVjTajGR4BWM9sTL31um0i%2BCKv8DCHEQABoMNjM3NDIzMTgzODA1IgwTlnhXkKlK6h0CwtEq3AMw0%2FVjrxpZ9LqGkaxX6b%2BWBwE2Pl65WF5HWOtRzd6mUYKOcW6DZ6WUMKVOyXoymUwq9FlIJHTWkX00Mwz%2F%2BjLaldPJq85JqyvpSUnTZPGx0TI26giRhOSYFCkwbc7owSqwC9PJMXJ1avcLfZ0oppeNjhYifgHB%2FYcY1JVntrKeEkB0SBdrICCQVqV7qUZC6khJPYiXGTxscBNtNs%2FgacV6TZjCrR%2BbZZqiYWkXRUUUl4os1iWXRjC5uysXM7hLNFLIhvMcmFb4CcLeBY%2B8QyX1OL6vrlu84Rhw%2FmufNVxsyhPpkMviu0e3DAknqebSVdehWcWnIRUZX%2FQpb2%2FlP9BaFxyqHmkdXA7XJQ4Mfac2%2BVM6kiQepGFnh9gX2UnfEmJa7THjYa9tSYVafdzsuFqOSRXVR7tU%2FMKTDKEKs8zDJlmmnT5EG1tTvv8Wtcm92nORBvIpVKHLKJsT00Oxy3xvS8%2BQLkrZJzAe%2BZ5F0Qhqe%2BkTjlVXaZe0wa%2FUF%2BGk7qZwYu66M5cui7OK2vx2kb77zBoz%2FiYF8JlHA1RODLDOASb3LM4d2o1hCJN3HmcTDQRHr%2FkE5RKyPph%2FYJv7mhGiRwcCyhDGmv22X7On20xPLnZtz1v0xCX4I5QcZjD73ofKBjqkAfh7bgW2fBxHzGtLHal%2BXD2MTwwqDiUVOWyZuV3ZoEHfYu6UBLxoEvnMPreuFme1sqRYN95978Z5cfvr6jSTX9UJhMYo3EKdme%2Fh7weNrv2s5l8scVQG5%2FHGETtW1uR6ytUPHSPE%2FE05AoB5EvDlaBsvJJ8OHw%2F4ufglqNmpYxU%2BOOhysaqfDy25TJ7%2BeIDapzv29%2Bu1035iqh2N0Bj%2F6xRHmbRV&X-Amz-Signature=1a4f6437561104211f48025168e024a7754931604abd5490e61d4ec3f208bc5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
