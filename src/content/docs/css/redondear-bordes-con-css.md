---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZWX4W4X%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T092933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQDty8clf23QcvRag%2FCUy6yqC3Z%2B0Tec6onqXq0KVUCVOAIgdFq1qv%2BjiFTMP0rKrmxqnlFoPVV1AOjqpC9OZWAwEhAq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDHmxfzZ3ycoI%2FUXdbSrcAzfWy7nEj4iLBnrDpVa9a9AK6xG6s%2BF21EatBslBvUDVMcLg%2F8FH2yRQ5fdV0%2FwVNfbM3y5ZTwClsGgfExzC3o8NoZn8qATdKyLhHa1w5Wnx6fSA5ckeRy0ydYmpiA6PKoslI0gEquPaEd7GAiRnBgPQVHWayWRoaQjtuGaef1yNUhMQwxdYedwrhi9UmkF0t9aTLj2Jv%2BWejNWV5hew6yekC6oU498agw6qVnEjK4R5OUzcIfD88O75Z3Bv%2BY0PykDWSwe1eQW3UUR%2Bz1eKSV9htXwskfiXBgG%2FMKIvcqe42lGBiTzqbs%2FeZk9RWCVIZab2cBdoHtzilsuEX0pgRYNRkKojuD3OuyJQHzNq3OJcqgJQIsPJBi%2FiQAWkkbJoC%2FqUY%2FuN86eJg9J2QXKVpmE6Cv%2BucTb0mY4XrvHyAXTCe1fYl7trblBvt1L9dOGYnpMV%2Bufvw2Hic3uM%2FohAk7oKcJhFNb74XqvMXT1D6j8dIyPQzoSjbOZ9OJ8T%2BWMeBofv5M3IYVkbuEZcoNafbStvmNtvZmIbAIVl4xERc8J3HsVcRmtYG4XPVmHASe8bvUwJSi60Rn1T6fxJ4HCgqSNV5ELIbKOlsXcc2qBRE%2FFlwSpPzGejl3XC1t4CMNOGxckGOqUBxRr%2B2VJfqTJ2xqW8%2FYOw4LmrbNmi7MOOtjXaZh5d9GpaizWSYlbvJQoRySTQQ%2FjeoOQ22zhuN%2FT9Pgy3myG9dwPaYIb5esZZs3oQcNnLZn%2FR%2FDaYyTwjzoHSKax28vsOZqWuBS9DuflRcKwEECghsHOklXigjSCl%2BhYx%2By2xDYPW47hnMR1q7ooLP7c1n4BY7PosMMOx30%2B2aC0ypqt7C%2FHFoZ8V&X-Amz-Signature=2c4bbcb121fa80570f942d281ec64b11a968186446bc451b3e59a03df3130819&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZWX4W4X%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T092933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQDty8clf23QcvRag%2FCUy6yqC3Z%2B0Tec6onqXq0KVUCVOAIgdFq1qv%2BjiFTMP0rKrmxqnlFoPVV1AOjqpC9OZWAwEhAq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDHmxfzZ3ycoI%2FUXdbSrcAzfWy7nEj4iLBnrDpVa9a9AK6xG6s%2BF21EatBslBvUDVMcLg%2F8FH2yRQ5fdV0%2FwVNfbM3y5ZTwClsGgfExzC3o8NoZn8qATdKyLhHa1w5Wnx6fSA5ckeRy0ydYmpiA6PKoslI0gEquPaEd7GAiRnBgPQVHWayWRoaQjtuGaef1yNUhMQwxdYedwrhi9UmkF0t9aTLj2Jv%2BWejNWV5hew6yekC6oU498agw6qVnEjK4R5OUzcIfD88O75Z3Bv%2BY0PykDWSwe1eQW3UUR%2Bz1eKSV9htXwskfiXBgG%2FMKIvcqe42lGBiTzqbs%2FeZk9RWCVIZab2cBdoHtzilsuEX0pgRYNRkKojuD3OuyJQHzNq3OJcqgJQIsPJBi%2FiQAWkkbJoC%2FqUY%2FuN86eJg9J2QXKVpmE6Cv%2BucTb0mY4XrvHyAXTCe1fYl7trblBvt1L9dOGYnpMV%2Bufvw2Hic3uM%2FohAk7oKcJhFNb74XqvMXT1D6j8dIyPQzoSjbOZ9OJ8T%2BWMeBofv5M3IYVkbuEZcoNafbStvmNtvZmIbAIVl4xERc8J3HsVcRmtYG4XPVmHASe8bvUwJSi60Rn1T6fxJ4HCgqSNV5ELIbKOlsXcc2qBRE%2FFlwSpPzGejl3XC1t4CMNOGxckGOqUBxRr%2B2VJfqTJ2xqW8%2FYOw4LmrbNmi7MOOtjXaZh5d9GpaizWSYlbvJQoRySTQQ%2FjeoOQ22zhuN%2FT9Pgy3myG9dwPaYIb5esZZs3oQcNnLZn%2FR%2FDaYyTwjzoHSKax28vsOZqWuBS9DuflRcKwEECghsHOklXigjSCl%2BhYx%2By2xDYPW47hnMR1q7ooLP7c1n4BY7PosMMOx30%2B2aC0ypqt7C%2FHFoZ8V&X-Amz-Signature=3e1269ab1d1447d2e80872e3bf246c6c9fa99aa24e359bf561d63f8f86a86a72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
