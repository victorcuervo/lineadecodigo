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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643X3V43A%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T092741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGwYe6T6fb%2FfP0A7bJs9%2F26k9piUkQFZMuE18jXjcNEoAiEA5S9rJ6LjaY8ZWnaiKCR%2FgAqXJgD7iLpXF6sdMwXyGtcq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDGPzLh%2BQ3yv1hyr0LCrcA%2Bg%2FKXAfovdX%2BbkBjP2JeTGcwRDdR1GodNLqT9zPVtWOxIAKe5FFqS1jDJOavX3bwIfVrZ77Xi%2FH7v1v%2FnwCArwbnamVOEd6vHS2dt9L6fvGM%2FTWk7B8SPsx%2Frd5yvUS86MlrujAsWExOtEQ9Ft0YtgjnEEt0jYNSjEwf4CoekrBnqlPLb3ttJWCVKl6p9G3BsMNSY5VVvnM5E8r2MOLMZIaeIFEFENVMigV97FVgHXrCiWLdOYoQXyRhz72k%2BVtj1F5OcTozyF9FyOpOy24GrmGAIT42S5NTbg9syYAHky1M17zQS9OFX3d87PTMlk9X6zcM28bWy5L8mWj6Q4wbMZu4M%2Bu1PL2cy9m6JSRC6JnXp0jpsxiYC3I6SSyfRN5eSAA1EppjN%2BZLNrrBYS%2FsZ0kMZe7mq5F5EBlr7SlM%2Fgk0FVZ0Qjc%2FDYhY5dUL%2FOGo%2BKGm3z4TtLyuMhQNaOTJmddkqQr65NiHII5zEOug5gguaEINi24ZvSnYlb%2BZ8NiY01DnKQItTRykq8nL%2B6LClXjFIA8FbIDhEpLmWKyd3ve94haHXynxyNn39OalI3YBBqYEa%2BqbHEPFj3Dc10nXEzEgbZceiUeaJjAeJDVI0TlKXmcx5n471TBHzSaMIrRicoGOqUB4yDbAob5YmWcecesQRdC9jJE9NJOt8TPvFzIyU3B3nFP4O3b%2FucugL6w0T26Z%2F3Il28PsoVRcVcTdZ1%2BDgRo%2FyhD7YWdEUr58T6WDKO%2Frv5JpGDa0eMJ3pgtTn2HdvsUp%2F377gQubjbmcowvnu2hEyNQKTAAI11MqptnLH7IYfSUaRBZAKpBLGf0v%2Fz3LEQ6kbJSbMdWi8CXdPg2dLMMHzke0fZo&X-Amz-Signature=ada7f5a796d3f27e01bb64da31759811c20d2b8cce8a3d8f32c2b15a97ba863b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643X3V43A%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T092741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGwYe6T6fb%2FfP0A7bJs9%2F26k9piUkQFZMuE18jXjcNEoAiEA5S9rJ6LjaY8ZWnaiKCR%2FgAqXJgD7iLpXF6sdMwXyGtcq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDGPzLh%2BQ3yv1hyr0LCrcA%2Bg%2FKXAfovdX%2BbkBjP2JeTGcwRDdR1GodNLqT9zPVtWOxIAKe5FFqS1jDJOavX3bwIfVrZ77Xi%2FH7v1v%2FnwCArwbnamVOEd6vHS2dt9L6fvGM%2FTWk7B8SPsx%2Frd5yvUS86MlrujAsWExOtEQ9Ft0YtgjnEEt0jYNSjEwf4CoekrBnqlPLb3ttJWCVKl6p9G3BsMNSY5VVvnM5E8r2MOLMZIaeIFEFENVMigV97FVgHXrCiWLdOYoQXyRhz72k%2BVtj1F5OcTozyF9FyOpOy24GrmGAIT42S5NTbg9syYAHky1M17zQS9OFX3d87PTMlk9X6zcM28bWy5L8mWj6Q4wbMZu4M%2Bu1PL2cy9m6JSRC6JnXp0jpsxiYC3I6SSyfRN5eSAA1EppjN%2BZLNrrBYS%2FsZ0kMZe7mq5F5EBlr7SlM%2Fgk0FVZ0Qjc%2FDYhY5dUL%2FOGo%2BKGm3z4TtLyuMhQNaOTJmddkqQr65NiHII5zEOug5gguaEINi24ZvSnYlb%2BZ8NiY01DnKQItTRykq8nL%2B6LClXjFIA8FbIDhEpLmWKyd3ve94haHXynxyNn39OalI3YBBqYEa%2BqbHEPFj3Dc10nXEzEgbZceiUeaJjAeJDVI0TlKXmcx5n471TBHzSaMIrRicoGOqUB4yDbAob5YmWcecesQRdC9jJE9NJOt8TPvFzIyU3B3nFP4O3b%2FucugL6w0T26Z%2F3Il28PsoVRcVcTdZ1%2BDgRo%2FyhD7YWdEUr58T6WDKO%2Frv5JpGDa0eMJ3pgtTn2HdvsUp%2F377gQubjbmcowvnu2hEyNQKTAAI11MqptnLH7IYfSUaRBZAKpBLGf0v%2Fz3LEQ6kbJSbMdWi8CXdPg2dLMMHzke0fZo&X-Amz-Signature=39aa2d2090b728a3ba67e1d5d9ea5ddf66bcc94b78a8666b871af0cf20086444&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
