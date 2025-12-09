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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTDEO6OI%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T084507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAHWuQt6vnfY79ipQB7ek%2FSJ%2BjR%2FloMULXl%2F9oxT2%2BapAiEA71FCvB%2FUJMG%2BQRDQhSYt0Q%2FUD9zGph0%2Fba14J7q6rfIqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHYHac4JLrTh6ZVB7yrcAwy1yDcmKX4mVcaqHXqJO6cdPik03WK8v9VjE5XiZ53UsZX1tHIFxi6mu722GJDdv4I4IjFvBZZsRvUflZ7webr%2BwZoYadTe2FURwFOsZfRIiWbla3PQhM14IMCaCoxBSyvYc83jo0SpWLEhoRJwMoymvFLQwgp7jHGDzB4N0IVbGquo1oj3y8klMKp%2B0Ot%2FnGABSOc8UFhoSjHQdf11PryamOvEilJxFB8odpBagGzkUxjkT9hrMj7KE8TdQOI1LO2ZoBgS6obyjrAmYLWdRgTWWaBaVTDAxR6bJBagIoxr754Lb9WiVjF8BRyLT0mtuY2uVOccHwAomYdHknzkZkc%2BMviBqLmcBQRohMCJRFKxr7BxG1N6dgG0Tuhh9%2F995Wj8X7Uof%2FJbJ2kPBP%2BniKWb%2BZnPbH33n%2Bye5XcHa3Y3BkUgq6n00kUBGqz4nyt4INb7qTEh3aqWnUDwI3f55IJEiXluT4Jmc8UIQOGVTf%2FpsIIRt2F5B43F5MfCY97wHE5x4qc64pY9L8SKnxL0uASTQndlSx%2BqJqZ0K68unOZTJHlzyPTL2GLCFvzaSDVUYCqH04JVLPSlZ%2B0LIUzDxJV8veA7NScARX5JJW4A7YWm33ukoHNi85hQ%2FqauMMql38kGOqUBtb02%2BKNril1yA8t6ALDbG6q2PGXy1jvJn6wH%2BXKJM8zi2WK5FvDEq3B3cZHpedGvrBw0phr6mn3O8MnII1i4YXvwseHUQ0PnnAIwWrcpsW%2FN0m8cKR9PEX8JMa7upS5FVY5tIVANiyCDu7GFygkYq4B2tKRYLwZjBzmLl7Ileq%2B8PsG4SgXJuNUpNtrLiyrwIwHmjpza8SpoqhNHnLPcIIn7Mqfm&X-Amz-Signature=75bcf53a73241020206623cb62e1077282f56ef30ef9881e39381c07bd70aa6d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTDEO6OI%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T084507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAHWuQt6vnfY79ipQB7ek%2FSJ%2BjR%2FloMULXl%2F9oxT2%2BapAiEA71FCvB%2FUJMG%2BQRDQhSYt0Q%2FUD9zGph0%2Fba14J7q6rfIqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHYHac4JLrTh6ZVB7yrcAwy1yDcmKX4mVcaqHXqJO6cdPik03WK8v9VjE5XiZ53UsZX1tHIFxi6mu722GJDdv4I4IjFvBZZsRvUflZ7webr%2BwZoYadTe2FURwFOsZfRIiWbla3PQhM14IMCaCoxBSyvYc83jo0SpWLEhoRJwMoymvFLQwgp7jHGDzB4N0IVbGquo1oj3y8klMKp%2B0Ot%2FnGABSOc8UFhoSjHQdf11PryamOvEilJxFB8odpBagGzkUxjkT9hrMj7KE8TdQOI1LO2ZoBgS6obyjrAmYLWdRgTWWaBaVTDAxR6bJBagIoxr754Lb9WiVjF8BRyLT0mtuY2uVOccHwAomYdHknzkZkc%2BMviBqLmcBQRohMCJRFKxr7BxG1N6dgG0Tuhh9%2F995Wj8X7Uof%2FJbJ2kPBP%2BniKWb%2BZnPbH33n%2Bye5XcHa3Y3BkUgq6n00kUBGqz4nyt4INb7qTEh3aqWnUDwI3f55IJEiXluT4Jmc8UIQOGVTf%2FpsIIRt2F5B43F5MfCY97wHE5x4qc64pY9L8SKnxL0uASTQndlSx%2BqJqZ0K68unOZTJHlzyPTL2GLCFvzaSDVUYCqH04JVLPSlZ%2B0LIUzDxJV8veA7NScARX5JJW4A7YWm33ukoHNi85hQ%2FqauMMql38kGOqUBtb02%2BKNril1yA8t6ALDbG6q2PGXy1jvJn6wH%2BXKJM8zi2WK5FvDEq3B3cZHpedGvrBw0phr6mn3O8MnII1i4YXvwseHUQ0PnnAIwWrcpsW%2FN0m8cKR9PEX8JMa7upS5FVY5tIVANiyCDu7GFygkYq4B2tKRYLwZjBzmLl7Ileq%2B8PsG4SgXJuNUpNtrLiyrwIwHmjpza8SpoqhNHnLPcIIn7Mqfm&X-Amz-Signature=5402787bf72c01aa8bc4c1f79ffcbe04f774e92b82717edfa200ac2176a7b5a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
