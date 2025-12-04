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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCDHQ3TM%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T002817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIAQ1oegh7otIFyqkdVqr9oGZyS8B3uhxSxvKwDRuKAFnAiEArCMbuQxezzgIbFCoOhWOisqRsJP56nvPmPjuL%2B4DsJIq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDFFCuSFYbvCR%2FCP6DircA0ohNLn3H%2FPrKVEHYI8jUNIxNJoJ0%2FNGv8IAD0PGrEXushtuShUlXrdEYIELibHQixO2alhQ1Kfbife7WNBJL7FrZy9LoI%2FPv%2Brj3rIW70wRlxaAE7JWdEnaoJvQJexG1ZG%2B8tNX%2BA03G3zbRig1hjqq%2BVOvG9yF3FZvDoMAOPl5HpFk4ceTbiSE2zcWdi3dwFd8gKLt6%2B0czpF3ZBBjixrF1xRA3cSJTmaKg05XkHeaGA0FfFROeXhGMPILXxcegZnAaL8mHPK1vZVTqMChCIf3HYkE7uiOtPu%2FVWNu4PolLQ2CIrijj%2BoMMBSnF%2Biwfg%2FCsdm0xRrNFh4tClIm2t9y1d7hrzTwW0jkLat59G7csuY6O%2FCIi10F8IJDS4VA53Im6rflrZlqAUeNXitqDv1nOjtGPdSSKzxHRYfCQPhIyobUalR1B9ZL4YER1iJpW7DbDkdxBb2Dbqg7jP96CYTW8P%2FQRgCmAqxvoiOJk0nTvXiXeStt3tmllUVbLsxkd2jRV5J2r9PQyOCyoocQNdEvd16887IPDwXWa1%2FtM%2FtgpXr5vigu%2Bc2sEYYnJqWRcHXGs6Yjm%2FoYW3GqvqKSZU931InxPrqAgdJVbDpbPodoqekPmkjJG2eoRf06MKSVw8kGOqUBDQegc3VKdWyKbZPKOM5dXIxpDt8CMzwYd2g%2FUuKIkwGTOOLJa%2Fl1ZhAUAQM%2BiIU379JomeOafz7qhsB5cD%2FQhze1cH%2BsIRpc9zcwbJi%2BqSPHmfMooDBrraH3O0KLGFyIKKGJCmvLA7epyf9gI3sn4neJCkN%2Bt3u9RklvzoSqJNqXaY5FdsN%2FBMMNKjR2WmKpY6v0Io99pagvi6R0sCXNRNIG7NOO&X-Amz-Signature=2b0be64732f9fa72ecac96db4ced0f8ec67a9384b9fd348e99106b0b99b0740e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCDHQ3TM%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T002817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIAQ1oegh7otIFyqkdVqr9oGZyS8B3uhxSxvKwDRuKAFnAiEArCMbuQxezzgIbFCoOhWOisqRsJP56nvPmPjuL%2B4DsJIq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDFFCuSFYbvCR%2FCP6DircA0ohNLn3H%2FPrKVEHYI8jUNIxNJoJ0%2FNGv8IAD0PGrEXushtuShUlXrdEYIELibHQixO2alhQ1Kfbife7WNBJL7FrZy9LoI%2FPv%2Brj3rIW70wRlxaAE7JWdEnaoJvQJexG1ZG%2B8tNX%2BA03G3zbRig1hjqq%2BVOvG9yF3FZvDoMAOPl5HpFk4ceTbiSE2zcWdi3dwFd8gKLt6%2B0czpF3ZBBjixrF1xRA3cSJTmaKg05XkHeaGA0FfFROeXhGMPILXxcegZnAaL8mHPK1vZVTqMChCIf3HYkE7uiOtPu%2FVWNu4PolLQ2CIrijj%2BoMMBSnF%2Biwfg%2FCsdm0xRrNFh4tClIm2t9y1d7hrzTwW0jkLat59G7csuY6O%2FCIi10F8IJDS4VA53Im6rflrZlqAUeNXitqDv1nOjtGPdSSKzxHRYfCQPhIyobUalR1B9ZL4YER1iJpW7DbDkdxBb2Dbqg7jP96CYTW8P%2FQRgCmAqxvoiOJk0nTvXiXeStt3tmllUVbLsxkd2jRV5J2r9PQyOCyoocQNdEvd16887IPDwXWa1%2FtM%2FtgpXr5vigu%2Bc2sEYYnJqWRcHXGs6Yjm%2FoYW3GqvqKSZU931InxPrqAgdJVbDpbPodoqekPmkjJG2eoRf06MKSVw8kGOqUBDQegc3VKdWyKbZPKOM5dXIxpDt8CMzwYd2g%2FUuKIkwGTOOLJa%2Fl1ZhAUAQM%2BiIU379JomeOafz7qhsB5cD%2FQhze1cH%2BsIRpc9zcwbJi%2BqSPHmfMooDBrraH3O0KLGFyIKKGJCmvLA7epyf9gI3sn4neJCkN%2Bt3u9RklvzoSqJNqXaY5FdsN%2FBMMNKjR2WmKpY6v0Io99pagvi6R0sCXNRNIG7NOO&X-Amz-Signature=647752179e2b7a7baa897aab13f0f9621ee58fa699af208ee111edd02e924106&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
