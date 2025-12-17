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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672SXOIMG%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T093902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFw1N2%2FIeogQTYtW79NMyhhKp5yVosT9B7KpLbAbvbPwIgAXjW3AHLOjlasl9Knxnm0tG67jbc5lOc0mEfXqw3db4q%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDOUzEddhbVEsYxHSaCrcA8QSMngpLUjhQgneizXkJ5HdO4xIcklU4MMJtfxq7TazbW91weokiyHy8XvXHQbHoaRLHRk0ULf%2F%2FySFNygz4z7Cz5Xqy2HQTxRRUfeorkt2SwFY9xD6iJ2uUFUxuzq7M4aubJjuOfcHdw28dsTA%2BoO4j3WsMmnwzmNnYTrQbIWOpCrCZ8sz9HYzsXMFtCFRkvDNqAdgewYYb1yteugAxPFNeEAMZ3emkIbD9VvKUUcrGilQbXS3CbiHNJIwvxJKeurmPVXu35d6ypjCo0NskxL6Xw4F0xS3zhZmiINd1fnVloHYp83mo87U%2F2r014OPL9BWUCZ%2BpkD%2BHc1FhSuNdIg3ZbGp1pMeezHKnV8DULXpE703KLBi7TeAxIwfXGtUeImWnVOByDeleP710tgV8F8LJdHQleZvYKZ6qHNH11RmLYImjdZshoMdgqqIODZ5aIhwOlcUp4cmibOlc2i%2FGhCAtpluqP98J4VmnYnyJ6FPxwKPNqd6QjwOeO3gVxfoMiqjp8vqeVpB2g0mq2gSsLLQLaIBe1It2CDx6QedgniqXZKDtZ1Y0TmW4QN1aSx%2BYC2DyZftPiHlyTQ6JQumh9e6OAS0PSTnHvzS6hcmrzWLucwu3VAHUOuwAoUZMOzwicoGOqUByQ%2Fk%2BYw5wUKSgLTHNuUA9%2Fhl8RBhlUns1gvDP%2FZTjh1Xa8AordsHIpyf728mAlT%2B4gPkL5jasKv%2Bk7pF3HtI7S8hlnGvQ2ga%2Bqufp94ZF2kOsIfEZKojcJehc4uZLixg7%2BetMsS4pVQZS3VbSFo2ILvsUQG3EMcPy0KNvcpV30I5g2Pnfu8w6xiE4hWLbnSH4txBp8IG8LJu6zDbFYciDAArshKO&X-Amz-Signature=88b9b2ae18d33044faf9ab9f8a8ce800dd64806a2a726f3be1cbdb0b26773615&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672SXOIMG%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T093902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFw1N2%2FIeogQTYtW79NMyhhKp5yVosT9B7KpLbAbvbPwIgAXjW3AHLOjlasl9Knxnm0tG67jbc5lOc0mEfXqw3db4q%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDOUzEddhbVEsYxHSaCrcA8QSMngpLUjhQgneizXkJ5HdO4xIcklU4MMJtfxq7TazbW91weokiyHy8XvXHQbHoaRLHRk0ULf%2F%2FySFNygz4z7Cz5Xqy2HQTxRRUfeorkt2SwFY9xD6iJ2uUFUxuzq7M4aubJjuOfcHdw28dsTA%2BoO4j3WsMmnwzmNnYTrQbIWOpCrCZ8sz9HYzsXMFtCFRkvDNqAdgewYYb1yteugAxPFNeEAMZ3emkIbD9VvKUUcrGilQbXS3CbiHNJIwvxJKeurmPVXu35d6ypjCo0NskxL6Xw4F0xS3zhZmiINd1fnVloHYp83mo87U%2F2r014OPL9BWUCZ%2BpkD%2BHc1FhSuNdIg3ZbGp1pMeezHKnV8DULXpE703KLBi7TeAxIwfXGtUeImWnVOByDeleP710tgV8F8LJdHQleZvYKZ6qHNH11RmLYImjdZshoMdgqqIODZ5aIhwOlcUp4cmibOlc2i%2FGhCAtpluqP98J4VmnYnyJ6FPxwKPNqd6QjwOeO3gVxfoMiqjp8vqeVpB2g0mq2gSsLLQLaIBe1It2CDx6QedgniqXZKDtZ1Y0TmW4QN1aSx%2BYC2DyZftPiHlyTQ6JQumh9e6OAS0PSTnHvzS6hcmrzWLucwu3VAHUOuwAoUZMOzwicoGOqUByQ%2Fk%2BYw5wUKSgLTHNuUA9%2Fhl8RBhlUns1gvDP%2FZTjh1Xa8AordsHIpyf728mAlT%2B4gPkL5jasKv%2Bk7pF3HtI7S8hlnGvQ2ga%2Bqufp94ZF2kOsIfEZKojcJehc4uZLixg7%2BetMsS4pVQZS3VbSFo2ILvsUQG3EMcPy0KNvcpV30I5g2Pnfu8w6xiE4hWLbnSH4txBp8IG8LJu6zDbFYciDAArshKO&X-Amz-Signature=3b1110a46365593e1b404d67791d6f042d61752add9ed01288c69052d0b4d05d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
