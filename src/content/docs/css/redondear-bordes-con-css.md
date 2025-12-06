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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672ZYHF72%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T162011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDkF9K1icCN555xc2i%2F%2B7%2FT6OVdMh0fPg7gEcCOEfFiDgIgPozSe82y3lnp8kE%2FgtOp8pfG5nEGSEq64RsdVDXXmFkq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDA%2FyWZkHwj0kVFiM0yrcA8WBWUQ8yz39MUOmmddYaRbM2Am9Yb1GE9D2ZEGM%2BmFP7UDlX6pZge7VZhYDkiMTTUjs2gXJEA9Gf7czGaO2ANRHn%2FsridGei7S%2BLabSFS74Dr07QETmJzaWkx3diuThHTlJlvKd46CowtcW729PQSFmcyffzRMEm9z0G%2FL2q%2B1uJ9G4S4M%2FGuOfk4uiviiQqI0bNS%2Fo%2BC8OPvwBonHlxeV9N9s7BhXROwrw4x73haiEa%2B%2FWxWlYAyWmWctQsZds10ZhMkt0T45tKkO%2FKvKl6xQ%2FhHUd%2B6pR8m9U5fVvG2ZxkV5s5Onq7SkrOrjtXK0xmaTU9dp9X1Dn6XWQsqOdsgfPjY%2FZfeA8bkEfQERxm7kvo0NKx3rzDISZIuo8nCB2Szh1CXjt%2By0JXRjW%2BM8HAoLIVS7MQXhoFmCITUYaIdIjtaN%2FE3rmayyQErUZSPbR%2Bwr7w1oH320NA4GV6uObDQc6nPU8l5AHbQVgKVnm5MfwX2dtOliULe6iwG6xcutJIitYNNFb900LEXH8oLGZ9HNDcDSFtPKGOUdo6gE1lFMjU2RPWICkBmLkXpGaiJEL%2FNHoTVo8jJduG9ieddrC4an840nnrQWqyM%2Fkx%2FOSgVuDN%2F8fBxHcCmcf8nxkMM6m0MkGOqUBdsEjKrwNDuSr%2BvuNzCg2MOdK9shTsJbGn2hd5IuyetiA6irAAx5APulOArTqhipl63%2BTk1a0QOp7zTk5qHjB7FFL%2BX4AaBfI555RSF4MHW79l7PK5fSIzJAUOHpQu9EVrpR3b%2Bva4h48FMxIA%2FZAniDOXGtF2nGVf2bl6c%2FcWtybdhuRbeIYvwcdHccgA5YqTPkJq059lKTe2ahzmG7fXcGbYwZq&X-Amz-Signature=fa651248c589b9e25a9de49bf9fb8a5cfae069371b2876fae6837b8e711e4fee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672ZYHF72%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T162011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDkF9K1icCN555xc2i%2F%2B7%2FT6OVdMh0fPg7gEcCOEfFiDgIgPozSe82y3lnp8kE%2FgtOp8pfG5nEGSEq64RsdVDXXmFkq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDA%2FyWZkHwj0kVFiM0yrcA8WBWUQ8yz39MUOmmddYaRbM2Am9Yb1GE9D2ZEGM%2BmFP7UDlX6pZge7VZhYDkiMTTUjs2gXJEA9Gf7czGaO2ANRHn%2FsridGei7S%2BLabSFS74Dr07QETmJzaWkx3diuThHTlJlvKd46CowtcW729PQSFmcyffzRMEm9z0G%2FL2q%2B1uJ9G4S4M%2FGuOfk4uiviiQqI0bNS%2Fo%2BC8OPvwBonHlxeV9N9s7BhXROwrw4x73haiEa%2B%2FWxWlYAyWmWctQsZds10ZhMkt0T45tKkO%2FKvKl6xQ%2FhHUd%2B6pR8m9U5fVvG2ZxkV5s5Onq7SkrOrjtXK0xmaTU9dp9X1Dn6XWQsqOdsgfPjY%2FZfeA8bkEfQERxm7kvo0NKx3rzDISZIuo8nCB2Szh1CXjt%2By0JXRjW%2BM8HAoLIVS7MQXhoFmCITUYaIdIjtaN%2FE3rmayyQErUZSPbR%2Bwr7w1oH320NA4GV6uObDQc6nPU8l5AHbQVgKVnm5MfwX2dtOliULe6iwG6xcutJIitYNNFb900LEXH8oLGZ9HNDcDSFtPKGOUdo6gE1lFMjU2RPWICkBmLkXpGaiJEL%2FNHoTVo8jJduG9ieddrC4an840nnrQWqyM%2Fkx%2FOSgVuDN%2F8fBxHcCmcf8nxkMM6m0MkGOqUBdsEjKrwNDuSr%2BvuNzCg2MOdK9shTsJbGn2hd5IuyetiA6irAAx5APulOArTqhipl63%2BTk1a0QOp7zTk5qHjB7FFL%2BX4AaBfI555RSF4MHW79l7PK5fSIzJAUOHpQu9EVrpR3b%2Bva4h48FMxIA%2FZAniDOXGtF2nGVf2bl6c%2FcWtybdhuRbeIYvwcdHccgA5YqTPkJq059lKTe2ahzmG7fXcGbYwZq&X-Amz-Signature=4db426954080fa49bc94bb83ba70df1205c50b3f4d4ef4e825e70a41f56b8109&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
