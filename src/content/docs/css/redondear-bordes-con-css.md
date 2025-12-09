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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMOVJ2UN%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T025800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIQDyHqCZ1PGmaLxjDg67kbAkLgw6ZRNMccvLpe%2B7hb1VhQIfMlOHMb5zBgoRPS3rtkWtTYh%2FEOyTJk6q%2Fs9snHpTgyqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJIo5iSfSP1ULIZjwKtwD%2FCTCrdeTZeU4ywVf2Gq%2FeajGXUDM8FZhmHsdwwHF4ypRTTZNn284NV3KXuq7MulOOFTdzcJI9hKaf%2F8eZ%2BUmoXn9du%2BF%2FSx5rrZYVnfRHHnoMaRn1pRiZ60Udyzx09Gy6Ynbt9Nj32bmUoU94G7ef1XWDfWpnUvlq01VzEyapHRzAS%2FoTTDbWqljlVhBrcYGY0CQpbpCRrBfQiUm7tNZj0nYBLQ8dRZtwFN4511YNhJFuDBEjAJPLBJfV6Sw9rcoF3bpVUBu5Ofx7VWwWaBJ%2BH800NQ%2Fl63Nv57EKis7F9fJRbJnyweVxD2Xl3j51JbD3pg1NRBnxANACsA5F1zbOSEhgj%2BP7t%2B7ttNHiw%2BWiBLFC1KAsfkZ%2Bf47%2BNzVM1WELgQIgkpt9I70UMFOeNRAruhKbB%2FOHu%2B85J%2FB0LWA7ViFKlZQcCzTb7SJe68cg5Ztau1WGYbTjBpflNpdFl%2BNm9O9%2FqxqdanpTWlWrmotoikhjtaqlwZ9uQBRHZ2d205%2FczSPOBT03NsXiYn01m3eAwzwPFCA7vHuRQbRlROHA7BZJiQhSI%2FTgS88QUPZouuo3pKTTT7JS9gK7%2BmkByqhxWg4B6NVqryng%2FOjPtgYeGujGoKHkSatMLikgbYw4I3eyQY6pgGf07HwXi8GtEGmYY2fbq5FgbG%2FgdaOJVYL1J2tGodNbjwEHBmUVmT52mG5GuTdgHw2sxVnz4q%2BQPrGOZgregTnA7GaXlC7irHC7zXP1TOcRF67lUkifw8GPKLr0S725MlC%2B3jZMxYmutm2vI7%2F8nvmJDzT1PsmTK41JCKcm%2Faz%2BgVrjnE%2BgCWSvvgV4M51e7VPdXcLNHnwWseEI9Qr2pVG21MlgwUq&X-Amz-Signature=c55e9be11cdc9fc30e25fbe05b7941b0ac1a9ac318f21bae4d80d26e4ec336de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMOVJ2UN%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T025800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIQDyHqCZ1PGmaLxjDg67kbAkLgw6ZRNMccvLpe%2B7hb1VhQIfMlOHMb5zBgoRPS3rtkWtTYh%2FEOyTJk6q%2Fs9snHpTgyqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJIo5iSfSP1ULIZjwKtwD%2FCTCrdeTZeU4ywVf2Gq%2FeajGXUDM8FZhmHsdwwHF4ypRTTZNn284NV3KXuq7MulOOFTdzcJI9hKaf%2F8eZ%2BUmoXn9du%2BF%2FSx5rrZYVnfRHHnoMaRn1pRiZ60Udyzx09Gy6Ynbt9Nj32bmUoU94G7ef1XWDfWpnUvlq01VzEyapHRzAS%2FoTTDbWqljlVhBrcYGY0CQpbpCRrBfQiUm7tNZj0nYBLQ8dRZtwFN4511YNhJFuDBEjAJPLBJfV6Sw9rcoF3bpVUBu5Ofx7VWwWaBJ%2BH800NQ%2Fl63Nv57EKis7F9fJRbJnyweVxD2Xl3j51JbD3pg1NRBnxANACsA5F1zbOSEhgj%2BP7t%2B7ttNHiw%2BWiBLFC1KAsfkZ%2Bf47%2BNzVM1WELgQIgkpt9I70UMFOeNRAruhKbB%2FOHu%2B85J%2FB0LWA7ViFKlZQcCzTb7SJe68cg5Ztau1WGYbTjBpflNpdFl%2BNm9O9%2FqxqdanpTWlWrmotoikhjtaqlwZ9uQBRHZ2d205%2FczSPOBT03NsXiYn01m3eAwzwPFCA7vHuRQbRlROHA7BZJiQhSI%2FTgS88QUPZouuo3pKTTT7JS9gK7%2BmkByqhxWg4B6NVqryng%2FOjPtgYeGujGoKHkSatMLikgbYw4I3eyQY6pgGf07HwXi8GtEGmYY2fbq5FgbG%2FgdaOJVYL1J2tGodNbjwEHBmUVmT52mG5GuTdgHw2sxVnz4q%2BQPrGOZgregTnA7GaXlC7irHC7zXP1TOcRF67lUkifw8GPKLr0S725MlC%2B3jZMxYmutm2vI7%2F8nvmJDzT1PsmTK41JCKcm%2Faz%2BgVrjnE%2BgCWSvvgV4M51e7VPdXcLNHnwWseEI9Qr2pVG21MlgwUq&X-Amz-Signature=054f53bd99e1df82d078b57a4ef05affafe5f8931b95a9f89f7e4ba175805732&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
