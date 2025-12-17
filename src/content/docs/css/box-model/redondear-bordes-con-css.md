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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTT7DCWU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T171510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDTdqj7BeXJl6NJhMG0MzryDdhkxDqjJRgcA%2FjE7Lt3%2BAiEAhuXruhKlucZn8U2QZA0gKDTD%2FMtSqIaDF1U%2F1gaQExoqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGQ5Ms0t8iHBtxfNQCrcA4wtrRjBIyAYc%2F5HZ%2Bvv7iWZhSu0lzr5jPjYgikmhl4uszACziE1VaKVxNN3%2ByDLNI7KLB9QdUSBq2BglbaY1SvuL83t%2FNjwcMiGkCW2LernNCujQYdTAlbE%2FtpLn8lnViPT7Nh%2BkZWOd9o1x61JRNWh0qwGRa9q1nRavmXKxVwGuA%2FAGieQQ1VckqZRi670LnV%2Fshq%2F%2FFKguo5IkbB5MMGFVAID28GQzVRHgZxSX05M0RuDU3dukZwxVMiP6Sq9X2p1ukX%2BWyVW1cRK2LYhIMeDYf0xu9xroB%2BqLxRf%2Fc7l9WhnPQZGHk8a1sABKBvWknSjquCPjls%2FbBUUdpqTuo0G47xTkilICo%2B6fRTNJZ9etNx5lF3kNdBqf7a2KNYDAB9UiCubKdeIJqukpmfuTCG3KXH4nmDTRVMHeTuOpp36u7eizQ%2B3WOqjV58sm7jY4LB%2FCX7vHL7H0FFGsS0N08Azogfu8iqWRyUk4Sn7GunKFzkTc8bYNbMqFZ6H9KMhlYzjMCojuaAsW2eU7cqvVHPgvvGmfjSHbeKOKTYZiHks2BiykhZHGMeX82ABk2lohAZQlkBJY4m2n53LxrOUy5X44T9Z4Ekh4HPNgFvJCuzXbRSxDqFa7hZ0XdQvMJ6gi8oGOqUBW61qSKmDrVyw%2Bx8qJW1euwFKKPq8PTFJOihWnjW4fDIDkdSZsjgkqy9c62RhdbfqrYySvGlMjjz17lLaDZPDYCuGEjyflE%2BuzpzlWYo0hhynOaBYIHL%2Bj7ibnhPubtWs1UrCOt1sJgFkLNJArEfHgo81skpNapgEozz5E1Cto9jZ%2B1HTvnblcW1SopBGdbUaDFmlQU%2Fbz0LNm0KswV6wRlQHMbZT&X-Amz-Signature=07ba006d0a9fb0497c4c93f11ee3ca91948099a6f67816ef9dff30d2894eefb6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTT7DCWU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T171510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDTdqj7BeXJl6NJhMG0MzryDdhkxDqjJRgcA%2FjE7Lt3%2BAiEAhuXruhKlucZn8U2QZA0gKDTD%2FMtSqIaDF1U%2F1gaQExoqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGQ5Ms0t8iHBtxfNQCrcA4wtrRjBIyAYc%2F5HZ%2Bvv7iWZhSu0lzr5jPjYgikmhl4uszACziE1VaKVxNN3%2ByDLNI7KLB9QdUSBq2BglbaY1SvuL83t%2FNjwcMiGkCW2LernNCujQYdTAlbE%2FtpLn8lnViPT7Nh%2BkZWOd9o1x61JRNWh0qwGRa9q1nRavmXKxVwGuA%2FAGieQQ1VckqZRi670LnV%2Fshq%2F%2FFKguo5IkbB5MMGFVAID28GQzVRHgZxSX05M0RuDU3dukZwxVMiP6Sq9X2p1ukX%2BWyVW1cRK2LYhIMeDYf0xu9xroB%2BqLxRf%2Fc7l9WhnPQZGHk8a1sABKBvWknSjquCPjls%2FbBUUdpqTuo0G47xTkilICo%2B6fRTNJZ9etNx5lF3kNdBqf7a2KNYDAB9UiCubKdeIJqukpmfuTCG3KXH4nmDTRVMHeTuOpp36u7eizQ%2B3WOqjV58sm7jY4LB%2FCX7vHL7H0FFGsS0N08Azogfu8iqWRyUk4Sn7GunKFzkTc8bYNbMqFZ6H9KMhlYzjMCojuaAsW2eU7cqvVHPgvvGmfjSHbeKOKTYZiHks2BiykhZHGMeX82ABk2lohAZQlkBJY4m2n53LxrOUy5X44T9Z4Ekh4HPNgFvJCuzXbRSxDqFa7hZ0XdQvMJ6gi8oGOqUBW61qSKmDrVyw%2Bx8qJW1euwFKKPq8PTFJOihWnjW4fDIDkdSZsjgkqy9c62RhdbfqrYySvGlMjjz17lLaDZPDYCuGEjyflE%2BuzpzlWYo0hhynOaBYIHL%2Bj7ibnhPubtWs1UrCOt1sJgFkLNJArEfHgo81skpNapgEozz5E1Cto9jZ%2B1HTvnblcW1SopBGdbUaDFmlQU%2Fbz0LNm0KswV6wRlQHMbZT&X-Amz-Signature=fbbf3432207e81a3009b282d343ad72adaa6a3b4d27b56c0ec6446900ae27c5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
