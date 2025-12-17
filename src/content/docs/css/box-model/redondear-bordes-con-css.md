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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657NWSYZV%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T172816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC4bfBFPyV5osJEFXt8AqshxlVUWC1pdzQeFVP9crKGTQIgJDarAhqQL8Rg%2BkDF6Kx1ZvdpUHfhBQM58G6BXANLcgcqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOecoeV5DwCpby0q6ircA0M3e6omtmB0gA4Fcy9AdEjFRCXiuZ8KbixynQk6Cxz1FZB9N8ECvhw8kERrQwzDcHnx%2FZfNRZKiBqdi1OXJ3OcubY1rApHNX663TRt4s6E%2FwN8iMFLoaNhOMljizdaX3H1u5Wiq41SkM9f7iIBPlT3f%2FpGe3A4zKv5GT0Q5qKylMH1Ku61WjaqZ8sQMjHX999JphQiN%2F%2FyRfinSNn9jx1NwpWaQNYR371sQiAor9WCqwn%2B2%2BBiQE4j6WqntdIAa3LIqTlO1YtS%2BGAR7BYfr1VB2a%2Bqfu07fXSlNhG%2FUw1xGze6ftA5Mvn%2FQ5nu69UjDFXHLByczbrd49t2XwnZH1PUjzrZjDZYSBhA2cLrDFscm4Y%2FtbAXDSRP9KQRGismxN4uVfG5oc5ChTIR7s3zuagMNr6ielgXjjaHvmhZSh0O3x5V4YIj1mW3Gp6f%2FuQJRMBsL94YUC9DJrVYPJNo9otKBgmDJ5rmtJZOPsA4RshXZXzcBlcTwSk5q2ywY%2Fkhx8kPhEH1eFXiDohmSFHt57bBt7j1z3gpGBH10bvZ9FxLq4mL758x5g%2FgiIPlr1Hxm1lDkkgWp0ZlOHta1ANRqEo96syl7pLO4QWBEf6CUSXYP7AV1nm9gYudjKD5mMJKfi8oGOqUBCLbX%2BzIl2%2B%2B%2FWkGE6fQETSNIjNcaxpnMNtq1oPozFIIMvqPFCqi1xUnw%2F4A%2FZOpnbTGNST4bq2Ur43%2BHvhjTOlITg4RsTultKwLic41TN0iGmJTOx2SXQmWGXE2WIgTUzhmRUo5RzhkZiCba6Thf%2BZhhaU37aoSsh3U8YBAXBzhnI0Ly8pmMSF0jhqNICDxu23QiHfHn7WgwXHEY2F%2B9sHXNhLTY&X-Amz-Signature=e67cfa7695cf1f011d669152d5c432bc4bf1263bfe9064c2840dfb0726152a5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657NWSYZV%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T172816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC4bfBFPyV5osJEFXt8AqshxlVUWC1pdzQeFVP9crKGTQIgJDarAhqQL8Rg%2BkDF6Kx1ZvdpUHfhBQM58G6BXANLcgcqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOecoeV5DwCpby0q6ircA0M3e6omtmB0gA4Fcy9AdEjFRCXiuZ8KbixynQk6Cxz1FZB9N8ECvhw8kERrQwzDcHnx%2FZfNRZKiBqdi1OXJ3OcubY1rApHNX663TRt4s6E%2FwN8iMFLoaNhOMljizdaX3H1u5Wiq41SkM9f7iIBPlT3f%2FpGe3A4zKv5GT0Q5qKylMH1Ku61WjaqZ8sQMjHX999JphQiN%2F%2FyRfinSNn9jx1NwpWaQNYR371sQiAor9WCqwn%2B2%2BBiQE4j6WqntdIAa3LIqTlO1YtS%2BGAR7BYfr1VB2a%2Bqfu07fXSlNhG%2FUw1xGze6ftA5Mvn%2FQ5nu69UjDFXHLByczbrd49t2XwnZH1PUjzrZjDZYSBhA2cLrDFscm4Y%2FtbAXDSRP9KQRGismxN4uVfG5oc5ChTIR7s3zuagMNr6ielgXjjaHvmhZSh0O3x5V4YIj1mW3Gp6f%2FuQJRMBsL94YUC9DJrVYPJNo9otKBgmDJ5rmtJZOPsA4RshXZXzcBlcTwSk5q2ywY%2Fkhx8kPhEH1eFXiDohmSFHt57bBt7j1z3gpGBH10bvZ9FxLq4mL758x5g%2FgiIPlr1Hxm1lDkkgWp0ZlOHta1ANRqEo96syl7pLO4QWBEf6CUSXYP7AV1nm9gYudjKD5mMJKfi8oGOqUBCLbX%2BzIl2%2B%2B%2FWkGE6fQETSNIjNcaxpnMNtq1oPozFIIMvqPFCqi1xUnw%2F4A%2FZOpnbTGNST4bq2Ur43%2BHvhjTOlITg4RsTultKwLic41TN0iGmJTOx2SXQmWGXE2WIgTUzhmRUo5RzhkZiCba6Thf%2BZhhaU37aoSsh3U8YBAXBzhnI0Ly8pmMSF0jhqNICDxu23QiHfHn7WgwXHEY2F%2B9sHXNhLTY&X-Amz-Signature=6256a87f5ac7f97e4872731330fd06f7712d5aef2858be976221848e6fc9b54b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
