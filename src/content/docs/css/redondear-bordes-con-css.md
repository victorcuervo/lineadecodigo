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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMHYJOYT%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T003840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC8ygM50ME39zhLYSJUdTAXFJxTYZAJW67QIFPrsS%2Bw9wIgIMHzpcyvBCoEOZszUJ184SSJUwktdnqo4Vr5YUfBOMIq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDMMEwpaDJHrmmLzriircA%2Fms76xsjUAsgciQ7mI%2Bpk0O9vuS7DL9i7Id%2BeUSS4y1lgzoPNcZwt9EOzUHjMbwX76tkMbL3E5zLaNIjqVme6PTM1f7IFy60AsVAmK%2BLg%2B0skXSwFu4heKyYTFwm11AJClmfdblHAObdTM45pkBxejewnEyzhcitARE8i5aOhUgKFYrDIJamETJl4uVu85worTuwzwDKBynFr3RL7w4Q%2BVKuLBWt%2FvlNHuxVIYOuqIb1P9e4lV0TpDfN616tWIxAND3tCeWPMs3bQHdiBag%2BIsvFGf%2BIuQE2dCbwQtBC3VGEC7Z97fjLs8lEbEQEBHsPwwTnblMOtqwihtTlPe6h8Nb6vW9fgUB0QSlYx1MUGL0837vrsrrhzRwZ%2BTxfcLZeiLgQIK6Wcv78KYwp6JodPawAXJn7QBAqEO3%2FiI327XyoWK3B026afrCH1z%2FREOhs8LP2XkGuDOzeLeMKLpcKODUuYq19eCr5%2BfbJt6rnnXWHyhAAW9dtCRs3eiMPARWRGJS%2FofuEzpbsv%2FxsXv2VyQtcc9qZsQ0N786yV7Vp36Kz7ARjmPlytlQeYb%2BXdVzeT5OjAa9Jds%2BjRZvdIMqJWliEnc27PjmlLuN8ySR8a9gX1BGaoZkk5XALhJjMNWMyMkGOqUBvRpcroRP3cAGTxJvwYOcX6FEN6%2FWZz7EVBsvGy7jpR4gqfZHNrh7ikVpiymRQIQRqOSp6FxXdlyWX2UuoadE0JXRhw1J3cHNCnzy3jTEMXrvu5oZfa2KLRttT26kmilIG3ewRz%2BI8FWYSIKC3JBBlXxssSIyAMUSJhgT2X4Te9wXfYuacOxiLaw0xGftR%2Bi4DyfeMAOpVY5Tp4aGmxw4BRP0G6ib&X-Amz-Signature=863f621b8249a97d2e5e5ba105f78b7bd5285bf003b74234cd78357881092844&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMHYJOYT%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T003840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC8ygM50ME39zhLYSJUdTAXFJxTYZAJW67QIFPrsS%2Bw9wIgIMHzpcyvBCoEOZszUJ184SSJUwktdnqo4Vr5YUfBOMIq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDMMEwpaDJHrmmLzriircA%2Fms76xsjUAsgciQ7mI%2Bpk0O9vuS7DL9i7Id%2BeUSS4y1lgzoPNcZwt9EOzUHjMbwX76tkMbL3E5zLaNIjqVme6PTM1f7IFy60AsVAmK%2BLg%2B0skXSwFu4heKyYTFwm11AJClmfdblHAObdTM45pkBxejewnEyzhcitARE8i5aOhUgKFYrDIJamETJl4uVu85worTuwzwDKBynFr3RL7w4Q%2BVKuLBWt%2FvlNHuxVIYOuqIb1P9e4lV0TpDfN616tWIxAND3tCeWPMs3bQHdiBag%2BIsvFGf%2BIuQE2dCbwQtBC3VGEC7Z97fjLs8lEbEQEBHsPwwTnblMOtqwihtTlPe6h8Nb6vW9fgUB0QSlYx1MUGL0837vrsrrhzRwZ%2BTxfcLZeiLgQIK6Wcv78KYwp6JodPawAXJn7QBAqEO3%2FiI327XyoWK3B026afrCH1z%2FREOhs8LP2XkGuDOzeLeMKLpcKODUuYq19eCr5%2BfbJt6rnnXWHyhAAW9dtCRs3eiMPARWRGJS%2FofuEzpbsv%2FxsXv2VyQtcc9qZsQ0N786yV7Vp36Kz7ARjmPlytlQeYb%2BXdVzeT5OjAa9Jds%2BjRZvdIMqJWliEnc27PjmlLuN8ySR8a9gX1BGaoZkk5XALhJjMNWMyMkGOqUBvRpcroRP3cAGTxJvwYOcX6FEN6%2FWZz7EVBsvGy7jpR4gqfZHNrh7ikVpiymRQIQRqOSp6FxXdlyWX2UuoadE0JXRhw1J3cHNCnzy3jTEMXrvu5oZfa2KLRttT26kmilIG3ewRz%2BI8FWYSIKC3JBBlXxssSIyAMUSJhgT2X4Te9wXfYuacOxiLaw0xGftR%2Bi4DyfeMAOpVY5Tp4aGmxw4BRP0G6ib&X-Amz-Signature=e9423c1e7b219671de95183c2098f308c0bbb41175508c8b3851b1b4bef17a1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
