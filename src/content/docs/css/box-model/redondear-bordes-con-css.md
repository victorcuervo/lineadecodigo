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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWYRPIWZ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T001235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7WHNQ3HFGsDtOQnxQMh5%2FD2q2JcmgfJqByEQmo9FlVgIhAJwFHKI9nlJnj5jfgWD6F2vUsXEqGJeo%2FvblDQ%2BsKr7tKv8DCHEQABoMNjM3NDIzMTgzODA1IgyP1uBHjWK6HeU2yM0q3ANW4lGBkJN8F7k%2FvniQxSkHC5j3Gu9eAw%2BNHUKrhKkXRNrM5OcVPIDWPAn9Nq1U98U%2FLwXbT06hUwT9fDZmxx6TH8uaVt8iw8SeiSYPitaFfPIcyowkZIoeX83bXyDOjhW64pO12fC%2Bk%2FZOUEaK4tr6Dqn7d6T8fZdDR8OK57Ihma22Uzl4ORz8hEWKc41asP8ErnwFeU4LihX34tkSr5RuL3kFxN4VuvgsnbhJfhsvFBi7is%2F7XdSRUAi%2Fhdh3OM%2BCQ%2BYj1pMqNwLTms90cK8YfvsJk%2Bp56xqTp59O%2FjWmVSWoAiThigzS2ndWovmDn%2BDf3IKvrkdjrg%2Fsa50draQo2wmIFvi67O%2B6W%2FHO96j6SSS3dKzVH0LzLKw7FVfMoHmJMT8Jg5Sqk4DJN6CzKUmpoyq2zAlqi7t2IF%2FhoG%2FtALnRH9IfdETT2P0XZXRKxyrEYSHftQXwbixZSuvRQ03E%2BiBVJfDQnSETrkEk8k7d42lB5PwXnzm3MzcfTikgIvwDyB6GEG31uEnbHC%2BoBWZW3gEGdA1hIfzHi4zzNNFw1zCzFouzgfJ6z%2BBRMywoP8ibkhUgU%2FW4wiq2RkVtTsX6aFnjg1pOVaOgZN8N2MMKqzcDwm0L%2BJ%2FuibYohzC53ofKBjqkASo%2FL%2BYJagNtRJ9kMYdrVhOYPU5ai2cA181glI%2BzEGGGttiVlWtk0juUoAsbeAxOp%2FaBlFYYNGh0iXCYR4QckHQXsaR%2FraC63D06L640f8zEC6nQVRQvDEDeIfLfgprvSkdafiRXpKzGAw%2Blg4do%2FNiRQTocmJAngxkVLa4hhWMlVP0LNlc7ks70%2FePGhHchpSL3mSngLZ9NiLEA0%2FHRWNG20X7b&X-Amz-Signature=c81f7887628542402250dbdd3dbc139bdb4e52bd80c5a3556750e4ea1fb9f84f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWYRPIWZ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T001235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7WHNQ3HFGsDtOQnxQMh5%2FD2q2JcmgfJqByEQmo9FlVgIhAJwFHKI9nlJnj5jfgWD6F2vUsXEqGJeo%2FvblDQ%2BsKr7tKv8DCHEQABoMNjM3NDIzMTgzODA1IgyP1uBHjWK6HeU2yM0q3ANW4lGBkJN8F7k%2FvniQxSkHC5j3Gu9eAw%2BNHUKrhKkXRNrM5OcVPIDWPAn9Nq1U98U%2FLwXbT06hUwT9fDZmxx6TH8uaVt8iw8SeiSYPitaFfPIcyowkZIoeX83bXyDOjhW64pO12fC%2Bk%2FZOUEaK4tr6Dqn7d6T8fZdDR8OK57Ihma22Uzl4ORz8hEWKc41asP8ErnwFeU4LihX34tkSr5RuL3kFxN4VuvgsnbhJfhsvFBi7is%2F7XdSRUAi%2Fhdh3OM%2BCQ%2BYj1pMqNwLTms90cK8YfvsJk%2Bp56xqTp59O%2FjWmVSWoAiThigzS2ndWovmDn%2BDf3IKvrkdjrg%2Fsa50draQo2wmIFvi67O%2B6W%2FHO96j6SSS3dKzVH0LzLKw7FVfMoHmJMT8Jg5Sqk4DJN6CzKUmpoyq2zAlqi7t2IF%2FhoG%2FtALnRH9IfdETT2P0XZXRKxyrEYSHftQXwbixZSuvRQ03E%2BiBVJfDQnSETrkEk8k7d42lB5PwXnzm3MzcfTikgIvwDyB6GEG31uEnbHC%2BoBWZW3gEGdA1hIfzHi4zzNNFw1zCzFouzgfJ6z%2BBRMywoP8ibkhUgU%2FW4wiq2RkVtTsX6aFnjg1pOVaOgZN8N2MMKqzcDwm0L%2BJ%2FuibYohzC53ofKBjqkASo%2FL%2BYJagNtRJ9kMYdrVhOYPU5ai2cA181glI%2BzEGGGttiVlWtk0juUoAsbeAxOp%2FaBlFYYNGh0iXCYR4QckHQXsaR%2FraC63D06L640f8zEC6nQVRQvDEDeIfLfgprvSkdafiRXpKzGAw%2Blg4do%2FNiRQTocmJAngxkVLa4hhWMlVP0LNlc7ks70%2FePGhHchpSL3mSngLZ9NiLEA0%2FHRWNG20X7b&X-Amz-Signature=583e9ce987cffcf00fe14667eef8c3b25c2d29c95194b99c99782b43eaf17401&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
