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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKZW6EWG%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T084406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2FQFIGwbE0KVACPUxQVYlqT%2BQ6yRLcw%2ByMfQ1G7NJwewIgMrUKH%2BGkZiSCLH1NWJOIVdX4QDJz%2FxYqkx7oD7pvt0EqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPgSmuBIBSsHfEdYjCrcA6iQbPGVsl09%2BTOD9YbqaGIXuV2l78KJTZEhv92Em2v2dshjOwJ9h2%2FBFYRVKkvmTYoJAtPYCynaCePWmlGysUYxONgULuRImtwYs6MKqHWoGQoJESC%2FdUlpjD6o%2FCcaaZSlbVEG49bMVfRHDs%2Fn3ztRZIglsHYwdAbLkimDmqVTNPOuUDhRNy4vExx0jUzO4%2BC8evs5CjH94YYn16zq7kfE9X09BKNlKnU9VyQQb%2FXFVBzJ%2B%2FwLSIgZ7IIu12FRztzyzjDfY2%2FS9Dgu2KiXA60v506SX8qLO57T529bKXOXFOQMOxsAPlBQe37zHUf2j3%2BnLdke4oTNnwj3VCvtoQqFKVorFjski%2FebvQ0PRohWf%2BlSNelBrIri7jxOfUAIkJhy%2BdsQLhso%2BWP%2Btq1OJIoaJLzCF%2FSUXTlSG55SzGW%2FNXd1bNuRpaH3uLeCrHICbUErLiykBIsXFm2GkzlnDHb3h%2FgUWxd774O8WDM8%2FBOcH1CN8dmp6TwdoaCBBYg86%2Brg7bG%2F8qPYs1dyZ2h3Zn4cvfBxl9vrNm41jKJSQ6PblOPxzXCrl8JhPBK2y74%2BGm2M3zPK08wJLBqQ4oP5yreEeHBGsnyNb711Vl%2FCBtA26iXy4gSIfEW6o8YjMO3t2ckGOqUBOacRKI5JlOMnOtyv5iaVcUapd9nhMDoOMGjwvjXhZT4LQM721xr%2Biw6PQZW53mpfaaLTa7Hm2cTnhR6LYUFwUFDptHxbAiYct5EhHePNNdQ2O8qiDiclhnb7VW8taaDVZjNUu%2BZe9Y1La%2FwB0UEpbtxMfDxUzj2z5Lww%2BGB4t4b624ZaCVvV%2BuA%2B9sEEVtY3zjuA3g8%2FDlVcqztrgwLwJqTqz8Iy&X-Amz-Signature=0e121220a02a374e4d7bdaa3f5ea152649ecd1b5eeb8ef95420af9f781cea31f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKZW6EWG%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T084406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2FQFIGwbE0KVACPUxQVYlqT%2BQ6yRLcw%2ByMfQ1G7NJwewIgMrUKH%2BGkZiSCLH1NWJOIVdX4QDJz%2FxYqkx7oD7pvt0EqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPgSmuBIBSsHfEdYjCrcA6iQbPGVsl09%2BTOD9YbqaGIXuV2l78KJTZEhv92Em2v2dshjOwJ9h2%2FBFYRVKkvmTYoJAtPYCynaCePWmlGysUYxONgULuRImtwYs6MKqHWoGQoJESC%2FdUlpjD6o%2FCcaaZSlbVEG49bMVfRHDs%2Fn3ztRZIglsHYwdAbLkimDmqVTNPOuUDhRNy4vExx0jUzO4%2BC8evs5CjH94YYn16zq7kfE9X09BKNlKnU9VyQQb%2FXFVBzJ%2B%2FwLSIgZ7IIu12FRztzyzjDfY2%2FS9Dgu2KiXA60v506SX8qLO57T529bKXOXFOQMOxsAPlBQe37zHUf2j3%2BnLdke4oTNnwj3VCvtoQqFKVorFjski%2FebvQ0PRohWf%2BlSNelBrIri7jxOfUAIkJhy%2BdsQLhso%2BWP%2Btq1OJIoaJLzCF%2FSUXTlSG55SzGW%2FNXd1bNuRpaH3uLeCrHICbUErLiykBIsXFm2GkzlnDHb3h%2FgUWxd774O8WDM8%2FBOcH1CN8dmp6TwdoaCBBYg86%2Brg7bG%2F8qPYs1dyZ2h3Zn4cvfBxl9vrNm41jKJSQ6PblOPxzXCrl8JhPBK2y74%2BGm2M3zPK08wJLBqQ4oP5yreEeHBGsnyNb711Vl%2FCBtA26iXy4gSIfEW6o8YjMO3t2ckGOqUBOacRKI5JlOMnOtyv5iaVcUapd9nhMDoOMGjwvjXhZT4LQM721xr%2Biw6PQZW53mpfaaLTa7Hm2cTnhR6LYUFwUFDptHxbAiYct5EhHePNNdQ2O8qiDiclhnb7VW8taaDVZjNUu%2BZe9Y1La%2FwB0UEpbtxMfDxUzj2z5Lww%2BGB4t4b624ZaCVvV%2BuA%2B9sEEVtY3zjuA3g8%2FDlVcqztrgwLwJqTqz8Iy&X-Amz-Signature=89849ea73554bda76d7f1c56ee90c69a1845eef992b643578a170952d2363c10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
