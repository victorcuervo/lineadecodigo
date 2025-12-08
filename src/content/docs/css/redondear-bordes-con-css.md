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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWEXFUPB%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T221912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDybN4aco97aQZTewyAsAZ2YRBZWGpIAPWcXxInTpWmoAIgWUhK%2Bc7C8YdPn%2B0hmIMCQO2IYE7hCQGdSuZnpyBBxlEqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEaciRDOi0bnWaVFdircAwOVp3IjPCoYnZg4nXYa4TUV7yydvjR5SpKapKaOv5jVmP6oT6H%2BXNaH9c%2FlC6U%2FRcp4P6qdllLgWhbGNeV%2ByS8NoESrmAEegwn75PaXRqrZxE9AcQcgiIib8%2F1HeTIJ9khaUnyInGilHPUjTnjP4wedJhb%2BS2TMfiN2fXCu3WERA6a2zrN3xukBfqd7SOhWBbw1zzijxp0EGh1wE5itJmU647l7OK%2F1rN7xtBbju%2B0hMv5vH3QzUw5OCA77teyFpjqMOZ1fmEFkV0ibG0vguJcDiV3EwS%2BAkBLw3QIxW37FHPw0b4%2BAQuK%2BnDaO5%2FvKvPdGrYcectpgkGj8a2dk8ujJAKbBGfOOi6V71uWz0SsldT7gpYTdgtj%2BkblAClrNw9pquLK8JHqmhe6AYAn9PCLjLPcQdOXr3vgKnud%2F00%2BfJZCv60H75CX2hVCKvTaJ7h9nepK3GKXIPENJIrZ6JPajb0Idm0uThtQV6GzWFpTgpmLJ104WR60Vzxc5UoTgsj1uH%2FR%2FgNid6rnsZS24KkzkRMqBWa8ujXGxhzfz3LfTKavk6rJoVcM2Pi4MfaiiQG9IDcVyYAlWBz%2BfBgZ4obBn7jdRBoTw118%2F5OF%2F0PEVE%2FR1aFux%2BlgicSkgMIuA3ckGOqUBYFNoo6SAG9gNitP4Pn7qHN%2F5P8eXgFzP0tqx9jh%2BBRLRRG79RlQDkADPYbCZPqf0l4KjqCkWABPjEM8bZPBm9mFhmimnPriRjBb16uTGMIldlUuCuv27CIbeDNiGTqSumO5p5NlZwKHyh8JalyUmNTvM7YS7qsgj4tke6D7I45EzoXb9I1un5ix8Q7Ra7deqK7UZqQGiBju1qGHtOl2aDMOSV7D4&X-Amz-Signature=76295bfac4c2cfce47f7c4e3d7d21f73671ff5ff20b4f41620bb59c3486b4c75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWEXFUPB%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T221912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDybN4aco97aQZTewyAsAZ2YRBZWGpIAPWcXxInTpWmoAIgWUhK%2Bc7C8YdPn%2B0hmIMCQO2IYE7hCQGdSuZnpyBBxlEqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEaciRDOi0bnWaVFdircAwOVp3IjPCoYnZg4nXYa4TUV7yydvjR5SpKapKaOv5jVmP6oT6H%2BXNaH9c%2FlC6U%2FRcp4P6qdllLgWhbGNeV%2ByS8NoESrmAEegwn75PaXRqrZxE9AcQcgiIib8%2F1HeTIJ9khaUnyInGilHPUjTnjP4wedJhb%2BS2TMfiN2fXCu3WERA6a2zrN3xukBfqd7SOhWBbw1zzijxp0EGh1wE5itJmU647l7OK%2F1rN7xtBbju%2B0hMv5vH3QzUw5OCA77teyFpjqMOZ1fmEFkV0ibG0vguJcDiV3EwS%2BAkBLw3QIxW37FHPw0b4%2BAQuK%2BnDaO5%2FvKvPdGrYcectpgkGj8a2dk8ujJAKbBGfOOi6V71uWz0SsldT7gpYTdgtj%2BkblAClrNw9pquLK8JHqmhe6AYAn9PCLjLPcQdOXr3vgKnud%2F00%2BfJZCv60H75CX2hVCKvTaJ7h9nepK3GKXIPENJIrZ6JPajb0Idm0uThtQV6GzWFpTgpmLJ104WR60Vzxc5UoTgsj1uH%2FR%2FgNid6rnsZS24KkzkRMqBWa8ujXGxhzfz3LfTKavk6rJoVcM2Pi4MfaiiQG9IDcVyYAlWBz%2BfBgZ4obBn7jdRBoTw118%2F5OF%2F0PEVE%2FR1aFux%2BlgicSkgMIuA3ckGOqUBYFNoo6SAG9gNitP4Pn7qHN%2F5P8eXgFzP0tqx9jh%2BBRLRRG79RlQDkADPYbCZPqf0l4KjqCkWABPjEM8bZPBm9mFhmimnPriRjBb16uTGMIldlUuCuv27CIbeDNiGTqSumO5p5NlZwKHyh8JalyUmNTvM7YS7qsgj4tke6D7I45EzoXb9I1un5ix8Q7Ra7deqK7UZqQGiBju1qGHtOl2aDMOSV7D4&X-Amz-Signature=ff83af81413247418599615ab2664508ed2dc70846db68c173eeefb03e6dfcfe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
