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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NUUNBSE%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T170158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQChzAaLStGQUihFv0949cleVdUME5vrwDErIgzHLi9wbwIhANR4txCth%2BanHAlaJ3IjmKVByqjJ6o3MtB7HjdEOJCrNKv8DCGAQABoMNjM3NDIzMTgzODA1Igzil%2FMRnu67m8J%2F%2Fj4q3ANb5DIrG27Pya6RI%2BLnEMq%2F%2BbM%2BLU9Rwca0Aepgdi2I7nVraF3CQuINRaaNxSe%2FRWxVo9m5Hco6LFfwHp7uARmY05JWDuTFWVDWOfEV1X%2BsQKMdkzc0uOXUGzOuBwao4zpyfWWWf2R%2BIQvjjnJwivlUVwdg5bQWI4fyVPKanqd7vNrkXUojBTW9Z9Wv6rOcy%2FdiuB73u1PVfAB%2Bw8LOLrBjsEogQWFIYc0AMquPTOd%2FkFGFXXWubV3owcarwZJOACemafQQ5yqCAL2fBw6%2Bb61sKcxRlPI%2FbFMu%2BrmKTWxKdlHUOtibB0%2FJuMMToSks1qbf5Alg4Kom7SOZuo5kwwUTGQwLZf4Aw%2F2wZcQ3A44vJINud3mYimKIlwZidrJxFfG%2FVoIMBU9WW8mrBgmqSjuECsdrjFqT9msRdjZ0pBrbOEznJMw72ffG4Qw85Ksfy2Pnk7W1Fh5Y5PT9%2BAllcenQwNcmbvTE3YW9hUz2dAKW2OAR6CFzsDSJmyrhjDaWw1UDBuBhLnr1sQbHx6Usi3vCzM%2B27JAqu%2BrVebIV22nahRDs0qfZmHCTiXpC9W%2FO55TaYC6cS6vTMiiQtUtlXy%2BPhY66VCpnpOBBUkhoyLcgTA0%2BdP3qkYQlakZ9%2BTCl4cvJBjqkAVItR9Zip992cB2G4yG1k2FVtGpu6rhAmvzz5a5CJ2hoJBPOQVGyKgCoDpD1PEbE9nfSSOfbrl9Dj6IGFyntrVjqGH45zKvt0hnKSt%2FNKJa6Tyrztc7Ejos2C3iYd5r4ftg0SKr56Q1eFX%2FmHtb3FC70BUCrRBrvjBluds5ISMES22pEYcb3U%2BS%2BNS5Rs9Jl3ncCY4aXYM8ek9JLfdybcWroJbF5&X-Amz-Signature=c3b6f6f57e08ff82f8b9fa3d272fa029a690aea41cf8e85c46078250763f15d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NUUNBSE%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T170158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQChzAaLStGQUihFv0949cleVdUME5vrwDErIgzHLi9wbwIhANR4txCth%2BanHAlaJ3IjmKVByqjJ6o3MtB7HjdEOJCrNKv8DCGAQABoMNjM3NDIzMTgzODA1Igzil%2FMRnu67m8J%2F%2Fj4q3ANb5DIrG27Pya6RI%2BLnEMq%2F%2BbM%2BLU9Rwca0Aepgdi2I7nVraF3CQuINRaaNxSe%2FRWxVo9m5Hco6LFfwHp7uARmY05JWDuTFWVDWOfEV1X%2BsQKMdkzc0uOXUGzOuBwao4zpyfWWWf2R%2BIQvjjnJwivlUVwdg5bQWI4fyVPKanqd7vNrkXUojBTW9Z9Wv6rOcy%2FdiuB73u1PVfAB%2Bw8LOLrBjsEogQWFIYc0AMquPTOd%2FkFGFXXWubV3owcarwZJOACemafQQ5yqCAL2fBw6%2Bb61sKcxRlPI%2FbFMu%2BrmKTWxKdlHUOtibB0%2FJuMMToSks1qbf5Alg4Kom7SOZuo5kwwUTGQwLZf4Aw%2F2wZcQ3A44vJINud3mYimKIlwZidrJxFfG%2FVoIMBU9WW8mrBgmqSjuECsdrjFqT9msRdjZ0pBrbOEznJMw72ffG4Qw85Ksfy2Pnk7W1Fh5Y5PT9%2BAllcenQwNcmbvTE3YW9hUz2dAKW2OAR6CFzsDSJmyrhjDaWw1UDBuBhLnr1sQbHx6Usi3vCzM%2B27JAqu%2BrVebIV22nahRDs0qfZmHCTiXpC9W%2FO55TaYC6cS6vTMiiQtUtlXy%2BPhY66VCpnpOBBUkhoyLcgTA0%2BdP3qkYQlakZ9%2BTCl4cvJBjqkAVItR9Zip992cB2G4yG1k2FVtGpu6rhAmvzz5a5CJ2hoJBPOQVGyKgCoDpD1PEbE9nfSSOfbrl9Dj6IGFyntrVjqGH45zKvt0hnKSt%2FNKJa6Tyrztc7Ejos2C3iYd5r4ftg0SKr56Q1eFX%2FmHtb3FC70BUCrRBrvjBluds5ISMES22pEYcb3U%2BS%2BNS5Rs9Jl3ncCY4aXYM8ek9JLfdybcWroJbF5&X-Amz-Signature=17a517fe55232653587fe9930d8f8f0226b003defadc17c6c83a7db3c4e458a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
