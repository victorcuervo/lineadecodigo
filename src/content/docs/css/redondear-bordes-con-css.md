---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HIXV7WO%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T115926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIE%2Bw%2Fui2EgFqxhnwq5kzzHlH0yzQooLYw9bR9bILK1DkAiA4nOupVXAED24Cn5ZzdSUt7c1LxCCAhmRj9MMEQkB%2F2yr%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMy23qfZkPpo6fwy8yKtwDmIrxrJut9L6DGeM9EebYrIMUBXI4Y9CpxUoZu%2Bl8SQMQqdXQmMpCWpqWPONW2l99SkQpFuHjgrDlS2%2Bo8v1hTHnSUt8WcKUcDNIo7ooZtzDsL1dOl0MpfcN4C5Z9KTtsHuh8vbdkCHu0NDK7bvm04baUINCkn4AcB6cnyZCmDyIKjUBMCqmKhogXQPcS0Dyc8QpzFljcfhoqT9USm4IxPtS5k2VnPFVpKDHlED%2Fccp%2BUqPwQ8s4buJ4j%2BNW6qHTA6W5KRVPWmD31tUdnPHhReWNn3ktD4n0y10%2FRx4q294cIFB6ti5LxYqWUwhYJqs4S7TsU7HFptRxHkFmcXIAYbWPoGiG9hfhuN2DwT6jbIHlxXqeXw0cQBAFUArye%2B8iA7JAE%2B1ORIPc1jQToeeCIdr5yFEblAq%2Fg6SVFCxY3A7kfGlFjAbmL%2BfZn7GGzluJJi%2Fwjxu9Nrg0gFeylFNLvoSCKNk03xkec3scbDLY0VjRJJG6XiEy%2B9y8Y%2B95SHGWLFJ2%2F1Q7rjYxoCTOsyiLQX5TCPwB67GCWsMFsTiCyGxHRI3cS3KSLbLRge8W1CwD2RR2C4ZTpbNjxk98u0Kb1yN0Vt9SBbr0uzoDdx3%2BjLZ0l5q9mEy8s%2FIiPVo8w9ObFyQY6pgEKucAr5huDMcofJMLnHrtajqHDdiruCuvsKKpF1jHa21CCx4LOIYG5bA7PAwSZeDAar%2FYDmXEw8y0wlXUNjumTPgTJkwr1psJrqvzUtqgcaAPipwotop340L6PXeojE9h%2FpDdsGe6VrEq8%2BBmTJpIid80k5W99h76RLdZac0ivm0kbB4CWjTOxXkMdVxyNQLmZMjjmiUR6BDS0HoZQXjfuBnrMGv8g&X-Amz-Signature=4ab552c505f7e7ca47791d41e24cb2c10be13019ddfa4fc7aadf23d3baff846a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HIXV7WO%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T115926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIE%2Bw%2Fui2EgFqxhnwq5kzzHlH0yzQooLYw9bR9bILK1DkAiA4nOupVXAED24Cn5ZzdSUt7c1LxCCAhmRj9MMEQkB%2F2yr%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMy23qfZkPpo6fwy8yKtwDmIrxrJut9L6DGeM9EebYrIMUBXI4Y9CpxUoZu%2Bl8SQMQqdXQmMpCWpqWPONW2l99SkQpFuHjgrDlS2%2Bo8v1hTHnSUt8WcKUcDNIo7ooZtzDsL1dOl0MpfcN4C5Z9KTtsHuh8vbdkCHu0NDK7bvm04baUINCkn4AcB6cnyZCmDyIKjUBMCqmKhogXQPcS0Dyc8QpzFljcfhoqT9USm4IxPtS5k2VnPFVpKDHlED%2Fccp%2BUqPwQ8s4buJ4j%2BNW6qHTA6W5KRVPWmD31tUdnPHhReWNn3ktD4n0y10%2FRx4q294cIFB6ti5LxYqWUwhYJqs4S7TsU7HFptRxHkFmcXIAYbWPoGiG9hfhuN2DwT6jbIHlxXqeXw0cQBAFUArye%2B8iA7JAE%2B1ORIPc1jQToeeCIdr5yFEblAq%2Fg6SVFCxY3A7kfGlFjAbmL%2BfZn7GGzluJJi%2Fwjxu9Nrg0gFeylFNLvoSCKNk03xkec3scbDLY0VjRJJG6XiEy%2B9y8Y%2B95SHGWLFJ2%2F1Q7rjYxoCTOsyiLQX5TCPwB67GCWsMFsTiCyGxHRI3cS3KSLbLRge8W1CwD2RR2C4ZTpbNjxk98u0Kb1yN0Vt9SBbr0uzoDdx3%2BjLZ0l5q9mEy8s%2FIiPVo8w9ObFyQY6pgEKucAr5huDMcofJMLnHrtajqHDdiruCuvsKKpF1jHa21CCx4LOIYG5bA7PAwSZeDAar%2FYDmXEw8y0wlXUNjumTPgTJkwr1psJrqvzUtqgcaAPipwotop340L6PXeojE9h%2FpDdsGe6VrEq8%2BBmTJpIid80k5W99h76RLdZac0ivm0kbB4CWjTOxXkMdVxyNQLmZMjjmiUR6BDS0HoZQXjfuBnrMGv8g&X-Amz-Signature=b16dcb2d669b024e63ac2e1e9b114c51b03171d4a8abf13ab8eaf893925625ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
