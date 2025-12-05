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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2ZT7QEW%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T135610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQ98WJ0G%2Bk77JE%2Fh7ZBaUARMs%2BV7dht5d2Nvf0w5MqQwIgOqPcKvtdqEHVLZaxdgHH0XIGsBeS%2FHUw3MqhOpUUO%2Fkq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDMLg3ZksYHoi%2Bg5uTSrcA8MqWmnUMDH7IfBRwcbIbuv%2Bq0R0rCRNWOJipU6Ypv%2FEhcLMH%2FjTYZGLFTzNqUH85dsMMtjoZ7q6qDW6Ei2ytNahBPkFHjeu%2Bkp8UVdgFHXeBaBiBX%2FlBBFrBKE4MlndKL6LwtlmHaRxwCpkFrix6OdRGYNMDCDd5LUzcJ%2BuQcNKRO4cMm6Tc8IXJ2lHvRve0fQZDLDzLl4XbU2F8wWbYWFLVF3ZPZiWb3KWunv%2FwypBsLSzOEN8C6UqiVrdx9dKF5MAJ3w7XuDadvTc%2FtMxwuspG3SSdTLAF9qh0xPUbwaO%2FL8IO4e%2BvvgXiDMbEkpqOeMygX64vQQIWFEtPx8H7zTOtd9sn%2BVUqhZM%2BbB1MbVQvsfLGEPCD4BBHbSZ33o5l3BTRsEsJM6qlIsJMTjDezgvEMXOUuqRlsPen%2FcCxP1Mu71c0JLzpvW8EdgQoxVLPQIKN4vZMV5bDXmpUYsB3KBNOVNEiuWNX1UsFO85Ev3qu5BQ1Y%2FTWC75gfVi4syHe7K33wORbidcyDUJPmZjY9IP7omD4l9qIdBEZQUOVlcYrpMeJ18qYqCX9gyDqrw5EDPLkn2JHzkvZhPjh271NfoarZguZbKNgyV7n5o9151%2F3uFxGmhGpa7mtmx9MKLRyskGOqUBF8Lzk0HN94ax6p48cFbEiQsk%2FM6PNqkUe9lh%2FMppjbBIb1mrg%2FC1ZWYUmRoFkdu%2FOk4YydYL0HjdFQD8wlLJAJ1%2FKgeYMYR46hA27otaUNBE2lazI3Hkbnp4TK3KnKUaxsHHaxi44Z6iiulDkoa%2FkSf1t5SFMzHFtPNGwNTS1tDm2smx%2BvvPbe962c42rrHCJFZoEEXDAL1jEcPs71te2FBbfe7h&X-Amz-Signature=0a00a200a4a4748f2f3ba4ce66fe068fb8e16d00c8934a5d33e5dfefac6c423b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2ZT7QEW%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T135610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQ98WJ0G%2Bk77JE%2Fh7ZBaUARMs%2BV7dht5d2Nvf0w5MqQwIgOqPcKvtdqEHVLZaxdgHH0XIGsBeS%2FHUw3MqhOpUUO%2Fkq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDMLg3ZksYHoi%2Bg5uTSrcA8MqWmnUMDH7IfBRwcbIbuv%2Bq0R0rCRNWOJipU6Ypv%2FEhcLMH%2FjTYZGLFTzNqUH85dsMMtjoZ7q6qDW6Ei2ytNahBPkFHjeu%2Bkp8UVdgFHXeBaBiBX%2FlBBFrBKE4MlndKL6LwtlmHaRxwCpkFrix6OdRGYNMDCDd5LUzcJ%2BuQcNKRO4cMm6Tc8IXJ2lHvRve0fQZDLDzLl4XbU2F8wWbYWFLVF3ZPZiWb3KWunv%2FwypBsLSzOEN8C6UqiVrdx9dKF5MAJ3w7XuDadvTc%2FtMxwuspG3SSdTLAF9qh0xPUbwaO%2FL8IO4e%2BvvgXiDMbEkpqOeMygX64vQQIWFEtPx8H7zTOtd9sn%2BVUqhZM%2BbB1MbVQvsfLGEPCD4BBHbSZ33o5l3BTRsEsJM6qlIsJMTjDezgvEMXOUuqRlsPen%2FcCxP1Mu71c0JLzpvW8EdgQoxVLPQIKN4vZMV5bDXmpUYsB3KBNOVNEiuWNX1UsFO85Ev3qu5BQ1Y%2FTWC75gfVi4syHe7K33wORbidcyDUJPmZjY9IP7omD4l9qIdBEZQUOVlcYrpMeJ18qYqCX9gyDqrw5EDPLkn2JHzkvZhPjh271NfoarZguZbKNgyV7n5o9151%2F3uFxGmhGpa7mtmx9MKLRyskGOqUBF8Lzk0HN94ax6p48cFbEiQsk%2FM6PNqkUe9lh%2FMppjbBIb1mrg%2FC1ZWYUmRoFkdu%2FOk4YydYL0HjdFQD8wlLJAJ1%2FKgeYMYR46hA27otaUNBE2lazI3Hkbnp4TK3KnKUaxsHHaxi44Z6iiulDkoa%2FkSf1t5SFMzHFtPNGwNTS1tDm2smx%2BvvPbe962c42rrHCJFZoEEXDAL1jEcPs71te2FBbfe7h&X-Amz-Signature=1fb37aac327d1a1445920b2ae700ed5c0d19bd437a3ef08f8db6415b72b77a89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
