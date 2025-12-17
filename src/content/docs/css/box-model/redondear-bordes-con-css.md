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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5KV45R3%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T192025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDhtxurlluwGcY27qRwsPdjCPVuAqjdu2yHX7cTtD7l6gIgLc5VwaqHX9pmzlKDO4fhL05eYWVIi0FSxdYgesKHzuUqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ2hNWwEUvxZ31m4EyrcA%2BaqtBCQ4Og32fbH%2BAyFRJwYJ83FXRKEOJbdEsuQDzrwripC5ZfbeYTcY%2F2WfdY%2FYOtRd63hkJ03wSewaZ9IXfPDAOjS6iVShHWcvYLe2CHq8taSNh%2BtkXaC91dLrGG7%2BA%2BVty%2B3ymFyh6%2BshXfFHONDLDuO%2FXHfPvATGACURCExBzA63JC0S0mO7ZhhKvAe8vxO%2BpiDImZJvofHqvfsgAlkMadeEd8xpU7P07MvMavFEdeoZuIxXRqVrp%2Fb1YNSM6q74NhQyDT%2Btpww6DoX%2BUee%2BqpCSl0qKxpEzYdqA9NwEMc3kAClN4ieMCuIksNlzcfZpnWUOC1vFIVk7ZlzOfHCXXA2Q4%2F0UVF1YAv6Zh6pfzQnJncG8Jjxp8WJ5JlGwMbaLYDktmsjNscQQ7NcIar2NzrrZSl7XgAq76MaTYUSibi%2BQGMpNK4Dd%2FP10tECBbboX8BbzbXn%2Bcvu23nLIGX6KWFbALD6I3xR%2F8ZlvazHrtetCpK4u4HNQSVKrj8Mefj13l0mkW3a7XQUwW71pJ8%2Fd69wo6MVQWBJsYs5kE%2FYQgAZ%2Fe%2B%2Fb0w5Qc6uGHBArct7u6OpOdR%2Bn9Kg8wI%2FAj0hEhSFpN5RRRdP2lB0gJn4ljk%2FelXnwju4g6OxMKGfi8oGOqUBtYSS6CI6rZzdSg38MecS4AvvGU2TqqMErKdWoJ4JnMiTXOH65EY2hTFmiyewZ8ixGuKm0LMEqSS6Z4%2BH63FYM7coMqGB8pD3HQkpVIl2Sj7X8ekImBNime2uWtgbbmSIZ0mIKW9jwKbhg1%2FjMNVh%2FF1PZHE4cEJip0STy8gkzOFjPmOHrHO709fZzlL08XRQG9RmdKmLNl76NaiuqCAaPnOnFZAG&X-Amz-Signature=c893c35c976cc811378d1660ee91ddf2d8f1eefb3294c9fc72f89a8736ed2c2e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5KV45R3%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T192025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDhtxurlluwGcY27qRwsPdjCPVuAqjdu2yHX7cTtD7l6gIgLc5VwaqHX9pmzlKDO4fhL05eYWVIi0FSxdYgesKHzuUqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ2hNWwEUvxZ31m4EyrcA%2BaqtBCQ4Og32fbH%2BAyFRJwYJ83FXRKEOJbdEsuQDzrwripC5ZfbeYTcY%2F2WfdY%2FYOtRd63hkJ03wSewaZ9IXfPDAOjS6iVShHWcvYLe2CHq8taSNh%2BtkXaC91dLrGG7%2BA%2BVty%2B3ymFyh6%2BshXfFHONDLDuO%2FXHfPvATGACURCExBzA63JC0S0mO7ZhhKvAe8vxO%2BpiDImZJvofHqvfsgAlkMadeEd8xpU7P07MvMavFEdeoZuIxXRqVrp%2Fb1YNSM6q74NhQyDT%2Btpww6DoX%2BUee%2BqpCSl0qKxpEzYdqA9NwEMc3kAClN4ieMCuIksNlzcfZpnWUOC1vFIVk7ZlzOfHCXXA2Q4%2F0UVF1YAv6Zh6pfzQnJncG8Jjxp8WJ5JlGwMbaLYDktmsjNscQQ7NcIar2NzrrZSl7XgAq76MaTYUSibi%2BQGMpNK4Dd%2FP10tECBbboX8BbzbXn%2Bcvu23nLIGX6KWFbALD6I3xR%2F8ZlvazHrtetCpK4u4HNQSVKrj8Mefj13l0mkW3a7XQUwW71pJ8%2Fd69wo6MVQWBJsYs5kE%2FYQgAZ%2Fe%2B%2Fb0w5Qc6uGHBArct7u6OpOdR%2Bn9Kg8wI%2FAj0hEhSFpN5RRRdP2lB0gJn4ljk%2FelXnwju4g6OxMKGfi8oGOqUBtYSS6CI6rZzdSg38MecS4AvvGU2TqqMErKdWoJ4JnMiTXOH65EY2hTFmiyewZ8ixGuKm0LMEqSS6Z4%2BH63FYM7coMqGB8pD3HQkpVIl2Sj7X8ekImBNime2uWtgbbmSIZ0mIKW9jwKbhg1%2FjMNVh%2FF1PZHE4cEJip0STy8gkzOFjPmOHrHO709fZzlL08XRQG9RmdKmLNl76NaiuqCAaPnOnFZAG&X-Amz-Signature=7a00c3bcbdd9f4e07c4d7cdc7d3316464583798416c48963563529c2b5afb4ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
