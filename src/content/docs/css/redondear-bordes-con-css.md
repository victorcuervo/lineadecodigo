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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUHAFPOM%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T104229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLV%2BUHLRiz0JjRgg8hsJrhfPa5G5TBNXhXylPW5LrvqAIhANT8WNABChZDcMK0o308RSoZjjOCm370JNAENC4cQLK9Kv8DCHQQABoMNjM3NDIzMTgzODA1IgzCsjBsASCHMUXTiU0q3AMyxD7c7kM7A%2FEuacqJ3vdkgwevQez3jMB4YUVd4MKOlM8v56%2BitvioBff6BLaZaL1CwG1EtAk9LiI1Z%2F831QbtTS8R%2BtiQyc0UpIni5gySn0C%2BYHV%2F%2BatvVHi6tW479yPgw1zIW6PmTkOpZcUpevzAlr%2Fn8LD%2B%2BQqBA2DnJOp7SBYAsLSRyk2KFsw%2BGPhKT%2FW3UEdYD4VFUM1TAy4CUwQQLvnawdZgeTAFZ%2BvgxSGYMf7izvca3ka8KlPO7cg%2BGJnC4CK%2FGfvK2DtzItWqcXGv9H9%2BCuia%2BuFWNpgBwNn74Bb31qlVEIQq0%2FExinZBNwV%2BUtFyP%2BCNHIi06ErIJbqSglCBSy1jFIBqwlD8Xqssd8L%2B8Y2gBN%2B5uUuHol%2BbzVjmRfkQIviqR%2Fnbdyk1k5vyLDyX8j2FYXpjUsZl9pYktYw925FG4z2%2FUT9x4toCnNhmKB5pb7VFYA14RqAExnSlF%2FN8ASyYliB25Vuf4DzNF6EzbkVWI9gcg2tqOJkpIcUhUjl32bWhGEQ%2ByVn0qkgUPx%2F8bZ2A4dLiFFiZXsIV2D0bjCKbhYT%2F2gGWVaHs1eKQaAmPcTkTBWheV%2FI6g3jqkr7bRdRKYK6GZZFJglHNp57zfTSxgo8xJYoK3jDgidDJBjqkAYIWuRPVfp6eG3iCo%2FRjKKxyqaR6HukLcny63Xj319fiXILTdce%2FqE%2FzimtCoJ8IB9sPc0XdZBD5hdfOzthVoMpMS9QfQszkOOfb1BZeYPVlCxc9C5NYyXZSTRRT0Zan9wu0V9qGeQyyRv7EbEUWJS8ur2cK8B0jMcPBEx0JwMwBFq8GkckUUHbAHyzVSeeUErKo3Ni7C6mkr%2B9WCvu5BnTA%2Bk1i&X-Amz-Signature=a6ea3fd51ce5717c224b073ae2bf9f3ca8b61896a7e3fec46d26a4ce75e4932d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUHAFPOM%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T104229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLV%2BUHLRiz0JjRgg8hsJrhfPa5G5TBNXhXylPW5LrvqAIhANT8WNABChZDcMK0o308RSoZjjOCm370JNAENC4cQLK9Kv8DCHQQABoMNjM3NDIzMTgzODA1IgzCsjBsASCHMUXTiU0q3AMyxD7c7kM7A%2FEuacqJ3vdkgwevQez3jMB4YUVd4MKOlM8v56%2BitvioBff6BLaZaL1CwG1EtAk9LiI1Z%2F831QbtTS8R%2BtiQyc0UpIni5gySn0C%2BYHV%2F%2BatvVHi6tW479yPgw1zIW6PmTkOpZcUpevzAlr%2Fn8LD%2B%2BQqBA2DnJOp7SBYAsLSRyk2KFsw%2BGPhKT%2FW3UEdYD4VFUM1TAy4CUwQQLvnawdZgeTAFZ%2BvgxSGYMf7izvca3ka8KlPO7cg%2BGJnC4CK%2FGfvK2DtzItWqcXGv9H9%2BCuia%2BuFWNpgBwNn74Bb31qlVEIQq0%2FExinZBNwV%2BUtFyP%2BCNHIi06ErIJbqSglCBSy1jFIBqwlD8Xqssd8L%2B8Y2gBN%2B5uUuHol%2BbzVjmRfkQIviqR%2Fnbdyk1k5vyLDyX8j2FYXpjUsZl9pYktYw925FG4z2%2FUT9x4toCnNhmKB5pb7VFYA14RqAExnSlF%2FN8ASyYliB25Vuf4DzNF6EzbkVWI9gcg2tqOJkpIcUhUjl32bWhGEQ%2ByVn0qkgUPx%2F8bZ2A4dLiFFiZXsIV2D0bjCKbhYT%2F2gGWVaHs1eKQaAmPcTkTBWheV%2FI6g3jqkr7bRdRKYK6GZZFJglHNp57zfTSxgo8xJYoK3jDgidDJBjqkAYIWuRPVfp6eG3iCo%2FRjKKxyqaR6HukLcny63Xj319fiXILTdce%2FqE%2FzimtCoJ8IB9sPc0XdZBD5hdfOzthVoMpMS9QfQszkOOfb1BZeYPVlCxc9C5NYyXZSTRRT0Zan9wu0V9qGeQyyRv7EbEUWJS8ur2cK8B0jMcPBEx0JwMwBFq8GkckUUHbAHyzVSeeUErKo3Ni7C6mkr%2B9WCvu5BnTA%2Bk1i&X-Amz-Signature=379e4c90aa4ddfb4186b49fb923ff31e9fcab45d322e7805899b4ed543ae2495&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
