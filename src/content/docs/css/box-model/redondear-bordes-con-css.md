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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTOEC4S3%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T142959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3qMS56FzhdHES0TZ1TR7yX4yVTEK574uhl2OFBhZ%2F7QIgJGQHNbaF1u8qQkiGkTTVzpCengaUKAv0vzHkzrNwOCsq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDCVAWA6rlcV%2FmRDfPyrcAxYyOu%2F0vEoNEjtXVspyCNMJNrlUvPz4%2FDcMOSed%2F%2BPZMS3FI5P5l1FH7LYPIwvh4QXOPDQBVAXkOQjGP%2F6ystqh%2Fva2lLgrVloTQZLSfiIBtD21sNkuRxOQYff05MDkEydl7gQMyI3%2FUXAenXHLOHB7FRpVbdjhiJBcA9ly3h04JZtLBLi%2Bu1klh6q7J8OEV3KCG1D6heCczgM38sFMPbFUQwloP5dZtyZwbZ9r3ds70WvArd3BvOz%2Btl2hh3oCoIYWTVBwNm8a%2FwefFENyEAOvf92cFcwlAfhuL9utPfXlc4nFrTB9xeKuZ9zNYGaz8LzMW2m%2FA7obPThahbfe2X4jcOJK6HIV8My86m%2BUCV8bokhJEatT%2BsHUyQ%2B9Ap3SRu7I%2BPYHvYf7hLLOHFqH3kGulfAYiPduBN6ZDGSa6y0vkpxJXEoXMPuc%2FXTi9CTVSjjBzkRaxc6iZTEiyxgCgF3KTsXfWS22oMNMTElttDmkJGWoBK3YVU1ox572fnTF8SkCfU4RKeeEk%2FneqftVU%2F8%2F68bDaAxUxXUvQuvs1Ybg07Si9EaooGaJV%2Fvt90nLrGuE3Gb8ZPj%2FMkRGLESlHq7wQWUOw%2B6tE7tpIjQ%2FaWFyDgN9hFc0qVKCmXsDMOLhisoGOqUBq6lD%2BI78RJJItmE0357OE4e5U3nPf%2BJ85sgkt%2Fi6vxRY%2BITCOvvanLLIQBJzBkaiCq0sYgHhNKxgJ%2Bj%2BlZMfX%2FIG2VgMLg2bjZ5qCZlbR5gE2Bvu%2ByK6GZlLOtorFF0%2FUu4ff3CXaEPZnSj2XMJ%2BPH%2FZAtVJkdGkdVWtY0yBAT%2FssgTaIvW2jHpP%2BCK1LienpFd50FEO2u5EH1ffQgRHTwMjPBck&X-Amz-Signature=f56410615c30e4fe52896f0f5f29db450c3ce33b106f718bb1306845afadaf73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTOEC4S3%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T142959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3qMS56FzhdHES0TZ1TR7yX4yVTEK574uhl2OFBhZ%2F7QIgJGQHNbaF1u8qQkiGkTTVzpCengaUKAv0vzHkzrNwOCsq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDCVAWA6rlcV%2FmRDfPyrcAxYyOu%2F0vEoNEjtXVspyCNMJNrlUvPz4%2FDcMOSed%2F%2BPZMS3FI5P5l1FH7LYPIwvh4QXOPDQBVAXkOQjGP%2F6ystqh%2Fva2lLgrVloTQZLSfiIBtD21sNkuRxOQYff05MDkEydl7gQMyI3%2FUXAenXHLOHB7FRpVbdjhiJBcA9ly3h04JZtLBLi%2Bu1klh6q7J8OEV3KCG1D6heCczgM38sFMPbFUQwloP5dZtyZwbZ9r3ds70WvArd3BvOz%2Btl2hh3oCoIYWTVBwNm8a%2FwefFENyEAOvf92cFcwlAfhuL9utPfXlc4nFrTB9xeKuZ9zNYGaz8LzMW2m%2FA7obPThahbfe2X4jcOJK6HIV8My86m%2BUCV8bokhJEatT%2BsHUyQ%2B9Ap3SRu7I%2BPYHvYf7hLLOHFqH3kGulfAYiPduBN6ZDGSa6y0vkpxJXEoXMPuc%2FXTi9CTVSjjBzkRaxc6iZTEiyxgCgF3KTsXfWS22oMNMTElttDmkJGWoBK3YVU1ox572fnTF8SkCfU4RKeeEk%2FneqftVU%2F8%2F68bDaAxUxXUvQuvs1Ybg07Si9EaooGaJV%2Fvt90nLrGuE3Gb8ZPj%2FMkRGLESlHq7wQWUOw%2B6tE7tpIjQ%2FaWFyDgN9hFc0qVKCmXsDMOLhisoGOqUBq6lD%2BI78RJJItmE0357OE4e5U3nPf%2BJ85sgkt%2Fi6vxRY%2BITCOvvanLLIQBJzBkaiCq0sYgHhNKxgJ%2Bj%2BlZMfX%2FIG2VgMLg2bjZ5qCZlbR5gE2Bvu%2ByK6GZlLOtorFF0%2FUu4ff3CXaEPZnSj2XMJ%2BPH%2FZAtVJkdGkdVWtY0yBAT%2FssgTaIvW2jHpP%2BCK1LienpFd50FEO2u5EH1ffQgRHTwMjPBck&X-Amz-Signature=df21fe750bb92700c03f9d188978c26cf67016cc819941c4f3e6bf2178143057&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
