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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKZPCR3L%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T045714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCW%2BiS8nfFHCsoErU7SHpbXimpPHVEmvTV7N9KhdgJKGAIgBNGwDkG6k1auKeFYa098IETWYLREXxhlug%2F7XTTcqeYq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDLFvg%2BxvDrK1ilhPIircA5U4R1WmaEVqTyN%2BWi%2BtjqTD9CxwlvhTIcaMEdOGGkm1I7%2FHdT%2BK%2BeK9ubRsLtCABcWkBOh1xnN7NLWlYL3lxGcspKd44O3UnEByG91XADchCMZ2fH6UO11SF9nCUyRHloxzWfX0Tq2l3bwNRXtc4rigQnBKVYjQvIYJJzMotWY3aiHyaA8fuSOTyn%2FKoj6lEhsCwTPE89BUwvUBVGDIVUv%2BXPfgBmV%2BZBEcEGOvntUEIjoS1eBuGtHb8YIRAb2Sql9d3la0%2B4uniOUeESMHJ2sB%2FUNbPJTBnVYcFzduc4c17w8j3XpKJJrRVTondlrKdASPHJXyVB9vq9qBEiQcUtWax7Lk6EGQMUWToo%2Fiy218doXlzJDzFQN00VL5Lcw2T1xQgBmrcu9vn4x1cbfIRX%2BNZzHMH7y0u0yYK2eyII%2FVS1BJmX4VOR%2BIZ0dMBvq2h%2FyerWr%2BaEBIkRb6EYXxmbFeO1GTVIYFUUgNFbHE5%2FqQCsr3HG4y7SJW0cQ9bjdhI4ebIXHslZ56D%2BwGIfsPFfjOC7RmBOy2RYkevm8K1Ibwv9wa5lXyyGTXozOI6ScQtuNNsljRuohIJSZHLoFO8UKxYMM9y%2FA%2BzVAZ3EqnyyN6NRryrdTrTJTSgUjfMJLpiMoGOqUBtSVSR2L1Rf%2BGmhvVcskfSjmK9%2FblmSxxa10TbGN9BbKb7SaX52ibLgirHdn%2BxKKJrnFe0Oe%2BCsaPz%2BiAz422qbGWu3mP0MEWQfvvQ7de%2BHvrj2FLKZjIGa8J9HpyCIbGsx0nmtxQ7Rud0ww7qi5Jn7xZN6PtK7fUwa2xYqSEr7X%2BfMDoKnpqWmgjgWzRvoqph7fe0NqxE775fUXOqkpkcyyYbDg0&X-Amz-Signature=5df42667fcc3b296b97ba0f391fb5786e2944ec8bac069926b21b30fa2b28bc1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKZPCR3L%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T045714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCW%2BiS8nfFHCsoErU7SHpbXimpPHVEmvTV7N9KhdgJKGAIgBNGwDkG6k1auKeFYa098IETWYLREXxhlug%2F7XTTcqeYq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDLFvg%2BxvDrK1ilhPIircA5U4R1WmaEVqTyN%2BWi%2BtjqTD9CxwlvhTIcaMEdOGGkm1I7%2FHdT%2BK%2BeK9ubRsLtCABcWkBOh1xnN7NLWlYL3lxGcspKd44O3UnEByG91XADchCMZ2fH6UO11SF9nCUyRHloxzWfX0Tq2l3bwNRXtc4rigQnBKVYjQvIYJJzMotWY3aiHyaA8fuSOTyn%2FKoj6lEhsCwTPE89BUwvUBVGDIVUv%2BXPfgBmV%2BZBEcEGOvntUEIjoS1eBuGtHb8YIRAb2Sql9d3la0%2B4uniOUeESMHJ2sB%2FUNbPJTBnVYcFzduc4c17w8j3XpKJJrRVTondlrKdASPHJXyVB9vq9qBEiQcUtWax7Lk6EGQMUWToo%2Fiy218doXlzJDzFQN00VL5Lcw2T1xQgBmrcu9vn4x1cbfIRX%2BNZzHMH7y0u0yYK2eyII%2FVS1BJmX4VOR%2BIZ0dMBvq2h%2FyerWr%2BaEBIkRb6EYXxmbFeO1GTVIYFUUgNFbHE5%2FqQCsr3HG4y7SJW0cQ9bjdhI4ebIXHslZ56D%2BwGIfsPFfjOC7RmBOy2RYkevm8K1Ibwv9wa5lXyyGTXozOI6ScQtuNNsljRuohIJSZHLoFO8UKxYMM9y%2FA%2BzVAZ3EqnyyN6NRryrdTrTJTSgUjfMJLpiMoGOqUBtSVSR2L1Rf%2BGmhvVcskfSjmK9%2FblmSxxa10TbGN9BbKb7SaX52ibLgirHdn%2BxKKJrnFe0Oe%2BCsaPz%2BiAz422qbGWu3mP0MEWQfvvQ7de%2BHvrj2FLKZjIGa8J9HpyCIbGsx0nmtxQ7Rud0ww7qi5Jn7xZN6PtK7fUwa2xYqSEr7X%2BfMDoKnpqWmgjgWzRvoqph7fe0NqxE775fUXOqkpkcyyYbDg0&X-Amz-Signature=85f6cb3efae3ba286abc039dd17ced042415b0ad93aad5cd02cb5a9491b6dc89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
