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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKNHV62T%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T055229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDodcPrWAGpqMCER8ggULaY%2FA0rzV9wfJNkV1JGP%2FfbRwIhAKF0r3LoGSfVfI1UJIjMjoBmrJ41TeL%2BrC70otkVLqRrKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxcgfFsJpJfZwtpQCYq3AOHQTALKaKI7fij3peN6pORRePfi%2B7lW49ate5eutSR6JWGwftUHm%2BLECNTImNbmZ2se6YdVGXkOgyKe%2B4rAOjQjx9Gs3Df7QWnNFR8EHtdmlkgOFHjCHXsEF7gw0tn4G16BGvbnzmlBaALriTEG8NsOnbccQ6RUQ3sWb95uN%2BCciPygGdPsizyDIgoMNqK1MuQQUJbRhh10Vy4Ve78DmRV6D1nYoxSXAaU8QnXdBv9STJWUAfVHyyHzCl%2BEGMVn2qsnGrXbKFGA7HWNxQAj7KS3R1UCm4QVc%2FUNvzump2V%2FdlcWnuEk4I9TAUYRQUhzoAqqPVdmeEpjCieZj50kfVRAaipgZf3VDTOxxHWyd%2FLcG09wXuDrkl4ftojdDJVzBZT9CqoaUE4ltDmH68dweoIwBfcmkl1fwzy%2Btn6lsBR7%2BzJJ8u5hL19ERnwg3Nt70cw5EdOgx354L6aplzR%2FpR0HdxSNteiJIzDSuTdxJuLVVpHv7hfApH9cZAOQzbT9sortiPTYQQjkTkingQqKj17Jtb6%2BPz8NAI9NP%2BWXZzH7gmT%2FG7G3x8tqFeKGB%2BofXi2K%2Bc5Vu7YOaiHATqLHH8lA8dzbO7e41E60KNHg05938JfHl5BJEQAmOeqyDDi5d7JBjqkAbzrHPULfwNjaQB5njCinfyCyIgFggH4S%2FX8yqmNj7AeOpycbcb8OuhXJThnfAMqjbSR%2BoLSTbeE1zLv54hkwRbi0unRW6TErYS7tkY8KJzzq9%2Bv6j2CU1BOpN5t0j2kepQ3oxrcY02Frs5jdZbM9MdrY0B85hCVcu%2Fcxj2IRyZIzTecIxrbZeXxdImsdKlBkjX0uYtkC%2BvLQQtgFel8qLA4qqxW&X-Amz-Signature=7f842829eaa290877dcd75113d9b6d968fdda534a47bf30c411a52d0cd68a29b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKNHV62T%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T055229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDodcPrWAGpqMCER8ggULaY%2FA0rzV9wfJNkV1JGP%2FfbRwIhAKF0r3LoGSfVfI1UJIjMjoBmrJ41TeL%2BrC70otkVLqRrKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxcgfFsJpJfZwtpQCYq3AOHQTALKaKI7fij3peN6pORRePfi%2B7lW49ate5eutSR6JWGwftUHm%2BLECNTImNbmZ2se6YdVGXkOgyKe%2B4rAOjQjx9Gs3Df7QWnNFR8EHtdmlkgOFHjCHXsEF7gw0tn4G16BGvbnzmlBaALriTEG8NsOnbccQ6RUQ3sWb95uN%2BCciPygGdPsizyDIgoMNqK1MuQQUJbRhh10Vy4Ve78DmRV6D1nYoxSXAaU8QnXdBv9STJWUAfVHyyHzCl%2BEGMVn2qsnGrXbKFGA7HWNxQAj7KS3R1UCm4QVc%2FUNvzump2V%2FdlcWnuEk4I9TAUYRQUhzoAqqPVdmeEpjCieZj50kfVRAaipgZf3VDTOxxHWyd%2FLcG09wXuDrkl4ftojdDJVzBZT9CqoaUE4ltDmH68dweoIwBfcmkl1fwzy%2Btn6lsBR7%2BzJJ8u5hL19ERnwg3Nt70cw5EdOgx354L6aplzR%2FpR0HdxSNteiJIzDSuTdxJuLVVpHv7hfApH9cZAOQzbT9sortiPTYQQjkTkingQqKj17Jtb6%2BPz8NAI9NP%2BWXZzH7gmT%2FG7G3x8tqFeKGB%2BofXi2K%2Bc5Vu7YOaiHATqLHH8lA8dzbO7e41E60KNHg05938JfHl5BJEQAmOeqyDDi5d7JBjqkAbzrHPULfwNjaQB5njCinfyCyIgFggH4S%2FX8yqmNj7AeOpycbcb8OuhXJThnfAMqjbSR%2BoLSTbeE1zLv54hkwRbi0unRW6TErYS7tkY8KJzzq9%2Bv6j2CU1BOpN5t0j2kepQ3oxrcY02Frs5jdZbM9MdrY0B85hCVcu%2Fcxj2IRyZIzTecIxrbZeXxdImsdKlBkjX0uYtkC%2BvLQQtgFel8qLA4qqxW&X-Amz-Signature=4451e7c5802202d95a42d5b887254326250b32403a72f7d339e1db3501e636cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
