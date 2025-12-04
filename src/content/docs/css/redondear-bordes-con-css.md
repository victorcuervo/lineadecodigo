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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z32B5DD4%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T143848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQDsuDpeGJkSvJUr7UtlWi3esK1KOpyW9wLT68Ufy34sTwIhAOPz4wT6VyBIDNK7%2BgHqwsQcSrILqZOrBFOgrzFXt7PRKv8DCEcQABoMNjM3NDIzMTgzODA1IgwuzyZEsgFqM28eKFwq3ANVTX3CT3gBxi8UlNbUTO%2FijamfnrFpLtSZSPbmZm4c1Xw6Msv9lcm8514uo%2BYczXf2xyOBSrQW8vNKDl1ZGz%2FDk9JGTK%2BbQs7uIj9ICGz4tcqYDi2uhl0cK76rYxOLRo5YfOlB320nnQu%2BbKf1wmB2uozDRxz0R6sU2wWRgUGZnzENUSv6n6y4us05BoJlbga7O5tjurgmGz6A%2Bhaf9LqPVshBh7fAF8aVZz5F%2BtWK54pLaXKu%2BsOt8O22QmzhblXUHxXIcetVPHNmyqI2Ixlf9Ztm%2BfjVl8QNxFLT2D5oKivDJ04b6BIcGaErFV5s0NGjUhv8%2Bvrq%2FzGouLsi8wbnPdwMe9cfA60JMgd30Ey%2BFqePrQGNl650oNrM58oi9G4cg9ED3wMg3td5SMQ34PY5NVZAdSHEyi%2BcyBcJ7FuHsctDqu%2Fyd9iQj9us3U%2BMcPFg0MTMiU2mqiymUEHOn42HpbkgFPvavt8SL4kZxhL0ZL95s2atHt%2Bg7aHB8%2Fse%2Bv2vyrdhwKTs4Ksk0AUUGf7WsrK18rwYD%2BhN0BRUNUw%2FH374i8bpSAhvHuQ%2FQQO49l0DwVjDqalRWMBePrxsTFPjGx9RD03fjbvEJUSQVYQlZFnejlSoj13c0XwvDTCHosbJBjqkAYyDk9yIRMG8kHufEKBjxB91j9LuQjwIF0U7pgghzW9pi2juxLj1dORqdKOhicAswqbgV8yG9C4EibjWzzxgDdPm6HQKsyBA7u1U9p4Es4P0KsYDUXzGB5ziP2Ccv7Qx36B1KwK2orpJRr3CmFIr%2F1EQuku%2BljetqhNAyYzBPTWNW%2FirP%2FF9mdngOk81ba%2FUFAIjUbAW4rTEzgSPdYxqP%2BO5Fuz3&X-Amz-Signature=4cf8d79d4deb90822ca1264377de4cd9545ea9bef15a5dd8e5efff482b8349a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z32B5DD4%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T143848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQDsuDpeGJkSvJUr7UtlWi3esK1KOpyW9wLT68Ufy34sTwIhAOPz4wT6VyBIDNK7%2BgHqwsQcSrILqZOrBFOgrzFXt7PRKv8DCEcQABoMNjM3NDIzMTgzODA1IgwuzyZEsgFqM28eKFwq3ANVTX3CT3gBxi8UlNbUTO%2FijamfnrFpLtSZSPbmZm4c1Xw6Msv9lcm8514uo%2BYczXf2xyOBSrQW8vNKDl1ZGz%2FDk9JGTK%2BbQs7uIj9ICGz4tcqYDi2uhl0cK76rYxOLRo5YfOlB320nnQu%2BbKf1wmB2uozDRxz0R6sU2wWRgUGZnzENUSv6n6y4us05BoJlbga7O5tjurgmGz6A%2Bhaf9LqPVshBh7fAF8aVZz5F%2BtWK54pLaXKu%2BsOt8O22QmzhblXUHxXIcetVPHNmyqI2Ixlf9Ztm%2BfjVl8QNxFLT2D5oKivDJ04b6BIcGaErFV5s0NGjUhv8%2Bvrq%2FzGouLsi8wbnPdwMe9cfA60JMgd30Ey%2BFqePrQGNl650oNrM58oi9G4cg9ED3wMg3td5SMQ34PY5NVZAdSHEyi%2BcyBcJ7FuHsctDqu%2Fyd9iQj9us3U%2BMcPFg0MTMiU2mqiymUEHOn42HpbkgFPvavt8SL4kZxhL0ZL95s2atHt%2Bg7aHB8%2Fse%2Bv2vyrdhwKTs4Ksk0AUUGf7WsrK18rwYD%2BhN0BRUNUw%2FH374i8bpSAhvHuQ%2FQQO49l0DwVjDqalRWMBePrxsTFPjGx9RD03fjbvEJUSQVYQlZFnejlSoj13c0XwvDTCHosbJBjqkAYyDk9yIRMG8kHufEKBjxB91j9LuQjwIF0U7pgghzW9pi2juxLj1dORqdKOhicAswqbgV8yG9C4EibjWzzxgDdPm6HQKsyBA7u1U9p4Es4P0KsYDUXzGB5ziP2Ccv7Qx36B1KwK2orpJRr3CmFIr%2F1EQuku%2BljetqhNAyYzBPTWNW%2FirP%2FF9mdngOk81ba%2FUFAIjUbAW4rTEzgSPdYxqP%2BO5Fuz3&X-Amz-Signature=33aa4fe4913a98172e1515fb09fce2f54f6ca120e548bfb1c40f52c1f5a9e385&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
