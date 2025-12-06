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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVBQBI7I%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T201817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDh5DxUJg8HslxwcDwIbamwrAogNHVuzk%2BSrTUTwgvzGAIhAMI4Z4%2Bh4SgcqXGlJMPyBAgqGbJ6FUUYdsywaOSrIFtbKv8DCHoQABoMNjM3NDIzMTgzODA1Igyt1MYnrm2OKDygl7Uq3APruAOtAd9uPAfiTCqCTOpEQXha2H13DOy6qz885HIgtr17DEjHm%2FPAQOMnBtNqbMwOPlVQm4ib%2B3uy4di7zBdN1ytu0VBg29gHlR5sZGC3ONk9oUnehQoOaANVeI%2BItxrLPS%2BeGFv8nXsZ94c1fb5IR2r4IWhphBOl5vZTwwdL4ioasF0zZs%2F6c%2FWbH7ptJ74V5lOQy8ByeG11bY7V3S%2FFJdNnj9zae8Q%2F83qcuNm%2BHlc7oLRWarXFoeETGpes2ZgH4yPa%2FE6U1%2FobnnJEKIQ%2FExSjESBGy3Ah%2FZIWD8%2B3CTlEBABhYWfR%2F82eoLlkoBt0F5T5FFeRhiOirJm5LHBeDfJkfjhnxCkNghs588OMdhsH0A8r92Ii2K%2FMFZpwiKQM2N9KDAKaWtrLW2M0GLkMINZbQdBnCqHSWq%2FxKA5Thv3nZT7uEihDr%2Fp3f%2FkE1bpdwr4dzhG9BpR8yvA8GFuOv9iMKQSVt0OgNenpE9KWlSY7i9mBu3dwqgixC6jcFcTPCP9V%2FG89cw11e8hiSkZkvfO%2FYdo5Ji5ar7WayLuoGUm9m%2Blu5gV3TQs1igOl6Jt9TuFQ3NG6CvHRcdcDOx5nAcKS2YcHxswt21JF4pfwzGxCbpIVl3amWNwZxTDRy9HJBjqkAZcNX8OBFjpVkv6ld4CjuEEVtdnDNm9Wwywsa7XY%2BRxRMbammqGEuCn0RWgG8biacO54zmQvnfvWdQJvAOSP9UJQSABJJDvUpowmYbrzqBmMpYo8NRqYRPxzwckkJIafPl9OXFAw9uzChD4guZ%2Fn1e96qK7m0kxXpWUPjwYKY84VEIhm%2FJ%2BP65ncOM4%2Fcdb4TIDo5lbEJTgh9CB5vGKRxZi2W0Tq&X-Amz-Signature=e2670cc2e9bb586eb884618b39b709e517f018034a44a2b0fa3f26d58708c84e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVBQBI7I%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T201817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDh5DxUJg8HslxwcDwIbamwrAogNHVuzk%2BSrTUTwgvzGAIhAMI4Z4%2Bh4SgcqXGlJMPyBAgqGbJ6FUUYdsywaOSrIFtbKv8DCHoQABoMNjM3NDIzMTgzODA1Igyt1MYnrm2OKDygl7Uq3APruAOtAd9uPAfiTCqCTOpEQXha2H13DOy6qz885HIgtr17DEjHm%2FPAQOMnBtNqbMwOPlVQm4ib%2B3uy4di7zBdN1ytu0VBg29gHlR5sZGC3ONk9oUnehQoOaANVeI%2BItxrLPS%2BeGFv8nXsZ94c1fb5IR2r4IWhphBOl5vZTwwdL4ioasF0zZs%2F6c%2FWbH7ptJ74V5lOQy8ByeG11bY7V3S%2FFJdNnj9zae8Q%2F83qcuNm%2BHlc7oLRWarXFoeETGpes2ZgH4yPa%2FE6U1%2FobnnJEKIQ%2FExSjESBGy3Ah%2FZIWD8%2B3CTlEBABhYWfR%2F82eoLlkoBt0F5T5FFeRhiOirJm5LHBeDfJkfjhnxCkNghs588OMdhsH0A8r92Ii2K%2FMFZpwiKQM2N9KDAKaWtrLW2M0GLkMINZbQdBnCqHSWq%2FxKA5Thv3nZT7uEihDr%2Fp3f%2FkE1bpdwr4dzhG9BpR8yvA8GFuOv9iMKQSVt0OgNenpE9KWlSY7i9mBu3dwqgixC6jcFcTPCP9V%2FG89cw11e8hiSkZkvfO%2FYdo5Ji5ar7WayLuoGUm9m%2Blu5gV3TQs1igOl6Jt9TuFQ3NG6CvHRcdcDOx5nAcKS2YcHxswt21JF4pfwzGxCbpIVl3amWNwZxTDRy9HJBjqkAZcNX8OBFjpVkv6ld4CjuEEVtdnDNm9Wwywsa7XY%2BRxRMbammqGEuCn0RWgG8biacO54zmQvnfvWdQJvAOSP9UJQSABJJDvUpowmYbrzqBmMpYo8NRqYRPxzwckkJIafPl9OXFAw9uzChD4guZ%2Fn1e96qK7m0kxXpWUPjwYKY84VEIhm%2FJ%2BP65ncOM4%2Fcdb4TIDo5lbEJTgh9CB5vGKRxZi2W0Tq&X-Amz-Signature=bb0b5c5d2942155249daa9075bf6bb9d654f8718f6c88f60ab068240a890214b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
