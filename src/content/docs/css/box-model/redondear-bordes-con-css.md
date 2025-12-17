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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRFQBEW4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T071209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHaV7U6oe4q3r7hwgUOZARlLWfWaYZ8fhIVilsX9NTwwIhAOhwy603M8dApNj0BRkgopAL%2FVhfyKqaicseHMBjDBAiKv8DCHgQABoMNjM3NDIzMTgzODA1IgzIl5k67QFWG1I3Sw0q3AMLybVgBfgGX73Jnyb84Ho7i99v5S5VAAyHbZXlaP0TXBCxf2DotJOxsEQ74Cu9VNTiJPFfmBeJdfh2Ggeepd1wfH08e0oXJ45iS2%2BZ1EyiGnqwR8%2Frj3YCBbpx28gkRtDRIrAWipPxqxP6dk6MX5MeHy4nlc6K4EZigQluONdOvs7uhzqjQVjRo9LZo%2FIu9FsdABAcFiksFxoUAGdm9F7ULO%2FA1m6pPnT3Bku%2BjJlfm4U0cci6U3Yaceq5exM3WkAH344Lg18skpmiqxjxn4kWJPNd89zTk6WSKogRQA8E7R%2B5EzZ%2FSlxLPsrxbEUDLf6k0vC6Pcq3WO6DHFBmfus2eIten4CcXPy1SA4k1we3MKbtLUUbdJ62A1ZWJSim3kfgnD5rwFBgmlnSZih7vJGkygVBwEgysbIE%2Fm6UCl%2BZU2KDO5oV4fxmuHniFIkczVz%2FacKMhYlAu3YtQeFFP%2F32u8eJL7xNOIp9vNlXe2fiUTOw00kKUF8QpGjL%2FzKDBmCj4%2BdElgdS8usybu0fe3qlxD3Zrq3v27cEv%2BnCGNZTMDali4Ijcm4rIN9sxNYc3hlq4yDcd77%2BqI5FJS6g1YHAS0xCvi6Nf%2Bwv2Mf2JOeiwfmx2j0L5IHpvFRo5zDKnYnKBjqkAa%2Fk1GjQC%2Bhwj7%2B5yQOlE5MYB4RPNk8XfNyp8gUVBrdskAhv4fQPWasQsj86wNYrp9DucC6hum9EmD399Ejj%2BbDaNDqmRWCXX8PAVfduseWu5wlHOZ71jbbAMJTvl5gEPdvGV41Jh%2F6sd%2B%2BoL4tR4Sxfhe%2F9xtQMV4m4V%2BWnWc%2BMA8ErHAcDsNxROiIaplSp4p6YR6taLsFqBJPzlh4JuxIvB0ts&X-Amz-Signature=101d9793ed7f34f26d543ebd327079d08b03c2c014b86abe5e3b2d0aed3b9fa8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRFQBEW4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T071209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHaV7U6oe4q3r7hwgUOZARlLWfWaYZ8fhIVilsX9NTwwIhAOhwy603M8dApNj0BRkgopAL%2FVhfyKqaicseHMBjDBAiKv8DCHgQABoMNjM3NDIzMTgzODA1IgzIl5k67QFWG1I3Sw0q3AMLybVgBfgGX73Jnyb84Ho7i99v5S5VAAyHbZXlaP0TXBCxf2DotJOxsEQ74Cu9VNTiJPFfmBeJdfh2Ggeepd1wfH08e0oXJ45iS2%2BZ1EyiGnqwR8%2Frj3YCBbpx28gkRtDRIrAWipPxqxP6dk6MX5MeHy4nlc6K4EZigQluONdOvs7uhzqjQVjRo9LZo%2FIu9FsdABAcFiksFxoUAGdm9F7ULO%2FA1m6pPnT3Bku%2BjJlfm4U0cci6U3Yaceq5exM3WkAH344Lg18skpmiqxjxn4kWJPNd89zTk6WSKogRQA8E7R%2B5EzZ%2FSlxLPsrxbEUDLf6k0vC6Pcq3WO6DHFBmfus2eIten4CcXPy1SA4k1we3MKbtLUUbdJ62A1ZWJSim3kfgnD5rwFBgmlnSZih7vJGkygVBwEgysbIE%2Fm6UCl%2BZU2KDO5oV4fxmuHniFIkczVz%2FacKMhYlAu3YtQeFFP%2F32u8eJL7xNOIp9vNlXe2fiUTOw00kKUF8QpGjL%2FzKDBmCj4%2BdElgdS8usybu0fe3qlxD3Zrq3v27cEv%2BnCGNZTMDali4Ijcm4rIN9sxNYc3hlq4yDcd77%2BqI5FJS6g1YHAS0xCvi6Nf%2Bwv2Mf2JOeiwfmx2j0L5IHpvFRo5zDKnYnKBjqkAa%2Fk1GjQC%2Bhwj7%2B5yQOlE5MYB4RPNk8XfNyp8gUVBrdskAhv4fQPWasQsj86wNYrp9DucC6hum9EmD399Ejj%2BbDaNDqmRWCXX8PAVfduseWu5wlHOZ71jbbAMJTvl5gEPdvGV41Jh%2F6sd%2B%2BoL4tR4Sxfhe%2F9xtQMV4m4V%2BWnWc%2BMA8ErHAcDsNxROiIaplSp4p6YR6taLsFqBJPzlh4JuxIvB0ts&X-Amz-Signature=5bf9e82616c86810ac761541373fbfc6ed60987363e529fbbd95b4b14b8598bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
