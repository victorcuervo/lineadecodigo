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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2A4HSHB%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T072005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEA6jnwfQy9kfSLVdt2ZeHwJeHJH7a2neOIjmwsCF%2FlYAiEAtWv8QgPkKpbOVwYmsOrsBZAVf44JYBTkhIJZC5DrAj4q%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDPkES%2B6%2FZykE0SiTByrcA%2BJuTFbmTJzXHEOqHbZ%2BrzZMYmoBCHXGgYiZ3mvsjo9aThvedbQmb2t9O1R2Ma9O%2BlX%2FG%2BIJ805f2fZWJQhnP2U5oNXgBURR9bnFDJFbLLZ83jbepNXU69RhsTBWD5zBZlGL6GkQ6qo1EumyeBY8h18Kle59skOlONAlX6QM1qBMXyIRVm%2Fl%2F6zdPcyNptRfmqCw9%2BPygsJFXxmD0KkcFGbzQhEhqG2zvBf7AxGbBwE3E38cgC83JRgNItisBD8Par708xBexsO6v0JhFoCXRtWZkKC%2FmSUoVTInuFSjm9H0q1S8lk8WPffFS0s0j%2BUVi3zw4biMhT9eSUu8ibVLEh2ETyeB9kSiwLqxnWBE%2Fp0iv3lfrTWytWmr7imADeJPgM54TGEn0ESQMbAwmYTY798fk%2BL2tey9uEmhR0gG%2FueqOfTXVx%2FzNd4Nmx5de2qR2U77P94hvIV8MoRq8CAiO%2FkXPTXaYPzvwnCSK7ooOZv0AFE1wGrMspNFV61%2FASub9n%2FLBixNkVlxneOVhApV9on%2B9oP3bZ0T9M90EqXXJ71op%2F7cN6OM9rvb7C7vHEfOphLEY3vfe6d%2BLb9ERIIJC3zHZn1MoDMGF8EXK1Q7%2B4NQBaiEJghKaAyw6KSuMKycicoGOqUBSpDVbgka9XDpUa3H32i5yqDvy81DM9zvoihz9J9iPlBsXEveYQTrGzP1gdf6hV%2Bp3SDQjHfwTaT0epuLTV3Sd9vVR7H7TeQO4dY0Voh6jD7gaIvvVPhbpjr%2BReGnIL1Wxpe2Yx69oxA4d9K7gvkb560YxXputowCdfSIQxSZGQGsQSIBnJqrJ2pFZbWW9D1yhTgdl0aj%2FH8p%2BRUYREYSZgdTLcJl&X-Amz-Signature=c07f1ca95b3b7373706059c548bea62a29de59a8cfa17a1cc9dbcb28e86c3083&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2A4HSHB%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T072005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEA6jnwfQy9kfSLVdt2ZeHwJeHJH7a2neOIjmwsCF%2FlYAiEAtWv8QgPkKpbOVwYmsOrsBZAVf44JYBTkhIJZC5DrAj4q%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDPkES%2B6%2FZykE0SiTByrcA%2BJuTFbmTJzXHEOqHbZ%2BrzZMYmoBCHXGgYiZ3mvsjo9aThvedbQmb2t9O1R2Ma9O%2BlX%2FG%2BIJ805f2fZWJQhnP2U5oNXgBURR9bnFDJFbLLZ83jbepNXU69RhsTBWD5zBZlGL6GkQ6qo1EumyeBY8h18Kle59skOlONAlX6QM1qBMXyIRVm%2Fl%2F6zdPcyNptRfmqCw9%2BPygsJFXxmD0KkcFGbzQhEhqG2zvBf7AxGbBwE3E38cgC83JRgNItisBD8Par708xBexsO6v0JhFoCXRtWZkKC%2FmSUoVTInuFSjm9H0q1S8lk8WPffFS0s0j%2BUVi3zw4biMhT9eSUu8ibVLEh2ETyeB9kSiwLqxnWBE%2Fp0iv3lfrTWytWmr7imADeJPgM54TGEn0ESQMbAwmYTY798fk%2BL2tey9uEmhR0gG%2FueqOfTXVx%2FzNd4Nmx5de2qR2U77P94hvIV8MoRq8CAiO%2FkXPTXaYPzvwnCSK7ooOZv0AFE1wGrMspNFV61%2FASub9n%2FLBixNkVlxneOVhApV9on%2B9oP3bZ0T9M90EqXXJ71op%2F7cN6OM9rvb7C7vHEfOphLEY3vfe6d%2BLb9ERIIJC3zHZn1MoDMGF8EXK1Q7%2B4NQBaiEJghKaAyw6KSuMKycicoGOqUBSpDVbgka9XDpUa3H32i5yqDvy81DM9zvoihz9J9iPlBsXEveYQTrGzP1gdf6hV%2Bp3SDQjHfwTaT0epuLTV3Sd9vVR7H7TeQO4dY0Voh6jD7gaIvvVPhbpjr%2BReGnIL1Wxpe2Yx69oxA4d9K7gvkb560YxXputowCdfSIQxSZGQGsQSIBnJqrJ2pFZbWW9D1yhTgdl0aj%2FH8p%2BRUYREYSZgdTLcJl&X-Amz-Signature=fe4c6e1f77c68c1e9157c221246f384d874c449d2fe4ddfadac1c7502a54c3c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
