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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRUMRCPG%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T092230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCSfsBfSEkLSToJkwTW0hk%2FDOFMoc1rzHrQJ7UnTYjFagIhAIl%2BR%2BBtg6QlH00hIsG4eJsWENsy1mlmTbrvkf9mSmO9KogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw7Qgz%2FmtjI2W5dsMgq3AP7OtoeRtrfZBXBnzhbwJmLs5QXO42Cub%2BYu6bZVOl30ykBqrPb3q5FCMifUnoIW0h72mI38atPTf8atGRTNIIQoe50M1VA8N9g0LG4mVXqBmZBXIW77C5b5jpWN74J9IFgCf%2BbTpbW7S6JtEi4xINW8lPK3NeG30RYpdEZkFygPoNV2SbbKDWDJRe9cOErWy83O929X12Axl0CobNrWZjEfHVmqvMYfbdqh%2BRIR6iTMvlLq3XIy8lfOkHnX00H%2B24oNrOHYDoDE1oUXMZEAcn2yg4magi2vfvXw0CLjTpmLxBsjnYv7VqSdBscoRZv0uqKaiskTuhYnr7sZ8VDm06eACXbMo3R6Zf%2FT2MGLWBpAZ2vqGGM82%2BZuaCIwKQd5bsDfZEJ0QytuSD1dtNiVP7CKp1amLGBQRmHeBM5kTK6yFknpyOlTgSmJdI9YrENFWc7X4Z05vKLMk16e65AmixL%2BN0050t6v36PceA5s3x8AnQ9xkL5VFYBciNhAVPTfqcbDdrjm8NX0Tj4lpTsQJvd6fd3Kc8y1kBKOE2VwTaMhr0KFzisoNHsr%2FNFyfQ5x2ZPoF0kGXn6klODowfm6CLo45kqze%2B75dCreI%2FzHmeZkPq4zfvtzxcjjmyP7zCA7tnJBjqkASua8%2FNIQmWf%2BkJ3XBMw1QQgI3aBgP19B4H2SZ3onjL5b1sjWTTyhziyTNbwv3q97yEPkLxIuQskeBmc5xGDTyG4%2Bt6iwe87ADkQYf0P64bYwUXebwbPXSY0l2ZEBaMHXLJUa7N8Qn%2Bp%2FfxNQ1XRAbQyLTOLK29TG4qr4I2mEVxGH1leUdCg6xAqbD4GaGuV6NJ1tjaklF8eN%2BYK64uG8QKY%2BIsB&X-Amz-Signature=5aa3f704c7433ab37eac705333b4357adeeafd9a684afaefbba29bca7376d4c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRUMRCPG%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T092230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCSfsBfSEkLSToJkwTW0hk%2FDOFMoc1rzHrQJ7UnTYjFagIhAIl%2BR%2BBtg6QlH00hIsG4eJsWENsy1mlmTbrvkf9mSmO9KogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw7Qgz%2FmtjI2W5dsMgq3AP7OtoeRtrfZBXBnzhbwJmLs5QXO42Cub%2BYu6bZVOl30ykBqrPb3q5FCMifUnoIW0h72mI38atPTf8atGRTNIIQoe50M1VA8N9g0LG4mVXqBmZBXIW77C5b5jpWN74J9IFgCf%2BbTpbW7S6JtEi4xINW8lPK3NeG30RYpdEZkFygPoNV2SbbKDWDJRe9cOErWy83O929X12Axl0CobNrWZjEfHVmqvMYfbdqh%2BRIR6iTMvlLq3XIy8lfOkHnX00H%2B24oNrOHYDoDE1oUXMZEAcn2yg4magi2vfvXw0CLjTpmLxBsjnYv7VqSdBscoRZv0uqKaiskTuhYnr7sZ8VDm06eACXbMo3R6Zf%2FT2MGLWBpAZ2vqGGM82%2BZuaCIwKQd5bsDfZEJ0QytuSD1dtNiVP7CKp1amLGBQRmHeBM5kTK6yFknpyOlTgSmJdI9YrENFWc7X4Z05vKLMk16e65AmixL%2BN0050t6v36PceA5s3x8AnQ9xkL5VFYBciNhAVPTfqcbDdrjm8NX0Tj4lpTsQJvd6fd3Kc8y1kBKOE2VwTaMhr0KFzisoNHsr%2FNFyfQ5x2ZPoF0kGXn6klODowfm6CLo45kqze%2B75dCreI%2FzHmeZkPq4zfvtzxcjjmyP7zCA7tnJBjqkASua8%2FNIQmWf%2BkJ3XBMw1QQgI3aBgP19B4H2SZ3onjL5b1sjWTTyhziyTNbwv3q97yEPkLxIuQskeBmc5xGDTyG4%2Bt6iwe87ADkQYf0P64bYwUXebwbPXSY0l2ZEBaMHXLJUa7N8Qn%2Bp%2FfxNQ1XRAbQyLTOLK29TG4qr4I2mEVxGH1leUdCg6xAqbD4GaGuV6NJ1tjaklF8eN%2BYK64uG8QKY%2BIsB&X-Amz-Signature=5a9bf08c13a459493401385f36b464422baf790d8e9a3576c6092f1647469940&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
