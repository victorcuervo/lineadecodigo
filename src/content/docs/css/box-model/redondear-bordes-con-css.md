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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJUZ7WJK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T162304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDYqhB96NAIsvM6oFn%2B0dN%2BX2UE%2FHHzLf4RHLA%2FxuqU7gIgJ0yoZFNseIfJkX2b4aBoRPSILiRZCyv4HMKAEhF9aiwqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH8ez25BYEu1pkXtuCrcA2iz6jCKOmQ1QAoQDxZsyFDsIMpjKhMSB2jgiVvTVkdl5lvjbJAggkFhto5dtTeTkVXPmfW8QUZAJRYWSmEjblqqXi4fB9Ycd758WZcvCvx7n5t8rNaYEcDIFcA2qLhkEHTr3XHa%2BI0MJbViMsQ9nVSSsUirQSspX4FHN9ZYX14M5zP75SEXq1QJ%2Fln2DjG3CB9kIJjE4WoayD21QbWYVoqdg%2FBSmGSOWq12WrDzctjHKNipTilcMMkdgNYzcMuC%2BxwkXvDy1vQE2uOjpstKm%2Bf1PqZrPp6Onqdk4N8H2JiGz0%2FkcWxH5QxZ1r0lKcSjPumL8oLNDDIXLknTPVpkY2ZXOC7QEIZZQjAT%2B%2FrSE2uUSFfI%2B55nPBgkeA%2F%2FQZzxHmbWa25J9O7aE5FWaqx93DBMkDD4OusUjBhEEF8EQrRIw%2BlhtnU0LvUUS%2BUHnYklVd8NfYESClSWZx0O2ta%2Fz%2FP8Rxw%2FX8Q3Qvdai%2BmTKDrGVHBQMjcvl%2B0TFjqNgHBFU3rYtyvISNyA5Dr7OC%2BTMp0gaug5kwHoivT3SA%2F1fxGWRM2BazesvZD3pB57PDTCrgBKJvEpoeR6Pcm1zhQiJCnjanai16zCfXg%2FNA1XL5SbOtkYOQtB33Ne%2Fj0bMLSfi8oGOqUBdKpt9X0aAEvmVx974owbpJP3tmujcCXVGCmHcFvMZfxTkV5KPvwUdNB6o5gSg6iIFTiS096uUK0AySOboWRNo%2F47W9yPjUguUNEOTzYoOf86x%2FgC5dlh0DqqCBJGCfhAmyO6XHe%2FKVmCRZ7AcatNjYnc6obp13EB%2FEqSW0oXlQUOQXN9sme9vvU78bZtPumYoS%2F4FnqpFyk3ZfDIpMNDWs0miPcu&X-Amz-Signature=3432168d6970903fb35858eafe6e85acafc34ac5faed4cfde96ad6e4b2519980&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJUZ7WJK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T162304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDYqhB96NAIsvM6oFn%2B0dN%2BX2UE%2FHHzLf4RHLA%2FxuqU7gIgJ0yoZFNseIfJkX2b4aBoRPSILiRZCyv4HMKAEhF9aiwqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH8ez25BYEu1pkXtuCrcA2iz6jCKOmQ1QAoQDxZsyFDsIMpjKhMSB2jgiVvTVkdl5lvjbJAggkFhto5dtTeTkVXPmfW8QUZAJRYWSmEjblqqXi4fB9Ycd758WZcvCvx7n5t8rNaYEcDIFcA2qLhkEHTr3XHa%2BI0MJbViMsQ9nVSSsUirQSspX4FHN9ZYX14M5zP75SEXq1QJ%2Fln2DjG3CB9kIJjE4WoayD21QbWYVoqdg%2FBSmGSOWq12WrDzctjHKNipTilcMMkdgNYzcMuC%2BxwkXvDy1vQE2uOjpstKm%2Bf1PqZrPp6Onqdk4N8H2JiGz0%2FkcWxH5QxZ1r0lKcSjPumL8oLNDDIXLknTPVpkY2ZXOC7QEIZZQjAT%2B%2FrSE2uUSFfI%2B55nPBgkeA%2F%2FQZzxHmbWa25J9O7aE5FWaqx93DBMkDD4OusUjBhEEF8EQrRIw%2BlhtnU0LvUUS%2BUHnYklVd8NfYESClSWZx0O2ta%2Fz%2FP8Rxw%2FX8Q3Qvdai%2BmTKDrGVHBQMjcvl%2B0TFjqNgHBFU3rYtyvISNyA5Dr7OC%2BTMp0gaug5kwHoivT3SA%2F1fxGWRM2BazesvZD3pB57PDTCrgBKJvEpoeR6Pcm1zhQiJCnjanai16zCfXg%2FNA1XL5SbOtkYOQtB33Ne%2Fj0bMLSfi8oGOqUBdKpt9X0aAEvmVx974owbpJP3tmujcCXVGCmHcFvMZfxTkV5KPvwUdNB6o5gSg6iIFTiS096uUK0AySOboWRNo%2F47W9yPjUguUNEOTzYoOf86x%2FgC5dlh0DqqCBJGCfhAmyO6XHe%2FKVmCRZ7AcatNjYnc6obp13EB%2FEqSW0oXlQUOQXN9sme9vvU78bZtPumYoS%2F4FnqpFyk3ZfDIpMNDWs0miPcu&X-Amz-Signature=6a448a2203e397e1c4dae17b1f1f0b0ee63ef0055325d65d12b84e2935eba632&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
