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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWSAUBUX%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T212207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG9JSyJKYLW2EUYV62nLiNW%2Bwj6600RpOMygob6m9t1UAiABDEP01TTUAYyIQz%2B9FFXg2TQsKZ69fIot5L5bb%2B339CqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMH0Zz0tGzHKqQ7oe2KtwD0hfc%2BaAIYh8IdVpoOnm0qm0vo5YMkdeAY33jGeu%2F2JnUL5HIapO2RRSPFV%2F92uidHcq7fSdWNq33j2MlmPTwgQ%2BhBv6MxrcyrRmmBncJt8mloW%2FldJJr3eGU7Py9Jmgim5Yz7Zjhbm3HBzMWFf4xj1llJGR4HskehcfMGMDibwSFytN4lLaWbxnz%2BD9RkySsrUawbSTB9MAWhAp2CszPL3kgv8ID7bsOuVgeuJfJ7mif2iD7emsbm9eIrelJl5EeUWz0ty2SU1k8a3z7ec95RNokvblTISMYxshe9WSAwzlIczebzaZOkydLcJxsCz7Kgy%2Fx5Ot2zNd%2FsSTGf2JOKC4FwkIArE4hsF5omvRJHlgWnloCc%2F%2FX%2FSS2gKNGuMrFM74ckhy4%2F2zHyP2f2iR0OkE7fuBqUlWWt8pqszR3IoxbKet3x1RFEnxPO3HTAKn8N%2FvLjYl1%2F410PH6HuFDAGBb4oMyjBU1ZIjdk2u%2B7VAkEedl2Ch02BlWjUNqUCFxg48dnbXNNcQPQ9IoWbntrtYbZNMhx3yBISjjFD1GZdaD%2FzISg1rgmuCsSQszCmzRxCqh3ZkyEPCkwSTP%2BPJS%2B5ufV6S%2B%2BqyqdYXMA%2BZIte7wh4c%2BZ4jW%2BObxk7F8w0cfXyQY6pgHG5HZK78hbNT%2Bk%2FoYvBhHesVK5t71i6Mue82efihCUdcyNreeYrbZJbchXLIhikqZvBQgwNJG9gcEUPwPpPuMq7S36iLrE47kOWwU5uwRmI%2FWnAEKKqB1dz386KAU8%2BN8usxSdBgljgK7jJnTIfvLR%2BS2HLY7nViKgTpP4h456ytvzfBDWC%2Bne971exnqlXMZh%2BLN7HI2NjqN4xqK%2FOIPGCnbCCXo2&X-Amz-Signature=880bf8db58ceacb2618ffe2837bfc19169572c856271c0fb6f4f1ff89c9dfe26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWSAUBUX%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T212207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG9JSyJKYLW2EUYV62nLiNW%2Bwj6600RpOMygob6m9t1UAiABDEP01TTUAYyIQz%2B9FFXg2TQsKZ69fIot5L5bb%2B339CqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMH0Zz0tGzHKqQ7oe2KtwD0hfc%2BaAIYh8IdVpoOnm0qm0vo5YMkdeAY33jGeu%2F2JnUL5HIapO2RRSPFV%2F92uidHcq7fSdWNq33j2MlmPTwgQ%2BhBv6MxrcyrRmmBncJt8mloW%2FldJJr3eGU7Py9Jmgim5Yz7Zjhbm3HBzMWFf4xj1llJGR4HskehcfMGMDibwSFytN4lLaWbxnz%2BD9RkySsrUawbSTB9MAWhAp2CszPL3kgv8ID7bsOuVgeuJfJ7mif2iD7emsbm9eIrelJl5EeUWz0ty2SU1k8a3z7ec95RNokvblTISMYxshe9WSAwzlIczebzaZOkydLcJxsCz7Kgy%2Fx5Ot2zNd%2FsSTGf2JOKC4FwkIArE4hsF5omvRJHlgWnloCc%2F%2FX%2FSS2gKNGuMrFM74ckhy4%2F2zHyP2f2iR0OkE7fuBqUlWWt8pqszR3IoxbKet3x1RFEnxPO3HTAKn8N%2FvLjYl1%2F410PH6HuFDAGBb4oMyjBU1ZIjdk2u%2B7VAkEedl2Ch02BlWjUNqUCFxg48dnbXNNcQPQ9IoWbntrtYbZNMhx3yBISjjFD1GZdaD%2FzISg1rgmuCsSQszCmzRxCqh3ZkyEPCkwSTP%2BPJS%2B5ufV6S%2B%2BqyqdYXMA%2BZIte7wh4c%2BZ4jW%2BObxk7F8w0cfXyQY6pgHG5HZK78hbNT%2Bk%2FoYvBhHesVK5t71i6Mue82efihCUdcyNreeYrbZJbchXLIhikqZvBQgwNJG9gcEUPwPpPuMq7S36iLrE47kOWwU5uwRmI%2FWnAEKKqB1dz386KAU8%2BN8usxSdBgljgK7jJnTIfvLR%2BS2HLY7nViKgTpP4h456ytvzfBDWC%2Bne971exnqlXMZh%2BLN7HI2NjqN4xqK%2FOIPGCnbCCXo2&X-Amz-Signature=b8fcc01602122053ce73af90c217fdf325944f1b4f5c70660d0e5825e27a12c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
