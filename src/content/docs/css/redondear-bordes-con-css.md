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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DZQ5RPV%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T204456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQe2SJc4n60nDgvCynP5pUb8%2Ff3rgTJ5oJlH2X4NrpnQIhAPdDbCrjBZQXFPj2LLt%2FIG2%2F0TJ%2BwOJf%2Ft5Z0qCP8omfKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwRl82VoIfc8a8CAMYq3APYRxtYEhn4TD57DwT2uRu56bvvKRWIjBSNTpKwSvTjs8g4ZwJCdCdcYSsU20R6CQXb7%2BZjCc0Oe0mdBhAjmfWkBrUoyFzUTgyJeVaQREVmHCRqEuNvbj1w0mVscya2WGbIL7mrHjIgC03S0Uj%2F2VqvXlFHylgd6r7xmiUUJvuYDgoUOa1zlWsOzPzH8WyfJVYavTYABkWSxKS%2FoZYADKic7H4CRzHuon1sb5qW64CMPwK1RZd1GaEDfJ3P1k%2FVqL5DJ5xrXfSMNS535eymJRR6SgqVDat10kEnVgbyuy2vHFNd%2FYbJjwfHxYT%2BHUfwgxQOnu32rK6fVtZqJJ8OxIbEq%2B9IRRc2lSUv9NsfmgjiP1a5Rj0zYsav2refwQsNeMIKrM4FGd4CKyrk7WlShYoW1ynHjtEYXkDGRXGiP9RMi41notE00hIebSUyJ8uB4g72DqDzeuEC%2FMokJ9LnFyfV2bhNyI2AOIXcSPEJTCjsM3jK6ml%2FXYcXJ73zbWSJPYmmFfZjOx%2BzjudKTJZ5%2BsYJPD9sLDbVLoAkEoJTNfGZPN0eYkrMdMXg0zxYKVXGslQfhAcKZVTtVPhxhxwchGR1VOuijbr%2FFi8d0nPTgr7dzA0OMEUbVXS4wdubODCN3dzJBjqkATolm6wFoxwtG48jYPsdaMwthUyqk1AjViYfhaBgqzBaaOSyrRyaes2pSZ%2BUyLepNvPjlL%2F%2BI%2BOinFwmgZBWmxhikH9upV%2FkrNI5HA2OcBoJKQccY9dm8lcPRDbheg7rDM7hqqYh1oP%2Ba47rf6Y0fhBGJ%2FC2QvW%2Fd3r7O8tSbyQUt4Lhj5pNuIGf8OSFUZIzKIN3CfS7SBAZJHufp4cqLT0U2Ts4&X-Amz-Signature=80d3c06248e65409a732e82500cedb5673b4bb77163e144a4c8f40b4b98e46f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DZQ5RPV%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T204456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQe2SJc4n60nDgvCynP5pUb8%2Ff3rgTJ5oJlH2X4NrpnQIhAPdDbCrjBZQXFPj2LLt%2FIG2%2F0TJ%2BwOJf%2Ft5Z0qCP8omfKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwRl82VoIfc8a8CAMYq3APYRxtYEhn4TD57DwT2uRu56bvvKRWIjBSNTpKwSvTjs8g4ZwJCdCdcYSsU20R6CQXb7%2BZjCc0Oe0mdBhAjmfWkBrUoyFzUTgyJeVaQREVmHCRqEuNvbj1w0mVscya2WGbIL7mrHjIgC03S0Uj%2F2VqvXlFHylgd6r7xmiUUJvuYDgoUOa1zlWsOzPzH8WyfJVYavTYABkWSxKS%2FoZYADKic7H4CRzHuon1sb5qW64CMPwK1RZd1GaEDfJ3P1k%2FVqL5DJ5xrXfSMNS535eymJRR6SgqVDat10kEnVgbyuy2vHFNd%2FYbJjwfHxYT%2BHUfwgxQOnu32rK6fVtZqJJ8OxIbEq%2B9IRRc2lSUv9NsfmgjiP1a5Rj0zYsav2refwQsNeMIKrM4FGd4CKyrk7WlShYoW1ynHjtEYXkDGRXGiP9RMi41notE00hIebSUyJ8uB4g72DqDzeuEC%2FMokJ9LnFyfV2bhNyI2AOIXcSPEJTCjsM3jK6ml%2FXYcXJ73zbWSJPYmmFfZjOx%2BzjudKTJZ5%2BsYJPD9sLDbVLoAkEoJTNfGZPN0eYkrMdMXg0zxYKVXGslQfhAcKZVTtVPhxhxwchGR1VOuijbr%2FFi8d0nPTgr7dzA0OMEUbVXS4wdubODCN3dzJBjqkATolm6wFoxwtG48jYPsdaMwthUyqk1AjViYfhaBgqzBaaOSyrRyaes2pSZ%2BUyLepNvPjlL%2F%2BI%2BOinFwmgZBWmxhikH9upV%2FkrNI5HA2OcBoJKQccY9dm8lcPRDbheg7rDM7hqqYh1oP%2Ba47rf6Y0fhBGJ%2FC2QvW%2Fd3r7O8tSbyQUt4Lhj5pNuIGf8OSFUZIzKIN3CfS7SBAZJHufp4cqLT0U2Ts4&X-Amz-Signature=b573aad6beee24c3d06a40ca7a5769bb8c74f0c296b8ee5fb092f6c637655d80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
