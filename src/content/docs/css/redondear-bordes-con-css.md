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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5JSHQNM%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T091622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDBPQ2YL6ExPCBPiEIlmLvxs27ywm9X8X8lp6mR09NVygIhANZJ4WWdUFZgk4PT9OW0f2gV4RSArgRDkonR8Dxjx4qMKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw3kVlIdDlOMdYwE40q3APhdKVxKRFDNxcgayYANLobjYCobycQseiv2jNrdCa2H40E3wdBiBWi0s61CbuKzXk8VWGA6tDB0zzNJhdVjXmPouvIKmC9Vu5NEXWeGCo4RgKhAvmLT8ubJEVgv5QRtNCjYOTnbbZ7mB5nWkG5Ih%2Fp9hYzrL792dh2sAsL26i2jonIXAHdAN8LO%2BoFB4WcRXOnKWMPATGSnNyOFZbrOZGVzdPq8zMgrSL4F2FH%2BVLWjM7sVLbAwll%2FfH7HhOvYCYG5jw4WE5e6dkpBU1spNUv2YWm1CLYwLKrEkgof8G%2BgghBfefIVsbLBEmVD2pXNeSj%2F%2FmlXiZvYKmWo%2FK9PQdGT%2FqSPaQYh%2B%2BkxtaIVRVK7RrCmh%2FzTzxpChfOphHFVC96fxfGo78nEsqeIZML9pjOUD%2BKzOJujNGVJxci87hYRqZ6DGi7ArNDfrMvgTnNdA2j%2F4t7VvXLDSihXzHC8UKgSn2wyZsxTwax5zVlFdbujX6dExbCFy1pJ%2FlnGrfLEVZf6DrmTgEPhgfHK2sPQAjYp3vcxe8zCaUiLtavT6iTp7O%2FVUALVdWfkq2mBNueTcnR6IjhESaELEH2aEDrJb4NHYpFYQtmjN14wbqCr4Ll1U8Z0dmb%2B4wvqpohh4jCN7tnJBjqkARSaD2NeUZTU5S%2BZk74dsqj4eYuNAw1FWjTHW45ow%2BFupI7lZJAKYEoM%2B2n2ZCokvQtnpkO72HP44F104CSO6y%2BiQZrUnnU%2BpGUiCAhj%2BDUmcLFpip%2BUslV0pbAcQz%2FrBz0jII0R62F1M6qs%2FMTgDQq7VNzD%2F5QV1bwg5vuaXHfyj8vDoM0okanYZuh3LOpi8iRPh1pAxWJ3vq9gnjUReliwSCSh&X-Amz-Signature=36af4883baca9e30b47cf2593aaf9e99cde2c8f258f74537fd3d2794f71b4d91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5JSHQNM%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T091622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDBPQ2YL6ExPCBPiEIlmLvxs27ywm9X8X8lp6mR09NVygIhANZJ4WWdUFZgk4PT9OW0f2gV4RSArgRDkonR8Dxjx4qMKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw3kVlIdDlOMdYwE40q3APhdKVxKRFDNxcgayYANLobjYCobycQseiv2jNrdCa2H40E3wdBiBWi0s61CbuKzXk8VWGA6tDB0zzNJhdVjXmPouvIKmC9Vu5NEXWeGCo4RgKhAvmLT8ubJEVgv5QRtNCjYOTnbbZ7mB5nWkG5Ih%2Fp9hYzrL792dh2sAsL26i2jonIXAHdAN8LO%2BoFB4WcRXOnKWMPATGSnNyOFZbrOZGVzdPq8zMgrSL4F2FH%2BVLWjM7sVLbAwll%2FfH7HhOvYCYG5jw4WE5e6dkpBU1spNUv2YWm1CLYwLKrEkgof8G%2BgghBfefIVsbLBEmVD2pXNeSj%2F%2FmlXiZvYKmWo%2FK9PQdGT%2FqSPaQYh%2B%2BkxtaIVRVK7RrCmh%2FzTzxpChfOphHFVC96fxfGo78nEsqeIZML9pjOUD%2BKzOJujNGVJxci87hYRqZ6DGi7ArNDfrMvgTnNdA2j%2F4t7VvXLDSihXzHC8UKgSn2wyZsxTwax5zVlFdbujX6dExbCFy1pJ%2FlnGrfLEVZf6DrmTgEPhgfHK2sPQAjYp3vcxe8zCaUiLtavT6iTp7O%2FVUALVdWfkq2mBNueTcnR6IjhESaELEH2aEDrJb4NHYpFYQtmjN14wbqCr4Ll1U8Z0dmb%2B4wvqpohh4jCN7tnJBjqkARSaD2NeUZTU5S%2BZk74dsqj4eYuNAw1FWjTHW45ow%2BFupI7lZJAKYEoM%2B2n2ZCokvQtnpkO72HP44F104CSO6y%2BiQZrUnnU%2BpGUiCAhj%2BDUmcLFpip%2BUslV0pbAcQz%2FrBz0jII0R62F1M6qs%2FMTgDQq7VNzD%2F5QV1bwg5vuaXHfyj8vDoM0okanYZuh3LOpi8iRPh1pAxWJ3vq9gnjUReliwSCSh&X-Amz-Signature=6b2b4196675215e27f840daa3f51e5d877436d5dc1257215cda6743909649af8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
