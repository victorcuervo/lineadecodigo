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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YN63WY2S%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T133132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCTZO3g%2BK5qtztxkJuCa3IXqxp3sB6P2leklLgX67W4lgIgIvkUls2UHS8mjsFax7g37v7hY%2FpcZCw4feXkGBvneBkq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDAslf4BWxQF%2FI94m0ircA44E2fj0%2FvUpLjhPWyO7OQAFnI2293igD6zwEbCACWFZWwFDQufi3%2B4MbKxpSbg7IyoWzZMbn3OO5ii4%2B6NmDGmn3P6RPEOSWxzhKVIQNslnEEvRAIc4oBC9OQSqFLb0VPFHJuB5IDju%2F1VzHZlIA0wJQF2uaZHF2hOOKBddqaW2wJqIlJ4bQzKs7BM7L8tFRDwtP4s4qbLrIJclE2UUx69Kp49xGOFyHlA%2B%2FCDTQ8653%2BzWzpv6Bx%2FT1A1VqsAXPXjhmv%2BTUOZ4FjLVQHiQt4zxZ68gz7DEpSLJ7A7FduxMfavCYEpL9KsodcjRGgffNmFmMrpyMbh6kyinfXWt7Eeo5E24157b870XpoFM94PjeMqzdDilXIg8VfHo%2FfkLVd6C%2FglsZLpdJyGcczhTJqCdPs5UPQDN2MB0StNjB5y%2BRmUd34DitaxH3j5W%2FV0%2F14SQ2nFjERyxjs%2BZhawpYGbmmVnRWcPTpiuBhmbrLlJcaHOH8jfYgZWVDnfjFeMDUw5ORKkxn9kH9GID4fgB5BgsGqewOtTu3eIRPQx3bOwSjMVSzqVrNRzTfIlG1Ljl9k8n6hqrVjHVVV9XAYfXAJHSt48%2BL0g%2FFjsbsAQEkIjkI5Dgbj7X62jxiaehMP%2FGisoGOqUB5tKxZke5N1MTKX4XTAPLFODTpdXvy4VB19%2BuTVhF7vu7sbbdijX8xJtSwhy6jTvpEzr50fzK%2FTxOXLHQqagfp689MtM2h9qntKD5foVJBDmZ3oLx0BEFOFqmKHfxWx%2Boq7mgR9rKL8KWdcFEuEgWZhlESkErLVpZ8jqpAU18duNrs4jVpEaLrVt90Q2p44gy1m3Do4EZoBmJJcWV5yl9ltT1AyCe&X-Amz-Signature=eb79224d244e268050666e9135e8fb9efd7ab038f667e08a3a358b39787052c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YN63WY2S%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T133132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCTZO3g%2BK5qtztxkJuCa3IXqxp3sB6P2leklLgX67W4lgIgIvkUls2UHS8mjsFax7g37v7hY%2FpcZCw4feXkGBvneBkq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDAslf4BWxQF%2FI94m0ircA44E2fj0%2FvUpLjhPWyO7OQAFnI2293igD6zwEbCACWFZWwFDQufi3%2B4MbKxpSbg7IyoWzZMbn3OO5ii4%2B6NmDGmn3P6RPEOSWxzhKVIQNslnEEvRAIc4oBC9OQSqFLb0VPFHJuB5IDju%2F1VzHZlIA0wJQF2uaZHF2hOOKBddqaW2wJqIlJ4bQzKs7BM7L8tFRDwtP4s4qbLrIJclE2UUx69Kp49xGOFyHlA%2B%2FCDTQ8653%2BzWzpv6Bx%2FT1A1VqsAXPXjhmv%2BTUOZ4FjLVQHiQt4zxZ68gz7DEpSLJ7A7FduxMfavCYEpL9KsodcjRGgffNmFmMrpyMbh6kyinfXWt7Eeo5E24157b870XpoFM94PjeMqzdDilXIg8VfHo%2FfkLVd6C%2FglsZLpdJyGcczhTJqCdPs5UPQDN2MB0StNjB5y%2BRmUd34DitaxH3j5W%2FV0%2F14SQ2nFjERyxjs%2BZhawpYGbmmVnRWcPTpiuBhmbrLlJcaHOH8jfYgZWVDnfjFeMDUw5ORKkxn9kH9GID4fgB5BgsGqewOtTu3eIRPQx3bOwSjMVSzqVrNRzTfIlG1Ljl9k8n6hqrVjHVVV9XAYfXAJHSt48%2BL0g%2FFjsbsAQEkIjkI5Dgbj7X62jxiaehMP%2FGisoGOqUB5tKxZke5N1MTKX4XTAPLFODTpdXvy4VB19%2BuTVhF7vu7sbbdijX8xJtSwhy6jTvpEzr50fzK%2FTxOXLHQqagfp689MtM2h9qntKD5foVJBDmZ3oLx0BEFOFqmKHfxWx%2Boq7mgR9rKL8KWdcFEuEgWZhlESkErLVpZ8jqpAU18duNrs4jVpEaLrVt90Q2p44gy1m3Do4EZoBmJJcWV5yl9ltT1AyCe&X-Amz-Signature=e7b38c99409470c16aa0431078d75b0e2ae2c77e1d36eb03184d3fa9afd56843&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
