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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SESZAZC7%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T143138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIGZkNKR1YX%2FgrZ7MAdgQOh6gW4h492akXEut%2F%2F5FLqFfAiEApn1t2VxMUS34m%2F5aKzr45Vi4l6ByAou9B%2FiIpS0r3GEq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDLThhJsvxVX9DElYdCrcAwkw8xE7c9imZrZzFQu4nq5zV6qUPN9oZmjkHhXldPJzJoIMpy9x9ZabYKoQh4VC3jvLZV3gDASmF%2FqT6%2BeyRq1Smi3kqmVvIRIIF7r7%2FsaDft044hGK5nOGC6g1iL4H1fdZtkOPstW7iCpvHbUxcS7OtTIc0Ptr7fZev4IRms9go7fjC9RN8O0fY50yWiNPPmPkq73mpZvYpn5i6QITTQj%2BZGiwNrYgRO8z77tdZtoVBHXCQe1aCRv4iItPGA7Q9OdbuNJ9XQ8Om4Uvko4dg5w0r25%2FwrvzHeVTW6YJj62n0vKB%2B6MpOvZ%2FpRTy5VkWwxA6RpfD6O3CsIgPX4ui3BSjlkQ4l1WCOJNkEWX5xZWgJ5C9Aeezs2F1bpQck%2FH3OZDWeeF7OJ2UwNChRAnS05aZZT0dbHJ%2F1FKKOm%2B3oaCUT9xdSqh8qQwSBxgq5LvKBmpx1j7do73NNxpqoaZNjqqed%2BWHTLhc4e2s0jy78ctqawYUI4f%2BdVzQHkm9yG1MwJ5xkaXnxx31ZOlTWN3%2BnAGgQHibukLegnfdgp6UXyzRZ0iZp0G6MY0DPMouRZOSRvgusQALAUhYpvPXZ6qqZbVtdTSDddhVfr%2FX9CHLoLLHFmlJPTQFHeo7x0H9MMOgxskGOqUBTm0M5DJTSvrtSWNOScpGtOQHXTCHux950i%2F3ddOLrYtt9mTyxcEN9nVejzehMumRNtY4G1sUOX9dWCQJZXXdCdl68cOkgCrz7ah7r82iBjZdcrAi4j1SgxYHx0wHjYVUdfC1p3XVJueoE5dkvpvE1iZ%2B0y50f06jCKnO6sENWP04wSSpEXGIHCQFgG6r1bnchJzd1vZw9f98GqI7NGubksY1OGqu&X-Amz-Signature=9e997ff4f3b22a0624b744634421b04c54c1dfe4b0436e190b5bc9e4f649e28d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SESZAZC7%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T143138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIGZkNKR1YX%2FgrZ7MAdgQOh6gW4h492akXEut%2F%2F5FLqFfAiEApn1t2VxMUS34m%2F5aKzr45Vi4l6ByAou9B%2FiIpS0r3GEq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDLThhJsvxVX9DElYdCrcAwkw8xE7c9imZrZzFQu4nq5zV6qUPN9oZmjkHhXldPJzJoIMpy9x9ZabYKoQh4VC3jvLZV3gDASmF%2FqT6%2BeyRq1Smi3kqmVvIRIIF7r7%2FsaDft044hGK5nOGC6g1iL4H1fdZtkOPstW7iCpvHbUxcS7OtTIc0Ptr7fZev4IRms9go7fjC9RN8O0fY50yWiNPPmPkq73mpZvYpn5i6QITTQj%2BZGiwNrYgRO8z77tdZtoVBHXCQe1aCRv4iItPGA7Q9OdbuNJ9XQ8Om4Uvko4dg5w0r25%2FwrvzHeVTW6YJj62n0vKB%2B6MpOvZ%2FpRTy5VkWwxA6RpfD6O3CsIgPX4ui3BSjlkQ4l1WCOJNkEWX5xZWgJ5C9Aeezs2F1bpQck%2FH3OZDWeeF7OJ2UwNChRAnS05aZZT0dbHJ%2F1FKKOm%2B3oaCUT9xdSqh8qQwSBxgq5LvKBmpx1j7do73NNxpqoaZNjqqed%2BWHTLhc4e2s0jy78ctqawYUI4f%2BdVzQHkm9yG1MwJ5xkaXnxx31ZOlTWN3%2BnAGgQHibukLegnfdgp6UXyzRZ0iZp0G6MY0DPMouRZOSRvgusQALAUhYpvPXZ6qqZbVtdTSDddhVfr%2FX9CHLoLLHFmlJPTQFHeo7x0H9MMOgxskGOqUBTm0M5DJTSvrtSWNOScpGtOQHXTCHux950i%2F3ddOLrYtt9mTyxcEN9nVejzehMumRNtY4G1sUOX9dWCQJZXXdCdl68cOkgCrz7ah7r82iBjZdcrAi4j1SgxYHx0wHjYVUdfC1p3XVJueoE5dkvpvE1iZ%2B0y50f06jCKnO6sENWP04wSSpEXGIHCQFgG6r1bnchJzd1vZw9f98GqI7NGubksY1OGqu&X-Amz-Signature=82c15ee54025e6c53576062f42f635d030175b838f2af4d2d0a12ed213bfb49f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
