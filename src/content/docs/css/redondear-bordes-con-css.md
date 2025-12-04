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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROIKL3GC%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T080810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIQCrZPtj2i%2FLJc88hr9T2elHcpE1%2ButPfZ7CsJgoYc%2F%2F3QIgAtEfn9Alvpt35fYKLRaxlx6SmECSSBOPHAx8MVtU8Cwq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDGjTR8FLXtzPG29ndCrcA7t5IloT3w%2B6ykhmbABeMBghbsy7yjarGjDnxtQ9ReAHYtLPrO7gbQq7GzFUO4xfPe5egymoW%2BrUy3imeYFb%2BBB8oANO6QFztYZH7Ptz5N7BeBommtYKO%2F75idQj3FuwqAVTg%2FSoYP67nERRHK8foED4LC1ODAhhl6mn%2BvhvrALn6IFQxNpNKzCZm%2BjMpCUje5PIx765VshrC0fw533xJ8vFOieLibkG6l77q5LNwgnthrPotDG%2Fs1OzgMZjQlmJn44ngnhqI8LvIy5NQyq5OSLq4re%2FR7yjpR8IKQV%2FrO5iUQRhczVgvs%2B%2Baj9vWiOWbZKcQFZzQ4Xkn%2Fa0KbITZ6wZGC9cWG0ZNrrf6HFxm5Rsh0NWAqMikIZH%2FlkriQl9YXieOPZ1UAk%2BJeHLaFAWelD5BUXfFfLRx4hU7oadX5s8XuNswq%2FrkBGNtVV%2FqLF67D0fczdvvIIJ81%2BlzS8WoBdCK%2FqJ3GTCzXTTq0zMLwbAncD7y%2BjYpQ%2FhFAids32yQJSSqI4lacCeHe5KE1XdynETGOOuSDB8A2F40UxXMideD8dCRvh2q30lHAuyfuwKzTibkAnY484wbFFPSYyHtukBhhrHUu2O%2BIvuZ9H2cAIxg%2BWwZ2KJBV%2BoYJFXMLHnxMkGOqUB1VRlXTJNTsIa9Vb0CZE1kt5DsVAZi2hOgicTwBt5h7WR4dQY3fpBetFtWrbMyUKx5pvvuMSdslF6ukWa9TQbHYDBlFfDUiadd%2FRpCQR06dDTAUxH9TDBaOOFcatz8abR26s%2B8PuCoKkpVoXX02HXvScVSQW7gOr%2B8fVTS0bdp1fXAqGDjZuu1RcLwY0Lt02OsrEOTfEhcCmR1T58hV1ZF7zvzkFK&X-Amz-Signature=e2765440c13e571bbc8f08fbe98878e4ac389b36fdedbd9a39bd738e32f286bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROIKL3GC%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T080810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIQCrZPtj2i%2FLJc88hr9T2elHcpE1%2ButPfZ7CsJgoYc%2F%2F3QIgAtEfn9Alvpt35fYKLRaxlx6SmECSSBOPHAx8MVtU8Cwq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDGjTR8FLXtzPG29ndCrcA7t5IloT3w%2B6ykhmbABeMBghbsy7yjarGjDnxtQ9ReAHYtLPrO7gbQq7GzFUO4xfPe5egymoW%2BrUy3imeYFb%2BBB8oANO6QFztYZH7Ptz5N7BeBommtYKO%2F75idQj3FuwqAVTg%2FSoYP67nERRHK8foED4LC1ODAhhl6mn%2BvhvrALn6IFQxNpNKzCZm%2BjMpCUje5PIx765VshrC0fw533xJ8vFOieLibkG6l77q5LNwgnthrPotDG%2Fs1OzgMZjQlmJn44ngnhqI8LvIy5NQyq5OSLq4re%2FR7yjpR8IKQV%2FrO5iUQRhczVgvs%2B%2Baj9vWiOWbZKcQFZzQ4Xkn%2Fa0KbITZ6wZGC9cWG0ZNrrf6HFxm5Rsh0NWAqMikIZH%2FlkriQl9YXieOPZ1UAk%2BJeHLaFAWelD5BUXfFfLRx4hU7oadX5s8XuNswq%2FrkBGNtVV%2FqLF67D0fczdvvIIJ81%2BlzS8WoBdCK%2FqJ3GTCzXTTq0zMLwbAncD7y%2BjYpQ%2FhFAids32yQJSSqI4lacCeHe5KE1XdynETGOOuSDB8A2F40UxXMideD8dCRvh2q30lHAuyfuwKzTibkAnY484wbFFPSYyHtukBhhrHUu2O%2BIvuZ9H2cAIxg%2BWwZ2KJBV%2BoYJFXMLHnxMkGOqUB1VRlXTJNTsIa9Vb0CZE1kt5DsVAZi2hOgicTwBt5h7WR4dQY3fpBetFtWrbMyUKx5pvvuMSdslF6ukWa9TQbHYDBlFfDUiadd%2FRpCQR06dDTAUxH9TDBaOOFcatz8abR26s%2B8PuCoKkpVoXX02HXvScVSQW7gOr%2B8fVTS0bdp1fXAqGDjZuu1RcLwY0Lt02OsrEOTfEhcCmR1T58hV1ZF7zvzkFK&X-Amz-Signature=9a5b921d8e3772393132b550cf7226c3bc079dabbbbe79405dc04a6f0c03c893&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
