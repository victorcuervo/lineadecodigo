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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466734FKWFO%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T162748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDP2JlBVj8eQeD%2BbR8gWhh3f0C1WJXnGNYlSvy78wxsWAiAPNPcP0q9tRbcGX6zJ82LSepaGNmTRAjRFb0CFbw1ayiqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgAwPGHbs1GWDziuaKtwDBzYyC6Jt06HBfNRZzGnBEXf1ufaHezIPGXCUzkZ3aJfzjlSvQVae4NUUmBZhE%2Bd1ubcWAaUvKvwEpujU%2FLpb56kIhvJwHZR0Rdys%2BCp3m0L2YfFvORGrqCcKKKx0gXiuhaewhrGXvIl9DATOZrIWOtaHMjnL6ydcv9wm9xDXt5ouP9sNBdiuc95KEDFNm3IXe8B1Cq9RvoEMNwGn9cMQBBjVI5Da0BECU2pjQWC8aFML0ll7Kyy%2BdKK2x9Y8xK7S34YZl5%2FCwnbqVa%2BSe%2FzjiwN7uiMhoOIoKU1ddyKUX4nI3HKwh4iXN1DeaWxO4pqu%2BVSGZLBK0fLCyTKQ95ElDjduf0qxiTzz6ov%2FtxnNW7S71lOK9VsOVyms4wDBai9AVN4gXyBl91DEHUOesMuY0VC8%2F8B7L2Y7BRH9U9F0a6S9b2cvwUbRysxWRg2wCF116yJeAKmxlBSVs8ZOrkWj54O5ncJ53C%2B4NZRj7%2Fe2rvUL%2F3JBFOV7tSaZQDZ3GuhdXgO1i2DIQ5uQhMk8ayeAXw5nG%2BVjL4WwGhzX86dDUYo%2BGO%2FK4HVjlDzZ7d%2B9jQcjCUc9dBmJOMije%2Fs9TwFPz0YR0kVMfywqUtbL1jEj038fR6KZaaP3yOyqkz0wtb3WyQY6pgGxxkfEMUQEp%2B37i7gGOKOQXJhMLKfJ0%2FXPL6e7XC6JIrq9uBVWDeXxFaxKnBXKCLhs5owuPaKvfc5oTUXTxMMPtUndG7f9vY7YIgnlzxXj%2FjbKt5EWwBnG8cYpn%2B5Z5OzvWjdG7KXsKFV6t3Q477p92y%2Feyef0vXYSZv8l0qLjth70FX9lferihSUAiJeVWdKfcLjQub3%2B9Sf%2B3SlAbiUA%2Fo3%2FtBKS&X-Amz-Signature=0741abaf4394c4020d532f34ae3bd9c9b18700d455c34d61e854b10cda16e27d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466734FKWFO%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T162748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDP2JlBVj8eQeD%2BbR8gWhh3f0C1WJXnGNYlSvy78wxsWAiAPNPcP0q9tRbcGX6zJ82LSepaGNmTRAjRFb0CFbw1ayiqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgAwPGHbs1GWDziuaKtwDBzYyC6Jt06HBfNRZzGnBEXf1ufaHezIPGXCUzkZ3aJfzjlSvQVae4NUUmBZhE%2Bd1ubcWAaUvKvwEpujU%2FLpb56kIhvJwHZR0Rdys%2BCp3m0L2YfFvORGrqCcKKKx0gXiuhaewhrGXvIl9DATOZrIWOtaHMjnL6ydcv9wm9xDXt5ouP9sNBdiuc95KEDFNm3IXe8B1Cq9RvoEMNwGn9cMQBBjVI5Da0BECU2pjQWC8aFML0ll7Kyy%2BdKK2x9Y8xK7S34YZl5%2FCwnbqVa%2BSe%2FzjiwN7uiMhoOIoKU1ddyKUX4nI3HKwh4iXN1DeaWxO4pqu%2BVSGZLBK0fLCyTKQ95ElDjduf0qxiTzz6ov%2FtxnNW7S71lOK9VsOVyms4wDBai9AVN4gXyBl91DEHUOesMuY0VC8%2F8B7L2Y7BRH9U9F0a6S9b2cvwUbRysxWRg2wCF116yJeAKmxlBSVs8ZOrkWj54O5ncJ53C%2B4NZRj7%2Fe2rvUL%2F3JBFOV7tSaZQDZ3GuhdXgO1i2DIQ5uQhMk8ayeAXw5nG%2BVjL4WwGhzX86dDUYo%2BGO%2FK4HVjlDzZ7d%2B9jQcjCUc9dBmJOMije%2Fs9TwFPz0YR0kVMfywqUtbL1jEj038fR6KZaaP3yOyqkz0wtb3WyQY6pgGxxkfEMUQEp%2B37i7gGOKOQXJhMLKfJ0%2FXPL6e7XC6JIrq9uBVWDeXxFaxKnBXKCLhs5owuPaKvfc5oTUXTxMMPtUndG7f9vY7YIgnlzxXj%2FjbKt5EWwBnG8cYpn%2B5Z5OzvWjdG7KXsKFV6t3Q477p92y%2Feyef0vXYSZv8l0qLjth70FX9lferihSUAiJeVWdKfcLjQub3%2B9Sf%2B3SlAbiUA%2Fo3%2FtBKS&X-Amz-Signature=8ba260a8a434cb77e4e53776fbb3b62bb1fa65041099a4bbd82a6d52a3a9a9dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
