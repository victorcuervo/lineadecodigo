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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RD6J6NW6%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T194744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAmzLGA1gVqPWMjT1QxD%2BoC7bI0e%2B2DKso0IGDKCCn%2BVAiBHusI6VjuntROSVBvFuYaQvpd2HocaVJw874z4s0B3oir%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIM%2FUqRlwNl0PoiusD6KtwDcxGCOb4oiwL1DXEWjPZGMAkCnqHYJavDiL9iDtrIJSG5LIB4DrDsw7dVLbgmdO6cXyxJZITNayvz9NC0dhQc6BNGbnkcS2l5WRw5MafCiqIKqgfwFfI%2FGLZpMwMFwNeg7%2BZ%2ByDIE%2FJXCfctVj6BvpwTzOWg7iGOohk0BiKGr%2FaWvMko2tByCp%2F3fF21pvxyMAiEpLRxYJ3qEWYDYTPb00AycH4jBOctq1L%2Fcrb6LUZoU2oF6fjxLjXUsC5qsy5PdzPnEEs9oKaHxpsiVDGhRoZ3ycerfS8mX3KG2FEPn1qlpuw2Nvfrg75%2BS0iFZIrsCnJsUoliP4ubC%2BAOdHi7VL52AYHUqldXai1pA2UcMfYntjK9KZSyHLAabzozg5nSZX9So5nZULYL4q0HRSi5KWYT%2FwY2CtSbnF3LSZ0v9MW0n95xOs97zNyj14aWW4Gao7O63iuxsTNdLNi86DY05ucBKI9hE49AEGNsrVIgjVh9IQY6ta%2FGFnEzSh%2Fxi%2B86MgZGF3a1Rf9iXxIaLl5G7fk7M4gJKwn%2F7H3vHC7Jp%2B95BW%2FydWHYxxlV6gDV0Mz2txXQwsbraKY2SYMKGrmUg3Q1fCvGAZsTsGlL4vylAeraSTTgPK6AXSqwvK0cw%2F%2B3LyQY6pgFr37DKgElj%2FN%2F51w%2FqrZT%2BwNf%2BZfn8lhKAdsFj7%2BmboFW6CCXtvJo%2B7mIjJcuy4W4RapjuKBv%2F%2Be15RxzDbe3P33g3kttQHUJ8DRhyosS4G8XYPLEpenXgJjPdvCPmpe%2BtVu92oftmj8XToz6LE7ydQh5wgnr%2FulYkKC5J6XuFRz%2FIaFOpFU1Ccbt96OFmNJ5u7hC19Z%2BYlQAiLHryujl3616FzgmD&X-Amz-Signature=bd90a11b5b4c9b54ec0db21fe7b29ce8e59ce2d90111d13c5c0c843da1fd7f5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RD6J6NW6%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T194744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAmzLGA1gVqPWMjT1QxD%2BoC7bI0e%2B2DKso0IGDKCCn%2BVAiBHusI6VjuntROSVBvFuYaQvpd2HocaVJw874z4s0B3oir%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIM%2FUqRlwNl0PoiusD6KtwDcxGCOb4oiwL1DXEWjPZGMAkCnqHYJavDiL9iDtrIJSG5LIB4DrDsw7dVLbgmdO6cXyxJZITNayvz9NC0dhQc6BNGbnkcS2l5WRw5MafCiqIKqgfwFfI%2FGLZpMwMFwNeg7%2BZ%2ByDIE%2FJXCfctVj6BvpwTzOWg7iGOohk0BiKGr%2FaWvMko2tByCp%2F3fF21pvxyMAiEpLRxYJ3qEWYDYTPb00AycH4jBOctq1L%2Fcrb6LUZoU2oF6fjxLjXUsC5qsy5PdzPnEEs9oKaHxpsiVDGhRoZ3ycerfS8mX3KG2FEPn1qlpuw2Nvfrg75%2BS0iFZIrsCnJsUoliP4ubC%2BAOdHi7VL52AYHUqldXai1pA2UcMfYntjK9KZSyHLAabzozg5nSZX9So5nZULYL4q0HRSi5KWYT%2FwY2CtSbnF3LSZ0v9MW0n95xOs97zNyj14aWW4Gao7O63iuxsTNdLNi86DY05ucBKI9hE49AEGNsrVIgjVh9IQY6ta%2FGFnEzSh%2Fxi%2B86MgZGF3a1Rf9iXxIaLl5G7fk7M4gJKwn%2F7H3vHC7Jp%2B95BW%2FydWHYxxlV6gDV0Mz2txXQwsbraKY2SYMKGrmUg3Q1fCvGAZsTsGlL4vylAeraSTTgPK6AXSqwvK0cw%2F%2B3LyQY6pgFr37DKgElj%2FN%2F51w%2FqrZT%2BwNf%2BZfn8lhKAdsFj7%2BmboFW6CCXtvJo%2B7mIjJcuy4W4RapjuKBv%2F%2Be15RxzDbe3P33g3kttQHUJ8DRhyosS4G8XYPLEpenXgJjPdvCPmpe%2BtVu92oftmj8XToz6LE7ydQh5wgnr%2FulYkKC5J6XuFRz%2FIaFOpFU1Ccbt96OFmNJ5u7hC19Z%2BYlQAiLHryujl3616FzgmD&X-Amz-Signature=6a9bade5287c479c80ee41ea506c2b97c315e155c4306b5992152cdb0128ac15&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
