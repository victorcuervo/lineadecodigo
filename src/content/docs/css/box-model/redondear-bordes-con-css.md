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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NCS6O2D%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T125830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJWoOGi3tIxqB9KZVyYRxZYGzPd0Ufyll07Ir1b6lR%2BAIgTnwmyQcFvtgoQSJwn5gM0lXnrPmczGCsmtXU%2Bfb8c7sq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDETJ8dU0Rxb%2BcS5TrSrcA9qqfWpBjtpJKsmj1hYj1OV%2BUzgTwnjrkbj6K8%2BBW%2FXcAROaMZc0fkJpWFChiRzZtUrffp5XX8Ib3B53I7fqDlb%2F3X0pnvqrCWFdYlVzMDuFFzOiBiOR4UvighIuQ5MxDKhefrxFQvo%2FYIYzV54kl4aFNbwMYR5pYo2E6ruVwOBhBhn7mu3Fi4UVvISRldD9231l3nVLOA1uQuqLjrom3Ocq2ZSEn8yscd9L4fpDqM8w3iMRifaGJr%2B9gEIJcwUDHNHkj3TPMm2bJZCIL6sogkGZqUeOWCGrd8N5TfGgJgHL0ssK%2BRJ3CJROBVZ6F3cAUcs4AhJ94Qwb0I9ib189blU865QBuninu%2BWFSL%2BIU4a%2Fjr89m0az%2BJXPDR4pwgF%2Fh68HLZsbnluQ3I8sqNQR%2FwFILyir3gzO8tLYIzMFdFZTA%2FKZv8kjuSJ7znh6%2FQa7Epc2iW2znXM3BybYxMiihqpf5kY7ayJPamttC71zA5t3VTo7Pgjj1ZGXSHRV6EyReEfhl8kdEJi0D5SCKDSfmGpYzvvZP5ls%2FGKR14XhmmX0CO5G0cs3QRVSQXz1kDaQVJlpOxvK2t2VBwbA499UuBgAxP6Raje1vxY19ndFeFzMov8V0nGaNFcjOC8KMJTGisoGOqUBl8mD790aRIddxg%2BB9bDYqOnCKE0I7RaYzpWrWsBQLhsBzjloKvQvTE5fsi5c1C6VMJ16HAG9coE%2BAAl4BRNxaa5P%2BD4p3zJyPx1wMgCel%2B2Tnm%2B9Sr6eQ10Dd7t3TvVAYMCAGTtvfKzJnx2h%2FynKpEgtdbGVlGTl6ssWVP7Ebq1m8M%2B7ovX07%2B5xkDneRzTPPn9YS8Gs9AIdxQTtQukIy0xLFfOo&X-Amz-Signature=fd15dde61feaf9f424bd3fcd2f57fad5b96ac167d512e0847b2d3d0be72146ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NCS6O2D%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T125830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJWoOGi3tIxqB9KZVyYRxZYGzPd0Ufyll07Ir1b6lR%2BAIgTnwmyQcFvtgoQSJwn5gM0lXnrPmczGCsmtXU%2Bfb8c7sq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDETJ8dU0Rxb%2BcS5TrSrcA9qqfWpBjtpJKsmj1hYj1OV%2BUzgTwnjrkbj6K8%2BBW%2FXcAROaMZc0fkJpWFChiRzZtUrffp5XX8Ib3B53I7fqDlb%2F3X0pnvqrCWFdYlVzMDuFFzOiBiOR4UvighIuQ5MxDKhefrxFQvo%2FYIYzV54kl4aFNbwMYR5pYo2E6ruVwOBhBhn7mu3Fi4UVvISRldD9231l3nVLOA1uQuqLjrom3Ocq2ZSEn8yscd9L4fpDqM8w3iMRifaGJr%2B9gEIJcwUDHNHkj3TPMm2bJZCIL6sogkGZqUeOWCGrd8N5TfGgJgHL0ssK%2BRJ3CJROBVZ6F3cAUcs4AhJ94Qwb0I9ib189blU865QBuninu%2BWFSL%2BIU4a%2Fjr89m0az%2BJXPDR4pwgF%2Fh68HLZsbnluQ3I8sqNQR%2FwFILyir3gzO8tLYIzMFdFZTA%2FKZv8kjuSJ7znh6%2FQa7Epc2iW2znXM3BybYxMiihqpf5kY7ayJPamttC71zA5t3VTo7Pgjj1ZGXSHRV6EyReEfhl8kdEJi0D5SCKDSfmGpYzvvZP5ls%2FGKR14XhmmX0CO5G0cs3QRVSQXz1kDaQVJlpOxvK2t2VBwbA499UuBgAxP6Raje1vxY19ndFeFzMov8V0nGaNFcjOC8KMJTGisoGOqUBl8mD790aRIddxg%2BB9bDYqOnCKE0I7RaYzpWrWsBQLhsBzjloKvQvTE5fsi5c1C6VMJ16HAG9coE%2BAAl4BRNxaa5P%2BD4p3zJyPx1wMgCel%2B2Tnm%2B9Sr6eQ10Dd7t3TvVAYMCAGTtvfKzJnx2h%2FynKpEgtdbGVlGTl6ssWVP7Ebq1m8M%2B7ovX07%2B5xkDneRzTPPn9YS8Gs9AIdxQTtQukIy0xLFfOo&X-Amz-Signature=e64d84639b1923949ac6838161da23014863bb8298a5b37e982ec679904d5f63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
