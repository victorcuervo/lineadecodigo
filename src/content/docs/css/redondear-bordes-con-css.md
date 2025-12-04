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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFGE5HL3%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T134435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIEehKM7LXq97hfXLLm17hpo7cLWzcM1Z5CfiBgEMhq1fAiEA5aQicuVxEi5WdSFnwPSInEi%2FLGKI9waDXct056oLbxQq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDMHTkKkth87UGr%2Bl3CrcA4TW5CctyqBx%2BNmlepmE%2B1DPq%2B1hHTCt%2B2jcGcdH9EBz0p4hRPOs%2FdptnBPv5XZ7OfY8QZXyDfcXtI%2F2sJOcZAPow50Wly3ciK5jD4spCrLeNrpODj%2Fje3q4CbIflrTrKh1yrLAXN0evbAXo7%2Btgm8iDf2CN%2F9%2BjYb9MvfLOXcPpB6Ll9pywmQuirUV1EAwBzQtnu3UP2iL%2Fpiw042sUaZpMmDUoKYcyQH4wgnBlf4FB0O0cszbBWjuwKeh1hJrsSxXu%2BTtfkMXduY%2BcqJWEzKkPyo4xyhPUswAF4wKWFOi4qPz8QeAIq2KDdE8pRsnxaqPUfgiLI%2FfvPBaZ23otrn6CYrTd5qCRK7%2BdqzCqC11%2BTxUuzwC%2FyawcbaIwdK8zDjUp25uQ%2B87oPjbe9yeEZbXxA4YUgXvu%2Br5vbp%2F%2F5dJGRvLauEvyslVvEYaR3nWFlccNJffXZcJr0%2FxuqImpFlOCHdxDn3sO6MhrmxARszpK748z65TTy11b6FcwGV%2FEv%2Fpo11gB09MA%2F0eFKLAbzOFKZWohLFfqMiyZS8A%2Bz4vU0IY9AsIxbcpePZwG8cl%2B2YZwdNaxC9cB1xICIw8O2694MNOteONdrWN2cMDMUIocb3jalP4r0U8RFHAMMMqDxskGOqUBXBjjbWeyifacDGCsK6%2B%2Fc%2FRMMNs%2BlvRBQy7ouMIL3emkJtArd2KhImn5cEIDU6z3DqFYOFzOdNhwbruppnUhi777pI2J%2BYIp0ZYxmPNaVFy7uiMeNbeRbeiW6MK1aK6%2F1jShWnVrybxyffOv1eg9nMF86gNKmR0nDfiDiGnt%2BcbO9RPkAV%2BfEyhJlje7V4DuzZlTzds09kwc8ciZDypSoJv%2FSg3%2B&X-Amz-Signature=2f8e9e1bfb0f50fd3fd52a19eed117c4dba0da16a47e900480d93ce014761a38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFGE5HL3%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T134435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIEehKM7LXq97hfXLLm17hpo7cLWzcM1Z5CfiBgEMhq1fAiEA5aQicuVxEi5WdSFnwPSInEi%2FLGKI9waDXct056oLbxQq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDMHTkKkth87UGr%2Bl3CrcA4TW5CctyqBx%2BNmlepmE%2B1DPq%2B1hHTCt%2B2jcGcdH9EBz0p4hRPOs%2FdptnBPv5XZ7OfY8QZXyDfcXtI%2F2sJOcZAPow50Wly3ciK5jD4spCrLeNrpODj%2Fje3q4CbIflrTrKh1yrLAXN0evbAXo7%2Btgm8iDf2CN%2F9%2BjYb9MvfLOXcPpB6Ll9pywmQuirUV1EAwBzQtnu3UP2iL%2Fpiw042sUaZpMmDUoKYcyQH4wgnBlf4FB0O0cszbBWjuwKeh1hJrsSxXu%2BTtfkMXduY%2BcqJWEzKkPyo4xyhPUswAF4wKWFOi4qPz8QeAIq2KDdE8pRsnxaqPUfgiLI%2FfvPBaZ23otrn6CYrTd5qCRK7%2BdqzCqC11%2BTxUuzwC%2FyawcbaIwdK8zDjUp25uQ%2B87oPjbe9yeEZbXxA4YUgXvu%2Br5vbp%2F%2F5dJGRvLauEvyslVvEYaR3nWFlccNJffXZcJr0%2FxuqImpFlOCHdxDn3sO6MhrmxARszpK748z65TTy11b6FcwGV%2FEv%2Fpo11gB09MA%2F0eFKLAbzOFKZWohLFfqMiyZS8A%2Bz4vU0IY9AsIxbcpePZwG8cl%2B2YZwdNaxC9cB1xICIw8O2694MNOteONdrWN2cMDMUIocb3jalP4r0U8RFHAMMMqDxskGOqUBXBjjbWeyifacDGCsK6%2B%2Fc%2FRMMNs%2BlvRBQy7ouMIL3emkJtArd2KhImn5cEIDU6z3DqFYOFzOdNhwbruppnUhi777pI2J%2BYIp0ZYxmPNaVFy7uiMeNbeRbeiW6MK1aK6%2F1jShWnVrybxyffOv1eg9nMF86gNKmR0nDfiDiGnt%2BcbO9RPkAV%2BfEyhJlje7V4DuzZlTzds09kwc8ciZDypSoJv%2FSg3%2B&X-Amz-Signature=e2d5a8153ca1c1da1d46cb0745f768b7795dcaeb2bd95b818ec71e0ded16fb56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
