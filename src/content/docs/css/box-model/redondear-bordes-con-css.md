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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQVRPS53%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T051101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHf0UX1YjXNCUXF2Q0bumP0hMK5CBndmQPlN4jEz677NAiEAsXjgoToen3JAZEgLsa9avKGHaQYUmDIF52ovChmJjSwq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDJXMOrmeCNN91Xnx9SrcAx13dVekfbXdwPN%2FHpnnql2S3bfo4Nzf%2Fc6URa5yGNeKTFTQD8NWIsC%2BsUX0iaxuJJ7KDL1IJ%2BAQAVU1p30c3e%2Bew4DX0jXtACcVwa8lutFAlAGa5LaWwzs2xMEfIURIvMYIzzk4jr45pMrPzqRtlEIUV0kF5rwjbJynkm8QGu3IEXJZH30t7RLiyr7ijZhYBpYORFMTeRGb6PR6u5e97CMisvrxRINLLCwX7sX6kLeAQ4CCCAtOBrjvWCALV99WLd7Ow2%2B8iDvr8ohioTv2z4rUZusGcwHgsO5B8A6tknzonDDCzFaCdm1FvSsGktii07IBI525vd6FJL%2BWSlHsjQKEgrgJ3uIaTTdgk4%2FcpR1D8GMoz0QmOfWEn4SXNoo01GE2S2TV1kn2a7k8oTm%2BbQf%2BCHcKySXdizXDdstBlt%2F9qTHefxUFkqvla%2Fbuq9uJrNyeboHM8Iara7DKnfV%2FmsHjjMB%2BLcSdWAJj%2BPsF6QXFibGJuAGwigYVTb5IdRGn6BNzilD57Ir1uiwtH9WU21rTKMG%2F50riWadwF6Bj3SePg5Ioa0TJgxjvHWR8mg4U8al0eaRA7kKh3kcGTFPk9shrDIY5m45x1N8sha8K7qSMGIWnw6VqU%2B%2FcB8d4MKjpiMoGOqUB8YWhpjLJxU64AxyrKI3fhVegj%2FPZkARqBc6TbrBgjaDKsQeLHfcORX4parGjcvjJqqaV%2Ff8gIFlEXFAsq00wxYjcmwKZE2ZPd6ojRmTIRPS%2FWwwc4mmrS425LrMNalFxePZl4DcoJiic3TamTX%2BsC6Nvp4vKfVTNIemow0fHYORe56paZsoGiePLbGW7WsWKXDJ5pajK5YgNBVByKOLPkc58i0wg&X-Amz-Signature=a00d0b86ef3349cc8ee8999794621dce0dbfc31b2c52b64c0acb87e1ad5d3e08&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQVRPS53%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T051101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHf0UX1YjXNCUXF2Q0bumP0hMK5CBndmQPlN4jEz677NAiEAsXjgoToen3JAZEgLsa9avKGHaQYUmDIF52ovChmJjSwq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDJXMOrmeCNN91Xnx9SrcAx13dVekfbXdwPN%2FHpnnql2S3bfo4Nzf%2Fc6URa5yGNeKTFTQD8NWIsC%2BsUX0iaxuJJ7KDL1IJ%2BAQAVU1p30c3e%2Bew4DX0jXtACcVwa8lutFAlAGa5LaWwzs2xMEfIURIvMYIzzk4jr45pMrPzqRtlEIUV0kF5rwjbJynkm8QGu3IEXJZH30t7RLiyr7ijZhYBpYORFMTeRGb6PR6u5e97CMisvrxRINLLCwX7sX6kLeAQ4CCCAtOBrjvWCALV99WLd7Ow2%2B8iDvr8ohioTv2z4rUZusGcwHgsO5B8A6tknzonDDCzFaCdm1FvSsGktii07IBI525vd6FJL%2BWSlHsjQKEgrgJ3uIaTTdgk4%2FcpR1D8GMoz0QmOfWEn4SXNoo01GE2S2TV1kn2a7k8oTm%2BbQf%2BCHcKySXdizXDdstBlt%2F9qTHefxUFkqvla%2Fbuq9uJrNyeboHM8Iara7DKnfV%2FmsHjjMB%2BLcSdWAJj%2BPsF6QXFibGJuAGwigYVTb5IdRGn6BNzilD57Ir1uiwtH9WU21rTKMG%2F50riWadwF6Bj3SePg5Ioa0TJgxjvHWR8mg4U8al0eaRA7kKh3kcGTFPk9shrDIY5m45x1N8sha8K7qSMGIWnw6VqU%2B%2FcB8d4MKjpiMoGOqUB8YWhpjLJxU64AxyrKI3fhVegj%2FPZkARqBc6TbrBgjaDKsQeLHfcORX4parGjcvjJqqaV%2Ff8gIFlEXFAsq00wxYjcmwKZE2ZPd6ojRmTIRPS%2FWwwc4mmrS425LrMNalFxePZl4DcoJiic3TamTX%2BsC6Nvp4vKfVTNIemow0fHYORe56paZsoGiePLbGW7WsWKXDJ5pajK5YgNBVByKOLPkc58i0wg&X-Amz-Signature=7a75d862662473b167445265d10fa43e0433bb0a9fd53f42f8952c35817c4e05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
