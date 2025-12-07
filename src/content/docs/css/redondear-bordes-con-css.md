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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWQ7R25U%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T031545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGWZn81%2F3MxPD0YqwqJZGmV0cc1kHeYEGFPpF5IX00FZAiEA8e%2Bs5AtMkTfbLpnlPMPfRtDAnhSf5Al6dHRtgIYCaOoqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGaaHYnPeZoH6VQ5nyrcA2iX1xMlG%2B9qR2EGVrSsDKQBdpVYdoJjdsqOyczKIjbe98RicT4bmcyFXSokJ1gphELhc77H%2FJlHIUGISywLSqRO9Rb3SvejCI66qdNh%2F2JPsBCQxttPrDm09jlMlugNj4IcYIwWd7xScrNfXw9IIkLJMEt4mT5AkLO7FfRWV3ystWlEDEuFtBtmYhKUkMJIJXBV7wIeofe%2FZqj8cW0IwtqsFoXY3G8qWewgD4QQliNY%2Fz2LgjYCVcp70iV1si%2BhnJGf4AN64%2FKQh%2FblycmhP5w5GiUtRH0JxujeA2c6%2BZDLc1iEvE0xbrF0ePESxgV9KbdUgICefJ0uIAe2kJYoTVyErop5m8D0JoFGvFQNaDkbcJ%2BxxrbR9mRDbW5ciAkH5ctHGLaXeytHNpWIOZi8Z6gErLb3KqoDlhwkdi9BrI%2BSOQipltZtHK7%2BTKIvc2DEvdXmvjaH1x4EqcMX4Kgp3zdeuyPhrF10cTXn9v%2FhiwKdzuxL27DieH9Qbd%2BdVinSJQeu1jyodgN5%2Bd%2Bf53F%2FnsnP%2Bqq12cwUV%2BVXY1yPyeVJwnxaJSI%2FQkIZkp5FOPKSNMdp0guNpbxCIDTq7N%2BRttTZL09BHyojIlGA3Q2JCL8yK7vX6sOKx7D3NJOoMPH90skGOqUB%2F9ZV9fqp5QFxrzb3hKrwrn%2BOVll1npcSoWsKT5r7fcdk00QUP%2BuClvMzercuV58ToJg3h8V%2FHhXXw2OleSuVpPDboO6srtLRO7Y9c3QQLB0B1qjt%2FXzrM%2BspBWsk3nBgeZRvihk6W6Pz5yY20bwbAwl%2FPa9pBnfyJ6DyMB1ZX0y9SMyBBmay9Xb9M4XogJpAn4VO3kTDUXoz4dj3sovKWRgYhEbf&X-Amz-Signature=9b39858a498a9fe767f2ebebdd3cf6a04fd7a4eceade8784b5afd0ccb40449a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWQ7R25U%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T031545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGWZn81%2F3MxPD0YqwqJZGmV0cc1kHeYEGFPpF5IX00FZAiEA8e%2Bs5AtMkTfbLpnlPMPfRtDAnhSf5Al6dHRtgIYCaOoqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGaaHYnPeZoH6VQ5nyrcA2iX1xMlG%2B9qR2EGVrSsDKQBdpVYdoJjdsqOyczKIjbe98RicT4bmcyFXSokJ1gphELhc77H%2FJlHIUGISywLSqRO9Rb3SvejCI66qdNh%2F2JPsBCQxttPrDm09jlMlugNj4IcYIwWd7xScrNfXw9IIkLJMEt4mT5AkLO7FfRWV3ystWlEDEuFtBtmYhKUkMJIJXBV7wIeofe%2FZqj8cW0IwtqsFoXY3G8qWewgD4QQliNY%2Fz2LgjYCVcp70iV1si%2BhnJGf4AN64%2FKQh%2FblycmhP5w5GiUtRH0JxujeA2c6%2BZDLc1iEvE0xbrF0ePESxgV9KbdUgICefJ0uIAe2kJYoTVyErop5m8D0JoFGvFQNaDkbcJ%2BxxrbR9mRDbW5ciAkH5ctHGLaXeytHNpWIOZi8Z6gErLb3KqoDlhwkdi9BrI%2BSOQipltZtHK7%2BTKIvc2DEvdXmvjaH1x4EqcMX4Kgp3zdeuyPhrF10cTXn9v%2FhiwKdzuxL27DieH9Qbd%2BdVinSJQeu1jyodgN5%2Bd%2Bf53F%2FnsnP%2Bqq12cwUV%2BVXY1yPyeVJwnxaJSI%2FQkIZkp5FOPKSNMdp0guNpbxCIDTq7N%2BRttTZL09BHyojIlGA3Q2JCL8yK7vX6sOKx7D3NJOoMPH90skGOqUB%2F9ZV9fqp5QFxrzb3hKrwrn%2BOVll1npcSoWsKT5r7fcdk00QUP%2BuClvMzercuV58ToJg3h8V%2FHhXXw2OleSuVpPDboO6srtLRO7Y9c3QQLB0B1qjt%2FXzrM%2BspBWsk3nBgeZRvihk6W6Pz5yY20bwbAwl%2FPa9pBnfyJ6DyMB1ZX0y9SMyBBmay9Xb9M4XogJpAn4VO3kTDUXoz4dj3sovKWRgYhEbf&X-Amz-Signature=aa20e930d218a4a6be32ecb81895eee7b6d74f46ed11e7073f601354858db02a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
