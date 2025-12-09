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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664C5LZWHN%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T052746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEKeQdEXg9SBf2j6VGpPpd3G63zSfKxJktJiFNVsPC%2BRAiBg9qOrpOWkkirFXha0BlE2TVdR0d1549TwietVVYpKNSqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlS2PF62OIcxdlYCtKtwDNrF4YuzF2czEDEWWRCUIhgxwKgRhcNIN3GBCilhsKMsMDDm11e5%2BpLMoW66%2FWMBAyeiZN%2B7HHbmRwext%2BAFersNPGLv5X0%2BzOfcASLnrHxwvmMEYzEq28BoqULxycYS39Mf86fv1MLfHezH2VYIQSJmh%2BM0sx48zISmQW%2BFWuYNzulkO5ZnlxEFBRoAYDoFX6PM6xN2M14wj0NmatiHE9usCGW7SejtpuazRD7t9XIz58la1d5Slrv4RPR0050112CFsmk%2BHJknn5v7x4Wh2DhkfsY7RSdvCciTkdazV4kTMe7rWTcX2ur7T%2FqNRm2Y2R77e1SFofuyoMX28Vmnnvxqz6HXBeM6fiXoSPWHsjGoJ4QbE6hhYidP7xrJYi2NZfz6cpX9o0EmBcronKmPQ%2FnZbyFv85U1wcJ7XfROQSqPi3L0RdK4vBDDM1fqg2oR4XNf5U5AQtntnJcdTIHuq33fo0xx%2FpFk55HGGtwjqDBVP3cEHhKW4fnL8%2F%2FocNuqhcPcahAgB%2FO56nbC4NhvUWLuIkb9q07AJr08muBOR%2BrJlJgSBYI076Csbz2q635oVUIloFG%2F3vbQAcRzWm2wPnMudDjoHpWxzWvalvwSRianc5gEPncZx52Jq6QgwxOXeyQY6pgEA7pE82%2B3onfRTAoA1hZM1sL3Tb5ajgOKfo4uJV05D0TSmIbM94J2JKv6CjMT9ihcZkbYGCOcq0eQXTMpDwraRCpaJR7EepF4fIL8whcN6p%2BOQuf3cvbvmgfvGMUwPzTsQJAQ93RgY0%2FxwlZShFzhbqxQpQfr49W0POCVgS1jPfYzXh0KCzYkzWhMtuxEJGWcUxyXOsZKqDWfzuv46mkADwAmeiDSr&X-Amz-Signature=966de96ad16fc15ad4956747ac2327a341db4f84812d4d814ecf0a0ea63f2bcd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664C5LZWHN%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T052746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEKeQdEXg9SBf2j6VGpPpd3G63zSfKxJktJiFNVsPC%2BRAiBg9qOrpOWkkirFXha0BlE2TVdR0d1549TwietVVYpKNSqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlS2PF62OIcxdlYCtKtwDNrF4YuzF2czEDEWWRCUIhgxwKgRhcNIN3GBCilhsKMsMDDm11e5%2BpLMoW66%2FWMBAyeiZN%2B7HHbmRwext%2BAFersNPGLv5X0%2BzOfcASLnrHxwvmMEYzEq28BoqULxycYS39Mf86fv1MLfHezH2VYIQSJmh%2BM0sx48zISmQW%2BFWuYNzulkO5ZnlxEFBRoAYDoFX6PM6xN2M14wj0NmatiHE9usCGW7SejtpuazRD7t9XIz58la1d5Slrv4RPR0050112CFsmk%2BHJknn5v7x4Wh2DhkfsY7RSdvCciTkdazV4kTMe7rWTcX2ur7T%2FqNRm2Y2R77e1SFofuyoMX28Vmnnvxqz6HXBeM6fiXoSPWHsjGoJ4QbE6hhYidP7xrJYi2NZfz6cpX9o0EmBcronKmPQ%2FnZbyFv85U1wcJ7XfROQSqPi3L0RdK4vBDDM1fqg2oR4XNf5U5AQtntnJcdTIHuq33fo0xx%2FpFk55HGGtwjqDBVP3cEHhKW4fnL8%2F%2FocNuqhcPcahAgB%2FO56nbC4NhvUWLuIkb9q07AJr08muBOR%2BrJlJgSBYI076Csbz2q635oVUIloFG%2F3vbQAcRzWm2wPnMudDjoHpWxzWvalvwSRianc5gEPncZx52Jq6QgwxOXeyQY6pgEA7pE82%2B3onfRTAoA1hZM1sL3Tb5ajgOKfo4uJV05D0TSmIbM94J2JKv6CjMT9ihcZkbYGCOcq0eQXTMpDwraRCpaJR7EepF4fIL8whcN6p%2BOQuf3cvbvmgfvGMUwPzTsQJAQ93RgY0%2FxwlZShFzhbqxQpQfr49W0POCVgS1jPfYzXh0KCzYkzWhMtuxEJGWcUxyXOsZKqDWfzuv46mkADwAmeiDSr&X-Amz-Signature=2aae60a504fefc679c7442655f19f266a323831977dbce9d427c4347b119e0f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
