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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646NBXC6L%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T070550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG1srfkt%2F7n5z0B0%2BqgMwuXv3RbiW6Ilr%2B9LxW28bjY8AiEA9tLT8i8XwkDFehmi2wfMMuXejMPaMzV6lHsRiiIhUSwqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI88QLLKBuNwQ0J7ByrcA9fPirP1spYshNsNSNfkXFlhlCyIcyY8kXY8hRW2frDAPN6SYFECtK50zlZ%2FSKBp9SjgKjJlDOL3VuiMr3WMbFjQCjoMT7Pu9lzybXyrbF6nBAFJ7qeLEZAJEDRPyEReZ3GwvA4vFMIPzggK7lMKiT7PWvuY6HFFglkpDQwemr2H8IHf12cKjXrhU8sOIhsf3hx0BxiQzVoiOJsLNfHz0tpN7Woo31i7utz86QItFkXAOJVWF0qjHPZiFxd0wrDpBfjKXAJLo4Cqpbmr8XMzAnjzDzWyr4EAb0CkziiffT6dJ%2BlbIb8zgyPC9R5jygJjEEjbcn2othfikzRW72djWTKBYyxevDmVWSlbjuKAxcf%2Bq%2Fu4yfU2xOLrUTz3OcMgN9OjQwzwS2d44GWZ7IKOZ%2Fe7gVeGbE0xVsg8r9gQgqqfXJiwwRT1S%2FGxr0ZTCnMcq3fzczPpg1mAmv5uA96w6p4GK7q9wdCR9m5J4dsPKt%2BhPSto%2BqWyKmGXhv6AUj8EU7%2BiQrh46ewLRIz%2BGys5Y7y64I4np8qxo7mVRIdZUgFJMrHCgd5Pt4ibHS5VQXgmyeZBVwmIrdNafbyKvFkplWhVWzVGxLf4LmCOdhppAQj6bQVLFCxmxo%2BeIoCBMLuh1MkGOqUB8jXr4oRkhhVQJ%2FBfUH15%2Ffm5ig85lp8kPwIcv0lwK3Dl5FB288EBuFnAnDsZpvSFbnho4mNU1EAYhmRDij3rRTxdzdh7wsPan0OZt1vHHdLDensbkkFJMx4gkGkwgHDckIapUcLGn7zn76RPbn59X2S0In9jJRhJkPwvXDLKOm5q1oMV6WSZEuDxihOyP5AY6TxFRFm7fpk1tK1tY6yFJDO24VwG&X-Amz-Signature=a30505dde0aef6e7cce185f9a0438ace11545ea8f250aa3b32a32bba5b45201a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646NBXC6L%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T070550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG1srfkt%2F7n5z0B0%2BqgMwuXv3RbiW6Ilr%2B9LxW28bjY8AiEA9tLT8i8XwkDFehmi2wfMMuXejMPaMzV6lHsRiiIhUSwqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI88QLLKBuNwQ0J7ByrcA9fPirP1spYshNsNSNfkXFlhlCyIcyY8kXY8hRW2frDAPN6SYFECtK50zlZ%2FSKBp9SjgKjJlDOL3VuiMr3WMbFjQCjoMT7Pu9lzybXyrbF6nBAFJ7qeLEZAJEDRPyEReZ3GwvA4vFMIPzggK7lMKiT7PWvuY6HFFglkpDQwemr2H8IHf12cKjXrhU8sOIhsf3hx0BxiQzVoiOJsLNfHz0tpN7Woo31i7utz86QItFkXAOJVWF0qjHPZiFxd0wrDpBfjKXAJLo4Cqpbmr8XMzAnjzDzWyr4EAb0CkziiffT6dJ%2BlbIb8zgyPC9R5jygJjEEjbcn2othfikzRW72djWTKBYyxevDmVWSlbjuKAxcf%2Bq%2Fu4yfU2xOLrUTz3OcMgN9OjQwzwS2d44GWZ7IKOZ%2Fe7gVeGbE0xVsg8r9gQgqqfXJiwwRT1S%2FGxr0ZTCnMcq3fzczPpg1mAmv5uA96w6p4GK7q9wdCR9m5J4dsPKt%2BhPSto%2BqWyKmGXhv6AUj8EU7%2BiQrh46ewLRIz%2BGys5Y7y64I4np8qxo7mVRIdZUgFJMrHCgd5Pt4ibHS5VQXgmyeZBVwmIrdNafbyKvFkplWhVWzVGxLf4LmCOdhppAQj6bQVLFCxmxo%2BeIoCBMLuh1MkGOqUB8jXr4oRkhhVQJ%2FBfUH15%2Ffm5ig85lp8kPwIcv0lwK3Dl5FB288EBuFnAnDsZpvSFbnho4mNU1EAYhmRDij3rRTxdzdh7wsPan0OZt1vHHdLDensbkkFJMx4gkGkwgHDckIapUcLGn7zn76RPbn59X2S0In9jJRhJkPwvXDLKOm5q1oMV6WSZEuDxihOyP5AY6TxFRFm7fpk1tK1tY6yFJDO24VwG&X-Amz-Signature=32853f6a541e19b5249e6a73dc7800cd6e25c1544d53deb0cd6af0231580efc7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
