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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CVBBTQM%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T154300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIHSlMVe9PTHvKIvCz3cWvoGrjbqQ9SMnoHkPOn6z8mPUAiEA6cFqIgq0REhvYLxp%2FX5QQItIzg84yi3ic2mEE61GhRcq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDIYhtQKKGWHR%2BrVKEyrcA5%2FZQ9SvuG6QNtk%2BwzvejedO0t2pNStgmAnBT%2BOZb0D9RkaTs6A0sHfJNf%2BMLNfZGitCtJX%2Bv%2FcA61HuYkU51XjC%2Fkb1ehFPiZbIb08wZGeDgcqOz%2B6VYYThmErG1E3DHF5QrjwbQ4MC5m5oVpi3bQ%2B9vN2T2p2O2aB8JRSNo%2BcOByuSCqlJWe69upS%2Bb9GGCFS0per6loa0V1ZpNi9lMzWzrIFEF9QxyTe%2BI5AwOM1huIHlQuRw%2F4srp3GxNUr3KKd3giS%2F4xv0m4d3S%2Fc7JsheRWSkaGxQMbTja2iDSlm%2F%2BFsJa7rAWnIwzwNYpq%2F0HOAmjB%2B%2FXRGgtiWIY65WZ15uL82K9hQgjNm2Y4jgXsoxood8aBAjV4RU4yjnrky%2FSEXrRAM6lsXduLZle0G4S9Z%2F5Hk8bpjFp9hqq%2B3pHPrxrTRngLJyvspwxbkTR339VxvyOXUEwoxF8o5Esv41xkSQHECFtoG0ioAIYJ%2BqhMUbxlPOZZFgUbeWZKCM%2FTJmINX1JEhoeK4EtP%2FuyS4Y4Lc5XAynMB9%2Fkx05okgGUm9ZMplh2S8Tbru%2BFGmt1M%2BPN0iO5Vs9lAKoFQW5sOycG7mjZxUN%2Bj1bjv2WFeMFxNNc5pLYn2v4TUFyQaVCMMm%2BxskGOqUBIsFRnX80MFyZQNPQ22qb98QzQztcevD4TTTvb2NgynAobDyPMD5lMa580YLoi2VjkKI9HuXL4fBiyDbo7qPpBE9NSxUkYW038YZACkIczXJc7phJjxXLxQcqB5H%2FQohuQT%2ByTX5dE7iQLQtgiIRH5FMFYnBirmWQ6SDOSNIC33icaSrpzAmhlu6pH%2BCgqlWKizWt%2B2AES%2F6gluo812danoiAbo%2BC&X-Amz-Signature=2aa67c71de9458ccc20ed41e481fa73ce7ccada1a9f59e93e090d79676e08d6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CVBBTQM%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T154300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIHSlMVe9PTHvKIvCz3cWvoGrjbqQ9SMnoHkPOn6z8mPUAiEA6cFqIgq0REhvYLxp%2FX5QQItIzg84yi3ic2mEE61GhRcq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDIYhtQKKGWHR%2BrVKEyrcA5%2FZQ9SvuG6QNtk%2BwzvejedO0t2pNStgmAnBT%2BOZb0D9RkaTs6A0sHfJNf%2BMLNfZGitCtJX%2Bv%2FcA61HuYkU51XjC%2Fkb1ehFPiZbIb08wZGeDgcqOz%2B6VYYThmErG1E3DHF5QrjwbQ4MC5m5oVpi3bQ%2B9vN2T2p2O2aB8JRSNo%2BcOByuSCqlJWe69upS%2Bb9GGCFS0per6loa0V1ZpNi9lMzWzrIFEF9QxyTe%2BI5AwOM1huIHlQuRw%2F4srp3GxNUr3KKd3giS%2F4xv0m4d3S%2Fc7JsheRWSkaGxQMbTja2iDSlm%2F%2BFsJa7rAWnIwzwNYpq%2F0HOAmjB%2B%2FXRGgtiWIY65WZ15uL82K9hQgjNm2Y4jgXsoxood8aBAjV4RU4yjnrky%2FSEXrRAM6lsXduLZle0G4S9Z%2F5Hk8bpjFp9hqq%2B3pHPrxrTRngLJyvspwxbkTR339VxvyOXUEwoxF8o5Esv41xkSQHECFtoG0ioAIYJ%2BqhMUbxlPOZZFgUbeWZKCM%2FTJmINX1JEhoeK4EtP%2FuyS4Y4Lc5XAynMB9%2Fkx05okgGUm9ZMplh2S8Tbru%2BFGmt1M%2BPN0iO5Vs9lAKoFQW5sOycG7mjZxUN%2Bj1bjv2WFeMFxNNc5pLYn2v4TUFyQaVCMMm%2BxskGOqUBIsFRnX80MFyZQNPQ22qb98QzQztcevD4TTTvb2NgynAobDyPMD5lMa580YLoi2VjkKI9HuXL4fBiyDbo7qPpBE9NSxUkYW038YZACkIczXJc7phJjxXLxQcqB5H%2FQohuQT%2ByTX5dE7iQLQtgiIRH5FMFYnBirmWQ6SDOSNIC33icaSrpzAmhlu6pH%2BCgqlWKizWt%2B2AES%2F6gluo812danoiAbo%2BC&X-Amz-Signature=276fcc21bbb51fc0da3618f038803a6eb680e1729c8c4056f71b8e696ac246fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
