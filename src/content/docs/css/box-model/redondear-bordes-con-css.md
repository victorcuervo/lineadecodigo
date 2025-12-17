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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDXXQI7C%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T111511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqqY%2FpAuNkaCROs36IFI0j8O2n16bOaGedgjL7u08fSwIgX32PIPQIrvxSCJtCnSUBeKpEPJoPNouwMlLyy%2FSMfQkq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDM4zwkiLdD%2FFydkhoSrcA3LE7saIpOR3Xk%2F5T7%2F6lXikTQC0iOgafKwCmIzZ%2F%2BIBlk%2BxQjV%2BPInNJhROHLMUPsY%2FBIIXiZMPXMDy1mxKkx9ZFoHJM2tvCZJMH3aayCo1Bi1sgXiZW3Hzm0hI19zeiZE58tVEoPyOQ5aieglJEJvgfCcjClkVaWrkwd%2Fy1AnCeqWHMBl8uK54LTNZMpW7vKlLss5scSvIQyOnUsa1XeraR2QP2RXgnMTmdSsFX6CCJjZ8g1hup9vgOZqveQ2Lqn9kdUv8zntb3wToWGUpysoZxAK2Y23oR3WlZXLYrRF6iuY8IRF4VT9a0VlO8E%2BoEGv4ll80kAA1f8C1dcrpTkvkRVztkpLwsZQaCgFcXT%2FHIlkHDabEFsAJXqhlwbwlUnutuTbs6lk63OnHTizm%2F75%2B4LszBdbqmgP%2F1w6QzzIZunpS5dLwwx9dZd90Z%2FhpgiY9G4t7cOyX42gz3%2B%2FEzMgwtqc%2Bds6V8WpW1dI2QYPZvlZ4byIii9HXtEMY2d9BzwZmnucMweAh5h6d7vRB%2Fo%2FLY9gR%2B%2BGkAfHO3MRUPFSTMKrouIkukGOND30QyIbQpskXzY22CVJh7hEECruVBDF1DoU8bzzYxA8IpSyUcchwC2Xgk0xOzCbZNEn6MMmOisoGOqUBNUvke5oW4LBbiG03ADt5%2FKzfwcy%2BQ3%2BoQLQ2u13ep8QdYW79vtimNus0y1V4ibHn%2FGtGHUNKu5spHH%2F4NqrUUI96qrVUIlfcenR1VIOcqeiLL2jVBJKrLh8MLP5vDm7QUSoZndDqfB8dqEApS6r5rjSkhxowXlWh%2FHaB2DLT%2FMMR%2BB2Y6OFXKnVQ1Hav3tWWhofrOXuJWh0F%2FOXV8mQTYv9kQ99J&X-Amz-Signature=01cb98f5ad9842d0d4643be7779892a7397ff362515e7036f785e7b166df5863&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDXXQI7C%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T111511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqqY%2FpAuNkaCROs36IFI0j8O2n16bOaGedgjL7u08fSwIgX32PIPQIrvxSCJtCnSUBeKpEPJoPNouwMlLyy%2FSMfQkq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDM4zwkiLdD%2FFydkhoSrcA3LE7saIpOR3Xk%2F5T7%2F6lXikTQC0iOgafKwCmIzZ%2F%2BIBlk%2BxQjV%2BPInNJhROHLMUPsY%2FBIIXiZMPXMDy1mxKkx9ZFoHJM2tvCZJMH3aayCo1Bi1sgXiZW3Hzm0hI19zeiZE58tVEoPyOQ5aieglJEJvgfCcjClkVaWrkwd%2Fy1AnCeqWHMBl8uK54LTNZMpW7vKlLss5scSvIQyOnUsa1XeraR2QP2RXgnMTmdSsFX6CCJjZ8g1hup9vgOZqveQ2Lqn9kdUv8zntb3wToWGUpysoZxAK2Y23oR3WlZXLYrRF6iuY8IRF4VT9a0VlO8E%2BoEGv4ll80kAA1f8C1dcrpTkvkRVztkpLwsZQaCgFcXT%2FHIlkHDabEFsAJXqhlwbwlUnutuTbs6lk63OnHTizm%2F75%2B4LszBdbqmgP%2F1w6QzzIZunpS5dLwwx9dZd90Z%2FhpgiY9G4t7cOyX42gz3%2B%2FEzMgwtqc%2Bds6V8WpW1dI2QYPZvlZ4byIii9HXtEMY2d9BzwZmnucMweAh5h6d7vRB%2Fo%2FLY9gR%2B%2BGkAfHO3MRUPFSTMKrouIkukGOND30QyIbQpskXzY22CVJh7hEECruVBDF1DoU8bzzYxA8IpSyUcchwC2Xgk0xOzCbZNEn6MMmOisoGOqUBNUvke5oW4LBbiG03ADt5%2FKzfwcy%2BQ3%2BoQLQ2u13ep8QdYW79vtimNus0y1V4ibHn%2FGtGHUNKu5spHH%2F4NqrUUI96qrVUIlfcenR1VIOcqeiLL2jVBJKrLh8MLP5vDm7QUSoZndDqfB8dqEApS6r5rjSkhxowXlWh%2FHaB2DLT%2FMMR%2BB2Y6OFXKnVQ1Hav3tWWhofrOXuJWh0F%2FOXV8mQTYv9kQ99J&X-Amz-Signature=91965df2598f2b0a31669e84b2b7d853253d97bc8ef399875a61bffdcb3ce462&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
