---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STGOQHIO%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T123008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQDRtuK8m7R8CNGudLmPJBGYIJFmYoWg33fOf5ackePYwgIhAKVRO5Mxpz6xxnwqCSFMktyJCLdjKPg22Kp5pICRU172Kv8DCEUQABoMNjM3NDIzMTgzODA1IgzH9vsoHmR4mfa5%2FdIq3AMswPq9sloyEr1cK56dzoU%2FE2SQFKgMBbAenJp9uWTnwjAxm%2BYBpAV8DNjQEO6PNKHte7A%2BRi4YkQUKzf2udh9O4U9IxsuaWOhoZix3hlgzoe7nPYvml5PVRyp1iV0Ic%2BMJLIEbbhXcSRlyih74PKdsDjLitKbuj8Txwc93CswLOAhUt%2B4KlF1KIMqOnozIw41cwvrvdizwjVCnEPONDwAAXHrEXVQXdCKmezl3bO8dR%2BiUzQD9g2ZkMvEdJB9KLOPoE6Ywrf9hQdu38rpt5JCFd6aQzCJvKXK26To%2Fyc0Ru%2BFMThTO%2FuQQy4e895khPJ5RwXshZml0zPBEkcnPP6k3FADAVhPnB%2FA4qVXF1UMRLZzEPBBU%2BbRNnfnZfSIDwGYjmLnO%2FWy%2BCVNfd6S9RMK0527AFRDK939cuG3KQjASJrGiKLC1502Yil3xKZk2gBT1FYj1zBJLf7331dC7cNNbTRQGzEx2mST77T5wBqR7StZv58A4Rmx1A%2FPBIdt2CrVSTSsxfr3Y%2Fbo7SB6e7AY1cJ%2Bc5RhaAc6BpiDEHe6SWcZIYGJZjaOnuC5Js%2BxcVo3WwtnIRpzvfiUx27D7%2FFzBDznxBbhVtCzU3i3U%2BPzCT3Ph2k91c4cWik8E7zDX5sXJBjqkAZ%2FqpjEt%2BciR9pRK9n6ZiUl6E7%2FDmKmTOLZjP1QSx4Dn4%2F7%2FnBCMCc%2BNPC5cAWN6Yao8MD7%2FvR9sld6ebPVePCEs69jvWsWkjM%2F%2BJ2QMtm5PCX%2FPSVwuCrbYElAyvpNnINSE8uLoc1VAU5Hu1%2BpA3rGfawYteWTTRWY7f471uqR2VSRmu2MZ0g1hpkQYl4WSub80VuVviOVr5W8BBNFS9%2BvqeWls&X-Amz-Signature=914055c068559cd302d6656c278958c157bbdc120e437e73facb5d6e152f8f77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STGOQHIO%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T123008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQDRtuK8m7R8CNGudLmPJBGYIJFmYoWg33fOf5ackePYwgIhAKVRO5Mxpz6xxnwqCSFMktyJCLdjKPg22Kp5pICRU172Kv8DCEUQABoMNjM3NDIzMTgzODA1IgzH9vsoHmR4mfa5%2FdIq3AMswPq9sloyEr1cK56dzoU%2FE2SQFKgMBbAenJp9uWTnwjAxm%2BYBpAV8DNjQEO6PNKHte7A%2BRi4YkQUKzf2udh9O4U9IxsuaWOhoZix3hlgzoe7nPYvml5PVRyp1iV0Ic%2BMJLIEbbhXcSRlyih74PKdsDjLitKbuj8Txwc93CswLOAhUt%2B4KlF1KIMqOnozIw41cwvrvdizwjVCnEPONDwAAXHrEXVQXdCKmezl3bO8dR%2BiUzQD9g2ZkMvEdJB9KLOPoE6Ywrf9hQdu38rpt5JCFd6aQzCJvKXK26To%2Fyc0Ru%2BFMThTO%2FuQQy4e895khPJ5RwXshZml0zPBEkcnPP6k3FADAVhPnB%2FA4qVXF1UMRLZzEPBBU%2BbRNnfnZfSIDwGYjmLnO%2FWy%2BCVNfd6S9RMK0527AFRDK939cuG3KQjASJrGiKLC1502Yil3xKZk2gBT1FYj1zBJLf7331dC7cNNbTRQGzEx2mST77T5wBqR7StZv58A4Rmx1A%2FPBIdt2CrVSTSsxfr3Y%2Fbo7SB6e7AY1cJ%2Bc5RhaAc6BpiDEHe6SWcZIYGJZjaOnuC5Js%2BxcVo3WwtnIRpzvfiUx27D7%2FFzBDznxBbhVtCzU3i3U%2BPzCT3Ph2k91c4cWik8E7zDX5sXJBjqkAZ%2FqpjEt%2BciR9pRK9n6ZiUl6E7%2FDmKmTOLZjP1QSx4Dn4%2F7%2FnBCMCc%2BNPC5cAWN6Yao8MD7%2FvR9sld6ebPVePCEs69jvWsWkjM%2F%2BJ2QMtm5PCX%2FPSVwuCrbYElAyvpNnINSE8uLoc1VAU5Hu1%2BpA3rGfawYteWTTRWY7f471uqR2VSRmu2MZ0g1hpkQYl4WSub80VuVviOVr5W8BBNFS9%2BvqeWls&X-Amz-Signature=e1ad9b03366c9baddb8f0b938346dbfe3862adf5b0c46f516f8c4efb22cfde93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
