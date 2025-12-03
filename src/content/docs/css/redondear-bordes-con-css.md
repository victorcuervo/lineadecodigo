---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastupdates: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662CFTVQO%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T220946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIG6c34bZfJMAzrzAhwh50Ba8wK3BW9Vr9vc40CIe%2F44PAiEA80I9Y6obtG8gqWxRZMORnfOipD52iEy%2BZBQn8jdQOHcq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDHayU7tf5w1xSbY04yrcA6kk7%2FmuPSdb4R3xkEqWG1QoL9lT5AvFoUh19%2BLzxIJMMoOSUyK5%2F88JQbn%2Blj7pTT7oWu2zRDUYcEgoIlpWS5wW%2Bw1s6G69BInaipSq0ZBwNnRFuJ2yRECi30RVoz3nOR68JOmh9fhbCOd9tsHtcZkS1b12A%2Fuzlg80g9LtcfuX2FsHgo%2Bo%2FOaYzOZZNefJAudwAmIcJcdwZudgSLWx3oW3ezIa6pfA9pqXtbHk%2FaOpkLuGSI9ozhHSG49DeOc1kot9B2rX%2Bffj0CPpO%2FFI%2FOR45zh%2Br%2BQXs%2FpBBTy21rAi6bcJOtH%2Fwpas3HShGY5vSK1prderPlXV8ZVZRi1ItERAFTz57nnPUQ4DitxYfQNK%2BMH7eHo8N5Xn23Ty1mSf3lwYyzPi4xgNbQJioKbvs5SwNQoFXn8hlrV9z1IexdIb6Mzt0I2MCW3HUMN2p%2FVb1rO7teeEC0T31NCpJyn7q7o5HIxklmybRdqeIpSXLu6i%2Bwsc4BSAvRBFACFBgoAJm22CYYWs4ErMn3Bi6Qy%2FhyYp9tDvzdO2jGrqpWisYxXcFP2S%2B6jcWaX4T%2FYz59Ub2z0A90v8QJI06MIca1iUphxhgxrd1HmO5AKi7Dzv5MROSEXBpRWqRsQL%2F%2FPzMMHdwskGOqUBXdYYvi7UemQuAmEy65ynKha8n0TK0Tt%2F9cnKTh6GjhlPXQX5hinPMCIZIZg5g5AYo6KKh%2ByLfYW5U01D2xG%2BxMKwH7A0I3AJYy0ewKEu%2By6SjP7d7LK6rNQ9KQx1AqKXRCFohASoBI7NjcDFQeR7s3Q7M2tM%2BPlfXUxil8f%2Brtqpk%2BUe0K%2BXuP5VW1h9%2BoZdjh4WtCDQ%2FqN7dl4epnYcZp2AHOpL&X-Amz-Signature=6b2ef6836521310a05791d8a3954939fd2c4007e98a27f3fe1400d1f211d95ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662CFTVQO%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T220946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIG6c34bZfJMAzrzAhwh50Ba8wK3BW9Vr9vc40CIe%2F44PAiEA80I9Y6obtG8gqWxRZMORnfOipD52iEy%2BZBQn8jdQOHcq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDHayU7tf5w1xSbY04yrcA6kk7%2FmuPSdb4R3xkEqWG1QoL9lT5AvFoUh19%2BLzxIJMMoOSUyK5%2F88JQbn%2Blj7pTT7oWu2zRDUYcEgoIlpWS5wW%2Bw1s6G69BInaipSq0ZBwNnRFuJ2yRECi30RVoz3nOR68JOmh9fhbCOd9tsHtcZkS1b12A%2Fuzlg80g9LtcfuX2FsHgo%2Bo%2FOaYzOZZNefJAudwAmIcJcdwZudgSLWx3oW3ezIa6pfA9pqXtbHk%2FaOpkLuGSI9ozhHSG49DeOc1kot9B2rX%2Bffj0CPpO%2FFI%2FOR45zh%2Br%2BQXs%2FpBBTy21rAi6bcJOtH%2Fwpas3HShGY5vSK1prderPlXV8ZVZRi1ItERAFTz57nnPUQ4DitxYfQNK%2BMH7eHo8N5Xn23Ty1mSf3lwYyzPi4xgNbQJioKbvs5SwNQoFXn8hlrV9z1IexdIb6Mzt0I2MCW3HUMN2p%2FVb1rO7teeEC0T31NCpJyn7q7o5HIxklmybRdqeIpSXLu6i%2Bwsc4BSAvRBFACFBgoAJm22CYYWs4ErMn3Bi6Qy%2FhyYp9tDvzdO2jGrqpWisYxXcFP2S%2B6jcWaX4T%2FYz59Ub2z0A90v8QJI06MIca1iUphxhgxrd1HmO5AKi7Dzv5MROSEXBpRWqRsQL%2F%2FPzMMHdwskGOqUBXdYYvi7UemQuAmEy65ynKha8n0TK0Tt%2F9cnKTh6GjhlPXQX5hinPMCIZIZg5g5AYo6KKh%2ByLfYW5U01D2xG%2BxMKwH7A0I3AJYy0ewKEu%2By6SjP7d7LK6rNQ9KQx1AqKXRCFohASoBI7NjcDFQeR7s3Q7M2tM%2BPlfXUxil8f%2Brtqpk%2BUe0K%2BXuP5VW1h9%2BoZdjh4WtCDQ%2FqN7dl4epnYcZp2AHOpL&X-Amz-Signature=dd9da47711cb8df2259c9a54b5ca817a8efc7687e318e1e51ef711ebbb16e82e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
