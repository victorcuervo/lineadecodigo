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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QH44D47O%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T052116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCluR3s56E4I22YHVvFzVTXN6TvYCUxVZhnqEppXdhnaAIgItS0zXAWucPS%2B7p5NVNNDjg7A29q3UHwJaALrajox2kq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDArUxAENFbM%2BxH16JSrcA4MtzXInhhPdWQX8F7UdjJ%2Fegx58TCOHqn00b%2FNaPQ46n%2FatMmk%2BnkpHT4pXTgdSpjxnox%2BR2208w0mPrJNE56ScVe%2BzFPvbFRRC7cExzn6A2J9WLBiD69InOCAVxibqbe%2Fzn%2B1p%2BrXdR1EWn%2B6AaHIcWXN9r9wDG%2FI%2FNkcqWgqvPspPW46AImsi%2FkJvpZsh7ukECxR69yvLUcJPKaSU51px%2BOzc%2FCO3l%2BY8ral5y2qAnYeJkNjrIy9Q9IlXuwK2KYUkETqTVAGGjPsPo1sX8dnJ17tqx7qpwQ0czNApjS6RyJAWIPSnPCTavbXEBEs4s%2B2lnIKN1kc5gR3ZSRcaQmaNC5i%2F2Vg0knwS0P52HPRVplUGrMDt6AQhbpzco2ODMFOHn%2FqL10C15icPhlM%2FSOp2MfSPE9YnQoIwEgGZCyV4mxkIbfkPGpyPbGD8Feog6B3FmR07fCCkQRkCmSm1KXS%2BV7UC7PK%2FT%2F9U%2FS68sjSNiKHxkf2puX3etPZsuCwluVHHBTrRwBw5ukxY9DVNTq1XSO36eP7p%2BAaYkb6rN3CB3%2FWzdWjHVIHhkxUmAczglaikhqeChE3U767u0up20E31uIIDJUZfCQvCO4Kf4U%2B0F27iFN0AHp%2BVgAgPMJ3ezskGOqUBbS%2FkSH8k1Dlw6ZHbS%2BW6BA9wCQattx3Wt6h5Rng2KcYyCTmrYM%2FtAkiIeUv5Aqb83EOD4vsz7ZYLkCxKSvC4cz7co5bbIysyq3PhtF0DJJeVb3YBxhMc7GPw0oVtVxfJNG%2Fgk2G8G1Kde%2FlS%2FDokHeoQKN7AL7iZk4ByGasOFPCVX0obKjVxYLRu3PmE3prcrfmygqhxU6g4kg8QJw8B8F1ZB9Vs&X-Amz-Signature=5b565a35c7fb9231f17fe67669d5c50bdd35020437f7cbac080beebad18ff59c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QH44D47O%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T052116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCluR3s56E4I22YHVvFzVTXN6TvYCUxVZhnqEppXdhnaAIgItS0zXAWucPS%2B7p5NVNNDjg7A29q3UHwJaALrajox2kq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDArUxAENFbM%2BxH16JSrcA4MtzXInhhPdWQX8F7UdjJ%2Fegx58TCOHqn00b%2FNaPQ46n%2FatMmk%2BnkpHT4pXTgdSpjxnox%2BR2208w0mPrJNE56ScVe%2BzFPvbFRRC7cExzn6A2J9WLBiD69InOCAVxibqbe%2Fzn%2B1p%2BrXdR1EWn%2B6AaHIcWXN9r9wDG%2FI%2FNkcqWgqvPspPW46AImsi%2FkJvpZsh7ukECxR69yvLUcJPKaSU51px%2BOzc%2FCO3l%2BY8ral5y2qAnYeJkNjrIy9Q9IlXuwK2KYUkETqTVAGGjPsPo1sX8dnJ17tqx7qpwQ0czNApjS6RyJAWIPSnPCTavbXEBEs4s%2B2lnIKN1kc5gR3ZSRcaQmaNC5i%2F2Vg0knwS0P52HPRVplUGrMDt6AQhbpzco2ODMFOHn%2FqL10C15icPhlM%2FSOp2MfSPE9YnQoIwEgGZCyV4mxkIbfkPGpyPbGD8Feog6B3FmR07fCCkQRkCmSm1KXS%2BV7UC7PK%2FT%2F9U%2FS68sjSNiKHxkf2puX3etPZsuCwluVHHBTrRwBw5ukxY9DVNTq1XSO36eP7p%2BAaYkb6rN3CB3%2FWzdWjHVIHhkxUmAczglaikhqeChE3U767u0up20E31uIIDJUZfCQvCO4Kf4U%2B0F27iFN0AHp%2BVgAgPMJ3ezskGOqUBbS%2FkSH8k1Dlw6ZHbS%2BW6BA9wCQattx3Wt6h5Rng2KcYyCTmrYM%2FtAkiIeUv5Aqb83EOD4vsz7ZYLkCxKSvC4cz7co5bbIysyq3PhtF0DJJeVb3YBxhMc7GPw0oVtVxfJNG%2Fgk2G8G1Kde%2FlS%2FDokHeoQKN7AL7iZk4ByGasOFPCVX0obKjVxYLRu3PmE3prcrfmygqhxU6g4kg8QJw8B8F1ZB9Vs&X-Amz-Signature=6047105f9501be72afa2f57bcc249fcc5f0635eef3c344f0c549c10395ae1896&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
