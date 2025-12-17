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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXMXXLXL%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T030917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH0D2K4URLZtLHz%2FO4vadYohzHNv7N8xyNLpWChGqdmdAiAsejKBtk2U3upZ92Ed1zBuE0DsQc5KK9%2BiBitL89KHVCr%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIMRvO0E3yZ%2FbnHIZQKKtwDt4tJ7C0G%2Bb%2B6lfp5A4KfLUXjrrSWhg6Bm6ldRF8Y3i7yUloGFYYCTjb%2FsrWC5APo2E9NpGQcffnzeQQS9%2FpdMrJQMF6qIXktmFnOwaZp%2Fy7Uw%2FnK6koCaA2tkNFEq1wCpZhjCml5846MUvJrxhleDzVquIjdTXzNLy7tSW2X6QkfmCawHESZKGXD1KBPpk8f1VlTIYLEz9QNMZ%2BKmW6CKPoloVx2%2Fn4vQLcInFtasgE7b5rrQMhTCHAYC8a1gGM%2BVDk%2Bkr4IqwPrYkSrZo%2FCKOh9Eq0YIweH%2FMnl1gg4lvYErxUeCvC6fMNf1q4y2%2FkLwS5QqYyIhGSZZfR2QxJNAWqz%2B4KalMcEXG3QRXGLYgyXRLrwAzUs%2BmBDvDATx39kHY0mDAKtGCvBUGGTO99DJnAmnGuEjVsAj%2FfOCGtEb26F2tzF3mhh4yYbsS%2FfsoYLuXQTsJgJP%2B84lpwUvENdTGaES940lD8pEx6yAbhxBJu5QHjnijgzZ0ZtN8F0nAqA2d4ySR8Z1Z8pZ5f2w3eMTpNucvk2S%2FoQ5SGxsxdLBBqOfeiv7XZslXcOUKVhWgntXig8xwFuJ1f8oh4TISg%2FcX5qJnOxxBQ8TbdWJIHmHgq6iCEOdQL1kS9HDFkwzbGIygY6pgFFW7Y%2B9DoLAfiYgW1h1CKyk2tcsUwb6CTTynvTvsQhPy3cO138aIcH453MHhcf5AjxiHvnKkQF2u3KiakMuWFXhSs3PpSxpWccmdzyobSFR8qPqqxg68QBM3QLXqL5PKpGRdxPTYx2IISbdnKitEw%2Bs0SUqRWAZmOSzViYU9MimcUPCFBa2AxmLU%2FWXFuI8%2BEVt8kKjIwBnDOwNzUaIbr1%2Fbju8QP%2B&X-Amz-Signature=7da0175288f2133f1c8740cae2d4d4e627697fcc5770ab653475ddd62274e161&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXMXXLXL%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T030917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH0D2K4URLZtLHz%2FO4vadYohzHNv7N8xyNLpWChGqdmdAiAsejKBtk2U3upZ92Ed1zBuE0DsQc5KK9%2BiBitL89KHVCr%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIMRvO0E3yZ%2FbnHIZQKKtwDt4tJ7C0G%2Bb%2B6lfp5A4KfLUXjrrSWhg6Bm6ldRF8Y3i7yUloGFYYCTjb%2FsrWC5APo2E9NpGQcffnzeQQS9%2FpdMrJQMF6qIXktmFnOwaZp%2Fy7Uw%2FnK6koCaA2tkNFEq1wCpZhjCml5846MUvJrxhleDzVquIjdTXzNLy7tSW2X6QkfmCawHESZKGXD1KBPpk8f1VlTIYLEz9QNMZ%2BKmW6CKPoloVx2%2Fn4vQLcInFtasgE7b5rrQMhTCHAYC8a1gGM%2BVDk%2Bkr4IqwPrYkSrZo%2FCKOh9Eq0YIweH%2FMnl1gg4lvYErxUeCvC6fMNf1q4y2%2FkLwS5QqYyIhGSZZfR2QxJNAWqz%2B4KalMcEXG3QRXGLYgyXRLrwAzUs%2BmBDvDATx39kHY0mDAKtGCvBUGGTO99DJnAmnGuEjVsAj%2FfOCGtEb26F2tzF3mhh4yYbsS%2FfsoYLuXQTsJgJP%2B84lpwUvENdTGaES940lD8pEx6yAbhxBJu5QHjnijgzZ0ZtN8F0nAqA2d4ySR8Z1Z8pZ5f2w3eMTpNucvk2S%2FoQ5SGxsxdLBBqOfeiv7XZslXcOUKVhWgntXig8xwFuJ1f8oh4TISg%2FcX5qJnOxxBQ8TbdWJIHmHgq6iCEOdQL1kS9HDFkwzbGIygY6pgFFW7Y%2B9DoLAfiYgW1h1CKyk2tcsUwb6CTTynvTvsQhPy3cO138aIcH453MHhcf5AjxiHvnKkQF2u3KiakMuWFXhSs3PpSxpWccmdzyobSFR8qPqqxg68QBM3QLXqL5PKpGRdxPTYx2IISbdnKitEw%2Bs0SUqRWAZmOSzViYU9MimcUPCFBa2AxmLU%2FWXFuI8%2BEVt8kKjIwBnDOwNzUaIbr1%2Fbju8QP%2B&X-Amz-Signature=979d4902025de0ab9291026bc149080d6cb5c70d87e42114cb4426acae93bbc0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
