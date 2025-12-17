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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLXVSINY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T123943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDUc3GBxpU8hf3naB6%2BDuk8XovGAOmdJu%2BhV6dxcURiaAiB6XGUwFYQlExHu72AU1Ge81hh9K0pUliDYiQApsl4%2BTSr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMVZ6v4WKbmfBOu6rsKtwDCq7dltmpbA9Ert537E0czVStMyIV5Y7dveLTEE8KWoQjPdHt2GYrFbr%2FmnCfVIbrW3mNSwncArqjEErZIoG68zaTiM37psSSSokVayJMGMCx7XW2qdmbfbTp036KCbn6rDWJv3VnsFHsh3%2BGCDe%2BlAB432Bpv8X7QOoZR1ABr2yOyBi5omJercnLbP2VblHRAc01gqCiLzhueV1ucTho51Pd1v0f5D1qcsqhQfDIE%2BGjX5nZpDS%2BIop1Jo79G8ATtQc%2BzZ0jl1m3p0lsH2axuMudqDGUZ42h%2B65YFMtpUSbd7Qv8KpivssGrqTbBou9pppUDH3Z0vK1TJrB%2FAlvyG84SMVz0mC0LS0MPhxzRCM4erLC0RINxaGtAWjmA%2BYoWFhgPb25aJ5UpubMErPbs8rZJH71U3W0R8mdM2UvwO%2BJel%2B%2Br6ZXL8NbdAhlhz1aakaXhdQCj4jwqwjV7R%2FhvO%2BQfvMCgqZfGUWgYHTdAJxwnD3JiM9VhUwje8B5WcUe%2BzqtbjudHPxht5j21vSbxuFrjDFDt02hI5Q1Az%2FjrtLMvoMsBK0M0wGRIkbTt20wxi1h%2FScwlIFEgJjPWkfC%2FdxvBrr72yJX%2BMrqqLgVP4h89o1kvBCc0ZkSaGpsw68WKygY6pgHDqDLpLXwBnZI67c%2F%2B6pITVcw0sfdkwYQ0QlZ%2FxqlJiPjjcmWM6WbgmPPODMJlzYiAqNKYuF5QiXG4p1sFHlPM0AQFxQMRz%2FEFGTqgTvvp%2BoQH0uIV7GE9sj5N1QTHbc5RJJ4eXUk8lrELAnjS0IAGX6aQ2qEbWCqU%2Fj3HkuA5xMWYOBHgLrsj4h5rSyudQd4t7QL0DC%2FNSRZ01JmQ2%2FqtqAHU3ZDI&X-Amz-Signature=6738ece0e89b984602587b2d0861e2aae99e3422eddf8068bb34b2ee193e961a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLXVSINY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T123943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDUc3GBxpU8hf3naB6%2BDuk8XovGAOmdJu%2BhV6dxcURiaAiB6XGUwFYQlExHu72AU1Ge81hh9K0pUliDYiQApsl4%2BTSr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMVZ6v4WKbmfBOu6rsKtwDCq7dltmpbA9Ert537E0czVStMyIV5Y7dveLTEE8KWoQjPdHt2GYrFbr%2FmnCfVIbrW3mNSwncArqjEErZIoG68zaTiM37psSSSokVayJMGMCx7XW2qdmbfbTp036KCbn6rDWJv3VnsFHsh3%2BGCDe%2BlAB432Bpv8X7QOoZR1ABr2yOyBi5omJercnLbP2VblHRAc01gqCiLzhueV1ucTho51Pd1v0f5D1qcsqhQfDIE%2BGjX5nZpDS%2BIop1Jo79G8ATtQc%2BzZ0jl1m3p0lsH2axuMudqDGUZ42h%2B65YFMtpUSbd7Qv8KpivssGrqTbBou9pppUDH3Z0vK1TJrB%2FAlvyG84SMVz0mC0LS0MPhxzRCM4erLC0RINxaGtAWjmA%2BYoWFhgPb25aJ5UpubMErPbs8rZJH71U3W0R8mdM2UvwO%2BJel%2B%2Br6ZXL8NbdAhlhz1aakaXhdQCj4jwqwjV7R%2FhvO%2BQfvMCgqZfGUWgYHTdAJxwnD3JiM9VhUwje8B5WcUe%2BzqtbjudHPxht5j21vSbxuFrjDFDt02hI5Q1Az%2FjrtLMvoMsBK0M0wGRIkbTt20wxi1h%2FScwlIFEgJjPWkfC%2FdxvBrr72yJX%2BMrqqLgVP4h89o1kvBCc0ZkSaGpsw68WKygY6pgHDqDLpLXwBnZI67c%2F%2B6pITVcw0sfdkwYQ0QlZ%2FxqlJiPjjcmWM6WbgmPPODMJlzYiAqNKYuF5QiXG4p1sFHlPM0AQFxQMRz%2FEFGTqgTvvp%2BoQH0uIV7GE9sj5N1QTHbc5RJJ4eXUk8lrELAnjS0IAGX6aQ2qEbWCqU%2Fj3HkuA5xMWYOBHgLrsj4h5rSyudQd4t7QL0DC%2FNSRZ01JmQ2%2FqtqAHU3ZDI&X-Amz-Signature=9b2c9578c71c1e96862f31c01f1df359f62b07009abfbfb47aec7279b6fd263a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
