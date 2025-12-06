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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCEHAISL%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T172905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBtDhvjs59IDbMFPcv7omUN9v9l4yLf4lprMFEG5fYwtAiEAhnXF7Ao7uXjewWzdEVQkwUaM7EUbZbvi69YHdqwTwJcq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDGmZZ9qwlCc0N0M42SrcAxU%2BnaKLwyxZ8HWBmp381nOmpHUTjF9K%2BeMFGg8pZz6YwE4xJWUSoWlHSBuX%2BU4dCBnPu0tEuFh5tYUYz9r43K5e8FJzHnJGO5q3Q04nnDQn91V6UnQOa50%2FY9K0Cd175CTi7kUKEvrz6shATSqejP1OMTwoyZVdwfIh069oXo6tCFVNDmLT8aZXJC5HiNsdefcZjnUK4Q6TbFnkZiY2MeFg8pKOB4%2FV6z4zPM2qBIJyfhr%2B7PC93axkbtRWI5DtNVgTcPcjns%2F4tPGOblwwUQG54J7v3ZjEAlCjQCO7plHl6TPCVDePYQ3KA60HpUK2DxgwUXPLqPUGqYec0%2BEqEPGoWLZGS8BmddV84%2F0Z5gkNsAfHkG7PVXgCdTIWclQLxCln8Gtuv4NzUvTPF46hRjWL2Q1EnFW5TaF7qWIihfYx3yqUyJaMu4JfXRoCN0Otf1kooUm7hcZd3w7u591UlKd7v8KHLgShambEJLfM9X%2B%2FXo%2FcB4v%2FRAMXRX%2FNL%2Fb0rnEiP78%2BF5xel%2BKmGG3ueVNJ7F8QnZbYbDae3GGEuyR6hL7ZUAfl7JTfteG1KiCjPnF4yeQ74PgI04FkGliKtNIv%2BU%2FX7Xs2cSVat%2B85gSLgeAjhsh4RJq0GaCUGMP3D0ckGOqUB42f8y51E4khLKd95K%2FhOlYvIRL4Id%2B3YbfyOvmRRfE6P5PZYjQk62j0m44THGhvXRHW9vMFSNZuM0kR1Tlo7v7W8y3xzwpj8OjJT%2BXT3c5mzNiLUhbO7wXyPUSKwTWpLiDj8cxYYCTtvtsSkk3StR4fMrhKvFc2pCOpCex4%2BhaG3%2Bz6h02yheD7m0kot1f%2FXYHXKdbGw9sCJ5EGQqeCzEEFjcVzF&X-Amz-Signature=96199f877a710107e47a2440421454dc36cd3d5ef2a3532e0e75eeab852a3618&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCEHAISL%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T172905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBtDhvjs59IDbMFPcv7omUN9v9l4yLf4lprMFEG5fYwtAiEAhnXF7Ao7uXjewWzdEVQkwUaM7EUbZbvi69YHdqwTwJcq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDGmZZ9qwlCc0N0M42SrcAxU%2BnaKLwyxZ8HWBmp381nOmpHUTjF9K%2BeMFGg8pZz6YwE4xJWUSoWlHSBuX%2BU4dCBnPu0tEuFh5tYUYz9r43K5e8FJzHnJGO5q3Q04nnDQn91V6UnQOa50%2FY9K0Cd175CTi7kUKEvrz6shATSqejP1OMTwoyZVdwfIh069oXo6tCFVNDmLT8aZXJC5HiNsdefcZjnUK4Q6TbFnkZiY2MeFg8pKOB4%2FV6z4zPM2qBIJyfhr%2B7PC93axkbtRWI5DtNVgTcPcjns%2F4tPGOblwwUQG54J7v3ZjEAlCjQCO7plHl6TPCVDePYQ3KA60HpUK2DxgwUXPLqPUGqYec0%2BEqEPGoWLZGS8BmddV84%2F0Z5gkNsAfHkG7PVXgCdTIWclQLxCln8Gtuv4NzUvTPF46hRjWL2Q1EnFW5TaF7qWIihfYx3yqUyJaMu4JfXRoCN0Otf1kooUm7hcZd3w7u591UlKd7v8KHLgShambEJLfM9X%2B%2FXo%2FcB4v%2FRAMXRX%2FNL%2Fb0rnEiP78%2BF5xel%2BKmGG3ueVNJ7F8QnZbYbDae3GGEuyR6hL7ZUAfl7JTfteG1KiCjPnF4yeQ74PgI04FkGliKtNIv%2BU%2FX7Xs2cSVat%2B85gSLgeAjhsh4RJq0GaCUGMP3D0ckGOqUB42f8y51E4khLKd95K%2FhOlYvIRL4Id%2B3YbfyOvmRRfE6P5PZYjQk62j0m44THGhvXRHW9vMFSNZuM0kR1Tlo7v7W8y3xzwpj8OjJT%2BXT3c5mzNiLUhbO7wXyPUSKwTWpLiDj8cxYYCTtvtsSkk3StR4fMrhKvFc2pCOpCex4%2BhaG3%2Bz6h02yheD7m0kot1f%2FXYHXKdbGw9sCJ5EGQqeCzEEFjcVzF&X-Amz-Signature=2c5325a969a80a223f6aa6a2bd20570af3f8f2c19de201e9a79c02ea30cf239e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
