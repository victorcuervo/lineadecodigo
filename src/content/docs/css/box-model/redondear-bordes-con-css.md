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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNCEQCNT%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T094845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICrE9Jj3MUOMiA68YPtWcT%2BLt07j7%2BpzE1sVyBHBR1r8AiBPIMHEqegB94AX2PJTxKYevbC8GeItFfVI%2B9Pdu8oHBir%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMMUCYjDnS1VNlgRKxKtwDXPNXuzk%2Blk8U9QmcdgZXVljnw5nDucshis1UMulomoqHnUmFrRgumsNqnOzfmSSYnlwW1iYhBIIt8800WQY6Leriowno9XrfoEWTJI123zWgdq5brI23lC4s33Cj7XxEf3DWZJ7j07X9LILHdVUbDcmWkjfL0GPe2wJ84uBhoPeGDXCw07PuTTePdoWPH65SLlcpqCNUXjRmzB4TVXTmtNzTvZnrnvWEpCzqoaQK3utJqHTtTwD1KrOgXuiR63ZukM%2B3vbwesKX8KtUfZHBIw0a58Sjpq4oa6oDGVj9XfqOclkoW%2FLLL5tVpeWCtdHiBZLO9zTKeEb9BMEnGr9OeH15Ir1xLV6xV32XGgLJNeoNl5u7UDSbSUmXW8lHYZEYxIJd6gRj%2BUD7exWyrny591MDsU9va23j4d2%2BLOQfpoVWttSRB%2F4O7LQWqpUaHL5fiT%2F%2BMVHqNuF1u%2BsgpPSYxBfz5LUQinEIq%2FHvQ37W5DT7ofRv0ZFvJKOL2PM9i9Cn%2Bfpr70t%2BwYRxEyt%2BEebfPAYFhODqruWpPok93iD0DpGjiZRsKxyPE5COMd%2F0ctxMi19AXFocqAj%2BfmQTMp86Tvb9tgCug%2BWaZZ2P9sIm21g5IMCZrkBAP6H78NA0w6%2FCJygY6pgEap2wdyBHK2R4owYunjUHFiHzjFdx0RSe4q4cUFuU%2BHvCV0kYtM%2BuSd8wrZAujmcNwPM220v3iPLPo7yN66C58cl9qi676HOMqXwwidJGnwXVXbapSOb1Ab%2FmPJyDVRzl0H0bH9JPu1dKkz80G%2BMnz%2Fsyu0le66XfbneLvZXxXyLRkjzO%2FdYi5rrLMXTXR7FvFTsr%2BhgWr16Rs2B6nBgePsHTGzqLY&X-Amz-Signature=6f0e030bfba84733c2caaae305ac5fa7b25f6a3ad9e44e4ecec5cbf39a1a3f82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNCEQCNT%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T094845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICrE9Jj3MUOMiA68YPtWcT%2BLt07j7%2BpzE1sVyBHBR1r8AiBPIMHEqegB94AX2PJTxKYevbC8GeItFfVI%2B9Pdu8oHBir%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMMUCYjDnS1VNlgRKxKtwDXPNXuzk%2Blk8U9QmcdgZXVljnw5nDucshis1UMulomoqHnUmFrRgumsNqnOzfmSSYnlwW1iYhBIIt8800WQY6Leriowno9XrfoEWTJI123zWgdq5brI23lC4s33Cj7XxEf3DWZJ7j07X9LILHdVUbDcmWkjfL0GPe2wJ84uBhoPeGDXCw07PuTTePdoWPH65SLlcpqCNUXjRmzB4TVXTmtNzTvZnrnvWEpCzqoaQK3utJqHTtTwD1KrOgXuiR63ZukM%2B3vbwesKX8KtUfZHBIw0a58Sjpq4oa6oDGVj9XfqOclkoW%2FLLL5tVpeWCtdHiBZLO9zTKeEb9BMEnGr9OeH15Ir1xLV6xV32XGgLJNeoNl5u7UDSbSUmXW8lHYZEYxIJd6gRj%2BUD7exWyrny591MDsU9va23j4d2%2BLOQfpoVWttSRB%2F4O7LQWqpUaHL5fiT%2F%2BMVHqNuF1u%2BsgpPSYxBfz5LUQinEIq%2FHvQ37W5DT7ofRv0ZFvJKOL2PM9i9Cn%2Bfpr70t%2BwYRxEyt%2BEebfPAYFhODqruWpPok93iD0DpGjiZRsKxyPE5COMd%2F0ctxMi19AXFocqAj%2BfmQTMp86Tvb9tgCug%2BWaZZ2P9sIm21g5IMCZrkBAP6H78NA0w6%2FCJygY6pgEap2wdyBHK2R4owYunjUHFiHzjFdx0RSe4q4cUFuU%2BHvCV0kYtM%2BuSd8wrZAujmcNwPM220v3iPLPo7yN66C58cl9qi676HOMqXwwidJGnwXVXbapSOb1Ab%2FmPJyDVRzl0H0bH9JPu1dKkz80G%2BMnz%2Fsyu0le66XfbneLvZXxXyLRkjzO%2FdYi5rrLMXTXR7FvFTsr%2BhgWr16Rs2B6nBgePsHTGzqLY&X-Amz-Signature=e86bef9fc1aa8191618199f75d88374411530c42411da090f715974f6b856ec7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
