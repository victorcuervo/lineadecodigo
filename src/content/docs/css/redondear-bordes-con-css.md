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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQNTRXV4%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T234859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHfpaujWLUwnR8LGtRjCgivKOZGkRBidklzTy9deLOzIAiEA%2FlM%2B%2FxhU7XYDnqp0jObNVI3tdE13i1VdiSOZdFVVYxYqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEBW1sceDe5Xg2Pr2yrcA4d%2BQk%2BT9yLrsPK7FPPGiiwWE2zJxF8zXrXGBCiFzPEXIHhAXrOMQvTdVRSlV4lKp2ls32QLVomDq9XONnglMHAYA6VE0py6feN%2BkWYukePD2TmvUw8fVmFZ8wRzYE%2Bhr1vaDxFUJPbZeByIdYWbYidN7PUsteTQ3K0YAqaXiTr1UVHKucaDAJ5PfXeUGehYVifhB1rjMioA4vhVvxDuVVG1KReBxPwKlIlGaqq5D8HGuoaE6gEk3k5ZPnWcCYSGQUTCnDfrZGE1WzxYGqaZ1cJM9JrSVjPwzR5lGBJmsgGlu9gdCEPdPJVYnc1BSqDVvCsY6Gb2WSlVJmNzUty9wPLcnP78u5I%2F0P1CDvP%2BBOLQeQSOjOstwM95A4lJ9wW%2B08NuG7yG3Y1%2BQ%2Bcl836I28bK3eIPD9dTIT%2FMY51hg3YtXy2e97pqnlDde8Wrrk5Znwphdd0MAdZygpseiFhpyZA7cUQEp8nBEdy72GgZyQyZAltAOnyfQWjflX5khwXAFE1gPDsstGiu1FYpQkQbYfVyOGlFHERBHfmSj4HrdyCSEOTvK%2BSf89tJj6Pt%2FEX4hPTd4q6PAvqT%2BLYrz7615i%2BwekbJIDXZPKkDmh9DLWxqLRb6eTAGUKke%2FC%2B4ML7D3ckGOqUBGOlrF1NDj0ZiG9d9rIjBz%2FcmnJAqKtiicCL8BucaSVWuZCR4%2BgR97LZgWL1fIspS5TP801wrbx4HgmFGsPeXCufoCWzdqdft5a3Ozs6AuLN69slpAPpdn3N1BH1wTrexcUNyf5nGe9aBklDdUMGAVPrLz08QmrSKfFPAf8t5gzhpMmyEgY6BI9Kx36JinTtj2Lixt2IZ0tEeuOYH5UAPaTLWiT2O&X-Amz-Signature=0b9b0d8509b539f835e63a60b6f71ad8faba87bf4fe642094284031a1e046555&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQNTRXV4%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T234859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHfpaujWLUwnR8LGtRjCgivKOZGkRBidklzTy9deLOzIAiEA%2FlM%2B%2FxhU7XYDnqp0jObNVI3tdE13i1VdiSOZdFVVYxYqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEBW1sceDe5Xg2Pr2yrcA4d%2BQk%2BT9yLrsPK7FPPGiiwWE2zJxF8zXrXGBCiFzPEXIHhAXrOMQvTdVRSlV4lKp2ls32QLVomDq9XONnglMHAYA6VE0py6feN%2BkWYukePD2TmvUw8fVmFZ8wRzYE%2Bhr1vaDxFUJPbZeByIdYWbYidN7PUsteTQ3K0YAqaXiTr1UVHKucaDAJ5PfXeUGehYVifhB1rjMioA4vhVvxDuVVG1KReBxPwKlIlGaqq5D8HGuoaE6gEk3k5ZPnWcCYSGQUTCnDfrZGE1WzxYGqaZ1cJM9JrSVjPwzR5lGBJmsgGlu9gdCEPdPJVYnc1BSqDVvCsY6Gb2WSlVJmNzUty9wPLcnP78u5I%2F0P1CDvP%2BBOLQeQSOjOstwM95A4lJ9wW%2B08NuG7yG3Y1%2BQ%2Bcl836I28bK3eIPD9dTIT%2FMY51hg3YtXy2e97pqnlDde8Wrrk5Znwphdd0MAdZygpseiFhpyZA7cUQEp8nBEdy72GgZyQyZAltAOnyfQWjflX5khwXAFE1gPDsstGiu1FYpQkQbYfVyOGlFHERBHfmSj4HrdyCSEOTvK%2BSf89tJj6Pt%2FEX4hPTd4q6PAvqT%2BLYrz7615i%2BwekbJIDXZPKkDmh9DLWxqLRb6eTAGUKke%2FC%2B4ML7D3ckGOqUBGOlrF1NDj0ZiG9d9rIjBz%2FcmnJAqKtiicCL8BucaSVWuZCR4%2BgR97LZgWL1fIspS5TP801wrbx4HgmFGsPeXCufoCWzdqdft5a3Ozs6AuLN69slpAPpdn3N1BH1wTrexcUNyf5nGe9aBklDdUMGAVPrLz08QmrSKfFPAf8t5gzhpMmyEgY6BI9Kx36JinTtj2Lixt2IZ0tEeuOYH5UAPaTLWiT2O&X-Amz-Signature=c5789b783b27f447af0378636c6a9cac7e1bf3ec5ecab12059a0efb887ec349f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
