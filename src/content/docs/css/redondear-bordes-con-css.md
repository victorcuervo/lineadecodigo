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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWSJPMYP%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T135727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDBE02ZJUG8XFMsMId4u3X3AZg%2BBxlxxLHE1ePCUwVa6QIhALxCCPbD13rytE2IwWi4sOmO0N%2Bj1oohzLHp8gpxrxDZKv8DCFsQABoMNjM3NDIzMTgzODA1IgxFYBSq9eoawYLDaKMq3AMAUuZ5pYB4tz%2FNFCgn1ULLdms6CRR8fz%2BvIIx5zfsOjVTU8J9lkAx1Wfo6BItsGA1H6xrQVzv0%2FA05fpo%2BDcD%2FSgNA9kNgvOS0muRaJNXY%2B%2B3xVzoTXYf3p7yh%2B9jdCnJ14QwRhjzSWA7gXEg9dQgi7z6QVswiZOVKgDIS4OpP9mhB%2FHvBHwKMS4HsPULotkIqaRrDq2eEDy1UyG8H%2BZVuSkG%2FxBSDlVFENMa2xH8TRB3%2FNMyOclxIzZs3fCrgZFFgm6NmjiO8l74sAwuyjXQ9J1DJtQonm%2BeJ55XMT4p%2BQk9xL2D%2BnKA0%2F7wQZLtspAMQmveQ18G%2F0xi6IygywYfLCpUHSecVPiNTKx2ObPV9MKD%2FdPoOy9KgfCo1T0GvGHqF9TDLS73E3Z5kTjy4FiJPleMhY64ae7H7JhvtVccnxR6yUFyJWDiE1CDwhwrzktzPUPccd9KiELPWQP4pya9OFj%2FCJVJpUMN19K2635ewKleiJztRPfr%2BxkIkAnur3FL33lru9XhvHe02JqxWQ%2FLs1F7vsRc1iiywmHL14kT06z8GNMehDkQHjBXrGz1EvWHYK%2BR5Pl5w7x5m9myFBRIMYDRNmP1fIA1SEllmmU86%2FuMEwoKgzNYXNnSRNTD1ysrJBjqkARj07izHe%2FeBoeUzqm2ZHcxmmZOwB36wDwxiPT9PliHn67LH03IJhemqLizkRBycp9mxOcKakbYD3u2I%2B1ySdXLH96ppAy%2FIV16RnN9IImXv9H%2BCRrtVW9iQJqwSnq8fXzn6XgVBNX7ElF8LJKtveILMo0NkUJXVpk73zu7CBXmcGJVu7IGt2dxR7M7iKvRdv%2BHqpyWHUQ3soAuuTcbcvEtS1FTp&X-Amz-Signature=4e3cfcff8474c4b7d733338f79dc93a4ea08c4aa7651f63abbfea018fdf0d210&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWSJPMYP%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T135727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDBE02ZJUG8XFMsMId4u3X3AZg%2BBxlxxLHE1ePCUwVa6QIhALxCCPbD13rytE2IwWi4sOmO0N%2Bj1oohzLHp8gpxrxDZKv8DCFsQABoMNjM3NDIzMTgzODA1IgxFYBSq9eoawYLDaKMq3AMAUuZ5pYB4tz%2FNFCgn1ULLdms6CRR8fz%2BvIIx5zfsOjVTU8J9lkAx1Wfo6BItsGA1H6xrQVzv0%2FA05fpo%2BDcD%2FSgNA9kNgvOS0muRaJNXY%2B%2B3xVzoTXYf3p7yh%2B9jdCnJ14QwRhjzSWA7gXEg9dQgi7z6QVswiZOVKgDIS4OpP9mhB%2FHvBHwKMS4HsPULotkIqaRrDq2eEDy1UyG8H%2BZVuSkG%2FxBSDlVFENMa2xH8TRB3%2FNMyOclxIzZs3fCrgZFFgm6NmjiO8l74sAwuyjXQ9J1DJtQonm%2BeJ55XMT4p%2BQk9xL2D%2BnKA0%2F7wQZLtspAMQmveQ18G%2F0xi6IygywYfLCpUHSecVPiNTKx2ObPV9MKD%2FdPoOy9KgfCo1T0GvGHqF9TDLS73E3Z5kTjy4FiJPleMhY64ae7H7JhvtVccnxR6yUFyJWDiE1CDwhwrzktzPUPccd9KiELPWQP4pya9OFj%2FCJVJpUMN19K2635ewKleiJztRPfr%2BxkIkAnur3FL33lru9XhvHe02JqxWQ%2FLs1F7vsRc1iiywmHL14kT06z8GNMehDkQHjBXrGz1EvWHYK%2BR5Pl5w7x5m9myFBRIMYDRNmP1fIA1SEllmmU86%2FuMEwoKgzNYXNnSRNTD1ysrJBjqkARj07izHe%2FeBoeUzqm2ZHcxmmZOwB36wDwxiPT9PliHn67LH03IJhemqLizkRBycp9mxOcKakbYD3u2I%2B1ySdXLH96ppAy%2FIV16RnN9IImXv9H%2BCRrtVW9iQJqwSnq8fXzn6XgVBNX7ElF8LJKtveILMo0NkUJXVpk73zu7CBXmcGJVu7IGt2dxR7M7iKvRdv%2BHqpyWHUQ3soAuuTcbcvEtS1FTp&X-Amz-Signature=f5b3c192eb72f98ca8caf44d5ca23ab0eb979c3209d0d3d288c32591b91719ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
