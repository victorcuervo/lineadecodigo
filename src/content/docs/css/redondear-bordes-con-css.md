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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RJUT6FE%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T142944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQC4uVppbPa5SP97Owl%2FJvEQ0AY94atZFXCtdtgykNLOygIgaCBpSqJad2c1W9EoZGXdTgHh5U0LdfKrIJIH8FMZqUsq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDKdXj%2BArDY8d%2FqkWkCrcA9JtNqn00e2mhsSJWeDbDoWMdkB%2FVCtS8hTY2JZLTPwePTXG%2F7Od%2Fr5RJGovUSpGRJpECIFeoKVgrTE%2Fyq%2F98y2pa6HsqOVqJy487qkyNTAhTpA27wjE4DsHoy3v1u6OND3foTKBFGHEACHrD%2FKVb3kPo9L52HKJVH8UhkHdLoEWqR6ZYUnMl9jZqAVNl5uv1UZYWn%2FI%2BxATHD%2BYsGxGsknUMvTHQ%2FuyanKGQ54ix2TtWZpPZLgFBzniZ8MLa3%2Fv2zaDxrZu3AdT9dWKOmkTdJR015odvNnq2KHVCGpi3M%2FbPFJiz4vQtyfKuaobyujyN7jbiZ1TU%2FUOZ%2BCCNbScpLLzzVc%2FFGuc7Xo%2FfDy5Dinn3hGzKjw3E2h1V7jekPCZDZFCdMBl%2F3rSFfN2icmhrzH4BCqRcrhCx27FHvvtxiZ4pA%2FoT3ea6W7NzCzhDi41EdvBuTF%2FUX5YON0TDDL%2FTloHIMsuXK%2BTu1Np3iKMTooIIqRL9bPimwaVQz%2BjHgHFXEFG3377hqu6R2NC94PW8R9YV8gGWzi35gyFxhEiwgim2WU4yt3%2Bnuf9Op8vUYyUCb9iZqtwaOsxlVEytIvhYt7nNp5O4AsQsW6JUGqXpxD1ZqqxZc2a3aAoRqS6MOehxskGOqUBze3TEbo%2FymIdlvuUVmljq2rHq3oniXVhOkiWGeMWSTOXFa5tZo9R9HOkPc4PUc7AHWHi2p93DBEL8oPKrPyWY3nrTABznwVn1f6QZFcvOAuhQHMUZV32eEwPURJsvUj0jn%2FsI%2F8VmsJkaRk2cSo6KNDgQ2AnE%2BmeTP6bkD5RmcbmREu37Y%2FkxqASoOkId2v%2B8tGRkbDQqsMDDNLCgdYmQJprEbV2&X-Amz-Signature=f1959f79f51bebe0281451d901199b619c7a9fe5c69c8071564a5455d71823a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RJUT6FE%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T142944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQC4uVppbPa5SP97Owl%2FJvEQ0AY94atZFXCtdtgykNLOygIgaCBpSqJad2c1W9EoZGXdTgHh5U0LdfKrIJIH8FMZqUsq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDKdXj%2BArDY8d%2FqkWkCrcA9JtNqn00e2mhsSJWeDbDoWMdkB%2FVCtS8hTY2JZLTPwePTXG%2F7Od%2Fr5RJGovUSpGRJpECIFeoKVgrTE%2Fyq%2F98y2pa6HsqOVqJy487qkyNTAhTpA27wjE4DsHoy3v1u6OND3foTKBFGHEACHrD%2FKVb3kPo9L52HKJVH8UhkHdLoEWqR6ZYUnMl9jZqAVNl5uv1UZYWn%2FI%2BxATHD%2BYsGxGsknUMvTHQ%2FuyanKGQ54ix2TtWZpPZLgFBzniZ8MLa3%2Fv2zaDxrZu3AdT9dWKOmkTdJR015odvNnq2KHVCGpi3M%2FbPFJiz4vQtyfKuaobyujyN7jbiZ1TU%2FUOZ%2BCCNbScpLLzzVc%2FFGuc7Xo%2FfDy5Dinn3hGzKjw3E2h1V7jekPCZDZFCdMBl%2F3rSFfN2icmhrzH4BCqRcrhCx27FHvvtxiZ4pA%2FoT3ea6W7NzCzhDi41EdvBuTF%2FUX5YON0TDDL%2FTloHIMsuXK%2BTu1Np3iKMTooIIqRL9bPimwaVQz%2BjHgHFXEFG3377hqu6R2NC94PW8R9YV8gGWzi35gyFxhEiwgim2WU4yt3%2Bnuf9Op8vUYyUCb9iZqtwaOsxlVEytIvhYt7nNp5O4AsQsW6JUGqXpxD1ZqqxZc2a3aAoRqS6MOehxskGOqUBze3TEbo%2FymIdlvuUVmljq2rHq3oniXVhOkiWGeMWSTOXFa5tZo9R9HOkPc4PUc7AHWHi2p93DBEL8oPKrPyWY3nrTABznwVn1f6QZFcvOAuhQHMUZV32eEwPURJsvUj0jn%2FsI%2F8VmsJkaRk2cSo6KNDgQ2AnE%2BmeTP6bkD5RmcbmREu37Y%2FkxqASoOkId2v%2B8tGRkbDQqsMDDNLCgdYmQJprEbV2&X-Amz-Signature=8cd3a1ccb823b5371d9420af50410138ed6e40319ba38bd0860b0664a61fd4be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
