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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TO3H5374%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T094314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAEXOvSW72Kgb1QCeSMPTvZpbijiOaKinuFwLBaEC7kQIgQ0aO2vdS4rApUgoBBwsuZNs%2FfmxTO8bRYOfyybA8PyIqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKPb2rAmP2OjGu0%2BeircA8vPYBcyuBr%2BBZjmEa1z0VV4ZpUZfhYHTsg4uvwiOjvvYKLBGChg7oYqhn0sxnBVESsyVilb%2BTLnDxhoHxkuVrtksC%2FyvJxotJuVJU5dL2wZ2XHd1x81T38MYPThZpaLkQqXS74w7P2nW2hfgzLJwDS4QQmmgUNswTq0g6A99WIbiAir8wR3tAYvvRm%2F%2BIQxMgSDGouoyQjVZ9SIbWkh5B385S2O0e8a69wx9IytjH5NqPCL3RDSElSuVhnytryGZ67RNbzqV7BFqJQMhJSfOqeVgspYuqijOAPDUy%2FmE%2BMEzoQ2wOPQyQ4mIEynUyNNt%2B44iGgftHHPtqEr6959aqvG2%2FFGFN96GNfwVynhy88d91bt%2BQ3jT%2BjZ85aYIpIrx%2FVWUfM%2FjManZUCSs%2FRSgsuwH5%2BZrn32IPidmUgUL2A%2Bb86kzD7zk%2FWVx5AZQPRE7yMfq1RpZm3oZvERRYpI7Ogx5UTyrkZ6AiOkgLv8ER9DU6aocHv5YQbn7BQ2l%2FpXH5%2FSK5a%2F0tHT5IPdmsVFwA6qdFztKVxprtbxtMQDQEcEraypYv6lkgeVSw%2Fe5wFPifn8S3u1bwESTI3dwVbjyQlruqeyqSyoU7KXSbqK4RQUzRS56wsCY5uonV0WMKPt2ckGOqUBVJ68L2qK4tSuLnKIScl1noXtjJDAjJfpp4meM8UDFcpQMN2UYJJGFZzTV9%2BYzriuFzFIg9yJk0WvEl8mvaa%2BKUPYoAvd%2B6a2GxE8qerE7ZW0Wi4u2F5wRQuabXhEK%2Famrq23B74%2Fz0DRNjB0AcKukfH9LJ%2FIpB%2F9%2F2lTlYiUIieeur%2FaUp8QmtCf23oqR2f%2F79hvbrSX0%2BXVGzZWT1nJz46M0%2Brl&X-Amz-Signature=455c6a817c7dacf199110564d885ff00106aede6d5107d265443c5a9b19c2114&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TO3H5374%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T094314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAEXOvSW72Kgb1QCeSMPTvZpbijiOaKinuFwLBaEC7kQIgQ0aO2vdS4rApUgoBBwsuZNs%2FfmxTO8bRYOfyybA8PyIqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKPb2rAmP2OjGu0%2BeircA8vPYBcyuBr%2BBZjmEa1z0VV4ZpUZfhYHTsg4uvwiOjvvYKLBGChg7oYqhn0sxnBVESsyVilb%2BTLnDxhoHxkuVrtksC%2FyvJxotJuVJU5dL2wZ2XHd1x81T38MYPThZpaLkQqXS74w7P2nW2hfgzLJwDS4QQmmgUNswTq0g6A99WIbiAir8wR3tAYvvRm%2F%2BIQxMgSDGouoyQjVZ9SIbWkh5B385S2O0e8a69wx9IytjH5NqPCL3RDSElSuVhnytryGZ67RNbzqV7BFqJQMhJSfOqeVgspYuqijOAPDUy%2FmE%2BMEzoQ2wOPQyQ4mIEynUyNNt%2B44iGgftHHPtqEr6959aqvG2%2FFGFN96GNfwVynhy88d91bt%2BQ3jT%2BjZ85aYIpIrx%2FVWUfM%2FjManZUCSs%2FRSgsuwH5%2BZrn32IPidmUgUL2A%2Bb86kzD7zk%2FWVx5AZQPRE7yMfq1RpZm3oZvERRYpI7Ogx5UTyrkZ6AiOkgLv8ER9DU6aocHv5YQbn7BQ2l%2FpXH5%2FSK5a%2F0tHT5IPdmsVFwA6qdFztKVxprtbxtMQDQEcEraypYv6lkgeVSw%2Fe5wFPifn8S3u1bwESTI3dwVbjyQlruqeyqSyoU7KXSbqK4RQUzRS56wsCY5uonV0WMKPt2ckGOqUBVJ68L2qK4tSuLnKIScl1noXtjJDAjJfpp4meM8UDFcpQMN2UYJJGFZzTV9%2BYzriuFzFIg9yJk0WvEl8mvaa%2BKUPYoAvd%2B6a2GxE8qerE7ZW0Wi4u2F5wRQuabXhEK%2Famrq23B74%2Fz0DRNjB0AcKukfH9LJ%2FIpB%2F9%2F2lTlYiUIieeur%2FaUp8QmtCf23oqR2f%2F79hvbrSX0%2BXVGzZWT1nJz46M0%2Brl&X-Amz-Signature=c6d20e097ad7c647f5e8b3fd90cfa8285443c20e5d29519b61eb97eaa05fb193&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
