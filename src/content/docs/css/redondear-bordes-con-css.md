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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEIN6PUL%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T110509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAnX2EJTwo%2FAYtDiGo17Dk0KFuZSGRL58EnoDF6pfgUoAiBEmXCjLGVnKpmK6lWRwQrXKA7WVBKqbEY6HAg5Ha9beiqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBTBOhv%2FNL4p6J3OZKtwDz37WLECOvaZsY5jyYRqWa8dTi7lFkK6%2Bkrp7ibsExw48Sjsa8KFNQivD0UOl2HLsbur3Pw6iguuNKetLiR%2FzBtpsjfPN06C9qwiviH0NNnX9hza8VEqDEgOyaqwr9CzqnIXNFN4A9V4ieM8sXcc4cow6Bjv0t8wBiduJ82InYc0Tc6JdH2TEpe%2F%2FU65jVzn5ISihgMqtpiJZqAWiQ1f2WmfMGfk6fxvlHzL97K1gqlzGXtas4rcd0FIJwXD0VkWdIG94k9PM3DVJp8JGuAoZk5q%2BDJ1Mra02nkohfY1iloYJ1%2B2u09DKVsJp9WuCctLJBj1A97owsMezeP8MjyYskqsO6XnvNkyF0WS4a6JkGpMt79EZCv%2BFVN8YmeY9hvpO8ONhQypeYT48SNP2DBGeW27%2BuI%2Bbr%2BSAxFC%2B7ToyJf%2FkOe%2BLq2Cp5NyELjIN164gsi9CSDMou0sQRzkw9CLDQTVRxTmgEQDR8ZFBWXFzWB4fZMlYWDK094iDQ0jYqsYMRTNRlSHHKApyMfAWXvB3Pn9tP1Bv7vVfUWxf3pTL4suYra3hQvE7M5zIht1L6%2FeM5FRJ93du4dZE3acp%2F9b4odqoDOg5ThZ%2FQ4lXbZXh%2FeN8Xshx05SlvbKc0JEwtJnVyQY6pgGSEcW6PFSqsXvwGfHWSMZ15frOShldBtiwZW%2FUjLS9WttsM3BvvTfvRIb%2F2mYdUXA7z71DpaiIJgb71e%2BcyABJC4l56AGy3KlHfs0pZNaF8FVHo1epcXShiW5HyP58khw0%2Bs9vvA78c7NLNlxLkpcZ%2FkPQd7b3BH7hXkf0df0%2BQfhLxgMKqnDhDlrfeMGJIm7BqXb6%2F%2BvVUSXmenuv%2FDDl3Q0Hr6AC&X-Amz-Signature=e31f55969f8c7b90f6125dcc4341b6146184bdf8e8567f6504dda0166c6edc63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEIN6PUL%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T110509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAnX2EJTwo%2FAYtDiGo17Dk0KFuZSGRL58EnoDF6pfgUoAiBEmXCjLGVnKpmK6lWRwQrXKA7WVBKqbEY6HAg5Ha9beiqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBTBOhv%2FNL4p6J3OZKtwDz37WLECOvaZsY5jyYRqWa8dTi7lFkK6%2Bkrp7ibsExw48Sjsa8KFNQivD0UOl2HLsbur3Pw6iguuNKetLiR%2FzBtpsjfPN06C9qwiviH0NNnX9hza8VEqDEgOyaqwr9CzqnIXNFN4A9V4ieM8sXcc4cow6Bjv0t8wBiduJ82InYc0Tc6JdH2TEpe%2F%2FU65jVzn5ISihgMqtpiJZqAWiQ1f2WmfMGfk6fxvlHzL97K1gqlzGXtas4rcd0FIJwXD0VkWdIG94k9PM3DVJp8JGuAoZk5q%2BDJ1Mra02nkohfY1iloYJ1%2B2u09DKVsJp9WuCctLJBj1A97owsMezeP8MjyYskqsO6XnvNkyF0WS4a6JkGpMt79EZCv%2BFVN8YmeY9hvpO8ONhQypeYT48SNP2DBGeW27%2BuI%2Bbr%2BSAxFC%2B7ToyJf%2FkOe%2BLq2Cp5NyELjIN164gsi9CSDMou0sQRzkw9CLDQTVRxTmgEQDR8ZFBWXFzWB4fZMlYWDK094iDQ0jYqsYMRTNRlSHHKApyMfAWXvB3Pn9tP1Bv7vVfUWxf3pTL4suYra3hQvE7M5zIht1L6%2FeM5FRJ93du4dZE3acp%2F9b4odqoDOg5ThZ%2FQ4lXbZXh%2FeN8Xshx05SlvbKc0JEwtJnVyQY6pgGSEcW6PFSqsXvwGfHWSMZ15frOShldBtiwZW%2FUjLS9WttsM3BvvTfvRIb%2F2mYdUXA7z71DpaiIJgb71e%2BcyABJC4l56AGy3KlHfs0pZNaF8FVHo1epcXShiW5HyP58khw0%2Bs9vvA78c7NLNlxLkpcZ%2FkPQd7b3BH7hXkf0df0%2BQfhLxgMKqnDhDlrfeMGJIm7BqXb6%2F%2BvVUSXmenuv%2FDDl3Q0Hr6AC&X-Amz-Signature=47470eda9665dabd1efbe0fb987955a286eafe2a200c54c01995a08d6ee6ee03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
