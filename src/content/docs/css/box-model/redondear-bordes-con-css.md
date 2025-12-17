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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673YDZMKW%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T080914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJKQeJatbx9r70JMSNWE3pS39lJwIbDaix%2BSwmj2NNhQIhAL6JmtvT%2Fb9fFKDj2zecXCzGBS98iz0dmUbidZih6VCPKv8DCHkQABoMNjM3NDIzMTgzODA1IgwDnXYTIJEMmzN17zMq3ANNnp0kFCel5iZN%2FdQ%2Fhrb%2FGE8zUPA%2Fruo9gF4qMJ9CXiYjwl3yRkHsDCldaeiktuBhLkzEOZRXgmviuXwveDR%2FwTG3ZEo6C9vzLacJ6ZGyQDuNxb8Z75dycESMzLySMv%2BskP5HS9oMLKwWINdhfZn9odpn7nv2kCS8fT7D0E6XFk%2BOwebSBzOIv6MbV1eTniBXIFHKTaD%2BO4LO6bi4x%2FL9JjeKHIz3T9ywWQUb%2BMJ015uwZ3dME0Cfrl1qUL0rmBTDh34I%2FfgcguAAkA02SqYuPF7fIvei0tAoS1%2FSyROEtWXvisxiO2yqZPILB8eV3Pd03zGjMrrwobWxEdedqNq2ElJI%2FM9jx1PyB6a%2FU6aNrosc9RCMnyCY7XeMCB3MuUFcQCe8WFjzfHQyfHZg7aosulKffORHzW2Sswz%2BxIomI2ZnrhtkBU1MpcYiEUTC5LvkjYLigbxZzMJ72NacOLTXFLJzauq3AirpSWSu9wRR%2FV%2F12xJmBGBikKVqnGmB5SKuTUKm4is1fIMycQqzJ5e0y9H8KgkXqqwAKq33GX0qpWQHFzYa8Bs5sB29nMlJC%2FaiDx42o46ZNpSRRzQo%2BxqpNxyE5jrIEHSQhRB8FsRq7EKRwZBRmqra6ix%2FGzDyt4nKBjqkAbILThAUPOIycFdwfa9i6vC9YvAKAuSyE71HFx51hAxyZlV%2FNHYrAuHhUOTyuxRU0pH9qgBW04D7grZOzcf2j256nwlcgSb9mDC%2BPDmT9%2FvEOlTL7TOSWLU1pmatB1D4hxoW5gK59LCLrzUcO%2BNT4PgMtrHrQXcov5ScbeFzb1VOyDa4aaHiBFienvQ3IuSJ3%2FlU2YA6byIJkyCtlAqvf6qmzdQ%2F&X-Amz-Signature=838389f18f2b72812ac783fd990322d77fc443c2c0b0e067123d87a317f541e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673YDZMKW%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T080914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJKQeJatbx9r70JMSNWE3pS39lJwIbDaix%2BSwmj2NNhQIhAL6JmtvT%2Fb9fFKDj2zecXCzGBS98iz0dmUbidZih6VCPKv8DCHkQABoMNjM3NDIzMTgzODA1IgwDnXYTIJEMmzN17zMq3ANNnp0kFCel5iZN%2FdQ%2Fhrb%2FGE8zUPA%2Fruo9gF4qMJ9CXiYjwl3yRkHsDCldaeiktuBhLkzEOZRXgmviuXwveDR%2FwTG3ZEo6C9vzLacJ6ZGyQDuNxb8Z75dycESMzLySMv%2BskP5HS9oMLKwWINdhfZn9odpn7nv2kCS8fT7D0E6XFk%2BOwebSBzOIv6MbV1eTniBXIFHKTaD%2BO4LO6bi4x%2FL9JjeKHIz3T9ywWQUb%2BMJ015uwZ3dME0Cfrl1qUL0rmBTDh34I%2FfgcguAAkA02SqYuPF7fIvei0tAoS1%2FSyROEtWXvisxiO2yqZPILB8eV3Pd03zGjMrrwobWxEdedqNq2ElJI%2FM9jx1PyB6a%2FU6aNrosc9RCMnyCY7XeMCB3MuUFcQCe8WFjzfHQyfHZg7aosulKffORHzW2Sswz%2BxIomI2ZnrhtkBU1MpcYiEUTC5LvkjYLigbxZzMJ72NacOLTXFLJzauq3AirpSWSu9wRR%2FV%2F12xJmBGBikKVqnGmB5SKuTUKm4is1fIMycQqzJ5e0y9H8KgkXqqwAKq33GX0qpWQHFzYa8Bs5sB29nMlJC%2FaiDx42o46ZNpSRRzQo%2BxqpNxyE5jrIEHSQhRB8FsRq7EKRwZBRmqra6ix%2FGzDyt4nKBjqkAbILThAUPOIycFdwfa9i6vC9YvAKAuSyE71HFx51hAxyZlV%2FNHYrAuHhUOTyuxRU0pH9qgBW04D7grZOzcf2j256nwlcgSb9mDC%2BPDmT9%2FvEOlTL7TOSWLU1pmatB1D4hxoW5gK59LCLrzUcO%2BNT4PgMtrHrQXcov5ScbeFzb1VOyDa4aaHiBFienvQ3IuSJ3%2FlU2YA6byIJkyCtlAqvf6qmzdQ%2F&X-Amz-Signature=29731cdf1bbe3b78cd58c9f24c516a323e5dccf5cc45c66eaa91c19164c80762&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
