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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJYGTUWI%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T213359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAD4dUd0liigVzV1LYyibr2ved5O4U6p0yYarLmBS7edAiARd5OD7op7sQwhwRHugPt0BFpTgw%2FIb5tSkpiZKg13wiqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAtju97dQYHg7%2FSoTKtwD5m64GCBwm9vD1JbrNndxk3ZjBZsaPL%2BLwiDsO317bvmL0geZGw%2FhmW6Jl0cttsDkiIws6%2FsndHJfCRIl4dcXKog17ej3847TCzf%2BVd%2FDHOj3A%2Bmtr2d5Cr87In4YLDDKj4JvQl0h5VNF4ZRKAIJoV3Qckl8hj4eL%2BiZzU%2BTuzH3mBjIEizepPP2rwoNGxa9PMB5clroJoHC8p1qRGO7MBOOPuO4SR8Qe%2FaogvcDUbBZontSTqHnFr2LY710mMFNzh81slxTR5cYHLpJ%2F%2BkkN5t8hz%2BDNuJuvKKGJnIQJ7LfoYY5H82B4sflCmwEelGmooNz5F6vHqM12Gw2EBf0F4GJ3vxwVfBIcUWN0POShbuEy9sinEiIl4tjX2Q2ltXaJrCuoRRVTkJAy%2FdKXeisq45evN0B6dnJJ2BrFQ%2BFMlpFtQ6Bu9rxk6e3kSqZrIyVdX8aDRlLTWEVJQa%2F31yy3SKNyT5%2FsYxyuZEiN3SssR2dtF7nhbKs7zAqoWaMUf4ayex5sxhYrXGWnMhl26YSdm0K2b1LGqJL%2BU%2BFJcDghY%2B2cRU%2FMT76rPmvDZdS50qvPX7lLntl2iHkK5irUlO3EC9B7fRJJhiup%2FjQKaTOiNbL5LQa7wEQ%2FAD24dl8wwK6MygY6pgH%2FpknynvV6RApy2WVsVThfo1HriNDsY8YNSyh2t3VWfS1TZ%2F4lWva7RGCIByEPt04fYZAazyplv5K1cmdHbXh9VQYqHIDLBXSqTgWX8LHJR0RXiAe2VymFUS45J68G2AA58a8Jj%2FHjvWLXJfD9wmjjt5ufma0R2KGd5W5EdZBIDliNxmW8JmcfI1PG3WF%2FkBQ%2Fof%2BKKQKI4IWt94XWrQUGNhACQ4%2Ff&X-Amz-Signature=112b565cdcfdf113f01b6c5043f0a1954117998caeba6f3b9dfc623ef747947d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJYGTUWI%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T213359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAD4dUd0liigVzV1LYyibr2ved5O4U6p0yYarLmBS7edAiARd5OD7op7sQwhwRHugPt0BFpTgw%2FIb5tSkpiZKg13wiqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAtju97dQYHg7%2FSoTKtwD5m64GCBwm9vD1JbrNndxk3ZjBZsaPL%2BLwiDsO317bvmL0geZGw%2FhmW6Jl0cttsDkiIws6%2FsndHJfCRIl4dcXKog17ej3847TCzf%2BVd%2FDHOj3A%2Bmtr2d5Cr87In4YLDDKj4JvQl0h5VNF4ZRKAIJoV3Qckl8hj4eL%2BiZzU%2BTuzH3mBjIEizepPP2rwoNGxa9PMB5clroJoHC8p1qRGO7MBOOPuO4SR8Qe%2FaogvcDUbBZontSTqHnFr2LY710mMFNzh81slxTR5cYHLpJ%2F%2BkkN5t8hz%2BDNuJuvKKGJnIQJ7LfoYY5H82B4sflCmwEelGmooNz5F6vHqM12Gw2EBf0F4GJ3vxwVfBIcUWN0POShbuEy9sinEiIl4tjX2Q2ltXaJrCuoRRVTkJAy%2FdKXeisq45evN0B6dnJJ2BrFQ%2BFMlpFtQ6Bu9rxk6e3kSqZrIyVdX8aDRlLTWEVJQa%2F31yy3SKNyT5%2FsYxyuZEiN3SssR2dtF7nhbKs7zAqoWaMUf4ayex5sxhYrXGWnMhl26YSdm0K2b1LGqJL%2BU%2BFJcDghY%2B2cRU%2FMT76rPmvDZdS50qvPX7lLntl2iHkK5irUlO3EC9B7fRJJhiup%2FjQKaTOiNbL5LQa7wEQ%2FAD24dl8wwK6MygY6pgH%2FpknynvV6RApy2WVsVThfo1HriNDsY8YNSyh2t3VWfS1TZ%2F4lWva7RGCIByEPt04fYZAazyplv5K1cmdHbXh9VQYqHIDLBXSqTgWX8LHJR0RXiAe2VymFUS45J68G2AA58a8Jj%2FHjvWLXJfD9wmjjt5ufma0R2KGd5W5EdZBIDliNxmW8JmcfI1PG3WF%2FkBQ%2Fof%2BKKQKI4IWt94XWrQUGNhACQ4%2Ff&X-Amz-Signature=6ddd1d4d53f99ede04c662bcdeed596ba5b2c4d347738b2a29aafc414d32b752&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
