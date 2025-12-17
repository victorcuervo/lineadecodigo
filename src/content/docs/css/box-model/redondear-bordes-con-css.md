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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YO5OOZX%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T183042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICSVCYVxeIova7dCbJs8h589adaVg8TshfBHYg73vZIGAiA6eY9kNIrC%2BK4Fjz31EQyaKpmb%2FLQsTVqOxD5ZUyCkcCqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOyrLw%2FowsRrnt2tSKtwDHjXVs5SPsFwBZLED8m5v4n5kk%2Bey6ujC7HQK3v9vFRCQ9jZwuWE28MkQT1lyTznf2qIQiAyrUtMxqrTqZcE%2FJX2So8z%2FoaBzkNak8OJySSxiObQ2uHVnix%2FjpOPJ3huBW21clt3ihIJBKPk6msj6pcVzG%2F58apO5s3vDosqfu0Gj8zWiXngIwZ9qxflaK3RpnBnxRfvBj82uJJWmqJ%2BaceOgxhVxX0wwJF0HPx05bM9cjtOP%2FEYPMUebjuW59fGqqgdK9FToOHpm0V1n84oywM2U1x%2FeMuJbrHkNRrGWGW4rAg1VA9MEmD9qGvGXkE93WZ8FDYXxFg6ujOZmjVq8Sy526gNdreFOcQVnmIQwWPmhqcxmNba7PbXcc%2BrbLWsNYXhjj%2BPDmMWmOkZCo3uszNExVJXBCJJBYOWxADdYk7EWobLn0Pa%2FU2h%2F7cN2a7kt9BCQoT8fYqips%2FWMNwVT9GR6D4H53c2jNNLb2y4YAp4g9YIQbw4AZASDZk39ENHivkcoCLWVMnWcA6Tw8h5Nyy9kOFp%2FWE%2FthIaN6URmDKBpI2DMGq9KKpXVH7C%2Be0IJ%2FV8YPoYmd9w66YFuphY6q06cN00%2BwRZ7So%2F6s%2Bvbu0r7lDvJLOrajxNJMp4wgKCLygY6pgFcSSpopvJ%2BCP5M4pMDT5xny7BkDsPUN8NscN%2BHnr1sgC0sY5wJA9QO6o0f%2F8SGPAUMClDDhGR%2FF7Jlc0HaIuwJEwOFwqrIszvQATmaJz587tTRi7R3HFI6wRtCGkkQtkZpQfexkLDmIw%2BfMKbWM08VXG2J7Ut5odbgC9mMLVN9gxuYGiPIGCbmjuSNd31ymlFUDqn22IEZg9tcp4W1z%2B7aM9vbl5Pn&X-Amz-Signature=507f6670ca5dcb437d2a12eaac297328014e0adb528ee927542719a678797895&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YO5OOZX%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T183042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICSVCYVxeIova7dCbJs8h589adaVg8TshfBHYg73vZIGAiA6eY9kNIrC%2BK4Fjz31EQyaKpmb%2FLQsTVqOxD5ZUyCkcCqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOyrLw%2FowsRrnt2tSKtwDHjXVs5SPsFwBZLED8m5v4n5kk%2Bey6ujC7HQK3v9vFRCQ9jZwuWE28MkQT1lyTznf2qIQiAyrUtMxqrTqZcE%2FJX2So8z%2FoaBzkNak8OJySSxiObQ2uHVnix%2FjpOPJ3huBW21clt3ihIJBKPk6msj6pcVzG%2F58apO5s3vDosqfu0Gj8zWiXngIwZ9qxflaK3RpnBnxRfvBj82uJJWmqJ%2BaceOgxhVxX0wwJF0HPx05bM9cjtOP%2FEYPMUebjuW59fGqqgdK9FToOHpm0V1n84oywM2U1x%2FeMuJbrHkNRrGWGW4rAg1VA9MEmD9qGvGXkE93WZ8FDYXxFg6ujOZmjVq8Sy526gNdreFOcQVnmIQwWPmhqcxmNba7PbXcc%2BrbLWsNYXhjj%2BPDmMWmOkZCo3uszNExVJXBCJJBYOWxADdYk7EWobLn0Pa%2FU2h%2F7cN2a7kt9BCQoT8fYqips%2FWMNwVT9GR6D4H53c2jNNLb2y4YAp4g9YIQbw4AZASDZk39ENHivkcoCLWVMnWcA6Tw8h5Nyy9kOFp%2FWE%2FthIaN6URmDKBpI2DMGq9KKpXVH7C%2Be0IJ%2FV8YPoYmd9w66YFuphY6q06cN00%2BwRZ7So%2F6s%2Bvbu0r7lDvJLOrajxNJMp4wgKCLygY6pgFcSSpopvJ%2BCP5M4pMDT5xny7BkDsPUN8NscN%2BHnr1sgC0sY5wJA9QO6o0f%2F8SGPAUMClDDhGR%2FF7Jlc0HaIuwJEwOFwqrIszvQATmaJz587tTRi7R3HFI6wRtCGkkQtkZpQfexkLDmIw%2BfMKbWM08VXG2J7Ut5odbgC9mMLVN9gxuYGiPIGCbmjuSNd31ymlFUDqn22IEZg9tcp4W1z%2B7aM9vbl5Pn&X-Amz-Signature=d171a98e662587d8aca3f9ffa53e7e8c500c03b76a21a049dc7e72b09a984db1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
