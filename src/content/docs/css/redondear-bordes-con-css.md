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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDDGJRFF%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T055649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDqjJe%2FXdQUuTEMUDZRYQA0p1Rf9pvdXY2zd7IfLE1Z5AiA1ql1MXldZ5unqGH4Wt4CAJN5VeCeq%2FcyI51lLnUJWUCqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeIl0JF5nkhEAwlS6KtwD4mz2N3LJeDwO8z%2Fro3dioF1zd6D4CdOH5eO6GrkOlgpOqKcI4ZQKZcHmM13b4nkWg%2BuRsuRo67nsSKb8GkoZN0B00VjjVdaxW9Bd%2BOKxteAdF5b5V4GYkC%2BkWg%2B48fZRMSJynPWtnpAcsMVYm7xwq1UcA5xT%2FEw8HCg0HQVpfpdQ%2FL1pqB7M%2Fl9GIDMyDcOu17qrs0Cy3ai74QcKxfS557NYkPRBIL9w1KfKUPcDEZwWK3%2BxWFs9o9NDJ2eLVj9nRtCKM65pkA7ubxymtdT86z32PLLR%2BZLd0yooyPZXBluP0i2jjBL3y8GAaN6wh9ssB3UX0yp%2FXnHNrU6grGVD%2FCTT0cTKxxCTRIeT%2F96WpPaScOx%2FE3KXN3pnERIkAZneNZ6YWLDJ0a6z8CyqUKPRs4aFPdD4I6eNEv%2FBSz7CtxljAHl5sF41KlsE8WcQ2uEX%2F4RqzrtJkp%2BORtgaD181zqxyNi2kjgfWvIsiW0FSVvPSvgAhrBaU06AgAtcdUL%2FOhBSHBr78uLfXisXTDnaUJLMJkLudcHfSc4ut6Z6AboA%2Frl74PYDJYDkDHDt8Y9bqq8yws8ocwElsGx42F1ayIZBYGd9p%2FUq0v0%2FxJqD0z8pv4eSHjzH0suj5Vbowz%2BXeyQY6pgEUjgn4iZWesnYlJbK0SDpHEz0SrekaKf7XkKUK8AcSZ58C1cHUCLIx0BIUaLCrI7K6kDAt1tU788QyQvcNzHJ95sowkxxHNUJGzzjTzoXiJWa2ovu9Bp8itRKzEc%2BwPxSwYZJ%2BI%2BfHez%2FVTM2%2BaXg%2BUJ6rJU35MouxbwrnEtz9VrKupnA%2Ff9u%2BRlit03kE23HCJPWHXw9MZ9JBZsIVY9bVkYHa69pm&X-Amz-Signature=c5a81e03ac8326cd61c0d3c2c4a87a3169362518268fbaf70b548c902a72f7ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDDGJRFF%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T055649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDqjJe%2FXdQUuTEMUDZRYQA0p1Rf9pvdXY2zd7IfLE1Z5AiA1ql1MXldZ5unqGH4Wt4CAJN5VeCeq%2FcyI51lLnUJWUCqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeIl0JF5nkhEAwlS6KtwD4mz2N3LJeDwO8z%2Fro3dioF1zd6D4CdOH5eO6GrkOlgpOqKcI4ZQKZcHmM13b4nkWg%2BuRsuRo67nsSKb8GkoZN0B00VjjVdaxW9Bd%2BOKxteAdF5b5V4GYkC%2BkWg%2B48fZRMSJynPWtnpAcsMVYm7xwq1UcA5xT%2FEw8HCg0HQVpfpdQ%2FL1pqB7M%2Fl9GIDMyDcOu17qrs0Cy3ai74QcKxfS557NYkPRBIL9w1KfKUPcDEZwWK3%2BxWFs9o9NDJ2eLVj9nRtCKM65pkA7ubxymtdT86z32PLLR%2BZLd0yooyPZXBluP0i2jjBL3y8GAaN6wh9ssB3UX0yp%2FXnHNrU6grGVD%2FCTT0cTKxxCTRIeT%2F96WpPaScOx%2FE3KXN3pnERIkAZneNZ6YWLDJ0a6z8CyqUKPRs4aFPdD4I6eNEv%2FBSz7CtxljAHl5sF41KlsE8WcQ2uEX%2F4RqzrtJkp%2BORtgaD181zqxyNi2kjgfWvIsiW0FSVvPSvgAhrBaU06AgAtcdUL%2FOhBSHBr78uLfXisXTDnaUJLMJkLudcHfSc4ut6Z6AboA%2Frl74PYDJYDkDHDt8Y9bqq8yws8ocwElsGx42F1ayIZBYGd9p%2FUq0v0%2FxJqD0z8pv4eSHjzH0suj5Vbowz%2BXeyQY6pgEUjgn4iZWesnYlJbK0SDpHEz0SrekaKf7XkKUK8AcSZ58C1cHUCLIx0BIUaLCrI7K6kDAt1tU788QyQvcNzHJ95sowkxxHNUJGzzjTzoXiJWa2ovu9Bp8itRKzEc%2BwPxSwYZJ%2BI%2BfHez%2FVTM2%2BaXg%2BUJ6rJU35MouxbwrnEtz9VrKupnA%2Ff9u%2BRlit03kE23HCJPWHXw9MZ9JBZsIVY9bVkYHa69pm&X-Amz-Signature=c55058862460d7980b198d2f7792e0cbefa23930132eb696e66c65e5739f1bfd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
