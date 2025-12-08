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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MN4RDII%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T213931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE9dJq0kh9fM142wOYPFBqCoRzQbaus6E399aUrP2NmVAiBl5OlowWxjSjftRPcXTZ40la2SFqowo4DlCYzYDvXjfCqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMURq8Zm2VtheHyUv9KtwDyv%2BXfBQw5zmXBYfdqOsW7M6S2fEzmQONiBWhdNjZytoJ%2BIjJYmSifjt81hVft8GSi9VEIWN16my5ADDwa7TarRbHvITPHAOhp0HA%2FB42s7bBsEE%2BPbcBmllDRi%2BfePx2x4A3vuSJ9zqwPA6YGdILQBwztl6MSs6KUNFHv5%2Fws7xUvpfBVuxNdke3Dkg1vCzajzoUIXa1YmK2F0b8d458trPSmaXC3N362SYNxzWzhWlvikqmKLpbJwvtpAwzq09TUtfZcF1QcWuHAnSIQsmRo9R41wdsH%2BzH22Qq0jkhlMm1RjpJkdOEvLTaqF2fNLAJ9RdpdQXQlX0OKStbZUF8yTg5a2kUkz7021M8JB1TFF0SpeTgmnTlnWu4uAvsOTYmk9bO7tRoTubkMTNyH2kCQIGWXuZyXz4mbHD3PvWPckvQYmo7VN6cMJW0QUi5epJRzAhonzYvQk0z1vVmWHEm%2FPMhXmng%2BgvGrsYg6xZTGk4fAnjKrcwbCz0wVV0HuUn0PPYVE5unHuf0iWhY4UYPWcy759Iv%2BL9nnlJcXB62o12Xq5Cc%2BpTzoeb5Kx1CJgjzyFoKzTXnci8c69%2BAUhaiWIBR66rQzAYpeR5bZ5xYgOoO%2Fo31cl8JyiIgkZowpYDdyQY6pgHt1Oh9lm4JZeVFc9mQMGvjk9K%2FRMOLiXJPnzG1GpJxWu%2B8P67S1DtY30%2FX3MQyYnHfKOvy7jEgG75bwsFALBYTZxGWWZPFfceTq4TzHtRLylmtrlstzNekSSOTFImeUdCRvee7O11sPmn5O6bIKbbqOM53OoQlF8Z5qsZniQ6qnpIolDVIe%2FZR0EZRMIP%2FVVWOhlFOoKj%2Fa2ITqkV3ChPq1GK0rEX5&X-Amz-Signature=cc40ff1dea8c2a21deda6ac61171640527b8fe4edbad325d2eb0ff556403be54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MN4RDII%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T213931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE9dJq0kh9fM142wOYPFBqCoRzQbaus6E399aUrP2NmVAiBl5OlowWxjSjftRPcXTZ40la2SFqowo4DlCYzYDvXjfCqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMURq8Zm2VtheHyUv9KtwDyv%2BXfBQw5zmXBYfdqOsW7M6S2fEzmQONiBWhdNjZytoJ%2BIjJYmSifjt81hVft8GSi9VEIWN16my5ADDwa7TarRbHvITPHAOhp0HA%2FB42s7bBsEE%2BPbcBmllDRi%2BfePx2x4A3vuSJ9zqwPA6YGdILQBwztl6MSs6KUNFHv5%2Fws7xUvpfBVuxNdke3Dkg1vCzajzoUIXa1YmK2F0b8d458trPSmaXC3N362SYNxzWzhWlvikqmKLpbJwvtpAwzq09TUtfZcF1QcWuHAnSIQsmRo9R41wdsH%2BzH22Qq0jkhlMm1RjpJkdOEvLTaqF2fNLAJ9RdpdQXQlX0OKStbZUF8yTg5a2kUkz7021M8JB1TFF0SpeTgmnTlnWu4uAvsOTYmk9bO7tRoTubkMTNyH2kCQIGWXuZyXz4mbHD3PvWPckvQYmo7VN6cMJW0QUi5epJRzAhonzYvQk0z1vVmWHEm%2FPMhXmng%2BgvGrsYg6xZTGk4fAnjKrcwbCz0wVV0HuUn0PPYVE5unHuf0iWhY4UYPWcy759Iv%2BL9nnlJcXB62o12Xq5Cc%2BpTzoeb5Kx1CJgjzyFoKzTXnci8c69%2BAUhaiWIBR66rQzAYpeR5bZ5xYgOoO%2Fo31cl8JyiIgkZowpYDdyQY6pgHt1Oh9lm4JZeVFc9mQMGvjk9K%2FRMOLiXJPnzG1GpJxWu%2B8P67S1DtY30%2FX3MQyYnHfKOvy7jEgG75bwsFALBYTZxGWWZPFfceTq4TzHtRLylmtrlstzNekSSOTFImeUdCRvee7O11sPmn5O6bIKbbqOM53OoQlF8Z5qsZniQ6qnpIolDVIe%2FZR0EZRMIP%2FVVWOhlFOoKj%2Fa2ITqkV3ChPq1GK0rEX5&X-Amz-Signature=0c78299940742f2007bf6add1255c996523b67083c665e8e349221884ad912e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
