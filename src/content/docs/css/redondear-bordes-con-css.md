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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWWS5N3V%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T060620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0zhofzKavzP8%2F2vdx85tK%2FTt6WqKry6fRpLj%2FNDYYsAIgXrnIDqruUOHxNcD9vE%2BiUEUkm6vMhp6Q4awS3L%2F3NQYqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGhdEmlJRgcH4NpZOCrcAwILI91%2BgkSM%2B0Vz1WTY1IewyXjj81FWG2Nfgi1NlhiiVo4Flm3hPOPL7JV%2BXS4M0JHQSMZ0p2TLHkvnrG5dO%2Bwo6fbT8T6rZFVz0XSeU%2Br63pa51cs99vBLu9W8WiD9ZIP7zev6bbNlUV4TAJV24QIBsBl9gDJXHQ0Bf5AP6FvV7M4LrmWKkiE0ED3%2BZ6Ujo3A5xILB8NiaFFtZFj4bi5JdlIkLOIpefu%2BpFxyyeHpuZcFhjlsLJ%2FxQJwzHlFwBTAAMHtC9YyWYAC0WF9rQ%2BY6QWOEtVxdMX2WyokmD4Z0aZO%2FCpUopHxGloMAkT9XtZkrUvzwvhhcAbZFh5LUUYaPAxOUofFrehVxLX5V%2FRuiO5CgPPmHl7eGrOVZHA7d3sHNcXJ8FW9inrFXX5%2Fv6oKk%2F7Gq0gZPoQ%2FwSvFcUl5MwzrrgdZ%2FJtdVaHlYqCjFm%2BUSIQgGmqKfpaU6sI9L8B5a%2FtqRxa1fkMebemW9cyMFsE1Hjjwp7Xiz7%2BoBRyGFbJ7TSK7SqPeqA9uWaWbs27x5yZNTfpOxOqYD3Ey6ches%2FXBk87xUlfqqHIIPtU5whLC4xjWI4X5xWJL5hUFUjJnMH4ZB0O8LUPuT2dkEvqUlwWf29q12EE2nTc0lMMJzl3skGOqUBU0vcwkkTPAMVW7ox7wauY3BLcXgrUCtzcH8etbk8YDFrBg86UQAH3OJ2HuzMLAYsQJKNNA3%2F4uVjJtRzY07eazVdxSLPUZEGYRkM%2B%2Fpubip5MXLQbFoTDEo0NN0oqFeV7Udyw6RHfi6QvpUfO9zrdSJdU55O%2FjGKxLSUV%2BDE7T7TzwwHloR591gxxF7up2kgfW%2FlL81LFHp%2BegQEQHUBVn3RIkhd&X-Amz-Signature=c545277cf6b1181130263c1fb3fb3d8156f908cb515a955a0b5373ed932edec5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWWS5N3V%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T060620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0zhofzKavzP8%2F2vdx85tK%2FTt6WqKry6fRpLj%2FNDYYsAIgXrnIDqruUOHxNcD9vE%2BiUEUkm6vMhp6Q4awS3L%2F3NQYqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGhdEmlJRgcH4NpZOCrcAwILI91%2BgkSM%2B0Vz1WTY1IewyXjj81FWG2Nfgi1NlhiiVo4Flm3hPOPL7JV%2BXS4M0JHQSMZ0p2TLHkvnrG5dO%2Bwo6fbT8T6rZFVz0XSeU%2Br63pa51cs99vBLu9W8WiD9ZIP7zev6bbNlUV4TAJV24QIBsBl9gDJXHQ0Bf5AP6FvV7M4LrmWKkiE0ED3%2BZ6Ujo3A5xILB8NiaFFtZFj4bi5JdlIkLOIpefu%2BpFxyyeHpuZcFhjlsLJ%2FxQJwzHlFwBTAAMHtC9YyWYAC0WF9rQ%2BY6QWOEtVxdMX2WyokmD4Z0aZO%2FCpUopHxGloMAkT9XtZkrUvzwvhhcAbZFh5LUUYaPAxOUofFrehVxLX5V%2FRuiO5CgPPmHl7eGrOVZHA7d3sHNcXJ8FW9inrFXX5%2Fv6oKk%2F7Gq0gZPoQ%2FwSvFcUl5MwzrrgdZ%2FJtdVaHlYqCjFm%2BUSIQgGmqKfpaU6sI9L8B5a%2FtqRxa1fkMebemW9cyMFsE1Hjjwp7Xiz7%2BoBRyGFbJ7TSK7SqPeqA9uWaWbs27x5yZNTfpOxOqYD3Ey6ches%2FXBk87xUlfqqHIIPtU5whLC4xjWI4X5xWJL5hUFUjJnMH4ZB0O8LUPuT2dkEvqUlwWf29q12EE2nTc0lMMJzl3skGOqUBU0vcwkkTPAMVW7ox7wauY3BLcXgrUCtzcH8etbk8YDFrBg86UQAH3OJ2HuzMLAYsQJKNNA3%2F4uVjJtRzY07eazVdxSLPUZEGYRkM%2B%2Fpubip5MXLQbFoTDEo0NN0oqFeV7Udyw6RHfi6QvpUfO9zrdSJdU55O%2FjGKxLSUV%2BDE7T7TzwwHloR591gxxF7up2kgfW%2FlL81LFHp%2BegQEQHUBVn3RIkhd&X-Amz-Signature=a0999b4862c7c8adce47d169322f59c70ef1e795f54b223f71c16002ae36884e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
