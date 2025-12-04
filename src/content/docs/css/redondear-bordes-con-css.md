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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TYL2WQA%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T234700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5OZmhw46JkLDxfwguqK0Z6GI05xIIeIgPkKqkpIeOMQIhAPAbLESfOtLZm9zwfC3Ei7wBSBGHiReht%2BaO5ooadheeKv8DCE8QABoMNjM3NDIzMTgzODA1IgyLfgVaZNk5%2F5HdBlAq3AP98gIiP%2BFAwXtAadsE5ENv4wTZFam%2F30N%2FNlgrTzyuRR%2FwX9sbGPpWtKYBdNgSc1pWqIsbZEg4uo0H2bdJrsxTTrdssXphPlWjvmoZwJOmAcTJIa8aXcylFxnbXVhWMQTkT2KKDbyUedGYmC%2FKJIwmy66%2F4PCbXHL6w%2FTGtJMpmV4R9pga1JYwFiBYCkQQC3ocIpdTBd6H7qGzMycU1Al9cS4HFS37xr0PXHn3Kcxugy%2B8rw6HWiQbNGhwPCgOIkaYWbZ4thKDciG%2BkJrbgcQq4NYIsr22C79HdjFHozhnTvZkryhaITsJMXIe33aKMA8nUxg3hycJpmyJQVMPn3awAmNW9pgySNIRxwooW8ykhh9Stkt3%2Fv4eOhrLEp%2FVhhqKK7QEjU70gYpeCIRVpiETisMVPq8q2aR9vRMuoQgHkamAvhotwzA9B8g0Zr%2FkSNOukJ9627RkQ29MPdI5FVW2A7Ir8Qb9nUkrOOvBSoRSitE5XJk6ZGiREJe58A%2BeZQwMeDdt4z3%2Bdm9hRBxIgG0bb5e0ogNMND3XN7aBvroiXVhQZlxvMK7nSE5OljZo3gCY81PKJFGrj89sy7QERoYodje6%2BrrxkQEouyxbo%2FNZ0d1kC8brP%2BR4HKm4UDDzi8jJBjqkATlmN6h0g8IA7%2FfcV2DBt8LrMjAJTAgmur1ccbhicLmqdUt%2F%2B9VMR1YlShe6ZvICrc1aRp9ShiYIBHDSMNEAXJDpnSINaOSE4hEtLTYKf78JnticsYbjR6kmmwjBwqPbEsehdABDmZSNd39EYXDoAJNlvQsYzULbIsy7d08%2BsCeevT9w3CphLbw9zUEsmNZYfY8tkx4TvNqnmvG%2Bo64CThnsGohs&X-Amz-Signature=26f6f14c6d774aa09e71ba97ccbd9c977f56c0dd25d0930d0df94eb93375a72c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TYL2WQA%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T234700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5OZmhw46JkLDxfwguqK0Z6GI05xIIeIgPkKqkpIeOMQIhAPAbLESfOtLZm9zwfC3Ei7wBSBGHiReht%2BaO5ooadheeKv8DCE8QABoMNjM3NDIzMTgzODA1IgyLfgVaZNk5%2F5HdBlAq3AP98gIiP%2BFAwXtAadsE5ENv4wTZFam%2F30N%2FNlgrTzyuRR%2FwX9sbGPpWtKYBdNgSc1pWqIsbZEg4uo0H2bdJrsxTTrdssXphPlWjvmoZwJOmAcTJIa8aXcylFxnbXVhWMQTkT2KKDbyUedGYmC%2FKJIwmy66%2F4PCbXHL6w%2FTGtJMpmV4R9pga1JYwFiBYCkQQC3ocIpdTBd6H7qGzMycU1Al9cS4HFS37xr0PXHn3Kcxugy%2B8rw6HWiQbNGhwPCgOIkaYWbZ4thKDciG%2BkJrbgcQq4NYIsr22C79HdjFHozhnTvZkryhaITsJMXIe33aKMA8nUxg3hycJpmyJQVMPn3awAmNW9pgySNIRxwooW8ykhh9Stkt3%2Fv4eOhrLEp%2FVhhqKK7QEjU70gYpeCIRVpiETisMVPq8q2aR9vRMuoQgHkamAvhotwzA9B8g0Zr%2FkSNOukJ9627RkQ29MPdI5FVW2A7Ir8Qb9nUkrOOvBSoRSitE5XJk6ZGiREJe58A%2BeZQwMeDdt4z3%2Bdm9hRBxIgG0bb5e0ogNMND3XN7aBvroiXVhQZlxvMK7nSE5OljZo3gCY81PKJFGrj89sy7QERoYodje6%2BrrxkQEouyxbo%2FNZ0d1kC8brP%2BR4HKm4UDDzi8jJBjqkATlmN6h0g8IA7%2FfcV2DBt8LrMjAJTAgmur1ccbhicLmqdUt%2F%2B9VMR1YlShe6ZvICrc1aRp9ShiYIBHDSMNEAXJDpnSINaOSE4hEtLTYKf78JnticsYbjR6kmmwjBwqPbEsehdABDmZSNd39EYXDoAJNlvQsYzULbIsy7d08%2BsCeevT9w3CphLbw9zUEsmNZYfY8tkx4TvNqnmvG%2Bo64CThnsGohs&X-Amz-Signature=8d524015ec6a69f07a81004c48453f9378fadb9b00d154c38972bf9df7e4225f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
