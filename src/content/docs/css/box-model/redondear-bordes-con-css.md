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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VZRDRXP%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T062239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAvxqd4zVeRghGBluqHR3rkygHV2nMKrvBh4eS8%2Fsc69AiBJCnr2j5H%2F9QjWf0dAF89isxVPLN6Gr3iQVkT9bBcCICr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMmfLwr%2FmTOQeXxsDoKtwDQkhxU6fatDmYTFYwbyDJkiW2WwPuMs3uBmCR38S3Ibg0CJO2qslPWjYIBVN5bqKpf2N1dyc6PgeB1NrRn5X1d652VlRTVdRQiyBf2cqSa5LKctV3IxiKV5z1I1MxwP0%2Bh5k6j3ga5UeW1QpmcBzu50XD18f%2B6c5AWHIiY4PtcI%2FmKRTo8Ow3x8rndn87i%2F4LsmRmh8zyV5qdVEK3Diq2figOwLswdpyLrFd3XQMmcvGQvc5yyAyBF26dG6q9MD6U0K6yKR%2BpHo4wizZ1RFa0MuQ6L2rqnTU1zGEY0BzFCS46nCk0DQX76D6MgsX%2FScFF0MzaN1RVH8doraQTBdKKB6SCHwezB4P8jo6mXBk0sElnUlIbY8kGqYy8j9lb%2FE%2F2J408MJdGDH7TvLTjEBqXDWW1jW1wRKy%2B%2BJWbaULcTKY8S0rRRxRb5Opq4dZXqDyAEGxUMdjTgGoZCloITLAkmFEzoUWbG09PrlsGj1VhqFRP7UKxTInHAEZWQGz2DFCAcpu%2FxJUe11niNNatzF%2BjdwjWooJ3AMOM%2FUS%2FdVcmBfKwWM6sezWJq1xZ794NGihmyoJp%2FZtCyQgIl4ak5EgOQkdtyX8TR%2F1zqu%2B5PDGQOxQ8mB8uNVOjiQJngfsw2oOJygY6pgFGJpYUPbH%2FnGGhdQQvxHOe%2BqVvAVEd6rOCKtkSLu32KCnGArKZd1rRVPdRoF9988%2FWjWrLsdO9XPppi%2FprIk2lB5WTksoZsE2s2Spn6iZbh3%2FL%2B8gqIsUGDlhFSO1bbxpMP9xz0879I2sDi4ahJoz5FsA4Tpzp1GGD80d392WJEtmCLv8KWWJJViM8tglsjJoC2QT%2FrJk%2B8sp6D%2FfIZWWcyzlsxYBB&X-Amz-Signature=508fdc6ea8513688f418e2d9253b23983de2278309b793daf11fb88f75128abf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VZRDRXP%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T062239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAvxqd4zVeRghGBluqHR3rkygHV2nMKrvBh4eS8%2Fsc69AiBJCnr2j5H%2F9QjWf0dAF89isxVPLN6Gr3iQVkT9bBcCICr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMmfLwr%2FmTOQeXxsDoKtwDQkhxU6fatDmYTFYwbyDJkiW2WwPuMs3uBmCR38S3Ibg0CJO2qslPWjYIBVN5bqKpf2N1dyc6PgeB1NrRn5X1d652VlRTVdRQiyBf2cqSa5LKctV3IxiKV5z1I1MxwP0%2Bh5k6j3ga5UeW1QpmcBzu50XD18f%2B6c5AWHIiY4PtcI%2FmKRTo8Ow3x8rndn87i%2F4LsmRmh8zyV5qdVEK3Diq2figOwLswdpyLrFd3XQMmcvGQvc5yyAyBF26dG6q9MD6U0K6yKR%2BpHo4wizZ1RFa0MuQ6L2rqnTU1zGEY0BzFCS46nCk0DQX76D6MgsX%2FScFF0MzaN1RVH8doraQTBdKKB6SCHwezB4P8jo6mXBk0sElnUlIbY8kGqYy8j9lb%2FE%2F2J408MJdGDH7TvLTjEBqXDWW1jW1wRKy%2B%2BJWbaULcTKY8S0rRRxRb5Opq4dZXqDyAEGxUMdjTgGoZCloITLAkmFEzoUWbG09PrlsGj1VhqFRP7UKxTInHAEZWQGz2DFCAcpu%2FxJUe11niNNatzF%2BjdwjWooJ3AMOM%2FUS%2FdVcmBfKwWM6sezWJq1xZ794NGihmyoJp%2FZtCyQgIl4ak5EgOQkdtyX8TR%2F1zqu%2B5PDGQOxQ8mB8uNVOjiQJngfsw2oOJygY6pgFGJpYUPbH%2FnGGhdQQvxHOe%2BqVvAVEd6rOCKtkSLu32KCnGArKZd1rRVPdRoF9988%2FWjWrLsdO9XPppi%2FprIk2lB5WTksoZsE2s2Spn6iZbh3%2FL%2B8gqIsUGDlhFSO1bbxpMP9xz0879I2sDi4ahJoz5FsA4Tpzp1GGD80d392WJEtmCLv8KWWJJViM8tglsjJoC2QT%2FrJk%2B8sp6D%2FfIZWWcyzlsxYBB&X-Amz-Signature=83b6ec61d9e91d43fd140e7e9cefbe355d2e84893a5cf66030b2757cc6f326c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
