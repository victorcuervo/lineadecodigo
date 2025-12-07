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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBD2FWXJ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T225629Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFzXTspoWfLiEoySIH6tbsPiXNUmtqgmzeL0uatfMr58AiEAuQ3sXaN5pH1e3MZxVyorx%2B2i91iIjY%2F26rHNJLzP1LQqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAz9mz3Y8xQs02s0WircA9RliJJO9csRBkBFT%2BvDymkHh5RlHvMQI0HXDs4N9DGuw2FShtem92Fa9pbmNn9JqbiJ%2Fiph1bhA5xrSQXMIlxh6fASF7JGgiiKj%2F2nmdW9mbKMXDxD%2F6oOXfN924Cxf1Dm%2FmDXQYRGOGQaB7qNavXSHAekub5e8bP5epc9Vi98CPfcKLoSAYG2nd%2Ffzu%2Bm2AQjq7eVGJhU6PfgDuzigTdrjvDq4gX7W1rrz%2FJ7ATneZ5foICwGyb13uCtN2FCPg8sYj1bkgRtFf7OoEfh0UkagOqbp6N9qeXg8IReKktSEND0EaboSL4JkYyKqsb4re1YuLw1Puwd5nvQ%2BkfXpk7ehAaR404X7j1EkQhTK%2FgTpqQdxbOXzcFn40wsr29yny7kMaCO6N5qbQbiXnAL%2BKj4veNT1iRTEgjWtxGhaagZXKjCZTumqmuuRZamAMuoO2ly6dotTVgx%2FwnL6ZqxBM7ipYRWy0YsDUkd9xAXodwnNOI3KWlTDzqIpnAo1ZgevYiWBBZ6Es8oY7%2B2nX4iYlbX0HfkQizv48CSTSwo3Fv7%2FFsBhriB%2BrUERVdd%2BMEvLdZ9lTqKB3QB3%2FU80eP%2FPTa0expuneg4XtXcpxL0WElBsODxxmqzKkRXFaEhe8MJOF2MkGOqUB5sPjbQ6xIG54kzxbAyiZmMBszYRsoMiuPUc7yIMVVGfa472dQamhilJhAaVt1kcHua1w8ZrExZEFDdL%2Byxofw3Zd8hXvIRDErzWqgyI8Y8NqDVj%2Fgk2%2F5Xi8BPqoOVC00t3Dmc%2FR64Q%2F0bUpeqkXQ73EIVYWodwBqqs%2Fs20nuOakOvE44NZ8wX0o4LmUD%2BB4L1QgSlxk4xZHMhxZ%2BbLRkHhAtji5&X-Amz-Signature=6c11900466ca7f48db97eabf86e36a8aa80e685161133d2b6e5600c641136158&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBD2FWXJ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T225629Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFzXTspoWfLiEoySIH6tbsPiXNUmtqgmzeL0uatfMr58AiEAuQ3sXaN5pH1e3MZxVyorx%2B2i91iIjY%2F26rHNJLzP1LQqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAz9mz3Y8xQs02s0WircA9RliJJO9csRBkBFT%2BvDymkHh5RlHvMQI0HXDs4N9DGuw2FShtem92Fa9pbmNn9JqbiJ%2Fiph1bhA5xrSQXMIlxh6fASF7JGgiiKj%2F2nmdW9mbKMXDxD%2F6oOXfN924Cxf1Dm%2FmDXQYRGOGQaB7qNavXSHAekub5e8bP5epc9Vi98CPfcKLoSAYG2nd%2Ffzu%2Bm2AQjq7eVGJhU6PfgDuzigTdrjvDq4gX7W1rrz%2FJ7ATneZ5foICwGyb13uCtN2FCPg8sYj1bkgRtFf7OoEfh0UkagOqbp6N9qeXg8IReKktSEND0EaboSL4JkYyKqsb4re1YuLw1Puwd5nvQ%2BkfXpk7ehAaR404X7j1EkQhTK%2FgTpqQdxbOXzcFn40wsr29yny7kMaCO6N5qbQbiXnAL%2BKj4veNT1iRTEgjWtxGhaagZXKjCZTumqmuuRZamAMuoO2ly6dotTVgx%2FwnL6ZqxBM7ipYRWy0YsDUkd9xAXodwnNOI3KWlTDzqIpnAo1ZgevYiWBBZ6Es8oY7%2B2nX4iYlbX0HfkQizv48CSTSwo3Fv7%2FFsBhriB%2BrUERVdd%2BMEvLdZ9lTqKB3QB3%2FU80eP%2FPTa0expuneg4XtXcpxL0WElBsODxxmqzKkRXFaEhe8MJOF2MkGOqUB5sPjbQ6xIG54kzxbAyiZmMBszYRsoMiuPUc7yIMVVGfa472dQamhilJhAaVt1kcHua1w8ZrExZEFDdL%2Byxofw3Zd8hXvIRDErzWqgyI8Y8NqDVj%2Fgk2%2F5Xi8BPqoOVC00t3Dmc%2FR64Q%2F0bUpeqkXQ73EIVYWodwBqqs%2Fs20nuOakOvE44NZ8wX0o4LmUD%2BB4L1QgSlxk4xZHMhxZ%2BbLRkHhAtji5&X-Amz-Signature=67b06fd1f2cd8edd3e628118297ebce035c77b2752cd5321386d4f19e233a05d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
