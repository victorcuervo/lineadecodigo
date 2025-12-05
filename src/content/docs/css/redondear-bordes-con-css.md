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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TISWCGLV%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T220448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBpywMLgiC57EWQ4WK958pka68gjZB%2B8RnPRMrXX%2F8AJAiBPHAW6jnTbIwUqIPbbkBckxobNZQUzRcNOv87gVioVuir%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMBzgZ7NVNzEeNyklpKtwDjetUR8005qUJGDAznXA%2FfiubEBbzE19jCIZokR4IhSsNnwkmR06lVr%2Btmp8t6l64Jn8kvf6zauCQxY1Pjakxn4FQRwEyO0ItAfA3%2BBFMf%2B9XhEFNSaiX4iEmgOX80kXzn0ELYvGU7O%2F5gSQHQ7MJqLmhwIv0xl2OVkilLvZv2LnlH7gszM55ybUy0GdXqbupg4%2FDtTtjo5b52TItzHfULQfeoz9W8JKnrYvzix%2BFa6h356WAWEdil7ACjdl4x8ZcNEDsCtoOHaBxUCtUgvhw2jm0dvEAm6eA0yHjQwGuPwzr%2BwnD1e32OjaB9UcDUX%2BCzU6qkT2hDq9uiXzIjfsBzlwPW0aERz9eSK2iJqLqvwYgevghNUHBsO1gt%2Fo%2BDLrkhNEe2seRQEb3baV%2FvDrXrOIgrWQaeNmBJQ4zdoDbKacBeS5PE9DuRMLCtM%2BNHAHQb1sjnYoHSnDuQagkQRp1RR%2Bveaqe2XnLIi9h22agamCeIRtrSI9KJzM5OmR5D1DbdkJ43chbigPmPb221XtByAMxXHWC%2B%2Bfm%2FMnNvK61BeFcfljXBPcPQa7Ry3ifw6YdRK%2F%2BdlLOaJ7l5VKPjY8ssJqmW6DJtld8K7flbYB7T%2Fn8I%2Fi0p5%2FWx%2FLziJUw7onNyQY6pgHuONdBR7IrHUo%2FEBw4DcfnNYkzaLeqjHQu7qnXSIuol8mcdvmmfISZBresKBGIlQ%2FApCJJlYrj%2B9FoA2QbLlqsbv%2FKrcYb0eZ2zrP1z46vyhQ%2B4c7%2BuDqPe7GR8MbXI70vVkVX1EnhmWoR05ehIHo05CiOlkCA%2B5CZZ5QeutDtpc3eGbT%2Fr1XA2ycoYwKl7usYQ0EpnWcIU89YvUZ0sZCDdQlCK6wS&X-Amz-Signature=c036d64f89b78d1446ba84cc9085d32a8e7b0d07a3a6b2f9b055acc983623e16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TISWCGLV%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T220448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBpywMLgiC57EWQ4WK958pka68gjZB%2B8RnPRMrXX%2F8AJAiBPHAW6jnTbIwUqIPbbkBckxobNZQUzRcNOv87gVioVuir%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMBzgZ7NVNzEeNyklpKtwDjetUR8005qUJGDAznXA%2FfiubEBbzE19jCIZokR4IhSsNnwkmR06lVr%2Btmp8t6l64Jn8kvf6zauCQxY1Pjakxn4FQRwEyO0ItAfA3%2BBFMf%2B9XhEFNSaiX4iEmgOX80kXzn0ELYvGU7O%2F5gSQHQ7MJqLmhwIv0xl2OVkilLvZv2LnlH7gszM55ybUy0GdXqbupg4%2FDtTtjo5b52TItzHfULQfeoz9W8JKnrYvzix%2BFa6h356WAWEdil7ACjdl4x8ZcNEDsCtoOHaBxUCtUgvhw2jm0dvEAm6eA0yHjQwGuPwzr%2BwnD1e32OjaB9UcDUX%2BCzU6qkT2hDq9uiXzIjfsBzlwPW0aERz9eSK2iJqLqvwYgevghNUHBsO1gt%2Fo%2BDLrkhNEe2seRQEb3baV%2FvDrXrOIgrWQaeNmBJQ4zdoDbKacBeS5PE9DuRMLCtM%2BNHAHQb1sjnYoHSnDuQagkQRp1RR%2Bveaqe2XnLIi9h22agamCeIRtrSI9KJzM5OmR5D1DbdkJ43chbigPmPb221XtByAMxXHWC%2B%2Bfm%2FMnNvK61BeFcfljXBPcPQa7Ry3ifw6YdRK%2F%2BdlLOaJ7l5VKPjY8ssJqmW6DJtld8K7flbYB7T%2Fn8I%2Fi0p5%2FWx%2FLziJUw7onNyQY6pgHuONdBR7IrHUo%2FEBw4DcfnNYkzaLeqjHQu7qnXSIuol8mcdvmmfISZBresKBGIlQ%2FApCJJlYrj%2B9FoA2QbLlqsbv%2FKrcYb0eZ2zrP1z46vyhQ%2B4c7%2BuDqPe7GR8MbXI70vVkVX1EnhmWoR05ehIHo05CiOlkCA%2B5CZZ5QeutDtpc3eGbT%2Fr1XA2ycoYwKl7usYQ0EpnWcIU89YvUZ0sZCDdQlCK6wS&X-Amz-Signature=91fc0b958e4d02aa7561df08cff83b53f40165d779118eec5c948b18f370057e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
