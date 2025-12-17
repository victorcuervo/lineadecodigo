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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663V4ZDITR%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T051613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDsEbUdkV4OioWKK0ncb6B%2BLIw%2F6aH2TLVJT%2FfNN52vJgIhAI8TevRe8yInzjKp9YrLwzW4bcYORXBGRj2bEHJY%2F431Kv8DCHYQABoMNjM3NDIzMTgzODA1IgxinrDMp9SCZNTAtrcq3AOlEfCxXm%2BQwirp%2BdblP5JwTB3%2BTnwF7OXtZVYO4FjArb7ZDZ1luXtCi4I4M7nnOavgcIzj%2FLoMWzUutDy9KNT7Qn%2BXLdoQHElEB24vGXl5HQNoQV6Wy4wSXON8O1BEUjhp0AP3ZGCcq%2BC2Ij4kEYUXmvhmFw5kShi2rb1U%2BxImvtc0%2Fb3OgRwEckgiPqGggoCyPNFHr%2B5PhQPrCZF9HlMpXMcbO%2F2A4LWyJLTP0tm%2BRzgDDutxo%2BlhqhQ1R%2FYmRCkhkIdG1A%2BobdS77VSv%2Fzbel9k04RCMAErMAFWir3qOEHKXFjOD4FYXyBaG9qmtSGili7QT%2BLjT%2BdG3P2oVHoNL9j5AWCcnqp9VdkM%2BLoEevC7gy9XNZWDEGtNH6q0StdH6PVwymHaj7gkM%2FPmB5AfaT%2BARPoG9ePuMArF6HMJXxtWI%2BrlBPDqVKUY0dKd82zOqmRyOXZQ3IGlyDz0fANKmk68SfE5DPFeMQaui0w8IR2L53M%2FW6yr1CkM4mTPMt52WN4mwtxaY507a4WW4xIcaEIbgGPzu%2BEoigv1V6CsvUAaXJgTeoXKmjah3Kb7xJRg8v2AfPNIn%2FOFn989BbafZZXT%2BgwRDF40AVgGj70iGFHAgbHar4MQhsQKzfTCO6ojKBjqkAQO0FFKxDQwmtOlcsylEibK4obGTGsMXvlZ%2BYWM78ZhNCwHyleJJVVi3TSwKTu%2BDFlX0hc0Xf4yz1booV6BA7LyCrjIchBHjAGc0Ye6lEYKcei%2BqH8fMsqs5M%2FMIhn1MvQN8oRas%2F8bnt4XPARxPhO8PdcC7W7Ir6faILmdXvOHf7mg0cVaqYMUB2o7C4UJp7ctC1vajLAai36nBJAu5OxSxwqIk&X-Amz-Signature=a659021eeadc5fee261ed26382659b344e51da144f8039a7a7e0b47ae40dce54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663V4ZDITR%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T051613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDsEbUdkV4OioWKK0ncb6B%2BLIw%2F6aH2TLVJT%2FfNN52vJgIhAI8TevRe8yInzjKp9YrLwzW4bcYORXBGRj2bEHJY%2F431Kv8DCHYQABoMNjM3NDIzMTgzODA1IgxinrDMp9SCZNTAtrcq3AOlEfCxXm%2BQwirp%2BdblP5JwTB3%2BTnwF7OXtZVYO4FjArb7ZDZ1luXtCi4I4M7nnOavgcIzj%2FLoMWzUutDy9KNT7Qn%2BXLdoQHElEB24vGXl5HQNoQV6Wy4wSXON8O1BEUjhp0AP3ZGCcq%2BC2Ij4kEYUXmvhmFw5kShi2rb1U%2BxImvtc0%2Fb3OgRwEckgiPqGggoCyPNFHr%2B5PhQPrCZF9HlMpXMcbO%2F2A4LWyJLTP0tm%2BRzgDDutxo%2BlhqhQ1R%2FYmRCkhkIdG1A%2BobdS77VSv%2Fzbel9k04RCMAErMAFWir3qOEHKXFjOD4FYXyBaG9qmtSGili7QT%2BLjT%2BdG3P2oVHoNL9j5AWCcnqp9VdkM%2BLoEevC7gy9XNZWDEGtNH6q0StdH6PVwymHaj7gkM%2FPmB5AfaT%2BARPoG9ePuMArF6HMJXxtWI%2BrlBPDqVKUY0dKd82zOqmRyOXZQ3IGlyDz0fANKmk68SfE5DPFeMQaui0w8IR2L53M%2FW6yr1CkM4mTPMt52WN4mwtxaY507a4WW4xIcaEIbgGPzu%2BEoigv1V6CsvUAaXJgTeoXKmjah3Kb7xJRg8v2AfPNIn%2FOFn989BbafZZXT%2BgwRDF40AVgGj70iGFHAgbHar4MQhsQKzfTCO6ojKBjqkAQO0FFKxDQwmtOlcsylEibK4obGTGsMXvlZ%2BYWM78ZhNCwHyleJJVVi3TSwKTu%2BDFlX0hc0Xf4yz1booV6BA7LyCrjIchBHjAGc0Ye6lEYKcei%2BqH8fMsqs5M%2FMIhn1MvQN8oRas%2F8bnt4XPARxPhO8PdcC7W7Ir6faILmdXvOHf7mg0cVaqYMUB2o7C4UJp7ctC1vajLAai36nBJAu5OxSxwqIk&X-Amz-Signature=1f699c59d92ac73ced8f6142a4984513baabe7d267efc60e9d53003dbda143e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
