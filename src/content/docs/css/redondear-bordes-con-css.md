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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YR3EZVJ5%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T190756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoBiEE%2FJYI5lgs%2FujyY6vR2VhsH6g1OCgoDwgBQD4tfwIgcdvqPZoFCFq0I7t0XrmCAnW0rSRAmS3ksr2vfmYe3EEqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGubOLVqcQxNwIhYvircA9qqK6jo2K%2FGKg%2BGM9CE%2FcLt1hyygXe4rWaMCZvXdOEY3DR2Ay0s31QVzQ5%2B%2FS4l%2FbBCNLd3J9VQmpCfIqR2NP8dWbqd6oIgDhCp6xoSLRq8LyHAJsJ1JCfHWuguty3xl%2Fjgmqnj%2F7NRqkdqJxtN%2BTECukKP3G6vcnLHVQO%2FTPBJ6tyk5b4ScvscJR%2BqlV4c0r2nzlj5fYkIwqOxJyl9iLVtPNy1Yxf68NVkmzpF94%2ByoFgu6VQB19f7ErAlgjbnhSF3xECssV6OgypVJrEkyRUa%2B5NjIKc0mpvKmeo4zStX9q4spKbVlRQKIU23OSA4ZlmPgdF7G7Qc5x1%2BnTlmSNIFAvsc%2Fk7eCrogWQpdNFcJhHvyVEud9HY2s%2BWq7tZF1FRXj%2FgTT%2F38odRF%2B5LAveEYZc%2Fq4q3RCssQRuP0dn%2BHkdeRClQZCU4cNdl87Imr1P%2FO8AbyJapAkTjlaSH3T%2FqeuWIV%2BNWiak1wB0QvRb1l6Bq3YGxd8xN3Qnxuq%2BjhuCM%2BUo9CTF6GqKKPt5biX%2FQC3oHIvVlBIHO8%2FiPNxdxlHrkwK0R4L8a5RUNs3PlzRUes%2FJkLvN8Ny6wVcaSaI5Newr5f8Tex88jhLRkBMFM%2FHucOLjiyHTSs0C7GMPm61skGOqUBssuo0lY4pkjaoz4FegfJylzR34OUP7pRX5ph1bB4QWEXsCfWnA%2Bj37QNQAkjkwW411X7HuQDU3ZT2wCSdscsOmjmtrvsQBZ9SgeuTrcj7FkP2ZADcQV%2BP1PpoYl9thbHiaO5%2FrO%2FYPltzO5MXhvnjL6gGu9kn3rfbDCUKHoHUi%2F4zfwtRd7Pq72VNr5uWfWlrbqw3qiyGa4TFlH6V5VL%2Bth4%2Bi8h&X-Amz-Signature=e94dce80db51ad1cad27b1012ec064c600963a8ec253c8cc1519c9bde96ad2e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YR3EZVJ5%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T190755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoBiEE%2FJYI5lgs%2FujyY6vR2VhsH6g1OCgoDwgBQD4tfwIgcdvqPZoFCFq0I7t0XrmCAnW0rSRAmS3ksr2vfmYe3EEqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGubOLVqcQxNwIhYvircA9qqK6jo2K%2FGKg%2BGM9CE%2FcLt1hyygXe4rWaMCZvXdOEY3DR2Ay0s31QVzQ5%2B%2FS4l%2FbBCNLd3J9VQmpCfIqR2NP8dWbqd6oIgDhCp6xoSLRq8LyHAJsJ1JCfHWuguty3xl%2Fjgmqnj%2F7NRqkdqJxtN%2BTECukKP3G6vcnLHVQO%2FTPBJ6tyk5b4ScvscJR%2BqlV4c0r2nzlj5fYkIwqOxJyl9iLVtPNy1Yxf68NVkmzpF94%2ByoFgu6VQB19f7ErAlgjbnhSF3xECssV6OgypVJrEkyRUa%2B5NjIKc0mpvKmeo4zStX9q4spKbVlRQKIU23OSA4ZlmPgdF7G7Qc5x1%2BnTlmSNIFAvsc%2Fk7eCrogWQpdNFcJhHvyVEud9HY2s%2BWq7tZF1FRXj%2FgTT%2F38odRF%2B5LAveEYZc%2Fq4q3RCssQRuP0dn%2BHkdeRClQZCU4cNdl87Imr1P%2FO8AbyJapAkTjlaSH3T%2FqeuWIV%2BNWiak1wB0QvRb1l6Bq3YGxd8xN3Qnxuq%2BjhuCM%2BUo9CTF6GqKKPt5biX%2FQC3oHIvVlBIHO8%2FiPNxdxlHrkwK0R4L8a5RUNs3PlzRUes%2FJkLvN8Ny6wVcaSaI5Newr5f8Tex88jhLRkBMFM%2FHucOLjiyHTSs0C7GMPm61skGOqUBssuo0lY4pkjaoz4FegfJylzR34OUP7pRX5ph1bB4QWEXsCfWnA%2Bj37QNQAkjkwW411X7HuQDU3ZT2wCSdscsOmjmtrvsQBZ9SgeuTrcj7FkP2ZADcQV%2BP1PpoYl9thbHiaO5%2FrO%2FYPltzO5MXhvnjL6gGu9kn3rfbDCUKHoHUi%2F4zfwtRd7Pq72VNr5uWfWlrbqw3qiyGa4TFlH6V5VL%2Bth4%2Bi8h&X-Amz-Signature=3f94a55ee4bcada2ff7232bea9553ad141c99862a2b68ec7e14b121b1df22ded&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
