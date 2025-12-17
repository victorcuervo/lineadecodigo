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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNLJZBFE%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T002056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDg9JsZxc54wri3hVUGXFIKJRVkvNkzMUXMzuMmmZqWxgIhANDMNdQ%2FyhVO31ef3izCHTFB2ZmGaawdvWURK8OerrY8Kv8DCHEQABoMNjM3NDIzMTgzODA1Igz93NqadaAYiDS2UKAq3APwhHjuxvfU7DnVMjN5n1AG4YApprGj9si9iUeGYtIlXr7AnrO07isQKNpQ51DocZt%2FEq4XzrsyYIoeXoiUp9LVXhW8PDSjb7LZWDLzlDikizLy9wnm1fLFd8bkX0uDGLOO1qM6TzJ6jDNrLelewubOf64KLnlmW4YD%2F3sLj6sHmrcc%2ByR0nIttSYUI84DynJvIy1OMjQvl%2FkEPiOVFrRCTF3Jczy0LN8LOgUs2fYCh21hK7f6NFG%2BG2F%2FJ15F1iuZn3uWaRkGOOgMCOanBrcS%2FpBa%2FmiS%2F5OuUSn7rn5iFTrWBqeCyECDSqI7gTNVG032o2%2BoBM1Xx0NgOe%2BqTmUYIKkNQnhqMDywIBpK3qCFOwK%2FxU5Uy6dJTLIUjiFHQnqyfmFpwofSVkh8JVDdCdQNBqV1wd4XOF07eRvj29xF%2BiDmf6T4Af0oAAxB0GoOr7Uyt7vJag96M5NT7bquyNdaKa%2BEbw6grwAnGC4f7O69tgQ7Yy%2FWJ2yr92dG6425VE0P3wjHOB%2BYlTht89fhCYUSiRWBZ9dmJ4%2BiZKlA84aH7fwnPT4ypKncSupHTuqfLZ8q1x2USMT%2FxBwvEYBTYQTsgaWY%2FCddvTK0SxkNWneX7nBu4biuMDi2NOwQ4CTDC34fKBjqkAXYez7EWnjs9gsIJ%2BoKbqxe91MUNGEQgoU1O4BT1wWFkKBTY7i44g6pjXhURI5V7ZCqsv4Ab08OXknHqBMi3C5KpY%2FrvRxV4%2B05FYk9vs2EF%2F20vD4VAmLOgGoEJ%2FZj1a3rqlBJjX%2F8Wkj4o2%2BQF5Ew786RrcpSfzM2IbkZWqUs1N5HkMRYeHPVntCEyK7PLwnw5w79c5HoA5yDl3YPJfe1W%2Fp94&X-Amz-Signature=d29ff6dd5547388e8196c603c9c7b22ee2636729f5c8f18e60af8f5075c7fbc4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNLJZBFE%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T002056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDg9JsZxc54wri3hVUGXFIKJRVkvNkzMUXMzuMmmZqWxgIhANDMNdQ%2FyhVO31ef3izCHTFB2ZmGaawdvWURK8OerrY8Kv8DCHEQABoMNjM3NDIzMTgzODA1Igz93NqadaAYiDS2UKAq3APwhHjuxvfU7DnVMjN5n1AG4YApprGj9si9iUeGYtIlXr7AnrO07isQKNpQ51DocZt%2FEq4XzrsyYIoeXoiUp9LVXhW8PDSjb7LZWDLzlDikizLy9wnm1fLFd8bkX0uDGLOO1qM6TzJ6jDNrLelewubOf64KLnlmW4YD%2F3sLj6sHmrcc%2ByR0nIttSYUI84DynJvIy1OMjQvl%2FkEPiOVFrRCTF3Jczy0LN8LOgUs2fYCh21hK7f6NFG%2BG2F%2FJ15F1iuZn3uWaRkGOOgMCOanBrcS%2FpBa%2FmiS%2F5OuUSn7rn5iFTrWBqeCyECDSqI7gTNVG032o2%2BoBM1Xx0NgOe%2BqTmUYIKkNQnhqMDywIBpK3qCFOwK%2FxU5Uy6dJTLIUjiFHQnqyfmFpwofSVkh8JVDdCdQNBqV1wd4XOF07eRvj29xF%2BiDmf6T4Af0oAAxB0GoOr7Uyt7vJag96M5NT7bquyNdaKa%2BEbw6grwAnGC4f7O69tgQ7Yy%2FWJ2yr92dG6425VE0P3wjHOB%2BYlTht89fhCYUSiRWBZ9dmJ4%2BiZKlA84aH7fwnPT4ypKncSupHTuqfLZ8q1x2USMT%2FxBwvEYBTYQTsgaWY%2FCddvTK0SxkNWneX7nBu4biuMDi2NOwQ4CTDC34fKBjqkAXYez7EWnjs9gsIJ%2BoKbqxe91MUNGEQgoU1O4BT1wWFkKBTY7i44g6pjXhURI5V7ZCqsv4Ab08OXknHqBMi3C5KpY%2FrvRxV4%2B05FYk9vs2EF%2F20vD4VAmLOgGoEJ%2FZj1a3rqlBJjX%2F8Wkj4o2%2BQF5Ew786RrcpSfzM2IbkZWqUs1N5HkMRYeHPVntCEyK7PLwnw5w79c5HoA5yDl3YPJfe1W%2Fp94&X-Amz-Signature=670238b5f398d0ebe11fc7b72e61bcb22d5f1a89d7f6c40c36aaef126ef89276&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
