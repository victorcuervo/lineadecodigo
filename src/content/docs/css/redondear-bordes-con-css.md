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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFHYOB2R%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T042850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2Frr47DZHh1ZDO42KE1dGLW3MirvOd%2FE4rCI%2BIHXIpqAIgLdSn%2FzkJynGudIO3oomhYsfx8v9IyudQhiVc5OEG0MgqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAEGlkdMfyLGpjByYyrcA2MO4FMH36GnvTh9DspNKaKaFKUAgc6yToVmGpBiXXJwahYdI8vOyYew3ky1ClCQ%2FtB0juZpVFJrAwTEtLxJB7j8jGm4SHy5JE4VlOV1PQ%2B%2BtQP885vTHq%2BctNV64YkHn3XUn7cO17U4p9zHq%2FRIM1HVdAkMDECZubsF9QLaUhn1O31VJGWqCsLpciFi2jqFatXP%2FQu12uNJW2vyl0Gq8c3h61dvHEveD2Wo9aHPjPyDPZiMeU1CkaOkWRTH2hdlDZzf2SO7xxTJsUBc5onGnV5h3nEpfYDG6TpdYrRUDavAoqkZedV%2BhDkwtQtajWrDNqU363yU376vDVDNDTzfq0dlf0W1WXngOVzIekwu%2FDsOkQGXEMMAAo842%2BuEMLFn9qGGsqOJI%2Bwlo%2FBOkIEKsXSwioWOVsIBBQv5l65H9qxIfdBkEg3WZ98SGaRidtDt7YWkKpKCmV1JmqISF7nUDr8EKbAQelOAjSquHiCUJPVoOwuhzvtsvrm4MViGUrDNOvX0YHw%2BXIGK7BZkm7Dnsr4nBLPbYkL7IDxwjnb8z%2Fh5E52F1HwXzpX8%2BY7h%2FcdSFSRxC5jAxehpMJjv05IZziYxHRckKS01YHOuc04pZgzVm25tCHDs8gInTECIMJCu3skGOqUB4NYgk5HgDYjy58a8nuQ%2FMBSuAm9LMjM6LVyGJMAILEvMVU8MKccic4ROCcxo5STF3FS67DCpDap2IYtIZipl4AilHa4TOC4cgCmRdQyODnMHqnKUwMWcZksLN0nYCwBq0doF1udVSLKOpnq6DJ1vdjP9t08dFf6QglaDybSPBzfKqAvzffzENWgLE5PCNqa95UYbgb6UCYIcrybfNqrk0E1%2B29Ko&X-Amz-Signature=8003823950f765be7909f5cb5af3feeb51d37c85729e11dd58a3b2c0397337f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFHYOB2R%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T042850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2Frr47DZHh1ZDO42KE1dGLW3MirvOd%2FE4rCI%2BIHXIpqAIgLdSn%2FzkJynGudIO3oomhYsfx8v9IyudQhiVc5OEG0MgqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAEGlkdMfyLGpjByYyrcA2MO4FMH36GnvTh9DspNKaKaFKUAgc6yToVmGpBiXXJwahYdI8vOyYew3ky1ClCQ%2FtB0juZpVFJrAwTEtLxJB7j8jGm4SHy5JE4VlOV1PQ%2B%2BtQP885vTHq%2BctNV64YkHn3XUn7cO17U4p9zHq%2FRIM1HVdAkMDECZubsF9QLaUhn1O31VJGWqCsLpciFi2jqFatXP%2FQu12uNJW2vyl0Gq8c3h61dvHEveD2Wo9aHPjPyDPZiMeU1CkaOkWRTH2hdlDZzf2SO7xxTJsUBc5onGnV5h3nEpfYDG6TpdYrRUDavAoqkZedV%2BhDkwtQtajWrDNqU363yU376vDVDNDTzfq0dlf0W1WXngOVzIekwu%2FDsOkQGXEMMAAo842%2BuEMLFn9qGGsqOJI%2Bwlo%2FBOkIEKsXSwioWOVsIBBQv5l65H9qxIfdBkEg3WZ98SGaRidtDt7YWkKpKCmV1JmqISF7nUDr8EKbAQelOAjSquHiCUJPVoOwuhzvtsvrm4MViGUrDNOvX0YHw%2BXIGK7BZkm7Dnsr4nBLPbYkL7IDxwjnb8z%2Fh5E52F1HwXzpX8%2BY7h%2FcdSFSRxC5jAxehpMJjv05IZziYxHRckKS01YHOuc04pZgzVm25tCHDs8gInTECIMJCu3skGOqUB4NYgk5HgDYjy58a8nuQ%2FMBSuAm9LMjM6LVyGJMAILEvMVU8MKccic4ROCcxo5STF3FS67DCpDap2IYtIZipl4AilHa4TOC4cgCmRdQyODnMHqnKUwMWcZksLN0nYCwBq0doF1udVSLKOpnq6DJ1vdjP9t08dFf6QglaDybSPBzfKqAvzffzENWgLE5PCNqa95UYbgb6UCYIcrybfNqrk0E1%2B29Ko&X-Amz-Signature=bb3bdb41c3e972f43ea58ef8d308805833e9dd4a830a66b9e23879f495173206&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
