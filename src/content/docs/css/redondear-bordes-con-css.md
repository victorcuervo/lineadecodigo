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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHLCBYQ2%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T125412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQDLHVKY3p4IYJ1753sN%2BQiECRKZSbqa9cQec9Fjk5cp0QIhAO1nyz7kQ6mwmt6p5gWX1qsV3BldqlRboNPCKfWkc%2B5hKv8DCEYQABoMNjM3NDIzMTgzODA1IgwIE4RlWTmYPae9foQq3AOZ3lZRXrBvYxqpzVLczjmvVr5qTfQxhzpIvSfHhk4lxh4UJAyhXni8sFwPUOGQFsjrYkH7y1JorufdWz6Fad7BUDKxdsxMaKCWOulknpmeXGWEjpVDIsJLPcRdw%2FPDf0EoBWw9uDr5WW1ci3QnYAzvOleaK8%2Fv40b6bXayInHB%2BygKWGQp37gy%2FeUnaouHuCEkvWf031YMk%2BWcMPcXumIZ%2FTrhVHwUm57y8KLd3GfBajMJVIjSko%2F%2BP%2Bb168S75Te5%2F3xRZo246v6QwaP0h5%2BIRb5oeLf2yIXFJfROFEOcN7T%2B6PqZjxcjPNk4PTH6scpuQNwJtsGdjKxPmBxD%2BWiWoHdK1viOdwazC2f%2F4zIv74IJVhEsCOVSok9g5UpF0EezPv%2B8N0sR6j5pmkiSq2B6gjmg8fJNA2I45Ok1Eu51URnr15hPOTYaq4mk8nbCJ8JYdFd6vUKWwqNDCXaz%2FKSkrbJ3GeXLZBSm34aOGX2y6fBZpTR3GGQBsEAhuqie98ws8BI4YTKJ7L%2BdUT3qkcjddUxZfu0KTINdbTBFr6uw7vTcGmzuwM%2B2q7fk81Byc%2B7lTSKqsQ89wF5c14u3yLo%2Bhayryl80WkqUSX9qxVjczAqtPqjzTZeTyIG6%2BjD5g8bJBjqkAbMTnl7KQMCYVqNm5hxISG4EZsi3Y4ov1BNtRRLYTWyp9F%2Fe%2BX4%2B0qrZzejv3LbocxZFWKiIe3Aq57HNlisDdkJidLiZyoufZZYo8T2MV51R6M1e1Gh0wfaimLgappjgwUnp65pM3SHKpezfTbiwGYDdkVFFwUEqr4U2vZ6jN987TNVsOgw0%2FxQaDUv6QNFq6IkpBL1dBgq9SQLZExVBv3C%2FuwMX&X-Amz-Signature=6b94491071cad4b4bde8cccdf48361d61f8414e14a5390b7d5a6b4ebb8c72224&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHLCBYQ2%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T125412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQDLHVKY3p4IYJ1753sN%2BQiECRKZSbqa9cQec9Fjk5cp0QIhAO1nyz7kQ6mwmt6p5gWX1qsV3BldqlRboNPCKfWkc%2B5hKv8DCEYQABoMNjM3NDIzMTgzODA1IgwIE4RlWTmYPae9foQq3AOZ3lZRXrBvYxqpzVLczjmvVr5qTfQxhzpIvSfHhk4lxh4UJAyhXni8sFwPUOGQFsjrYkH7y1JorufdWz6Fad7BUDKxdsxMaKCWOulknpmeXGWEjpVDIsJLPcRdw%2FPDf0EoBWw9uDr5WW1ci3QnYAzvOleaK8%2Fv40b6bXayInHB%2BygKWGQp37gy%2FeUnaouHuCEkvWf031YMk%2BWcMPcXumIZ%2FTrhVHwUm57y8KLd3GfBajMJVIjSko%2F%2BP%2Bb168S75Te5%2F3xRZo246v6QwaP0h5%2BIRb5oeLf2yIXFJfROFEOcN7T%2B6PqZjxcjPNk4PTH6scpuQNwJtsGdjKxPmBxD%2BWiWoHdK1viOdwazC2f%2F4zIv74IJVhEsCOVSok9g5UpF0EezPv%2B8N0sR6j5pmkiSq2B6gjmg8fJNA2I45Ok1Eu51URnr15hPOTYaq4mk8nbCJ8JYdFd6vUKWwqNDCXaz%2FKSkrbJ3GeXLZBSm34aOGX2y6fBZpTR3GGQBsEAhuqie98ws8BI4YTKJ7L%2BdUT3qkcjddUxZfu0KTINdbTBFr6uw7vTcGmzuwM%2B2q7fk81Byc%2B7lTSKqsQ89wF5c14u3yLo%2Bhayryl80WkqUSX9qxVjczAqtPqjzTZeTyIG6%2BjD5g8bJBjqkAbMTnl7KQMCYVqNm5hxISG4EZsi3Y4ov1BNtRRLYTWyp9F%2Fe%2BX4%2B0qrZzejv3LbocxZFWKiIe3Aq57HNlisDdkJidLiZyoufZZYo8T2MV51R6M1e1Gh0wfaimLgappjgwUnp65pM3SHKpezfTbiwGYDdkVFFwUEqr4U2vZ6jN987TNVsOgw0%2FxQaDUv6QNFq6IkpBL1dBgq9SQLZExVBv3C%2FuwMX&X-Amz-Signature=0c62d995722742449812d19c5fae635cd50641d338fe99e104daffd5b078370a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
