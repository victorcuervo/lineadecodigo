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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QY5QO2B%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T034646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFlFczl1vZajYeNs832Z2YNNiriCavJK5BcyFbLs9grvAiBj6iIlRARbi5tPtLTg%2FhDgIuM06TPVKz5XvfH2Nksm%2FiqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpQVjV7DPHFqpriUXKtwDpWl5%2FEz4EU8qcyfcYAeKMmQ5WrXgDRyza56dbtBH5Z2FTmzF8z5dGcMFdphDRvXYlooeJvZQjCaOk8dQXZy%2BefwZMAGWh%2BxNJjBLKky5GtdWntWo2hMXMD%2Ffzg46LVdIxWz668pj3AqeEz6TFN2d2NqB7sdPyJTJXsi1ANZNUZKSc4CFFUvbDtaJKzPE%2BM6BJADSMClyH5RTkVAN%2B1Dy%2Fj2BWKtmTvOpLme8N856r30FHeq5nUaqbGOdmr5Ul3kPKMxx2bDwrc%2F36HO69zrn6Yr7qQFEAJQdhAwFrUwMWmjZcJG8Q9b%2B8%2BKvchkvm2HijOSxteVWXiVupZSnYLc238waF3grlbUSYKzlyLefIIzLfT0uXYjHfkGFBljkdVJ71tLDcIpnvHiZ%2FNGPUck8dB6KtTDDNyBw6J8%2BcPJzyHUv%2F%2FNpTx4ImT9RQcpQ62ce4kBctK2D2s7Sd5eq789pqIstWjXrC5LT3d5PhMOHnb8fgz4fkoRonld49iYFQLrn22LomWKcEYXByFBH6XgvrmK4L434VSzffCky9C%2B47vqdpJ2cvL%2Fox9A8tdgcLuX2Zm9O8NTGDyEffrKeY%2Ba4Yt9zyNfOruivuzO5qvNnjjlLVvQoJ%2B4wCMNLHlAwoa7eyQY6pgHUUqKD3V0EGgpLH8bBZBKKa0oylOxQcismlt4FHOnPM78mOrCufWUwhQdmbJVOzD2xo98W4H0iAPbEGkjSYdFtemK32oxbTLffsRq8l6dxAchF50C%2BdZ%2BkYrV54SSiOtMN9Lco2Z4YhLwR3Yy6drXyEUgRkhVW6lga2ZyN782Y1UM7vfQEAtKr6A5fhI77PgfC2TRnSVdBlvHwJzE%2BkbQIyXAFpPgd&X-Amz-Signature=5faba74ca03b0d635839af60d9633486df7c070c8ba0ffbecf4544fa057caf69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QY5QO2B%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T034646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFlFczl1vZajYeNs832Z2YNNiriCavJK5BcyFbLs9grvAiBj6iIlRARbi5tPtLTg%2FhDgIuM06TPVKz5XvfH2Nksm%2FiqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpQVjV7DPHFqpriUXKtwDpWl5%2FEz4EU8qcyfcYAeKMmQ5WrXgDRyza56dbtBH5Z2FTmzF8z5dGcMFdphDRvXYlooeJvZQjCaOk8dQXZy%2BefwZMAGWh%2BxNJjBLKky5GtdWntWo2hMXMD%2Ffzg46LVdIxWz668pj3AqeEz6TFN2d2NqB7sdPyJTJXsi1ANZNUZKSc4CFFUvbDtaJKzPE%2BM6BJADSMClyH5RTkVAN%2B1Dy%2Fj2BWKtmTvOpLme8N856r30FHeq5nUaqbGOdmr5Ul3kPKMxx2bDwrc%2F36HO69zrn6Yr7qQFEAJQdhAwFrUwMWmjZcJG8Q9b%2B8%2BKvchkvm2HijOSxteVWXiVupZSnYLc238waF3grlbUSYKzlyLefIIzLfT0uXYjHfkGFBljkdVJ71tLDcIpnvHiZ%2FNGPUck8dB6KtTDDNyBw6J8%2BcPJzyHUv%2F%2FNpTx4ImT9RQcpQ62ce4kBctK2D2s7Sd5eq789pqIstWjXrC5LT3d5PhMOHnb8fgz4fkoRonld49iYFQLrn22LomWKcEYXByFBH6XgvrmK4L434VSzffCky9C%2B47vqdpJ2cvL%2Fox9A8tdgcLuX2Zm9O8NTGDyEffrKeY%2Ba4Yt9zyNfOruivuzO5qvNnjjlLVvQoJ%2B4wCMNLHlAwoa7eyQY6pgHUUqKD3V0EGgpLH8bBZBKKa0oylOxQcismlt4FHOnPM78mOrCufWUwhQdmbJVOzD2xo98W4H0iAPbEGkjSYdFtemK32oxbTLffsRq8l6dxAchF50C%2BdZ%2BkYrV54SSiOtMN9Lco2Z4YhLwR3Yy6drXyEUgRkhVW6lga2ZyN782Y1UM7vfQEAtKr6A5fhI77PgfC2TRnSVdBlvHwJzE%2BkbQIyXAFpPgd&X-Amz-Signature=43e78e1eb8de492cfd791c5752e9c23543f50ab699828e3f11983955fdc2a5c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
