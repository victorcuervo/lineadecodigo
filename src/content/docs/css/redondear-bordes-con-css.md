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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STZ5LMYC%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T164045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH%2F%2BhKMoOXwgai2nu9YkUcrhrD64AguHqNYNMP1i2RTCAiAKKxWCZ0tKvcCEgCdxkOl3A6eTvGZyebtKp%2BS%2FWcC3oyqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMe1r9D5kNo7ltESX8KtwDrPArrF3T%2B4Hi%2BiWKQSm5CVdhyjo1AvRzXPIHOcIDMAJ1rN0Dcpqh2XPqkDPQ8mz3EB97%2BO%2FXRAS8NBQ0TsK6MCEIRtE4wMchzHdcDZdVs946CHWehUsrV%2BBX7yA68V8bUggRVopZLKCGkmHqowaJbdxLz1LVKM0bn%2Bxwpss6qbfOlDPDj4siTkEPBGSjnej4BWJZ2h6ijggvCjDTg8tOfD6UqnsmhRxIshCml4H6zO3takuOtmUpLwq5es7bhZY4D5GDDEvV4raspvM4kibfzTtk4a30AC5ZKsEpwWH%2FocAWHTPp2hSQcSocLp561jMk9KJ%2BVaFESPv03LTXlxStk5sQ3UWtzxe4x%2BU4ebopgSNtAjUoFkyfQ8GyTK1DKD6ZzyRjQpmqRRzuPKxcToWnQpRKngF%2BEc5nLGX3aoq5%2FqOMHi6le6KJATu%2BiNafAxReE%2BaDPQda0vhbZ8yq9YZB3RS3%2FjTPEre8sbP8G1e9iuuCP%2FfauW8QjH0EN0pOxJeVel8KfoajHXJEdvinRO9LBIC9UkfX2SxvOWmhR2LokRURynN0CBWALo93lQQ7IwHRYu1efnwoVGuUYEiyvP0gMLmx%2F5kBW91SxDIUnLi1vZ3DGapH%2BoLtvKIKjFAw5rbWyQY6pgEHDUrcgn9ARtZ9G2E%2FNShE1i6zsAmNv7MI50zDYoaQ5e5x46uhHhiQrfhQ2WVx3c303fFQPTJY%2BLO45NpUqirR14MjywPdPeZCS7ZB%2F6dxAwha7ho1npYM7E%2B4U0UiwU1GhQ4nFxMteUjcxXCIL6%2BDPb%2Fu%2FEo1107uBK2OtKpgqBoCNFkQEg5aR%2FFLLMSAjalMe%2FUEj1zc%2FaP7nbdU5pBtJGx62tzm&X-Amz-Signature=2cc22a6aa3d0ee7a02b8fa22002e7cde939a943d85b0a1f06b2a4e6a2cfc8501&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STZ5LMYC%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T164045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH%2F%2BhKMoOXwgai2nu9YkUcrhrD64AguHqNYNMP1i2RTCAiAKKxWCZ0tKvcCEgCdxkOl3A6eTvGZyebtKp%2BS%2FWcC3oyqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMe1r9D5kNo7ltESX8KtwDrPArrF3T%2B4Hi%2BiWKQSm5CVdhyjo1AvRzXPIHOcIDMAJ1rN0Dcpqh2XPqkDPQ8mz3EB97%2BO%2FXRAS8NBQ0TsK6MCEIRtE4wMchzHdcDZdVs946CHWehUsrV%2BBX7yA68V8bUggRVopZLKCGkmHqowaJbdxLz1LVKM0bn%2Bxwpss6qbfOlDPDj4siTkEPBGSjnej4BWJZ2h6ijggvCjDTg8tOfD6UqnsmhRxIshCml4H6zO3takuOtmUpLwq5es7bhZY4D5GDDEvV4raspvM4kibfzTtk4a30AC5ZKsEpwWH%2FocAWHTPp2hSQcSocLp561jMk9KJ%2BVaFESPv03LTXlxStk5sQ3UWtzxe4x%2BU4ebopgSNtAjUoFkyfQ8GyTK1DKD6ZzyRjQpmqRRzuPKxcToWnQpRKngF%2BEc5nLGX3aoq5%2FqOMHi6le6KJATu%2BiNafAxReE%2BaDPQda0vhbZ8yq9YZB3RS3%2FjTPEre8sbP8G1e9iuuCP%2FfauW8QjH0EN0pOxJeVel8KfoajHXJEdvinRO9LBIC9UkfX2SxvOWmhR2LokRURynN0CBWALo93lQQ7IwHRYu1efnwoVGuUYEiyvP0gMLmx%2F5kBW91SxDIUnLi1vZ3DGapH%2BoLtvKIKjFAw5rbWyQY6pgEHDUrcgn9ARtZ9G2E%2FNShE1i6zsAmNv7MI50zDYoaQ5e5x46uhHhiQrfhQ2WVx3c303fFQPTJY%2BLO45NpUqirR14MjywPdPeZCS7ZB%2F6dxAwha7ho1npYM7E%2B4U0UiwU1GhQ4nFxMteUjcxXCIL6%2BDPb%2Fu%2FEo1107uBK2OtKpgqBoCNFkQEg5aR%2FFLLMSAjalMe%2FUEj1zc%2FaP7nbdU5pBtJGx62tzm&X-Amz-Signature=c92db2dfa0d1a1a8869dcaa168e14b095d89835903ab349ed2a4f6de1b7fab54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
