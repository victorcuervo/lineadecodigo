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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646H6S5WJ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T182136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHZJgc8OT0%2BGCwmMla7ODIfjRWvpxdlRr52%2BY6rWjFV3AiB8%2Fmfo%2FFmqhkKN1ecJa239Y2dXfvqOQ8u1s5pc59OBhCr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMQqf9rMwrULKb6B6wKtwDqU0IrmrRziZpDOZ20hNtGLq8%2FlntzjFZSMUiPlYgIhK887m6Qf7ogr7k5RUEIWn%2Ff3mNczWxxCWgLYHs1yrJ%2BYRVgOgBLlQRWpkKtvf65%2FeQifgfuduaYPW709SgOu%2FzpPBMTVXrrEKcIOs%2BQU6LhdSBkJhGtN%2BHUBAfrWTlrTh0SL3cHZ6cK79g7%2BNQV490l4b0jgCmCLMQPLuooeRio2j7M1Vcrs9kHN%2FQz%2Fh4ihN%2FwE5eON5EfzUOfeUSWi76ypGcrwN4Z7rxhnxpLe7Af4TLddsr3FT9H4auprdMQ%2Fd5VM6hklbR166TGTPgiZIkFHaVAl952vfwmj6%2FQEwBLDPStp950P0TRm2XqYKzXt7v5sTGKKGFGbMMlEJ6zsRU%2B%2BFf5EOjg%2FhKK%2FBTpgi5DDjIwl1fv3vAAj9%2FF20cNJG2ItpeXzQK8Qp8r8t1pNKxnTaamLA866sRTfcnN1QpF3B8o2%2BX7l9XqJI25QvGXhQxL2ZXGaRubZeaZM39qcQpU8Iq4e%2BEO0LYsmhhrb185dV2ytB8B8LwRvmEYfoqUSZfQhda3Napzy%2BZpCNP%2FkeK%2F3Uowo6oYdXwG5AC2WwiCGuI2VvtKCgVpPCSx1iL2HV15ZR2yktj2xn2ZZIwssfRyQY6pgGlJdj%2BFMbEo5aSIhBAhf%2BC%2BFD30J4Qyn1zzT5p%2B%2B5Elq8u2aYSvnei0epqkHYc9AkY4s3JHSw8HpU7flhsKRmSgwZTy4l%2FJ0Sk6zcv3cRvpVoD0p%2BnzKu1n0JJEmQHvYgU1dKXu0wAHLMJZmJvVm4%2B47JcGxGdDg%2FdQjqbeByIjpS1PUKJjpGZoYH4LR5v7HPpq61xNAmsu7Vl7mdbVZN1q%2B7b1XN9&X-Amz-Signature=239ca8f9abd3f2a4e21c8b21d7a5d694b9124d5869b95395639dcbbc5c40d3c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646H6S5WJ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T182136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHZJgc8OT0%2BGCwmMla7ODIfjRWvpxdlRr52%2BY6rWjFV3AiB8%2Fmfo%2FFmqhkKN1ecJa239Y2dXfvqOQ8u1s5pc59OBhCr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMQqf9rMwrULKb6B6wKtwDqU0IrmrRziZpDOZ20hNtGLq8%2FlntzjFZSMUiPlYgIhK887m6Qf7ogr7k5RUEIWn%2Ff3mNczWxxCWgLYHs1yrJ%2BYRVgOgBLlQRWpkKtvf65%2FeQifgfuduaYPW709SgOu%2FzpPBMTVXrrEKcIOs%2BQU6LhdSBkJhGtN%2BHUBAfrWTlrTh0SL3cHZ6cK79g7%2BNQV490l4b0jgCmCLMQPLuooeRio2j7M1Vcrs9kHN%2FQz%2Fh4ihN%2FwE5eON5EfzUOfeUSWi76ypGcrwN4Z7rxhnxpLe7Af4TLddsr3FT9H4auprdMQ%2Fd5VM6hklbR166TGTPgiZIkFHaVAl952vfwmj6%2FQEwBLDPStp950P0TRm2XqYKzXt7v5sTGKKGFGbMMlEJ6zsRU%2B%2BFf5EOjg%2FhKK%2FBTpgi5DDjIwl1fv3vAAj9%2FF20cNJG2ItpeXzQK8Qp8r8t1pNKxnTaamLA866sRTfcnN1QpF3B8o2%2BX7l9XqJI25QvGXhQxL2ZXGaRubZeaZM39qcQpU8Iq4e%2BEO0LYsmhhrb185dV2ytB8B8LwRvmEYfoqUSZfQhda3Napzy%2BZpCNP%2FkeK%2F3Uowo6oYdXwG5AC2WwiCGuI2VvtKCgVpPCSx1iL2HV15ZR2yktj2xn2ZZIwssfRyQY6pgGlJdj%2BFMbEo5aSIhBAhf%2BC%2BFD30J4Qyn1zzT5p%2B%2B5Elq8u2aYSvnei0epqkHYc9AkY4s3JHSw8HpU7flhsKRmSgwZTy4l%2FJ0Sk6zcv3cRvpVoD0p%2BnzKu1n0JJEmQHvYgU1dKXu0wAHLMJZmJvVm4%2B47JcGxGdDg%2FdQjqbeByIjpS1PUKJjpGZoYH4LR5v7HPpq61xNAmsu7Vl7mdbVZN1q%2B7b1XN9&X-Amz-Signature=be3cefc754b90895e91bc94115a4e19018b7095de944b80a676a208a23f5ac49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
