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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YSW6HFM%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T065230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCOHwiuLuWFUKRJNCkXBjqQNmvyTTomc3DJenHeoO7KhQIgSqsNciI%2FuQBXg9P7nUbfUBfhGWbtN7tXqwHDBdXkQsEq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDBr05vTxNbHAaNIQwyrcA23GKP2wafQ9l4lS31kvKCcaSKb5IMmY4Igi1QBJFKnRgc37y5CRzQ3b3PcDOA4ecROzF%2F4tW3AxK1mzBxGAPUB1p2zSjGDqDKIZ%2FgoIEQJdlazOEghCuGsSwhrGi2nAV53Fsf49egTWNQIK3yIB13dLv%2FeJWgDDUXRB9FxdKn4kZ%2BqRwoEh0UhtOizk6v%2BuesXeb6kv7Uu%2B3A5Fpi1GkKivTEUS6hQvMF91RYr04peUfrtjgLK1p4dy3TOW2ddaENzOpz3BjDWdHIs0AgFy%2FDbIGiX9b%2BTSfhRY5nYVxF3qn%2BGuHQGN0ybKRGs%2FESOleGcrShaguzI8Ry847pINLkImWVlZCQB2Cx14iLVwUhwI%2B7OS4pLlfsF40jRPv0s%2FRLGpH9ejjO9rGjyvnqRTUDuPPyBfvZw%2B2JR8bbIXez3a0QGO%2F4dOSLgwbEvpJHtJA2sVNccm5u8EAxDLMqqke%2BojVP%2FPcn2cKmQN%2FGo3Zn4tdZrNm0VuNYY3aJ%2FrCIyYD9rwVaIMW4wo5KltoSLG2xFV9F%2FNs%2B8ogbNVXd22dvzzJztot%2F3gHgBtpam4riWiC4JVE50xExICzDBL00vm5m2Wp9JXUHPbTiZH1kGL76Yx4BZXX659nVwGzyYHMNOcicoGOqUBhOQoORdGeQSzUwckU5z%2BWY3rhhjVuUTFfeAuE2h6BxqCCXxTdGOn%2Bl33ZGAH5JosLp9qPtuL4Q7YVptoMwhF2pk%2BqFxHKG6tLEWtBmB0qoH9TGrFEbqpqQjYHGxPZjW2x8pw20TH6G%2BVb4tUWamWjwplRIrtuj7YntOdE8LwFfy%2BJysupcmfyrryGBe%2BD7Gys7%2FiwpA5qfwgfU5q5ZePGjctsQmI&X-Amz-Signature=0bf3c2c1ba15b963c6c51111cc92856e8d2fadd2c9ea3cd3861a2726e7ace511&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YSW6HFM%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T065230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCOHwiuLuWFUKRJNCkXBjqQNmvyTTomc3DJenHeoO7KhQIgSqsNciI%2FuQBXg9P7nUbfUBfhGWbtN7tXqwHDBdXkQsEq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDBr05vTxNbHAaNIQwyrcA23GKP2wafQ9l4lS31kvKCcaSKb5IMmY4Igi1QBJFKnRgc37y5CRzQ3b3PcDOA4ecROzF%2F4tW3AxK1mzBxGAPUB1p2zSjGDqDKIZ%2FgoIEQJdlazOEghCuGsSwhrGi2nAV53Fsf49egTWNQIK3yIB13dLv%2FeJWgDDUXRB9FxdKn4kZ%2BqRwoEh0UhtOizk6v%2BuesXeb6kv7Uu%2B3A5Fpi1GkKivTEUS6hQvMF91RYr04peUfrtjgLK1p4dy3TOW2ddaENzOpz3BjDWdHIs0AgFy%2FDbIGiX9b%2BTSfhRY5nYVxF3qn%2BGuHQGN0ybKRGs%2FESOleGcrShaguzI8Ry847pINLkImWVlZCQB2Cx14iLVwUhwI%2B7OS4pLlfsF40jRPv0s%2FRLGpH9ejjO9rGjyvnqRTUDuPPyBfvZw%2B2JR8bbIXez3a0QGO%2F4dOSLgwbEvpJHtJA2sVNccm5u8EAxDLMqqke%2BojVP%2FPcn2cKmQN%2FGo3Zn4tdZrNm0VuNYY3aJ%2FrCIyYD9rwVaIMW4wo5KltoSLG2xFV9F%2FNs%2B8ogbNVXd22dvzzJztot%2F3gHgBtpam4riWiC4JVE50xExICzDBL00vm5m2Wp9JXUHPbTiZH1kGL76Yx4BZXX659nVwGzyYHMNOcicoGOqUBhOQoORdGeQSzUwckU5z%2BWY3rhhjVuUTFfeAuE2h6BxqCCXxTdGOn%2Bl33ZGAH5JosLp9qPtuL4Q7YVptoMwhF2pk%2BqFxHKG6tLEWtBmB0qoH9TGrFEbqpqQjYHGxPZjW2x8pw20TH6G%2BVb4tUWamWjwplRIrtuj7YntOdE8LwFfy%2BJysupcmfyrryGBe%2BD7Gys7%2FiwpA5qfwgfU5q5ZePGjctsQmI&X-Amz-Signature=9b9ff788918207e7b352afd3c5e5e03a7bda6a0bf45ee84fc3c2a0509888ce76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
