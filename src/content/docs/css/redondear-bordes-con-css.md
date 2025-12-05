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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2BNZZO5%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T234651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGUH%2F3bFFGHlVBZ5wJly7hIsURvjpdfhD6bvYP9ZFNuMAiEAlW9cdISW5wxIy4AwCvSXDpr9Z93VcG0n9V6noLndypEq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDKROSO%2F9CvzXKQquSircAw1hV3mdIfL4QHvoSKBlVqbVBcCV2RWalvoMnR96GxFY4CAg6nJXjl%2FV1JMTkdRtk4Ho%2FcJv0Ig8aqjyv%2FCSnXJWrzJymJfiJklf2BRk%2Bb7cpvu2bOexR5x56igoZbSJpBtM%2BWIQC5EiB8Lsit5SwG14F9PdTSrUQ7X8JSKk0f1oWbh68FpHnimKzNr7yFKRAlspwGQnbOMswB3AOgXN7W9EPyY72ALuCXjtTy1Uj8fL3xVwg9u0YVFM2wI4Qi2wr7zO8s0LppLxIiVdl1qs%2FkdUp9%2BN7ec4HSRkTVFt9A43G06KczH554iDbXNbsAgtleZP4naqkx4eZ5xLOlP7YTgTo2jgpBuCcVZZ6jOkW8pGCk8sEAJqYOuixwdgGonjT6CdFBZWBSAlzmHY8pOVRL82zoCJGFf32F4nDCT%2BNkGpGouDJzCJPHsZvkAxP6oi%2Bsbq7rgbBdPiDSXIPR2CwdGo6fQ8AfAZEA1qNFuNFtis9zzc%2BBBN5fP0JBbLrM8TMH1GAe6rD55tcdg%2FOaAiDKT90ChHsIXqDLlWAJ1vXufBnj0nvVCN2YCgn1RGxnbWtw1cme%2FM7jqTfacnlDBSIcd9ZxTDcS8OlYup6ub8wpONJVXvfOTO9lxGaEesMJzGzckGOqUBP0b9ykjVdaavlz%2BfFhNrUpSIGGhuuD1o%2F5M8ce5eayDMQgvm3yefToUNSMgPf25MCtPxX9GHsFc%2BMUpenNpJrt8yexAb2ea7kWpjsab3MvWtkSO5Viru52PiOSea6t5eVwXBHPB9yjlGJBUpZJWvTVW4PNLFYzzO5599lggLyWsZukxy99nmMcUxa8Dgsr8w%2BYJENj8bjZMKeJ%2Bw%2BXD%2FjKR5XTJF&X-Amz-Signature=e951e78c746543fa49f526bfd54b5106f71a3a42442bf50f48d7fd495ed97042&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2BNZZO5%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T234651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGUH%2F3bFFGHlVBZ5wJly7hIsURvjpdfhD6bvYP9ZFNuMAiEAlW9cdISW5wxIy4AwCvSXDpr9Z93VcG0n9V6noLndypEq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDKROSO%2F9CvzXKQquSircAw1hV3mdIfL4QHvoSKBlVqbVBcCV2RWalvoMnR96GxFY4CAg6nJXjl%2FV1JMTkdRtk4Ho%2FcJv0Ig8aqjyv%2FCSnXJWrzJymJfiJklf2BRk%2Bb7cpvu2bOexR5x56igoZbSJpBtM%2BWIQC5EiB8Lsit5SwG14F9PdTSrUQ7X8JSKk0f1oWbh68FpHnimKzNr7yFKRAlspwGQnbOMswB3AOgXN7W9EPyY72ALuCXjtTy1Uj8fL3xVwg9u0YVFM2wI4Qi2wr7zO8s0LppLxIiVdl1qs%2FkdUp9%2BN7ec4HSRkTVFt9A43G06KczH554iDbXNbsAgtleZP4naqkx4eZ5xLOlP7YTgTo2jgpBuCcVZZ6jOkW8pGCk8sEAJqYOuixwdgGonjT6CdFBZWBSAlzmHY8pOVRL82zoCJGFf32F4nDCT%2BNkGpGouDJzCJPHsZvkAxP6oi%2Bsbq7rgbBdPiDSXIPR2CwdGo6fQ8AfAZEA1qNFuNFtis9zzc%2BBBN5fP0JBbLrM8TMH1GAe6rD55tcdg%2FOaAiDKT90ChHsIXqDLlWAJ1vXufBnj0nvVCN2YCgn1RGxnbWtw1cme%2FM7jqTfacnlDBSIcd9ZxTDcS8OlYup6ub8wpONJVXvfOTO9lxGaEesMJzGzckGOqUBP0b9ykjVdaavlz%2BfFhNrUpSIGGhuuD1o%2F5M8ce5eayDMQgvm3yefToUNSMgPf25MCtPxX9GHsFc%2BMUpenNpJrt8yexAb2ea7kWpjsab3MvWtkSO5Viru52PiOSea6t5eVwXBHPB9yjlGJBUpZJWvTVW4PNLFYzzO5599lggLyWsZukxy99nmMcUxa8Dgsr8w%2BYJENj8bjZMKeJ%2Bw%2BXD%2FjKR5XTJF&X-Amz-Signature=6eb10709f0ed39d1605d0e2dca68abdd95fc4d3a42951644f3d2e83866d782b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
