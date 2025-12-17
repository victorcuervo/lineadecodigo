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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IWINZNU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T154810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGTpwe587YCrvo8L83UN3nqLSRS%2Fq5Xsxy87g%2FNPUiBDAiAIFrv1k4joqar1bBIMMxeSlwxbx5rVqG%2B8gOlFI2eleiqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqVA9mzG5yZTg0SlNKtwD8HTLpFyFgWbw%2B9jWjG0VxtWRSCyEWXkpm5BCNrNPdL5mk7QQqEo1ov%2FFK5Mqyd1sisuEwZ5soN5WYzgUW%2BcStyBxrHAONkk6FW6uCj286qrcMeKopgIVkeIsK3oC1gC2m6iLNKsACJYptJZ%2FvwWtmEG33axs%2BG2of5kljQhtN%2F8Xs3kW2E10m45vPzFJthuys72FKmZUOWNH5dsoquKCFlAwCqN1S%2BCMea0p8o2f%2F%2BmsdSsoP%2BBG79utuYzQHC7p33n2UihMfZK20JTV32GOPxvAkvh%2B3qdPFvjAyLX8GaFoIQGiiAQ3gFhpNKGUxvCigHUhFHWajT2DS%2B6WVmanUsxKILyriiguOM%2FBeQmxIc2dDJf90URwxs5HHAdu4B8Kw%2Fp4QUrIRc%2Bkkhh3rN2ozGWs4ZeCaiM9D1gBKkL8EG2pTeNvoktzIxCMFHuMx6YsdBK%2BqKVv59RoRbIha1PjvaIczmIuNgH%2FUqWIb5jgcWBoU8hCB72Sm5%2B3CAn39oOpryFWDCViXh08vtRnoHVHDvy5TlU4wdI4Z%2BEy8eTFEZF1ABrjw56g5SVkTv8L4bDe8kmZFYg9o5pS0GmUgHd%2BmWMIUENNHgC0khN1Y9c0l3FRxJxg1oxbDjmI5qcwq5%2BLygY6pgFzox%2Bgmk%2Bja%2FVbV%2BtuJfmkPCR%2FTsliOUUtnFSNgPc%2BooWwRGdAHb%2FONT0YDmPtW%2BtWwkIXuAFFJwz38Bt8ONPybo8W1wmJ9VVNxxh6IqKYtS3s9j1u3u3hlnh7hSjNirCauOWtK30zY5blQIZTqksDCrzVTvGWdA2xdLvPyweTtR6o8V65EOCQyJA%2BL1ePMo9zsIclYp12d0pc%2FdkFR1HBK%2B68gLQD&X-Amz-Signature=8d986f32c7c11afd2e4b6eb70ec201263acde97035857ee914683895ccac1a9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IWINZNU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T154810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGTpwe587YCrvo8L83UN3nqLSRS%2Fq5Xsxy87g%2FNPUiBDAiAIFrv1k4joqar1bBIMMxeSlwxbx5rVqG%2B8gOlFI2eleiqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqVA9mzG5yZTg0SlNKtwD8HTLpFyFgWbw%2B9jWjG0VxtWRSCyEWXkpm5BCNrNPdL5mk7QQqEo1ov%2FFK5Mqyd1sisuEwZ5soN5WYzgUW%2BcStyBxrHAONkk6FW6uCj286qrcMeKopgIVkeIsK3oC1gC2m6iLNKsACJYptJZ%2FvwWtmEG33axs%2BG2of5kljQhtN%2F8Xs3kW2E10m45vPzFJthuys72FKmZUOWNH5dsoquKCFlAwCqN1S%2BCMea0p8o2f%2F%2BmsdSsoP%2BBG79utuYzQHC7p33n2UihMfZK20JTV32GOPxvAkvh%2B3qdPFvjAyLX8GaFoIQGiiAQ3gFhpNKGUxvCigHUhFHWajT2DS%2B6WVmanUsxKILyriiguOM%2FBeQmxIc2dDJf90URwxs5HHAdu4B8Kw%2Fp4QUrIRc%2Bkkhh3rN2ozGWs4ZeCaiM9D1gBKkL8EG2pTeNvoktzIxCMFHuMx6YsdBK%2BqKVv59RoRbIha1PjvaIczmIuNgH%2FUqWIb5jgcWBoU8hCB72Sm5%2B3CAn39oOpryFWDCViXh08vtRnoHVHDvy5TlU4wdI4Z%2BEy8eTFEZF1ABrjw56g5SVkTv8L4bDe8kmZFYg9o5pS0GmUgHd%2BmWMIUENNHgC0khN1Y9c0l3FRxJxg1oxbDjmI5qcwq5%2BLygY6pgFzox%2Bgmk%2Bja%2FVbV%2BtuJfmkPCR%2FTsliOUUtnFSNgPc%2BooWwRGdAHb%2FONT0YDmPtW%2BtWwkIXuAFFJwz38Bt8ONPybo8W1wmJ9VVNxxh6IqKYtS3s9j1u3u3hlnh7hSjNirCauOWtK30zY5blQIZTqksDCrzVTvGWdA2xdLvPyweTtR6o8V65EOCQyJA%2BL1ePMo9zsIclYp12d0pc%2FdkFR1HBK%2B68gLQD&X-Amz-Signature=1ea434618cb74126de6ecb422e95631736fc504fac12d3763271fd7bb29b7610&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
