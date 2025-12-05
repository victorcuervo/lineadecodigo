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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEYD6J7T%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T181923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICZi7dWUGxOW1lJ%2BKw8aId%2BJMRiM6y8B1GpNbBrRQL2AAiEAqLejsl%2FAEs13CFWFukG7rU2XjDWeFwRb%2FwJY9FmnbXQq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDKbisfruUKFGAaolyircA5K2tZwiZnMv1imWkKv8HjEyC%2Fy62AmuzdxALM1nouO1RWPW9rR65WcIHlFESyIwO1c4vk6wGgZRgX0A%2BkHQBq5R5bieYVIF9DRPIXjwqKurPKoN5crxhIK%2BZE%2FXTU5GrhprqtrkO1qqEL83eCDjeWrrt0VPWDm3%2Bh7W20xr8lBnxWiuTjsdi7n0XvDbpgeAztnQL%2F8yp1AtAsLzF1Z0NKFbYxojBVDkfZszEnfNdVftQwMvkK%2BbnmHhxvdEnvmfBHspHrAnhc4yyFfX%2FB%2F6XRD5jwcvEOCFzpS6gfybV1MNAK%2BDHEf8v9UNWhSunmTERwisB%2B2YUf5OmZzUou9e6jh39zTKpMYF7km7ztEO%2BMSFxhv4NS1KqtdXG%2FlcRQnJi3k324prtTEoBFSR0VIKeYmeFwS2hxqcVS%2F%2F%2B0LGZFmlGRC8STe1eoAiPZj9zKwqy%2Bugirz%2B9L6tkn1qsnbz3LLsyca9mkuNWLlzVLgQr%2BBmBF5uu3hNYDIUlKIwQGKHWfpfoAPwDD%2FfRoAnbv4vaTlBYQ2dztMzRXPRxtgQ8kt98mLaN%2F3leYNXIqqMnmbpKnzoGY9S14lwGovAHzw%2BkiLaYAuDpfwB6PCC6EmegSe45cyfYU0omXYJ3fL5ML7hy8kGOqUBUPAeYLnY0Ah0OCQ8e%2Bp3n0tkWm7hzMOLGBpLIhUpERrTSHVHI%2BqD7JWHVGRciJJBsCBUFHe0gpRHEErQOy6QEMFBJxlROOoL4HlKQw8V8jYhex4CXgxbR4M6rvPacTUY7FztmfUIVTLXiSlPdQXWg1hp0XMDFVWJ5GKDF2W3Pj71uu6WTLgQsLOSWZ6sEflElBIbfqGC0tqff5oyvtY11gZvQev%2B&X-Amz-Signature=826fd04b1cf3679830b1dd295c7cc298c8969fc9d28b291898724d81c2fec0da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEYD6J7T%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T181923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICZi7dWUGxOW1lJ%2BKw8aId%2BJMRiM6y8B1GpNbBrRQL2AAiEAqLejsl%2FAEs13CFWFukG7rU2XjDWeFwRb%2FwJY9FmnbXQq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDKbisfruUKFGAaolyircA5K2tZwiZnMv1imWkKv8HjEyC%2Fy62AmuzdxALM1nouO1RWPW9rR65WcIHlFESyIwO1c4vk6wGgZRgX0A%2BkHQBq5R5bieYVIF9DRPIXjwqKurPKoN5crxhIK%2BZE%2FXTU5GrhprqtrkO1qqEL83eCDjeWrrt0VPWDm3%2Bh7W20xr8lBnxWiuTjsdi7n0XvDbpgeAztnQL%2F8yp1AtAsLzF1Z0NKFbYxojBVDkfZszEnfNdVftQwMvkK%2BbnmHhxvdEnvmfBHspHrAnhc4yyFfX%2FB%2F6XRD5jwcvEOCFzpS6gfybV1MNAK%2BDHEf8v9UNWhSunmTERwisB%2B2YUf5OmZzUou9e6jh39zTKpMYF7km7ztEO%2BMSFxhv4NS1KqtdXG%2FlcRQnJi3k324prtTEoBFSR0VIKeYmeFwS2hxqcVS%2F%2F%2B0LGZFmlGRC8STe1eoAiPZj9zKwqy%2Bugirz%2B9L6tkn1qsnbz3LLsyca9mkuNWLlzVLgQr%2BBmBF5uu3hNYDIUlKIwQGKHWfpfoAPwDD%2FfRoAnbv4vaTlBYQ2dztMzRXPRxtgQ8kt98mLaN%2F3leYNXIqqMnmbpKnzoGY9S14lwGovAHzw%2BkiLaYAuDpfwB6PCC6EmegSe45cyfYU0omXYJ3fL5ML7hy8kGOqUBUPAeYLnY0Ah0OCQ8e%2Bp3n0tkWm7hzMOLGBpLIhUpERrTSHVHI%2BqD7JWHVGRciJJBsCBUFHe0gpRHEErQOy6QEMFBJxlROOoL4HlKQw8V8jYhex4CXgxbR4M6rvPacTUY7FztmfUIVTLXiSlPdQXWg1hp0XMDFVWJ5GKDF2W3Pj71uu6WTLgQsLOSWZ6sEflElBIbfqGC0tqff5oyvtY11gZvQev%2B&X-Amz-Signature=b621388a063874d71574a57972c50188bfbd15cc6b849216b588dccbca73f02b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
