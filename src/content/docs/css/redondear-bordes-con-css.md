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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KAZMGIK%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T234731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCIGj08VvrV2FFV8nbHjW7%2FIYiPMs9wC2WvXz8yZDWbBbaAiB%2FY%2FhVSzg9pHxLwK0NBs8ygbTM2YnBMJskLt2dmWR2PSr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMnBUiOk13SlfwfsfDKtwDHPQcbsTnVsQuVBeDk5v2%2FiyVHYZUGZwnRCdBVUa717KA5c6XEIQ4DKeiukaC2INDuRJE6K6kC9xIkV6xds9%2BUbCfEoVHSblwJPtZPuFrUV98B3U1g9quOMQ2LelhL961yVb98y%2By%2FpPPe5w9mC9G6IeVdOglhgAAkKsqDKrQQNsuudZ6bqfha4jJPxe5bYLzjWA0K8va7x9tmX48LerNdm7aUnCkhBMQkb0tPk0Jd9%2F%2Bc4Fn41JkrXgRYmlTLCT2CkJamBUlY7KjwV7EfMAx3gJt6L87AD%2F%2BDlMN62a4CA%2B1w5o0%2BN073SrVk2cLo11HXurthw91dKVBtJdrcxFp%2Bx%2B1pJ3sqIlYYyYQG0LkF6Fx%2F0lqQX1l7%2BPqEsc8UNKANjCEm7e9K%2BulMuU54acaxpDrkJLHE7uAHOONdq1iYge%2FE4sYQ5yY8YKDefJtsrMt0gOZAeUv%2FUtTU1CTjqjer432Rxu%2F6i72mOlh9Dw2zl6wSEMjBPZnA1H8j7gOQUScATXIOXj%2F64yU8qrw6%2BSj2ynQHqZNq7lNPOc%2Bvg4jQipgHZ1erSYGXcXnH%2FSNyGAQG20fTRJODJ3M4r9Xb7pqFsKdBRzVoqn74BDvp8X294ZnU0t9HSqDNnSlCJUwq5XDyQY6pgFaYbJdgmu0B6WNww%2Fuv1gSm69sM%2B5pf%2FfateJUSIXc4ycyWRVbzyknmW1fIwKrcucNJhBwm2w8OcA51lNFvxIMLHkv9%2FD%2FtWOwlcKf8EW0xVYL9SR3Q4LDXMKxht92jiSUxpLgh06ez78MI08uv4wJB4FKO5zMiV%2BtSpil8RAlF69qIOLt%2Be9Hc5NR2gJPeVgdhJr1TFGtbxbpwi5IQmg3RbdtzoKL&X-Amz-Signature=61802eb6aae4d45525c201b4a98a220cad07205653ead00b7d005cd80f73b88b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KAZMGIK%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T234731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCIGj08VvrV2FFV8nbHjW7%2FIYiPMs9wC2WvXz8yZDWbBbaAiB%2FY%2FhVSzg9pHxLwK0NBs8ygbTM2YnBMJskLt2dmWR2PSr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMnBUiOk13SlfwfsfDKtwDHPQcbsTnVsQuVBeDk5v2%2FiyVHYZUGZwnRCdBVUa717KA5c6XEIQ4DKeiukaC2INDuRJE6K6kC9xIkV6xds9%2BUbCfEoVHSblwJPtZPuFrUV98B3U1g9quOMQ2LelhL961yVb98y%2By%2FpPPe5w9mC9G6IeVdOglhgAAkKsqDKrQQNsuudZ6bqfha4jJPxe5bYLzjWA0K8va7x9tmX48LerNdm7aUnCkhBMQkb0tPk0Jd9%2F%2Bc4Fn41JkrXgRYmlTLCT2CkJamBUlY7KjwV7EfMAx3gJt6L87AD%2F%2BDlMN62a4CA%2B1w5o0%2BN073SrVk2cLo11HXurthw91dKVBtJdrcxFp%2Bx%2B1pJ3sqIlYYyYQG0LkF6Fx%2F0lqQX1l7%2BPqEsc8UNKANjCEm7e9K%2BulMuU54acaxpDrkJLHE7uAHOONdq1iYge%2FE4sYQ5yY8YKDefJtsrMt0gOZAeUv%2FUtTU1CTjqjer432Rxu%2F6i72mOlh9Dw2zl6wSEMjBPZnA1H8j7gOQUScATXIOXj%2F64yU8qrw6%2BSj2ynQHqZNq7lNPOc%2Bvg4jQipgHZ1erSYGXcXnH%2FSNyGAQG20fTRJODJ3M4r9Xb7pqFsKdBRzVoqn74BDvp8X294ZnU0t9HSqDNnSlCJUwq5XDyQY6pgFaYbJdgmu0B6WNww%2Fuv1gSm69sM%2B5pf%2FfateJUSIXc4ycyWRVbzyknmW1fIwKrcucNJhBwm2w8OcA51lNFvxIMLHkv9%2FD%2FtWOwlcKf8EW0xVYL9SR3Q4LDXMKxht92jiSUxpLgh06ez78MI08uv4wJB4FKO5zMiV%2BtSpil8RAlF69qIOLt%2Be9Hc5NR2gJPeVgdhJr1TFGtbxbpwi5IQmg3RbdtzoKL&X-Amz-Signature=07ddf707705e698f72dcdca6f307a9a3a9995f6d998f1acb5986a417f8fa3636&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
